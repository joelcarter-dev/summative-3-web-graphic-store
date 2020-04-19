<template>
  <div class="">
    <Navbar />
    <!-- <InfoSection /> -->
    <GetItems :showDetailed="false" />
  </div>
</template>

<script>
import GetItems from "../components/GetItems";
import Navbar from "../components/shared-components/Navbar";
// import InfoSection from "../components/Info";
export default {
  name: "LandingPage",
  components: { GetItems, Navbar },
};
</script>

<style lang="sass" scoped></style>
