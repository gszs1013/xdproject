<template>
  <div class="home-content d-flex">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside><SliderBar></SliderBar></el-aside>
      <el-container>
        <el-header><Top></Top></el-header>
        <el-main><Main></Main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 两种导入方法
import { SliderBar, Top, Main } from '@/layout'
// import SliderBar from '@/layout/components/SliderBar'
// import Top from '@/layout/components/Top'
// import Main from '@/layout/components/Main'
export default {
  components: { SliderBar, Top, Main },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.home-content {
  width: 100%;
  height: 100%;
  .left {
    width: 300px;
    height: 100%;
  }
  .right {
    width: 100%;
    .top {
      width: 100%;
      height: 80px;
      background: rgb(187, 174, 174);
    }
  }
}
</style>
