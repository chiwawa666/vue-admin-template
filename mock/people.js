// 引入Mock.js
const Mock = require("mockjs");

relationship = ["父子", "母子", "兄弟", "姐妹", "祖孙", "孙女", "父母", "祖父母", "外祖父母", "其他"]
gender = ["男", "女"]
const mamager = {
    'id': "@integer(1000000000, 9999999999)", // 生成一个十位数的编号
    'people': "@cname(2,3)",
    'idType': '身份证',
    "gender|1": gender,
    'nation': '汉族',
    'idCard': '@id',
    'age': '@integer(18, 60)',
    'fromAddress': '芜湖市繁昌区',
    'helper': "@cname(2,3)",
    'bornDate': '@date("1900-MM-dd")',
    'relation|1': relationship,
    'idType2': '身份证',
    'idCard2': '@id',
    'deadType|1': ['在家自然死亡', '医院自然死亡', '公安介入'],
    'address': '@county(true)',
    'address2': '@county(true)',
    'detail': '详细',
    'date': '@date("2023-MM-dd")',
    'phone': /^1[3456789]\d{9}$/,
};
// 初始化一个包含随机数据的mockList  
const dataRule = Mock.mock({
    'list|60': [mamager]
}).list;

module.exports = [
    {
        url: '/people/list',
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
        url: '/people/detail',
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

];