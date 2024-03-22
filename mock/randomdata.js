const Mock = require('mockjs');
const moment = require('moment');

let previousTime = moment().subtract(1, 'days'); // 用于存储前一个数据项的时间  


// 生成随机数据项  
function generateRandomItem() {
    const currentTime = previousTime || moment().subtract(1, 'days'); // 如果previousTime为null，则使用当前时间的前一天  
    previousTime = getRandomTimeBefore(currentTime); // 更新previousTime为当前时间之前的一个随机时间  

    return {
        'name': '@cname()',
        'age|18-60': 0,
        'phone': /^1[34578]\d{9}$/,
        'idCard': '@id',
        'code': '@integer(1000000000, 9999999999)',
        'status|1': ['published', 'draft'],
        'time': currentTime.format('YYYY-MM-DD HH:mm:ss') // 使用currentTime作为当前数据项的时间  
    };
}

// 生成一个比给定时间随机减少30分钟到5小时的时间  
function getRandomTimeBefore(time) {
    const diffMinutes = Mock.mock('@integer(30, 300)');
    return moment(time).subtract(diffMinutes, 'minutes');
}

// 初始化一个包含随机数据的mockList  
const dataRule = Mock.mock({
    'list|1-100': [generateRandomItem]
}).list;


module.exports = [
    {
        url: '/user/list',
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
    }
];