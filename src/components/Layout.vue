<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name:'Layout'
  };
</script>


<style lang="scss" scoped>
.nav-wrapper{
  display: flex;
  flex-direction:column;
  height:100vh;
}
.content{
  overflow: auto;
  flex-grow:1;//让蓝色的地方尽量占满
}
</style>