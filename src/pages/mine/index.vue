<template id="">
  <div class="home-container">
    Mine
    <button type="button" name="button" @click="logout">退出</button>
  </div>
</template>

<script type="text/javascript">
  export default {
    methods: {
      logout() {
        this.$router.push('login')
      }
    }
  }

</script>

<style media="screen">

</style>
