<template>
  <div class="login-content d-flex">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="账户" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pwd" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="OnSubmit">登录</el-button>
        <el-button type="plain">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        pwd: ''
      },
      rules: {
        name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }]
      }
    }
  },
  methods: {
    OnSubmit() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          alert('OnSubmit')
          this.$router.push('/layout')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
// 安装sass依赖  node-sass目前安装的是 4.14.1版本   sass-loader 这个建议安装

$high-light: pink;
.login-content {
  background: $high-light;
}
</style>
