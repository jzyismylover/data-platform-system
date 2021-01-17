<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/login">数据预处理</el-menu-item>
      <el-menu-item index="/regist">分类</el-menu-item>
      <el-menu-item index="3">聚类</el-menu-item>
      <el-menu-item index="/regist">回归</el-menu-item>
      <el-menu-item index="3">关联分析</el-menu-item>
      <el-menu-item index="/regist">离群点检测</el-menu-item>
    </el-menu>
    <el-container>
      <el-aside style="width: 160px !important"><BaseAside /></el-aside>
      <el-main><BaseTable /></el-main>
    </el-container>
  </div>
</template>

<script>
import BaseAside from "@/components/BaseAside.vue";
import BaseTable from "@/components/BaseTable.vue";
export default {
  components: {
    BaseAside,
    BaseTable,
  },
  mounted() {
    console.log(this.$store.state.result)
  },
  data() {
    return {
      activeIndex: "/login",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
</style>