<template>
	<!--选项-->
    <div class="category">
        <ul class="clearfix">
            <li :style = "widthClass" v-for="item1 in argObj" class="fl"><router-link href="#" :to='item1.path'><img :src='item1.url' alt=""></router-link></li>     
        </ul>
       
    </div>
</template>
<script>
export default {
name: 'HelloWorld',
data () {
    return {    
    }
},
  props:["argObj","widthClass"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.clearfix:after{
		clear: both;
		content: '';
		display: block;
		height: 0;
		visibility: hidden;
	}
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	ul li{
		list-style: none;
	}


.category ul li img{
	width: 100%;
}
</style>
