<template>
	<div class="goodsClassification">
		<!-- 主页tab -->
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">今日推荐</mt-tab-item>
			<mt-tab-item id="2">最后疯抢</mt-tab-item>
			<mt-tab-item id="3">美妆</mt-tab-item>
			<mt-tab-item id="4">母婴</mt-tab-item>
			<mt-tab-item id="5">国际</mt-tab-item>
			<mt-tab-item id="6">家电</mt-tab-item>
		</mt-navbar>
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		<mt-tab-container-item id="1">
			<section id="recommendedToday">
				<p><img src="static/img/zptm.jpg" alt="" style="width:100%"></p>
				<p><img src="static/img/xhyfl.gif" alt="" style="width:100%"></p>
				<category :argObj="argObj" :widthClass="cls" ></category>
			</section>
		</mt-tab-container-item>
		<mt-tab-container-item id="2">
			<mt-cell v-for="n in 9" :title="'content ' + n" />
		</mt-tab-container-item>
		<mt-tab-container-item id="3">
			<mt-cell v-for="n in 8" :title="'content ' + n" />
		</mt-tab-container-item>
		<mt-tab-container-item id="4">
			<mt-cell v-for="n in 7" :title="'content ' + n" />
		</mt-tab-container-item>
		<mt-tab-container-item id="5">
			<mt-cell v-for="n in 6" :title="'content ' + n" />
		</mt-tab-container-item>
		<mt-tab-container-item id="6">
			<mt-cell v-for="n in 5" :title="'content ' + n" />
		</mt-tab-container-item>
		</mt-tab-container>
		<!-- <mt-search v-model="value"></mt-search> -->

	</div>
</template>

<script>
import category from '@/components/category'	
export default{
	components:{
		category:category
	},
	data () {
	    return { 
	    	id: 0,
	    	goodList:[],
	  		argObj:[
			{'url':'../../static/img/yf0.png','path':"/goodsdetail/0"},
	  		{'url':'../../static/img/yf1.png','path':"/goodsdetail/1"},
	  		{'url':'../../static/img/yf2.png','path':"/goodsdetail/2"},
	  		{'url':'../../static/img/yf3.png','path':"/goodsdetail/3"},
	  		{'url':'../../static/img/yf4.png','path':"/goodsdetail/4"},
	  		{'url':'../../static/img/yf5.png','path':"/goodsdetail/5"},
	  		{'url':'../../static/img/yf6.png','path':"/goodsdetail/6"},
	  		{'url':'../../static/img/yf7.png','path':"/goodsdetail/7"},
	  		{'url':'../../static/img/yf8.png','path':"/goodsdetail/8"},
	  		{'url':'../../static/img/yf9.png','path':"/goodsdetail/9"},],
		    cls:{'width': '20%'},
	    
	    }
	},
	props:['selected'],
	created(){
//		debugger
//     console.log( this.$route.params)
//		this.id = this.$route.params.goodid;
//		this.getGoodsClassification(this.id)
	},
	methods: {
//		getGoodsClassification(id){
////			debugger
//			var _this=this;
//			_this.http.get("static/data/goodsdetail.data",{
//				params:{
//					id:id
//				}
//			}).then(function(response){
//				var temp=[];
//				temp=response;
//				console.log(temp)
//				for(var item in temp){
//					if(item.gid==id){
//					
//					}
//				}
//				
//			})
//		}
		
	},
	

}
</script>

<style scoped >
</style>
