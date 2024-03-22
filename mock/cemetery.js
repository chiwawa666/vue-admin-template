// 引入Mock.js
const Mock = require("mockjs");

// let currentId = 1;
const cemetery = [
    {
        city: "芜湖市",
        county: "繁昌区",
        town: "繁阳镇",
        name: "繁昌春谷文化陵园",
        type: "城市公益性公墓",
        address: "繁昌区繁阳镇戴店村",
        belong: "区级",
        year: "2022",
        manage: "繁盛集团",
        invest: "4500",
        investFrom: "区财政",
        detail1: "960",
        detail2: "8620",
        detail3: "87",
        detail4: "62",
        detail5: "7692",
        detail6: "51",
        detail7: "30",
        detail8: "0", //用地手续是否齐全
        detail9: "用地指标", //缺何种手续
        yearMoney: "30000",
        yearMoneyFrom: "区政府",
        use: "1", //是否使用省殡葬服务管理信息系统
        incharge: "沙开进", //公墓负责人
        phone: "15955326082", //负责人电话
        peopleNum: "10", //专职管护人员数
        peopleType: "政府购买服务及聘用", //专职管护人员数
    },
    {
        city: "芜湖市",
        county: "繁昌区",
        town: "新港镇",
        name: "新港镇公益性公墓",
        type: "乡镇公益性公墓",
        address: "繁昌区新港镇克里村",
        belong: "乡镇级",
        year: "2011",
        manage: "新港政府",
        invest: "1600",
        investFrom: "区镇财政",
        detail1: "1880",
        detail2: "5440",
        detail3: "100",
        detail4: "40",
        detail5: "5028",
        detail6: "2817",
        detail7: "6",
        detail8: "0", //用地手续是否齐全
        detail9: "林地手续", //缺何种手续
        yearMoney: "150000",
        yearMoneyFrom: "镇财政",
        use: "1", //是否使用省殡葬服务管理信息系统
        incharge: "胡清泉", //公墓负责人
        phone: "17755325611", //负责人电话
        peopleNum: "3", //专职管护人员数
        peopleType: "政府购买服务及聘用", //专职管护人员数
    },
    {
        city: "芜湖市",
        county: "繁昌区",
        town: "繁阳镇",
        name: "繁阳镇公益性公墓",
        type: "乡镇公益性公墓",
        address: "繁昌区繁阳镇马坝社区",
        belong: "乡镇级",
        year: "2015",
        manage: "繁阳政府",
        invest: "1250",
        investFrom: "区镇财政",
        detail1: "1880",
        detail2: "5440",
        detail3: "100",
        detail4: "33",
        detail5: "3890",
        detail6: "2156",
        detail7: "4",
        detail8: "0", //用地手续是否齐全
        detail9: "林地手续", //缺何种手续
        yearMoney: "110000",
        yearMoneyFrom: "镇财政",
        use: "1", //是否使用省殡葬服务管理信息系统
        incharge: "胡芜生", //公墓负责人
        phone: "17756566512", //负责人电话
        peopleNum: "4", //专职管护人员数
        peopleType: "政府购买服务及聘用", //专职管护人员数
    },
    {
        city: "芜湖市",
        county: "繁昌区",
        town: "荻港镇",
        name: "荻港镇公益性公墓",
        type: "乡镇公益性公墓",
        address: "繁昌区荻港镇赭祈村芦南杨梅冲水库南侧",
        belong: "乡镇级",
        year: "2015",
        manage: "荻港政府",
        invest: "220",
        investFrom: "区镇财政",
        detail1: "1880",
        detail2: "5440",
        detail3: "40",
        detail4: "8",
        detail5: "671",
        detail6: "210",
        detail7: "3",
        detail8: "0", //用地手续是否齐全
        detail9: "用地指标", //缺何种手续
        yearMoney: "20000",
        yearMoneyFrom: "镇财政",
        use: "1", //是否使用省殡葬服务管理信息系统
        incharge: "钱文哲", //公墓负责人
        phone: "13956175335", //负责人电话
        peopleNum: "3", //专职管护人员数
        peopleType: "政府购买服务及聘用", //专职管护人员数
    },
    {
        city: "芜湖市",
        county: "繁昌区",
        town: "孙村镇",
        name: "孙村镇公益性公墓",
        type: "乡镇公益性公墓",
        address: "繁昌区孙村镇金岭社区下俞组",
        belong: "乡镇级",
        year: "2013",
        manage: "孙村政府",
        invest: "1270",
        investFrom: "区镇财政",
        detail1: "1880",
        detail2: "5440",
        detail3: "84",
        detail4: "50",
        detail5: "3967",
        detail6: "1251",
        detail7: "7",
        detail8: "0", //用地手续是否齐全
        detail9: "用地指标", //缺何种手续
        yearMoney: "120000",
        yearMoneyFrom: "镇财政",
        use: "1", //是否使用省殡葬服务管理信息系统
        incharge: "丁祖华", //公墓负责人
        phone: "18949553266", //负责人电话
        peopleNum: "4", //专职管护人员数
        peopleType: "政府购买服务及聘用", //专职管护人员数
    },
    {
        city: "芜湖市",
        county: "繁昌区",
        town: "峨山镇",
        name: "峨山镇公益性公墓",
        type: "乡镇公益性公墓",
        address: "繁昌区峨山镇湾店村界山组",
        belong: "乡镇级",
        year: "2015",
        manage: "峨山政府",
        invest: "800",
        investFrom: "区镇财政",
        detail1: "1880",
        detail2: "5440",
        detail3: "30",
        detail4: "10",
        detail5: "985",
        detail6: "471",
        detail7: "3",
        detail8: "0", //用地手续是否齐全
        detail9: "用地指标", //缺何种手续
        yearMoney: "110000",
        yearMoneyFrom: "镇财政",
        use: "1", //是否使用省殡葬服务管理信息系统
        incharge: "章祖伦", //公墓负责人
        phone: "13966008129", //负责人电话
        peopleNum: "3", //专职管护人员数
        peopleType: "政府购买服务及聘用", //专职管护人员数
    },
    {
        city: "芜湖市",
        county: "繁昌区",
        town: "平铺镇",
        name: "平铺镇公益性公墓",
        type: "乡镇公益性公墓",
        address: "繁昌区平铺镇寒塘村朱冲组",
        belong: "乡镇级",
        year: "2014",
        manage: "平铺政府",
        invest: "800",
        investFrom: "区镇财政",
        detail1: "265",
        detail2: "265",
        detail3: "25",
        detail4: "15",
        detail5: "1316",
        detail6: "447",
        detail7: "6",
        detail8: "0", //用地手续是否齐全
        detail9: "用地指标", //缺何种手续
        yearMoney: "20000",
        yearMoneyFrom: "区财政",
        use: "1", //是否使用省殡葬服务管理信息系统
        incharge: "杨林", //公墓负责人
        phone: "15055348128", //负责人电话
        peopleNum: "3", //专职管护人员数
        peopleType: "政府购买服务及聘用", //专职管护人员数
    },
    {
        city: "芜湖市",
        county: "繁昌区",
        town: "经开区",
        name: "开发区横山公墓",
        type: "乡镇公益性公墓",
        address: "繁昌经开区三元村",
        belong: "乡镇级",
        year: "2013",
        manage: "经开区管委会",
        invest: "122",
        investFrom: "经开区财政",
        detail1: "1000",
        detail2: "1800",
        detail3: "30",
        detail4: "15",
        detail5: "2173",
        detail6: "1168",
        detail7: "5",
        detail8: "0", //用地手续是否齐全
        detail9: "用地指标", //缺何种手续
        yearMoney: "50000",
        yearMoneyFrom: "经开区财政",
        use: "1", //是否使用省殡葬服务管理信息系统
        incharge: "章祖根", //公墓负责人
        phone: "18715326639", //负责人电话
        peopleNum: "2", //专职管护人员数
        peopleType: "政府购买服务及聘用", //专职管护人员数
    }
]
let currentId = -1;
function mamager() {
    currentId++

    return {
        'id': currentId + 1,
        city: cemetery[currentId].city,
        county: cemetery[currentId].county,
        town: cemetery[currentId].town,
        name: cemetery[currentId].name,
        type: cemetery[currentId].type,
        address: cemetery[currentId].address,
        belong: cemetery[currentId].belong,
        year: cemetery[currentId].year,
        manage: cemetery[currentId].manage,
        invest: cemetery[currentId].invest,
        investFrom: cemetery[currentId].investFrom,
        detail1: cemetery[currentId].detail1,
        detail2: cemetery[currentId].detail2,
        detail3: cemetery[currentId].detail3,
        detail4: cemetery[currentId].detail4,
        detail5: cemetery[currentId].detail5,
        detail6: cemetery[currentId].detail6,
        detail7: cemetery[currentId].detail7,
        detail8: cemetery[currentId].detail8,
        detail9: cemetery[currentId].detail9,
        yearMoney: cemetery[currentId].yearMoney,
        yearMoneyFrom: cemetery[currentId].yearMoneyFrom,
        use: cemetery[currentId].use,
        incharge: cemetery[currentId].incharge,
        phone: cemetery[currentId].phone,
        peopleNum: cemetery[currentId].peopleNum,
        peopleType: cemetery[currentId].peopleType,
    }

};

const dataRule = [];
for (let i = 0; i < cemetery.length; i++) {
    dataRule.push(Mock.mock(mamager));
}

module.exports = [
    {
        url: '/cemetery/list',
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
                    items: dataRule
                }
            };
        }
    },
    {
        url: '/cemetery/detail',
        type: 'get',
        response: config => {
            const { id } = config.query;
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
        },
    }
];