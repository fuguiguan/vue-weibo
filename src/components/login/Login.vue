<template id="Login">
  <div class="login-container">
    <form class="" action="#" method="post">
      <label for="user_name">用户名：</label>
      <input type="text" name="" value="" id="user_name">
      <br>
      <label for="user_name">密码：</label>
      <input type="password" name="" value="" id="user_pass">
    </form>
    <button type="button" name="button" @click="login">登录</button>
  </div>
</template>

<script type="text/javascript">
import { authorize } from '../../apis/index'
  export default {
    methods: {
      login() {
        let _this = this
        authorize().then( () => {
            _this.$router.push('home')
        })
      }
    }
  }
</script>

<style media="screen" lang="less">

</style>
