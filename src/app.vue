<!--
    * This is the root component of our APP.
    * Here we define how our page(s) will look like(layout).
    * Makes sense to be called a SFC(Single File Component)
 -->

<template>
	<div>
		<AppHeader></AppHeader>
		<router-view class="view"></router-view>
		<AppFooter></AppFooter>
	</div>
</template>

<script>
import {AppHeader, AppFooter} from './components/'

export default {
	name:'App',
	components:{
		 AppHeader,
		 AppFooter,
	}

}
</script>