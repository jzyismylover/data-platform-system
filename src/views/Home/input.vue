<template>
  <div style="padding-top: 100px">
    <!--上传文件的操作
    1、本地保存文件的内容
    2、路由跳转的时候附带上该内容
    3、在新的页面以 table 的形式展示-->
    <div class="upload">
      <el-upload
        class="upload-demo"
        drag
        multiple
        action="string"
        :show-file-list="false"
        :http-request="insert"
        :before-upload="beforeUpload"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">文件格式:xls;csv;json;txt</div>
      </el-upload>
    </div>
  </div>
</template>

<script>
import { loadCsv, loadExcel, loadJson, loadText } from "@/plugin/upload.js";
export default {
  data() {
    return {
      file_type: "",
    };
  },
  methods: {
    insert(param) {
      console.log(param.file);
      let filePath = param.file.path;
      console.log(this.file_type);
      switch (this.file_type) {
        case "txt":
          loadText(filePath).then((data) => {
            console.log(data);
            this.$store.commit("handleResult", data);
          }); // 拿到了返回的数据
          break;
        case "xls" || "xlsx":
          loadExcel(filePath).then((data) => {
            console.log(data);
          });
          break;
        case "json":
          loadJson(filePath).then((data) => {
            console.log(data);
          });
          break;
        case "csv":
          loadCsv(filePath).then((data) => {
            console.log(data);
          });
          break;
      }
      this.$router.push("/home");
    },

    beforeUpload(file) {
      this.fileName = file.name;
      let type = this.fileName.split(".")[1] || ""; // bug
      this.file_type = type;
      if (type == "txt") {
        this.$confirm("字符分隔选择", {
          message:"",
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true,
        })
          .then(() => {

          })
          .catch(() => {

          });
      }
      if (
        !(
          type === "xls" ||
          type === "xlsx" ||
          type === "json" ||
          type === "csv" ||
          type === "txt"
        )
      ) {
        console.log("上传格式错误!");
        return false;
      }
    },
  },
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped >
.upload {
  padding: 50px;
  background-color: rgb(207, 204, 199);
}
</style>