<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="250px">
      <el-form-item label="所在区镇">
        <el-input v-model="form.town" />
      </el-form-item>
      <el-form-item label="公墓名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="公墓类型">
        <el-input v-model="form.type" />
      </el-form-item>
      <el-form-item label="具体位置">
        <el-input v-model="form.address" />
      </el-form-item>
      <el-form-item label="所属层级">
        <el-input v-model="form.belong" />
      </el-form-item>
      <el-form-item label="建成年份">
        <el-input v-model="form.year" />
      </el-form-item>
      <el-form-item label="管理主体">
        <el-input v-model="form.manage" />
      </el-form-item>
      <el-form-item label="投入资金(万元)">
        <el-input v-model="form.invest" />
      </el-form-item>
      <el-form-item label="建设资金来源">
        <el-input v-model="form.investFrom" />
      </el-form-item>

      <el-form-item label="单穴价格（元）">
        <el-input v-model="form.detail1" />
      </el-form-item>
      <el-form-item label="双穴价格（元）">
        <el-input v-model="form.detail2" />
      </el-form-item>
      <el-form-item label="规划建设面积（亩）">
        <el-input v-model="form.detail3" />
      </el-form-item>
      <el-form-item label="实际建设面积（亩）">
        <el-input v-model="form.detail4" />
      </el-form-item>
      <el-form-item label="已建墓穴（格位）数">
        <el-input v-model="form.detail5" />
      </el-form-item>
      <el-form-item label="已安葬墓穴（格位）数">
        <el-input v-model="form.detail6" />
      </el-form-item>
      <el-form-item label="预计保障年限">
        <el-input v-model="form.detail7" />
      </el-form-item>
      <el-form-item label="用地手续是否齐全">
        <el-select v-model="form.detail8" placeholder="请选择">
          <el-option label="是" value="1" />
          <el-option label="否" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item label="缺何种手续" v-show="!form.detail8">
        <el-input v-model="form.detail9" />
      </el-form-item>
      <el-form-item label="年管护资金（元）">
        <el-input v-model="form.yearMoney" />
      </el-form-item>
      <el-form-item label="管护资金来源">
        <el-input v-model="form.yearMoneyFrom" />
      </el-form-item>
      <el-form-item label="是否使用省殡葬服务管理信息系统">
        <el-select v-model="form.use" placeholder="请选择">
          <el-option label="是" value="1" />
          <el-option label="否" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item label="公墓负责人">
        <el-input v-model="form.incharge" />
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="专职管护人员数">
        <el-input v-model="form.peopleNum" />
      </el-form-item>
      <el-form-item label="专职管护人员类型">
        <el-input v-model="form.peopleType" />
      </el-form-item>

      <el-form-item>
        <!-- <el-button type="primary" size="mini">
          <router-link to="/cemetery/index"> 提交 </router-link>
        </el-button> -->
        <el-button type="primary" size="mini">
          <router-link to="/cemetery/index"> 返回 </router-link>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getCemeteryDetail } from "@/api/cemetery";

export default {
  name: "Detail",
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        people: "",
        fromAddress: "",
        date: "",
        salvage: "",
        helper: "",
        address: "",
        pick1: "",
        pick2: "",
        detail1: "",
        detail2: "",
        detail3: "",
        detail4: "",
        detail5: "",
        detail6: "",
        phone: "",
      },
      nation: ["汉族", "维吾尔族", "壮族", "瑶族"],
      deadType: ["在家自然死亡", "医院自然死亡", "公安介入"],
      address: [
        "繁昌区-孙村镇-水口村",
        "繁昌区-繁阳镇-团阳社区",
        "繁昌区-繁阳镇-新光社区",
        "繁昌区-繁阳镇-安定社区",
        "繁昌区-平铺镇-五华村",
        "繁昌区-平铺镇-寒塘村",
        "繁昌区-荻港镇-桃冲村",
        "繁昌区-荻港镇-鹊江村",
      ],
      org: [
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
      ],
      id: "",
      tempRoute: {},
    };
  },
  created() {
    if (this.isEdit) {
      this.id = this.$route.params && this.$route.params.id;
      this.fetchData(this.id);
    }
    this.tempRoute = Object.assign({}, this.$route);
  },
  methods: {
    onSubmit() {
      this.$message("submit!");
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning",
      });
    },
    fetchData(id) {
      getCemeteryDetail(id)
        .then((response) => {
          // this.postForm = response.data;
          this.form = response.data;
          // let temp = response.data.time.split(" ");
          // this.form.date = temp[0];
          // this.form.time = temp[1];
          // console.log(this.form.time);
          // just for test
          // this.postForm.title += `   Article Id:${this.postForm.id}`;
          // this.postForm.content_short += `   Article Id:${this.postForm.id}`;
          // set tagsview title
          // this.setTagsViewTitle();
          // set page title
          // this.setPageTitle();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>

