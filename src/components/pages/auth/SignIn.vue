<template>
  <div class="ui text container">
  	<header>
  		<h1 class="ui header">
		  SIGN IN
		</h1>
  	</header>
  	<section class="section ui text container">
  		
  		<button @click='setModal(modal)' class="big ui inverted green button">
  			<i class="icon hospital"></i> 
  			HOSPITAL
  		</button>

  		<button @click='setModal(modal1)' class="big ui inverted green button">
  			<i class="icon bus"></i>
  			TRAVEL AGENCY
  		</button>


  		<!-- Modals -->
  		<div class="ui modal mini" v-if='modal' >
		  <i class="close icon"></i>
		  <div class="header">
		    Hospital
		  </div>
		  <div class="image content">
		    <div class="description">
				<form class="ui form">
					<div class="field">
					  <label>Name</label>
					  <input v-model='name' type="text" placeholder="Name">
					</div>
				    <div class="field">
				      <label>Password</label>
				       <input v-model='password' type="text" placeholder="Password">
				    </div>
				</form>
		    </div>
		  </div>
		  <div class="actions">
		    <div class="ui positive block right labeled icon button">
		      SUBMIT
		      <i class="checkmark icon"></i>
		    </div>
		  </div>
		</div>

		<div class="ui modal mini" v-if='modal1' >
		  <i class="close icon"></i>
		  <div class="header">
		    Travel Agency
		  </div>
		  <div class="image content">
		    <div class="description">
				<form class="ui form">
					<div class="field">
					  <label>Name</label>
					  <input v-model='name' type="text" placeholder="Name">
					</div>
				    <div class="field">
				      <label>Password</label>
				       <input v-model='password' type="text" placeholder="Password">
				    </div>
				</form>
		    </div>
		  </div>
		  <div class="actions">
		    <div @click="loader=='loading'" class="ui positive block right labeled icon button">
		      SUBMIT
		      <i class="checkmark icon"></i>
		    </div>
		  </div>
		</div>

  	</section>

  </div>
</template>

<script>
export default {
    name:'SignIn',

	data: () => ({
		modal: false,
		modal1: false,
		name: '',
		password: '',
		loader: '',
	}),
	methods: {
	    setModal: function (modal) {
	        if (modal == this.modal) {
	        	this.modal = !this.modal;
	        	this.modal1 = false;
	        }
	        else if (modal == this.modal1) {
	        	this.modal1 = !this.modal1;
	        	this.modal = false;
	        }
	        this.loader = true;
	    },

	    requestWithdrawal(){
	        axios.post('/api/v1/website-backend/request_withdrawal', {
	            amount: this.amount,
	            phone: this.accountNumber
	        }).then((resp) => {
	            console.log(resp.data);
	        }).catch((error) => {
	            console.log('error found');
	            console.log(error);
	        })
	    }
	},

};

</script>
<style scoped>
	div .container{
		padding-top: 50px;
	}
	header{
		padding: 35px 0px ;
	}
	header h1{
		font-size: 4rem !important;
		text-align: center;
		font: Bold 50px/67px Segoe UI;
		color: #116321 !important;
	}
	header p{
		text-align: center;
		/*color: #116321;*/
	}
	section{
		text-align: center;
	}
	.ui.modal{
		/*margin-top: 50px !important;*/
		display: block;
		margin: 50px 20% 0px 11% !important;
	}
</style>