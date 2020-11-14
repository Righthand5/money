<template>
  <div>
    <ul class="types">
      <li :class="value === '-' && 'selected'"
          @click="selectType('-')">支出
      </li>
      <li :class="value === '+' && 'selected'"
          @click="selectType('+')">收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  // type = '-';
  @Prop({default:'-'}) readonly value!: string;
  //@Prop告诉Vue xxx不是data是prop
  //Number告诉Vue xxx是个Number-运行时的类型
  //xxx 就是属性名
  //number | undefined 告诉TS就是 xxx的类型-编译时时的类型

  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.$emit('update:value',type)
    // this.type = type;
  }
  // @Watch('type')
  // onTypeChanged(value: string){
  //   this.$emit('update:value',value);
  // }
}
// export default {
//   name: "Types",
//   props:['xxx'],
//   data(){
//     return{
//       type:'-'
//     }
//   },
//   mounted() {
//     console.log(this.xxx)
//   },
//   methods:{
//     selectType(type){
//       if (type !=='-' && type !=='+'){
//         throw new Error('type is unknown')
//       }
//       this.type = type
//     }
//   }
// }
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>