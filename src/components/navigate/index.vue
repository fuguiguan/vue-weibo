<template id="">
  <div class="navigate-container">
    <router-link to="/home" class="link">
      <i class="iconfont icon-shouye"></i>
      微博
    </router-link>
    <router-link to="/search" class="link">
      <i class="iconfont icon-sousuo"></i>
      搜索
    </router-link>
    <router-link to="/message" class="link">
      <i class="iconfont icon-xinfeng"></i>
      消息
    </router-link>
    <router-link to="/mine" class="link">
      <i class="iconfont icon-wode"></i>
      我
    </router-link>
  </div>
</template>

<script type="text/javascript">
  export default {

  }

</script>

<style media="screen" lang="less">
@import '//at.alicdn.com/t/font_1226813_qmiyy9zlpam.css';
  .navigate-container {
    background-color: #eee;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 40px;
    display: flex;
    justify-content: space-around;
    .link {
      display: flex;
      text-decoration: none;
      flex-direction: column;
      justify-content: space-around;
      // font-size: 20px;
    }
  }
</style>
