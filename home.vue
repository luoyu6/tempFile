<template>
	<div class="index">
	<!--导航分类-->
		<navBar></navBar>
	</div>
</template>

<script>
	import navBar from '@/components/navBar'
	export default {
		name: 'HelloWorld',
		data() {
			return {
				selected:[],
			}
		},

		components: {
			navBar
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="stylus">

</style>
