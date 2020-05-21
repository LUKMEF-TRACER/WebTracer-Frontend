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
				  <label>Phone number</label>
				  <input v-model='tel' type="text" placeholder="Phone">
				</div>
		    
		    <div class="field">
					<div class="two fields">
					  <div class="field">
			      	<label>Region</label>
				       <select class="ui fluid dropdown">
				        <option value="">Region</option>
						    <option value="AL">Alabama</option>
		    
		      		</select>
				    </div>
					  <div class="field">
				      <label>Town</label>
				       <select class="ui fluid dropdown">
				        <option value="">Town</option>
						    <option value="AL">Alabama</option>
		    
		      		</select>
				    </div>
					</div>
				</div>

			  <h4 class="ui dividing header">Select symptoms</h4>
			  <div class="field">
			    <label></label>
			    <div v-for='(elmt,index) in symptoms' :key='index' class="ui left floated compact segment">
				  <div class="ui checkbox">
				    <input v-model='sympt' type="checkbox" :value="elmt">
				    <label>{{elmt}}</label>
				  </div>
				</div>
			  </div>
			  
			  <div class="field">
			  	<h4 class="ui dividing header">WHEN and WHERE last did you see this person?</h4>
		      <label>WHEN</label>
		       <input v-model='when' type="date" placeholder="date">
		    </div>
			  <div class="field">
			    <label>WHERE</label>
			    <textarea v-model='where' spellcheck="true"></textarea>
			  </div>

			  <div class="">
			  	<button class="positive ui button block">SUBMIT YOUR REPORT</button>
			  </div>
			</form>
  	</section>
  </div>
</template>

<script>
// import locale from './locales/location.json';
export default {
    name:'ReportPage',

	data: () => ({
		region: [],
		tel: '',
		town: '',
		sympt:[],
		when: null,
		where: '',
	symptoms: ['dry cough','fever','chest pain','difficulty breathing','headache','conjunctivitis','a rash on skin'],
	}),
	methods: {
	 //  getJsonFile (index) {
		//   this.region = require('./locales/locations.json')
		//   console.log(this.region)
		// }
	}
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
		border-radius: 20px !important;
	}
	section{
		padding: 45px 0px;
	}
</style>