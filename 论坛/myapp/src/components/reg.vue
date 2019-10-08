<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-08 14:37:57
 * @LastEditTime: 2019-10-08 21:05:52
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
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
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
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var chenkUsername = async (rule, value, callback) => {
      let { data } = await this.$axios.get("http://localhost:1907/user/chek", {
        params: {
          username: this.ruleForm.username.toString()
        }
      });
      window.console.log(data.code);
      if (data.code === 0) {
        callback(new Error("用户名已存在"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: "",
        checkPass: "",
        username: ""
      },
      rules: {
        password: [
          { required: true, validator: validatePass, trigger: "blur" }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ],
        username: [
          { required: true, message: "亲，用户名必须填写哟", trigger: "blur" },
          {
            validator: chenkUsername,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let { username, password } = this.ruleForm;
          window.console.log(username, password);
          let { data } = await this.$axios.post(
            "http://localhost:1907/user/reg",
            {
              username,
              password
            }
          );
          // if (result.)
          // if (data.code === 1) {
          //   console.log(1);
          // } else {
          //   console.log(0);
          // }
          console.log(data.result);
          if (data.result.n) {
            this.$router.replace({
              name: "my",
              params: { username },
              query: { username }
            });
          } else {
            alert("注册失败");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>