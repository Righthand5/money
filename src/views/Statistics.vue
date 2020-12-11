<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync = "type"/>
    <Tabs class-prefix="interval" :data-source = "intervalList" :value.sync="interval"/>

  </Layout>
</template>
<style scoped lang="scss">
/*只影响当前组件*/
  ::v-deep .type-tabs-item{
  background: white;
  &.selected{
    background: #c4c4c4;
  }
  &::after{
  display: none;
}
}
</style>

<script lang="ts">
import Vue from 'vue';
import Types from '@/components/Money/Types.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components:{Types,Tabs},
})
export default class Statistics extends Vue{
  type='-';
  interval = 'day';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>

