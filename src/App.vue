<template>
  <div id="app" class="wrapper">
    <system-header />
    <left-menu />
    <div class="contentBox">
      <!-- 如果需要路由来控制 意味着这里需要使用 router-view -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import systemHeader from '@/components/systemHeader/systemHeader.vue'
import leftMenu from '@/components/leftMenu/leftMenu.vue'

export default {
  components: {
    systemHeader,
    leftMenu
  }
}
</script>

<style>
  /* @import 'assets/css/blueCollar.css';
  @import 'assets/iconfont/iconfont.css'; */
</style>
