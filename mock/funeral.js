// 引入Mock.js
const Mock = require("mockjs");

relationship = ["父子", "母子", "兄弟", "姐妹", "祖孙", "孙女", "父母", "祖父母", "外祖父母", "其他"]
gender = ["男", "女"]
const mamager = {
    'id': "@integer(1000000000, 9999999999)", // 生成一个十位数的编号
    'people': "@cname(2,3)",
    'fromAddress': '芜湖市繁昌区',
    'date': '@date("2023-MM-dd")',
    'salvage|1': ["是", "否"],
    'helper': "@cname(2,3)",
    'phone': /^1[3456789]\d{9}$/,
    'address': '@county(true)',
    'pick1': '@date("2024-04-dd")',
    'pick2': '@integer(1, 4)',
    'detail1|1': ["是", "否"],
    'detail2|1': ["是", "否"],
    'detail3|1': ["是", "否"],
    'detail4|1': ["普通火化炉", "高档火化炉"],
    'detail5|1': ["普通骨灰盒", "高档骨灰盒"],
    'detail6|1': ["生态葬", "公墓", "骨灰寄存", "历史埋葬点",],
};
const randomName = {
    'people': "@cname(2,3)",
}
// 初始化一个包含随机数据的mockList  
const dataRule = Mock.mock({
    'list|60': [mamager]
}).list;

const randomNameList = Mock.mock({
    'list|60': [randomName]
}).list;

let Inindex = 0
function block() {
    Inindex++
    return {
        id: Inindex,
        'status|1': [0, 1],
        name: '@cname(2,3)',
    }

}

const randomNameList2 = [];
for (let i = 0; i < 60; i++) {
    randomNameList2.push(Mock.mock(block()));
}
module.exports = [
    {
        url: '/funeral/list',
        type: 'get',
        response: config => {
            const { page = 1, limit = 10 } = config.query;
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;

            // 分页处理  
            const pageList = dataRule.slice(startIndex, endIndex);

            return {
                code: 20000,
                data: {
                    total: dataRule.length, // 假设total为全部数据项的数量  
                    items: pageList
                }
            };
        }
    },
    {
        url: '/funeral/detail',
        type: 'get',
        response: config => {
            const { page = 1, limit = 10, id } = config.query
            const selectedItem = dataRule.find(item => item.id === +id);

            if (selectedItem) {
                return {
                    code: 20000,
                    data: selectedItem
                };
            } else {
                return {
                    code: 404,
                    message: 'Item not found'
                };
            }
        }
    },
    {
        url: '/block/list',
        type: 'get',
        response: config => {
            const { page = 1, limit = 10 } = config.query;
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;

            // 打乱数组
            // const shuffledList = randomNameList2.sort(() => Math.random() - 0.5);
            // 分页处理
            console.log(randomNameList2);
            const pageList = randomNameList2.slice(startIndex, endIndex);

            return {
                code: 20000,
                data: {
                    total: randomNameList2.length, // 假设total为全部数据项的数量  
                    items: pageList
                }
            };
        }
    },
    {
        url: '/randomName/list',
        type: 'get',
        response: config => {
            const { page = 1, limit = 15 } = config.query;
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;

            // 打乱数组
            const shuffledList = randomNameList.sort(() => Math.random() - 0.5);
            // 分页处理  
            const pageList = shuffledList.slice(startIndex, endIndex);

            return {
                code: 20000,
                data: {
                    total: randomNameList.length, // 假设total为全部数据项的数量  
                    items: pageList
                }
            };
        }
    },

];