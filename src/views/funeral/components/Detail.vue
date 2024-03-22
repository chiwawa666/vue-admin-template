<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="逝者姓名">
        <el-input v-model="form.people" />
      </el-form-item>
      <el-form-item label="户籍">
        <el-input v-model="form.fromAddress" />
      </el-form-item>
      <el-form-item label="死亡日期">
        <el-col :span="11">
          <el-date-picker
            v-model="form.date"
            type="datetime"
            format="yyyy-MM-dd"
            placeholder="请选择"
          />
        </el-col>
      </el-form-item>

      <el-form-item label="重点救助对象">
        <el-select v-model="form.salvage" placeholder="请选择">
          <el-option label="是" value="1" />
          <el-option label="否" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item label="经办人">
        <el-input v-model="form.helper" />
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.address" />
      </el-form-item>

      <el-form-item label="遗体接运日期">
        <el-col :span="11">
          <el-date-picker
            v-model="form.pick1"
            type="datetime"
            format="yyyy-MM-dd"
            placeholder="请选择"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="班次">
        <el-select v-model="form.pick2" placeholder="请选择">
          <el-option label="第一班" value="1" />
          <el-option label="第二班" value="2" />
          <el-option label="第三班" value="3" />
          <el-option label="第四班" value="4" />
        </el-select>
      </el-form-item>
      <el-form-item label="遗体冷藏">
        <el-select v-model="form.detail1" placeholder="请选择">
          <el-option label="否" value="0" />
          <el-option label="是" value="1" />
        </el-select>
      </el-form-item>
      <el-form-item label="妆容整理">
        <el-select v-model="form.detail2" placeholder="请选择">
          <el-option label="否" value="0" />
          <el-option label="是" value="1" />
        </el-select>
      </el-form-item>
      <el-form-item label="告别礼厅">
        <el-select v-model="form.detail3" placeholder="请选择">
          <el-option label="否" value="0" />
          <el-option label="是" value="1" />
        </el-select>
      </el-form-item>
      <el-form-item label="火化炉">
        <el-select v-model="form.detail4" placeholder="请选择">
          <el-option label="普通火化炉" value="0" />
          <el-option label="高档火化炉" value="1" />
        </el-select>
      </el-form-item>
      <el-form-item label="骨灰盒">
        <el-select v-model="form.detail5" placeholder="请选择">
          <el-option label="普通骨灰盒" value="0" />
          <el-option label="高档骨灰盒" value="1" />
        </el-select>
      </el-form-item>
      <el-form-item label="骨灰流向">
        <el-select v-model="form.detail6" placeholder="请选择">
          <el-option label="生态葬" value="0" />
          <el-option label="公墓" value="1" />
          <el-option label="骨灰寄存" value="2" />
          <el-option label="历史埋葬点" value="3" />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" size="mini">
          <router-link to="/funeral/index"> 提交 </router-link>
        </el-button>
        <el-button type="primary" size="mini">
          <router-link to="/funeral/index"> 返回 </router-link>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getPeopleDetail } from "@/api/funeral";

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

