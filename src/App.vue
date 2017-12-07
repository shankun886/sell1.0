<!-- .vue中写结构 -->
<template>
  <div>
   <vheader :seller="seller"></vheader>
   <div class="tab border-1px">
    <div class="tab-item">  
      <router-link to="/goods">商品</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/ratings">评论</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/seller">商家</router-link>
    </div>
  </div>  
  <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'

  export default {
    data() {
      return {//返回seller对象，通过发送ajax请求拿到seller对象塞给他
        seller:{}
      }
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        console.log(response);
        //response= response.json(); //这个response不像jq中的response，这里是一个属性，而jq中是一个对象.
        //response.json()返回的是一个promise，而不是json，在github.com/vuejs/vue-resource下docs下http.md看,所以用body
        response = response.body;
        //console.log(response);
        if(response.errno===0){
          this.seller = response.data;
          //console.log(this.seller);
        }
      });
    },
    components:{
      'vheader':header  
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
  .tab
    display:flex
    width:100%
    height:40px
    line-height:40px
    border-bottom: 1px solid rgba(7,17,27,0.1)
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex:1
      text-align:center
      & > a
        display:block
        font-size:14px
        color: rgb(77,85,93)
        &.active
          color:red

</style>
