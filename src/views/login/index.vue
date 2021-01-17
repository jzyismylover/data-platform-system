<template>
  <div class="login-container">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm login-form"
      label-position="left"
    >
      <h3 class="title">数据挖掘平台</h3>
      <el-form-item prop="user">
        <el-input
          placeholder="请输入用户名"
          v-model="ruleForm.user"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pass" type="password">
        <el-input
          placeholder="请输入密码"
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
          show-password
          ><i class="el-icon-lock" slot="prefix"></i
        ></el-input>
      </el-form-item>
        <el-link type="info" class="link forget" @click="$router.push('/regist')"
        >忘记密码?</el-link
      >
      <el-link type="info" class="link" @click="$router.push('/regist')"
        >点击注册</el-link
      >
      <div style="clear: both"></div>
      <el-form-item>
        <el-button type="success" class="btn" @click="login">登录</el-button>
        <el-button type="primary" class="btn" @click="resetForm('ruleForm')"
          >重置</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        user: "",
        pass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login() {
      //   this.$router.push("/main");
      this.$router.push("/input");
    },
  },
};
</script>

<style scoped rel="stylesheet/scss" lang="scss">
@import "@/assets/login.scss";
</style>

<style>
.link {
  float: right;
  margin-bottom: 20px;
}
.forget {
    float:left !important;
}
</style>
