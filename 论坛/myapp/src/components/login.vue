<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-08 14:37:57
 * @LastEditTime: 2019-10-10 19:24:30
 * @LastEditors: Please set LastEditors
 -->
<template name="component-name">
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model.number="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox label="7天免登陆" v-model="ruleForm.mdl"></el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
    <p style="text-align:right ; font-size: 16px">
      <el-link type="success" @click="goReg">注册</el-link>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        password: "",
        username: "",
        mdl: true
      },
      rules: {
        password: [
          { required: true, validator: validatePass, trigger: "blur" }
        ],

        username: [
          { required: true, message: "亲，用户名必须填写哟", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    goReg() {
      this.$router.replace({
        path: "/reg"
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let { username, password, mdl } = this.ruleForm;
          window.console.log(username, password);
          let { data } = await this.$axios.get(
            "http://localhost:1907/user/login",
            {
              params: {
                username,
                password,
                mdl
              }
            }
          );

          console.log(data);
          if (data.code === 1) {
            let { targetUrl } = this.$route.query;
            console.log(targetUrl);
            this.$router.replace({
              path: targetUrl || "/index"
            });
            this.$store.commit("login", { username, Authorization: data.data });
          } else {
            alert("用户名或密码错误！");
          }

          // if (data.result.n) {
          //   this.$router.replace({
          //     name: "my",
          //     params: { username },
          //     query: { username }
          //   });
          // } else {
          //   alert("注册失败");
          // }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>