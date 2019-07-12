<template>
  <div>
      <img  class="header-img" src="https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1904/vip1.png" alt="">
        <ul>
            <li v-for="(item,index) in minearr" :key="index" @click="itemclick(item)" class="mineitem">
                <span class="minetitle">{{item.label}}</span>
                <i class="cubeic-arrow"></i>
            </li>
        </ul>
  </div>
</template>
<script>

export default {
    data(){
        return{
            minearr:[
                {
                    label:'商品收藏'
                },
                {
                    label:'我的足迹'
                },
                {
                    label:'店铺收藏'
                },
                {
                    label:'我的订单'
                },
                {
                    label:'退出',
                    type:'exit'

                },

            ]
        }
    },
    methods:{
       itemclick(item){
           if(item.type=='exit'){
               this.$store.commit('settoken','')
               localStorage.removeItem('token')
               this.$router.push({path:'/login'})
           }
       }
    }
};
</script>
<style lang="stylus" scoped>
.header-img
    height 150px
    width 100%
.mineitem
    font-size 14px
    text-align left 
    height 50px
    line-height 50px
    padding-left 5%
    border-bottom 1px solid #eee
    .minetitle
        display inline-block
        width 90%

</style>




