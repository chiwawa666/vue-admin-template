// 引入Mock.js
const Mock = require("mockjs");

let currentId = 1;
const rule = ['殡葬管理条例', '森林防火条例', '草原防火条例']
const mamager = {
    'id|+1': currentId,
    'rule': rule[currentId - 1],
    publishTime: "@datetime('yyyy-MM-dd')",
};

// 初始化一个包含随机数据的mockList  
const dataRule = Mock.mock({
    'list|3': [mamager]
}).list;


module.exports = [
    {
        url: '/civilized/rule/list',
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

];