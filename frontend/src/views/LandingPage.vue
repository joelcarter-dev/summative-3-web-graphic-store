<template>
  <div class="view">
    <Navbar />
    <InfoSection />
    <Login />
    <GetItems :showDetailed="false" />
  </div>
</template>

<script>
import GetItems from "../components/ViewItems/ViewItemsGetItems"
import Navbar from "../components/shared-components/Navbar"
import InfoSection from "../components/Info"
import Login from "../components/LogIn"
export default {
  name: "LandingPage",
  components: { GetItems, Navbar, InfoSection, Login }
};
</script>

<style lang="sass" scoped>
</style>
