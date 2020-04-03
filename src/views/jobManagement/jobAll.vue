<template>
  <div>
    <button class="btn_theme" onclick="javascript:window.location.href='admin_jobsPost.html';">
      <i class="iconfont iconfabu btn_theme_i"></i>
      发布新职位
    </button>
    <div class="admin_main m_t20">
      <div class="admin_search">
        <input type="text" placeholder="请输入职位名称" class="input_theme border_r5">
        <button class="btn_theme">查找</button>
      </div>
      <div class="admin_operBar clearfix">
        <div class="fl admin_operAll">
          <a href="javascript:;" class="a_checkBox m_r5" id="checkboxAll"></a> 全选
          <div class="input_selectSet">
            <input type="text" name="" id="" value="全部" readonly="" />
            <i class="iconfont iconjiantou"></i>
            <div class="down_list">
              <p>全部</p>
              <p>在招</p>
              <p>暂停</p>
            </div>
          </div>
        </div>
        <div class="fr">
          <button type="button" class="btn_default btn_small">上线</button>
          <button type="button" class="btn_default btn_small">下线</button>
          <button type="button" class="btn_default btn_del">删除</button>
        </div>
      </div>
      <!-- 列表 start -->
      <div class="admin_list border">
        <!-- 表头 start -->
        <ul class="tb_head tb_table clearfix">
          <li class="li_checkBox">&nbsp;</li>
          <li class="w_auto9">职位</li>
          <li class="w_auto13">浏览量</li>
          <li class="w_auto9">简历投递量</li>
          <li class="w_auto9">工作地区</li>
          <li class="w_auto8">学历要求</li>
          <li class="w_auto8">工作经验</li>
          <li class="">部门</li>
          <li class="">发布时间</li>
          <li class="w_auto23">操作</li>
        </ul>
        <!-- 表头 end -->
        <!-- 内容 start -->
        <div class="tb_body">
          <ul class="tb_table clearfix">
            <li class="li_checkBox">
              <a href="javascript:;" class="a_checkBox"></a>
            </li>
            <li class="w_auto9">电子技工</li>
            <li class="w_auto13"><span class="font_blue">1,250</span>次浏览</li>
            <li class="w_auto9"><span class="font_blue">500</span>人</li>
            <li class="w_auto9">重庆江北</li>
            <li class="w_auto8">本科</li>
            <li class="w_auto8">1年</li>
            <li class="">产品部</li>
            <li class="">2017-06-21</li>
            <li class="w_auto23">
              <button class="btn_default btn_txt">编辑</button><button class="btn_default btn_txt" id="btn_preview">预览</button><button
                class="btn_default btn_txt">撤下</button><button class="btn_default btn_txt" id="btn_del">删除</button>
            </li>
          </ul>
          <ul class="tb_table tb_offline clearfix">
            <li class="li_checkBox">
              <a href="javascript:;" class="a_checkBox"></a>
            </li>
            <li class="w_auto9">电子技工</li>
            <li class="w_auto13"><span class="font_blue">1,250</span>次浏览</li>
            <li class="w_auto9"><span class="font_blue">500</span>人</li>
            <li class="w_auto9">重庆江北</li>
            <li class="w_auto8">本科</li>
            <li class="w_auto8">1年</li>
            <li class="">产品部</li>
            <li class="">2017-06-21</li>
            <li class="w_auto23">
              <button class="btn_default btn_txt">编辑</button><button class="btn_default btn_txt">上线</button><button
                class="btn_default btn_txt">删除</button>
            </li>
          </ul>
        </div>
        <!-- 内容 end -->
      </div>
      <!-- 列表 end -->
      <!-- 分页 start -->
      <!-- 分页 end -->
    </div>

  </div>
</template>

<script>
</script>

<style>
</style>
