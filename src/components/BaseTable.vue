<template>
  <div style="padding:2vw">
    <el-table :data="drawDatas" @cell-dblclick="handle" border>
      <el-table-column prop="date" label="日期" width="100">
        <template slot-scope="scope">
          <div v-if="!scope.row.isEdit">{{ scope.row.date }}</div>
          <div v-else>
            <el-input v-model="scope.row.date"></el-input>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="100">
        <template slot-scope="scope">
          <div v-if="!scope.row.isEdit">{{ scope.row.name }}</div>
          <div v-else>
            <el-input v-model="scope.row.name"></el-input>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleClick(scope.row)">{{
            scope.row.isEdit ? "完成" : "编辑"
          }}</el-button>
          <el-button> 删除 </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="float: right; margin-top: 20px"
      :current-page="currentPage"
      :page-size="pageSize"
      layout="prev, pager, next"
      :total="10"
      @current-change="handlePageChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "大白兔",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "大白兔",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "大白兔",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "大白兔",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "大白兔",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "小胖虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "小胖虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "小胖虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "小胖虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-03",
          name: "小胖虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      currentPage: 1,
      pageSize: 8,
      home: [],
    };
  },
  computed: {
    // 随时监听 data 内属性的变化然后自动更新对应的数据
    drawDatas() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.tableData.slice(start, start + this.pageSize);
    },
  },
  methods: {
    handleClick(row) {
      //$delete 和 $set 是对对象进行操作的内置方法（触发视图更新）
      // 动态设置数据并通过这个数据判断显示方式
      if (row.isEdit) {
        this.$delete(row, "isEdit");
      } else {
        this.$set(row, "isEdit", true);
      }
      console.log(this.tableData);
    },
    handle(row, column, cell) {
      console.log(row, column, cell);
    },
    handlePageChange(val) {
      // 实现可手动分页操作
      this.currentPage = val;
    },
  },
};
</script>

<style scoped>
.el-input {
  width: 100%;
}
</style>
