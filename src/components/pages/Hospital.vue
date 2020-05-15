<template>
  <div class="ui text container">
  	<header>
  		<h1 class="ui header">
		 NAME OF HOSPITAL - Dr John Doe
		</h1>
  	</header>
  	<section class="section">
  		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec diam vitae sem congue gravida. Maecenas a ultricies nulla. Etiam elementum augue sapien, et porttitor purus maximus mattis. Etiam eu mattis nulla, vestibulum mollis tortor. Vivamus porta gravida leo, vitae bibendum massa tincidunt vel. Etiam tincidunt facilisis volutpat. Nullam consectetur nibh ante, vel varius nunc efficitur ac. Aliquam erat volutpat.
		</p>
  		<div class="ui" style="text-align:center;">
			<div class="">
				<button class="huge ui inverted green button">VIEW REPORTED CASES
		  		</button>
			</div>
			<div class="">
				<button class="huge ui inverted green button">VIEW POSITIVE CASES
		  		</button>
			</div>
		</div>
  	</section>
  </div>
</template>

<script>
export default {
    name:'Hospital',

	  data: () => ({

	  }),
};
</script>
<style scoped>
	header{
		padding: 35px 0px ;
	}
	header h1{
		font-size: 3rem !important;
		text-align: center;
		font: Bold 50px/67px Segoe UI;
		color: #116321 !important;
	}
	header p{
		text-align: center;
		/*color: #116321;*/
	}
	.block{
		width: 100%;
		border-radius: 20px !important;
	}
	section{
		padding: 45px 0px;
	}
	section p{
		text-align: center; 
	}
	button {
		width: 293px;
		margin-top: 40px !important;
	}
</style>