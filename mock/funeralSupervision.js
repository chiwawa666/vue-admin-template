// 引入Mock.js
const Mock = require("mockjs");
const moment = require('moment');

let previousTime = moment().subtract(1, 'days'); // 用于存储前一个数据项的时间  
const matter2 = [
    "违法占用土地建坟修墓",
    "在风景名胜区、文物保护区内建坟修墓",
    "在公路主干线两侧范围内建坟修墓",
    "在水库、河流范围内建坟修墓",
    "在城市水源地及水源保护区内建坟修墓",
    "利用农村公益性墓地丛事营利活动",
    "占用城市道路搭设灵堂、焚烧纸钱",
    "治丧活动中燃放烟花爆竹、电子鞭炮、吹拉弹唱等噪音扰民活动",
    "宗教人士非法提供丧葬服务、扰乱殡葬服务市场、借机骗财敛财",
    "不明码标价、价格欺诈、串通涨价等价格违法行为",
];
const matter = [
    {
        id: 1,
        name: "殡葬服务机构审批和监督",
    },
    {
        id: 2,
        name: "殡葬场所规划和管理",
    },
    {
        id: 3,
        name: "遗体运输和火化管理",
    },
    {
        id: 4,
        name: "殡葬用品质量监督",
    },
    {
        id: 5,
        name: "丧葬礼仪规范和监管",
    },
    {
        id: 6,
        name: "殡葬费用收费及合同管理",
    },
    {
        id: 7,
        name: "墓地建设和管理",
    },
    {
        id: 8,
        name: "殡葬用地环境保护和治理",
    },
    {
        id: 9,
        name: "骨灰寄存和管理",
    },
    {
        id: 10,
        name: "丧葬纪念设施建设和管理",
    },
];

const result = [
    '罚款、吊销许可证或执照、暂停业务',
    '违规的殡葬服务提供商赔偿受影响方的经济损失',
    '撤销殡葬服务提供商的资质或许可证',
    '复墓地、清理污染物等，以恢复原貌和保护环境',
]


const someAddress = [
    '繁昌区-孙村镇-水口村',
    '繁昌区-繁阳镇-团阳社区',
    '繁昌区-繁阳镇-新光社区',
    '繁昌区-繁阳镇-安定社区',
    '繁昌区-平铺镇-五华村',
    '繁昌区-平铺镇-寒塘村',
    '繁昌区-荻港镇-桃冲村',
    '繁昌区-荻港镇-鹊江村',
]
const mamager = {
    id: "@integer(1000000000, 9999999999)", // 生成一个十位数的编号
    "address|1": someAddress,
    people: "@cname(2,3)",
    phone: /^1[3456789]\d{9}$/,
};

// 生成一个比给定时间随机减少30分钟到5小时的时间  
function getRandomTimeBefore(time) {
    const diffMinutes = Mock.mock('@integer(30, 300)');
    return moment(time).subtract(diffMinutes, 'minutes');
}
// 定义模拟数据列表
const itemList = [];
const managerList = [];
const illegalList = [];



// 自定义机构名称列表
const organizationNames = [
    "发展和改革委员会",
    "教育局",
    "科学技术局",
    "民族事务委员会",
    "公安局",
    "监察局",
    "民政局",
    "司法局",
    "财政局",
    "人事局",
    "劳动和社会保障局",
    "国土资源和房产管理局",
    "建设委员会",
    "交通局",
    "农业委员会",
    "水利局",
    "林业局",
    "商务局",
    "文化局",
    "卫生局",
    "人口和计划生育委员会",
    "审计局",
    "环境保护局",
    "物价局",
    "城市规划局",
    "城市管理行政执法局",
    "外事办公室",
];

// 定义模拟数据模板
const itemTemplate = {
    id: "@integer(1000000000, 9999999999)", // 生成一个十位数的编号
    "matter|1": matter.map((item) => item.name), // 生成一个10到20个字的中文句子作为文字事项
    supervisionDepartment: "@organizationNames", // 生成一个中文名字作为监管部门
};
// 生成随机数据项  
function generateRandomItem() {
    const currentTime = previousTime || moment().subtract(1, 'days'); // 如果previousTime为null，则使用当前时间的前一天  
    previousTime = getRandomTimeBefore(currentTime); // 更新previousTime为当前时间之前的一个随机时间  

    return {
        id: "@integer(100000, 999999)", // 生成一个十位数的编号
        "address|1": someAddress,
        "content|1": matter2,
        "department|1": organizationNames,
        people: "@cname(2,3)",
        'time': currentTime.format('YYYY-MM-DD HH:mm:ss'),
        phone: /^1[3456789]\d{9}$/,
        'result|1': result,
    };
}
for (let i = 0; i < 50; i++) {

    managerList.push(Mock.mock(mamager));
    illegalList.push(Mock.mock(generateRandomItem()));

}
for (let j = 0; j < matter2.length; j++) {
    itemList.push(Mock.mock(itemTemplate));
}
// 创建一个函数来格式化监管部门名称数组
function formatSupervisionDepartment(departments) {
    const formattedDepartments = departments.join("、"); // 使用中文顿号连接数组中的元素
    const lastIndex = formattedDepartments.lastIndexOf("、"); // 找到最后一个中文顿号的索引
    if (lastIndex !== -1) {
        return (
            formattedDepartments.slice(0, lastIndex) +
            formattedDepartments.slice(lastIndex + 1)
        ); // 去掉最后一个中文顿号
    }
    return formattedDepartments;
}

// 自定义Mock.js函数，用于生成1到3个随机机构名称
Mock.Random.organizationNames = function () {
    const count = Mock.Random.integer(1, 3); // 生成1到3的随机数
    const selectedNames = [];
    const availableNames = organizationNames.filter(
        (name) => !selectedNames.includes(name)
    ); // 过滤已选中的机构名称
    for (let i = 0; i < count; i++) {
        if (availableNames.length === 0) {
            break; // 如果可选机构名称已用尽，跳出循环
        }
        const index = Mock.Random.integer(0, availableNames.length - 1); // 生成随机索引
        selectedNames.push(availableNames[index]); // 将选中的机构名称添加到数组中
        availableNames.splice(index, 1); // 从可选机构名称数组中移除已选中的名称
    }
    return formatSupervisionDepartment(selectedNames);
};




module.exports = [
    {
        url: "/funeralSupervision/itemsList",
        type: "get",
        response: (config) => {
            const { page = 1, limit = 10, matter } = config.query;

            let mockList = itemList;

            if (matter) {
                mockList = mockList.filter((item) => item.matter === matter);
            }

            const pageList = mockList.filter(
                (item, index) => index < limit * page && index >= limit * (page - 1)
            );

            return {
                code: 20000,
                data: {
                    total: mockList.length,
                    items: pageList,
                },
            };
        },
    },
    {
        url: "/funeralSupervision/managerList",
        type: "get",
        response: (config) => {
            const { page = 1, limit = 10, matter } = config.query;

            let mockList = managerList;


            const pageList = mockList.filter(
                (item, index) => index < limit * page && index >= limit * (page - 1)
            );

            return {
                code: 20000,
                data: {
                    total: mockList.length,
                    items: pageList,
                },
            };
        },
    },
    {
        url: "/funeralSupervision/illegalList",
        type: "get",
        response: (config) => {
            const { page = 1, limit = 10, matter } = config.query;

            let mockList = illegalList;


            const pageList = mockList.filter(
                (item, index) => index < limit * page && index >= limit * (page - 1)
            );

            return {
                code: 20000,
                data: {
                    total: mockList.length,
                    items: pageList,
                },
            };
        },
    },
    {
        url: '/funeralSupervision/illegaldetail',
        type: 'get',
        response: config => {
            const { page = 1, limit = 10, id } = config.query
            const selectedItem = illegalList.find(item => item.id === +id);

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
