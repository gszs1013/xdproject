<template>
  <div class="left slider-bar">
    <el-menu
      router
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/home">
        <i class="el-icon-setting"></i>
        <span slot="title">首 页</span>
      </el-menu-item>
      <el-menu-item index="/loanManager">
        <i class="el-icon-setting"></i>
        <span slot="title">贷款申请</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">申请管理</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>贷款审批</span>
        </template>
        <el-menu-item index="4-1">初审</el-menu-item>
        <el-menu-item index="4-1">复审</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
