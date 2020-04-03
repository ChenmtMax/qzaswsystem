<template>
  <div>
    <ul class="admin_tab clearfix" id="admin_tab">
      <!-- 定义子路由跳转 -->
      <router-link :to="{name: 'jobAll'}" tag="li">全部职位</router-link>
      <router-link :to="{name: 'jobsDraft'}" tag="li">职位草稿箱</router-link>
    </ul>
    <div class="w_auto mainBox" id="mainBox">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
