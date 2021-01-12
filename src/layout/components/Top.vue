<template>
  <div class="top">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        :to="{ path: '/home' }"
        v-for="(v, index) in item"
        :key="index"
        >{{ v }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: ['1', '2', '3', '4']
    }
  }
}
</script>

<style></style>
