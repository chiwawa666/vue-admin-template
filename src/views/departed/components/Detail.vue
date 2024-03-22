<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="逝者姓名">
        <el-input v-model="form.people" />
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="form.gender" />
      </el-form-item>
      <el-form-item label="民族">
        <el-select v-model="form.nation" placeholder="请选择">
          <el-option
            v-for="(item, index) in nation"
            :key="index"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="年龄" :span="5">
        <el-input v-model="form.age" />
      </el-form-item>
      <el-form-item label="户籍">
        <el-input v-model="form.fromAddress" />
      </el-form-item>

      <el-form-item label="出生时间">
        <el-col :span="11">
          <el-date-picker
            v-model="form.bornDate"
            type="datetime"
            format="yyyy-MM-dd HH:mm:ss"
            placeholder="请选择"
          />
        </el-col>
      </el-form-item>

      <el-form-item label="证件类型">
        <el-select v-model="form.idType" placeholder="请选择">
          <el-option value="身份证" label="身份证" />
        </el-select>
      </el-form-item>

      <el-form-item label="证件号码">
        <el-select v-model="form.idCard" placeholder="请选择">
          <el-option value="身份证" label="身份证" />
        </el-select>
      </el-form-item>
      <el-form-item label="逝者类型">
        <el-select v-model="form.deadType" placeholder="请选择">
          <el-option
            v-for="(item, index) in deadType"
            :key="index"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="死亡日期">
        <el-col :span="11">
          <el-date-picker
            v-model="form.date"
            type="datetime"
            format="yyyy-MM-dd HH:mm:ss"
            placeholder="请选择"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="家属姓名">
        <el-input v-model="form.helper" />
      </el-form-item>
      <el-form-item label="家属证件类型">
        <el-select v-model="form.idType2" placeholder="请选择">
          <el-option value="身份证" label="身份证" />
        </el-select>
      </el-form-item>
      <el-form-item label="家属证件号码">
        <el-input v-model="form.idCard2" />
      </el-form-item>
      <el-form-item label="家属证件地址">
        <el-input v-model="form.address2" />
      </el-form-item>

      <el-form-item label="逝者关系">
        <el-input v-model="form.relation" />
      </el-form-item>

      <el-form-item label="联系方式">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini">
          <router-link to="/departed/index"> 提交 </router-link>
        </el-button>
        <el-button type="primary" size="mini">
          <router-link to="/departed/index"> 返回 </router-link>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getPeopleDetail } from "@/api/people";

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
        gender: "",
        nation: "",
        age: "",
        fromAddress: "",
        bornDate: "",
        idType: "",
        idCard: "",
        deadType: "",
        date: "",
        idType2: "",
        idCard2: "",
        address2: "",
        relation: "",
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
      getPeopleDetail(id)
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

