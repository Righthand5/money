<template>
<Layout>
  <div class = "navBar">
    <Icon class = "leftIcon" name ="left"/>
    <span class="title">编辑标签</span>
    <span class = "rightIcon"></span>
  </div>
  <div class = "from-wrapper">
  <FormItem :value="tag.name" field-name="标签名" placeholder="请输入标签名"/>
  </div>
  <div class = "button-wrapper">
    <Button>删除标签</Button>
  </div>
</Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator'
import tagListModel from '@/models/tagListModel';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';
@Component({
  components: {Button, FormItem}
})
export default class EditLabel extends Vue{
  tag?: { id: string;name: string } = undefined;//默认等于undefined，等拿到后赋值
  created(){
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    //返回的是一个数组
    const tag = tags.filter(t => t.id ===id)[0];
    if(tag){
        this.tag = tag
    }else{
        this.$router.replace('/404')
    }
  }
}
</script>

<style lang="scss" scoped>
.navBar{
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  position: relative;
  display: flex;
  justify-items: center;
  justify-content: space-between;
  > .title{
  }
  > .leftIcon{
    width: 24px;
    height: 24px;
  }
  >.rightIcon{
    width:24px;
    height: 24px;
  }
}
.from-wrapper{
  background:white;
  margin-top: 8px;
}
.button-wrapper{
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}




</style>