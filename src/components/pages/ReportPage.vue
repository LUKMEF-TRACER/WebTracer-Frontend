<template>
  <div class="ui text container">
	  <div class="ui center aligned raised red segment">
  			<h1>
			  REPORT A CASE
			</h1>
			<p>please, kindly fill the questionnaire below providing responses as prompted.</p>
	   </div>
  	<section class="section">
  		<form class="ui form">
		  <div class="field">
		      <label>Phone number</label>
		      <input type="text" name="tel" placeholder="Phone">
		   </div>
		  <div class="two fields">
		    <div class="field">
		      <label>Region</label>
			  <div class="ui search selection dropdown">
					<div class="default text">Select Country</div>
					<div class="menu">
						<div class="item">Far North</div>
						<div class="item">North West</div>
						<div class="item">Adamawa</div>
					</div>
			  </div>
		    </div>
		    <div class="field ui dropdown">
		      <label>Town</label>
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
		  	<button class="positive ui button fluid">SUBMIT YOUR REPORT</button>
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
<style>
	h1{
		font-size: 3rem !important;
		font: Bold 50px/67px Segoe UI;
		color: #116321 !important;
	}
	section{
		padding: 50px 0px;
	}
</style>