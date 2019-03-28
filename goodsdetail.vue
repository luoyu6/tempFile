<template>
  <div class="hello">
   <mt-header title="女装">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
<!--<category :argObj="argObj" :widthClass="widthcls" ></category>-->
<ul v-for="item in list" class='pictureList'>
	<li class="">
		<img :src='item.imgSrc' />
	</li>
</ul>
  </div>
</template>

<script>
import category from '@/components/category'	
export default {
  name: 'HelloWorld',
  data () {
  	return {
		  list:[],
		  id:0,
  		widthcls:{'width':'25%'},
  		argObj:[{'url':'../../static/img/yf0.png','path':"/goodsdetail/1"},
  		{'url':'../../static/img/yf1.png','path':"/goodsdetail/2"},
  		{'url':'../../static/img/yf2.png','path':"/goodsdetail/3"},
  		{'url':'../../static/img/yf3.png','path':"/goodsdetail/4"},
  		{'url':'../../static/img/yf4.png','path':"/goodsdetail/5"},
  		{'url':'../../static/img/yf0.png','path':"/goodsdetail/1"}]
		   
  	}
    
    
  },
  created(){
  	
  	this.id=this.$route.params.goodid;
  	this.getGoodsDetail(this.id);
  },
  methods:{
		getGoodsDetail(id){
			var _this=this;		                                                               
			_this.http.get('static/data/goodsdetail.data',{
//				params:{
//					id:id
//				}
					
			}).then(function(response){
				var temp=[];
				var goodsArr;
				temp=response.data;
				for(var i=0;i< temp.length;i++){
					var item=temp[i];
					if(item.gid==id){
						_this.list=item.goods;
						console.log(_this.list);
						
					}
				}
			})
			
		}
  },
  components:{
  	category:category
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../../static/css/default.css");
.pictureList li{
	width:25%;
	float:left
}
</style>
