<template>
  <div id="app">
    <!-- <div class="login" v-if="!this.$store.state.login">
      <Login />
      <button type="button" name="button" @click="login">login</button>
    </div> -->
    <!-- <div class="initPage" v-else> -->
      <router-view></router-view>
      <Navigate />
    <!-- </div> -->
</div>
</template>

<script>
import Navigate from './components/navigate/index'
import Login from './components/login/Login'
import { getInfo } from './apis/index'
export default {
  name: 'app',
  components: {
    Navigate,
    Login
  },
  methods: {
    login() {
      this.$router.push({
        path: '/home'
      })
    },
    mounted() {
      // let login = this.$store.state.login
      // if(!login) {
      //   this.$router.push('login')
      // }
      getInfo().then(a => console.log(a))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
