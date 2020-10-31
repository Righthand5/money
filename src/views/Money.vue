<template>
  <div class="nav-wrapper">
    <div class="content">
    money.vue
  </div>
  <Nav/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Money',
};
</script>

<style lang="scss" scoped>
.nav-wrapper{
  border: 1px solid green;
  display: flex;
  flex-direction:column;
  height:100vh;
}
.content{
  overflow: auto;
  flex-grow:1;//让蓝色的地方尽量占满
}
</style>