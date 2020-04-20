<template>
  <div class="button">
      <button class="button-solid">Button</button>
  </div>
</template>

<script>
export default {
    name: "Button"
};
</script>

<style lang="sass" scoped>
@import "../../lib/vars"

.button
    .button-solid
        background-color: $mainRed
        color: white
        border-style: none
        box-shadow: 6px 6px 6px #C1C1C1
        font-size: 0.9rem
        font-weight: 500
        height: 2rem
        width: 8rem
        font-family: "Open Sans", sans serif
        border-radius: 5px
        margin-top: 1.5rem
</style>