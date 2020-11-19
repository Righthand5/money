<template>
  <Layout class-prefix="layout">
    {{ recordList }}
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class = "notes">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"/>
    </div>
    <Tags/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Tags from '@/components/Money/Tags.vue';
//const model = require('@/model.js');
//只要在刚开始的时候写上断言-（as RecordItem）后面就会方便



@Component({
  components: {FormItem, Tags,
    Types, NumberPad},
  computed:{
    recordList(){
      return this.$store.state.recordList;
    }
  }
})
export default class Money extends Vue {
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0,
  };
  created(){
    this.$store.commit('fetchRecords')
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    this.$store.commit('createRecord',this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0;
}
</style>


