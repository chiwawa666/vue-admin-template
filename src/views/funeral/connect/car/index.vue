<template>
  <div class="components-container">
    <div style="margin: 20px">
      <el-form>
        <el-form-item label="日期">
          <el-col :span="12">
            <el-date-picker
              v-model="date"
              type="datetime"
              format="yyyy-MM-dd"
              placeholder="请选择"
            />
          </el-col>
        </el-form-item>
      </el-form>
    </div>
    <div class="board">
      <Kanban
        :key="1"
        :list="list1"
        :group="group"
        class="kanban todo"
        header-text="未安排"
      />
      <Kanban
        :key="2"
        :list="list2"
        :group="group"
        class="kanban working"
        header-text="第一班车（3辆） 6:00~8:00"
      />
      <Kanban
        :key="3"
        :list="list3"
        :group="group"
        class="kanban done"
        header-text="第二班车（3辆） 10:00~12:00"
      />
      <Kanban
        :key="4"
        :list="list4"
        :group="group"
        class="kanban doneY"
        header-text="第三班车（3辆） 13:00~14:00"
      />
      <Kanban
        :key="5"
        :list="list5"
        :group="group"
        class="kanban doneC"
        header-text="第四班车（1辆） 14:00~次日6:00"
      />
    </div>
  </div>
</template>
<script>
import Kanban from "@/components/Kanban";
import { randomName } from "@/api/funeral";
export default {
  name: "DragKanbanDemo",
  components: {
    Kanban,
  },
  watch: {
    date(val) {
      this.handleDateChange();
      console.log(val);
    },
  },
  data() {
    return {
      group: "mission",
      list1: [
        { name: "吕秀兰", id: 1 },
        { name: "郝丽", id: 2 },
        { name: "谢霞", id: 3 },
        { name: "姚敏", id: 4 },
        { name: "吕明", id: 5 },
        { name: "龚俊", id: 6 },
        { name: "张淑玲", id: 7 },
        { name: "王胜利", id: 8 },
        { name: "邓平龙", id: 9 },
      ],
      list2: [
        { name: "Mission", id: 20 },
        { name: "Mission", id: 21 },
        { name: "Mission", id: 22 },
      ],
      list3: [
        { name: "Mission", id: 40 },
        { name: "Mission", id: 41 },
        { name: "Mission", id: 42 },
      ],
      list4: [
        { name: "Mission", id: 40 },
        { name: "Mission", id: 41 },
        { name: "Mission", id: 42 },
      ],
      list5: [
        { name: "Mission", id: 40 },
        { name: "Mission", id: 41 },
        { name: "Mission", id: 42 },
      ],
      date: new Date(),
    };
  },
  created() {
    this.handleDateChange();
  },
  methods: {
    handleDateChange(val) {
      randomName(6)
        .then((response) => {
          // this.postForm = response.data;
          console.log("res", response.data);
          this.list2 = [];
          this.list3 = [];
          this.list4 = [];
          this.list5 = [];
          for (let i = 0; i < 3; i++) {
            const temp = {
              name: response.data.items[i].people,
              id: new Date().getTime() + i,
            };
            this.list2.push(temp);
          }
          for (let i = 3; i < 7; i++) {
            const temp = {
              name: response.data.items[i].people,
              id: new Date().getTime() + i,
            };
            this.list3.push(temp);
          }
          for (let i = 7; i < 9; i++) {
            const temp = {
              name: response.data.items[i].people,
              id: new Date().getTime() + i,
            };
            this.list4.push(temp);
          }
          for (let i = 9; i < 15; i++) {
            const temp = {
              name: response.data.items[i].people,
              id: new Date().getTime() + i,
            };
            this.list5.push(temp);
          }
          // this.form = response.data;
          // for
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
<style lang="scss">
.board {
  width: 100%;
  padding: 0 20px;

  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start;
}
.el-form {
  flex-basis: 100%;
}
.kanban {
  &.todo {
    .board-column-header {
      background: #4a9ff9;
    }
  }
  &.working {
    .board-column-header {
      background: #f9944a;
    }
  }
  &.done {
    .board-column-header {
      background: #2ac06d;
    }
  }
  &.doneY {
    .board-column-header {
      background: #58b582;
    }
  }
  &.doneC {
    .board-column-header {
      background: #377352;
    }
  }
}
</style>

