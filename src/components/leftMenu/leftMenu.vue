<template>
  <div class="nav">
    <router-link class="nav_title cur_point" to="/index" tag="div">
      <i class="iconfont iconshouye font_22"></i>首页
    </router-link>
    <router-link class="nav_title cur_point" to="/jobManage" tag="div">
      <i class="iconfont icongongwen font_22"></i>职位管理
    </router-link>
    <div class="nav_title"><i class="iconfont icongongchang font_20"></i>报名人员管理</div>
    <ul>
      <li><router-link to="/applyStaff">报名人员列表</router-link></li>
      <li><router-link to="/incomingStaff">入职人员列表</router-link></li>
      <li><router-link to="/noHiringStaff">满岗人员列表</router-link></li>
      <li><router-link to="/quitStaff">离职人员列表</router-link></li>
      <li><router-link to="/invalidStaff">无效人员列表</router-link></li>
    </ul>
    <div class="nav_title"><i class="iconfont iconqian font_20"></i>补贴发放管理</div>
    <ul>
      <!-- <li><a href="admin_subsidyAudit.html">补贴审核</a></li> -->
      <li><router-link to="/unpaidList">待打款名单</router-link></li>
      <li><router-link to="/paidList">已打款名单</router-link></li>
      <li><router-link to="/notPassList">补贴审核不通过</router-link></li>
      <li><router-link to="/recommendSet">推荐补贴设置</router-link></li>
    </ul>
    <div class="nav_title"><i class="iconfont iconzhanghao font_22"></i>账号管理</div>
    <ul>
      <li><router-link to="/companyInfo">公司资料</router-link></li>
      <li><router-link to="/fundsDetails">资金明细</router-link></li>
      <li><router-link to="/customers">我的客户</router-link></li>
      <li><router-link to="/account">账户信息</router-link></li>
      <li><router-link to="/adsManagement">广告管理</router-link></li>
      <!-- <li><a href="admin_recruitConsultant.html">招聘顾问管理</a></li> -->
      <li>&nbsp;</li>
      <li>&nbsp;</li>
      <li>&nbsp;</li>
    </ul>
  </div>
</template>

<script>
</script>

<style>
</style>
