<template>
    <div>
        <div class="goods" v-for='(item,index) in cararr' :key="index">
            {{item.title}}
            <div class="goodsright">
                <i class="cubeic-remove" @click="removeCar(index)"></i>
                <span>{{item.carCount}}</span>
                <i class="cubeic-add" @click="addCar(index)"></i>
            </div>
        </div>
        <cube-button style="margin:10px 0">下单</cube-button>
        <cube-button @click="clearcar()">清空购物车</cube-button>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
            // cararr:[],
        }
    },
    computed:{
        ...mapState({
            cararr:state=>state.cararr
        })
    },
    methods:{
        removeCar(index){
            this.$store.commit('removecar',index)
        },
        addCar(index){
            this.$store.commit('caradd',index)
        },
        clearcar(){
            this.$store.commit('clearcar')
        }
    }
}
</script>
<style lang="stylus" scoped>
.goods
    padding 10px
    text-align left
    .goodsright
        float right
    i  
        font-size 18px
</style>