<template>
	<div class="cartcontrol">
		<div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click.stop.prevent="decreaseCart">
		</div>
		<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
		<div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
	</div>
</template>
<script type="text/javascript">
	import Vue from 'vue';
	export default{
		props:{
			food:{
				type:Object
			}
		},
		created(){
			//console.log(this.food);

		},
		methods:{
			addCart(){

				if (!this.food.count) {
					Vue.set(this.food,'count',1)  //给this.food增加一个count属性，值为1
				}else{
					this.food.count++;
				}
				this.$emit('cart-add',event.target);
			},
			decreaseCart(){
				if (this.food.count) {
					this.food.count--
				}
			}
		} 
	}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	.cartcontrol
		font-size:0
		.cart-decrease,.cart-add
			display:inline-block
			padding:6px
			font-size:24px
			line-height:24px
			color:rgb(0,160,220)
		.cart-count
			display:inline-block
			vertical-align:top
			width:12px
			padding-top:6px
			line-height:24px
			text-align:center
			font-size:10px
			color:rgb(147,153,159)
		.cart-add
			display:inline-block
			
			
</style>