<template>
  <div class="ui text container">
  	<header>
  		<h1 class="ui header">
		  REPORT A CASE
		</h1>
		<p>
			please, kindly fill the questionnaire below providing responses as prompted.
		</p>
  	</header>
  	<section class="section">
  		<form class="ui form">
		  <div class="field">
		    <label>Name</label>
		    <div class="two fields">
		      <div class="field">
		        <input type="text" name="shipping[first-name]" placeholder="First Name">
		      </div>
		      <div class="field">
		        <input type="text" name="shipping[last-name]" placeholder="Last Name">
		      </div>
		    </div>
		  </div>
		  <div class="two fields">
		    <div class="field">
		      <label>Email address</label>
		      <input type="email" name="email" placeholder="Email">
		    </div>
		    <div class="field">
		      <label>Phone number</label>
		       <input type="text" name="tel" placeholder="Phone">
		    </div>
		  </div>
		  <div class="two fields">
		    <div class="field">
		      <label>Division</label>
		      <input type="email" name="division" placeholder="Division">
		    </div>
		    <div class="field">
		      <label>Sub Division</label>
		       <input type="text" name="subDivision" placeholder="Sub Division">
		    </div>
		  </div>
		  <h4 class="ui dividing header">Description</h4>
		  <div class="field">
		    <label>Please Describe what you saw..</label>
		    <textarea spellcheck="true"></textarea>
		  </div>
		  <div class="field">
		    <label>WHEN and WHERE last did you see this person?</label>
		    <textarea spellcheck="true"></textarea>
		  </div>

		  <div class="">
		  	<button class="positive ui button block">SUBMIT YOUR REPORT</button>
		  </div>
		</form>
  	</section>
  </div>
</template>

<script>
export default {
    name:'ReportPage'
};
</script>
<style >
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
		border-radius: 10px;
	}
	section{
		padding: 45px 0px;
	}
</style>