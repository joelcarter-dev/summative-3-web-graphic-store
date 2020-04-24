<template>
  <div class="info">
    <h1 class="heading-info">Buy and sell digital art online!</h1>
    <h2 class="sub-heading-info">100% free e-commerce platform for artists! Sign up or log in to get started.</h2>
    <div class="buttons-info">
      <!-- DYNAMIC BUTTON: SIGN IN BUTTON WHEN LOGGED OUT, LIST AN ITEM WHEN LOGGED IN -->
      <Btn-router />
      <!-- DYNAMIC BUTTON: SIGN UP BUTTON WHEN LOGGED OUT, VIEW LISTINGS WHEN LOGGED IN -->
      <BtnInverse-router />


    </div>
    <div class="stock-images">
      <!-- HARD CODED FOR NOW -->
      <img
        class="image-wide"
        src="https://images.pexels.com/photos/1012982/pexels-photo-1012982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <img
        class="image-long"
        src="https://images.pexels.com/photos/2983226/pexels-photo-2983226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <img
        class="image-wide"
        src="https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <img
        class="image-long"
        src="https://images.pexels.com/photos/2983226/pexels-photo-2983226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <img
        class="image-wide"
        src="https://cdn.pixabay.com/photo/2018/04/06/13/46/poly-3295856_960_720.png"
      />
      <img
        class="image-long"
        src="https://images.pexels.com/photos/2983226/pexels-photo-2983226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
    </div>
  </div>
</template>

<script>
import BtnRouter from "../components/shared-components/Btn-router";
import BtnInverseRouter from "../components/shared-components/BtnInverse-router";
export default {
  name: "InfoSection",
  components: { BtnRouter, BtnInverseRouter },
  data() {
    return {
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../lib/vars"

.info
  margin-left: 8rem

.heading-info
  font-family: "Alegreya Sans", sans serif
  font-weight: bold
  font-size: 2rem
  margin-top: 3rem
  color: $mainRed
  text-shadow: 0px 3px 6px #D6D6D6

.sub-heading-info
  font-family: "Open Sans", sans serif
  font-size: 1.2rem
  margin-top: 1rem

.buttons-info
  display: flex
  margin-top: 0.5rem

.stock-images
  display: flex
  align-items: top
  margin-top: 0.5rem

.image-wide
  height: 10rem
  margin: 2rem 1.5rem 0 0

.image-long
  height: 15rem
  margin: 2rem 1.5rem 0 0


</style>
