<template>
  <div class="header">
    <div class="left">
      <img src="../../../img/ARTmarket.png" alt="ARTmarket" />
    </div>
    <div class="right">
      <ul>
        <li>Home</li>
        <li>List an item</li>
        <li>{{ login }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      nav: {
        login: true
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../../lib/vars"
.header
  height: 2rem
  background-color: #1A1A1A
</style>