<template class="page-container">
    <article class="page-content">
        <article class="logo">
            <img src="../assets/logos/logo.png" width="35%" height="35%"/>
            <h2>On n'a pas encore de slogan mais tkt.</h2>
        </article>
        <section class="sign-in">
            <div class="router">
                <router-link to="/login"><p>Se connecter</p></router-link>
                <p> | </p>
                <router-link to="/register"><p>S'inscrire</p></router-link>
            </div>
            <div class="flex-form">
                <p class= "errormessage" v-if="error">{{ message }}</p>
                <input v-model="lastname" class="login-register-input" type="text" placeholder="Nom"/>
                <input v-model="firstname" class="login-register-input" type="text" placeholder="Prénom"/>
                <input v-model="address" class="login-register-input" type="text" placeholder="Adresse"/>
                <input v-model="zipcode" class="login-register-input" type="text" placeholder="Code Postal"/>
                <input v-model="city" class="login-register-input" type="text" placeholder="Ville"/>
                <select  v-model="countryid" placeholder="Pays" class="login-register-input">
                    <option v-for="country in countries" :key="country.countryid" :value="country.countryid">{{ country.countryname }}</option>
                </select>
                <input  v-model="email" class="login-register-input" type="text" placeholder="Adresse e-mail"/>
                <input  v-model="password" class="login-register-input" type="password" placeholder="Mot de passe"/>
                <button type="click" @click="postUserAuthRegister" class="confirm-button">S'inscrire</button>
            </div>
        </section>
    </article>
</template>

<script>
import { getCountryList } from '../services/UserService'
import { postUserAuthRegister } from '../services/AccountService'

export default {
  name: 'Register',
  data(){
    return {

        email : null,
        password : null,
        lastname : null,
        firstname : null,
        address : null,
        city : null,
        zipcode : null,
        countryid : 0,

        country: {},
        countries: [],

        error: false,
        message: null
    }
  },
  methods: {
    async getCountryList() {
        getCountryList().then(countries => { this.$set(this,"countries", countries) }).bind(this)
    },
    async postUserAuthRegister() {
        this.error = false
        if (this.password && this.email && this.lastname && this.firstname && this.address && this.city && this.countryid) {
            postUserAuthRegister(this.email, this.password, this.lastname, this.firstname, this.address, this.city, this.zipcode, this.countryid).then(response => {
                let clearance = response.user.clearance
                localStorage.setItem('user',JSON.stringify(response.user))
                localStorage.setItem('jwt',response.token)

                if (localStorage.getItem('jwt') != null){
                    this.$emit('loggedIn')
                    if(this.$route.params.nextUrl != null){
                        this.$router.push(this.$route.params.nextUrl)
                    }
                    else {
                        if(clearance == 1){
                            this.$router.push('admin')
                        }
                        else {
                            this.$router.push('user')
                        }
                    }
                }
            }, err => 
            {
                this.error = true
                this.message = err.response.data.message
                console.error(err);
            }).catch(function(err){
                console.error(err);
            });
        }
        else {
            this.error = true
            this.message = "Tout les champs doivent être remplis."
        }
    },
  },
  mounted() {
    this.getCountryList();
  }
}
</script>


<style scoped>
.page-container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.page-content {
    width: 70%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 15% 15px 15%;
}

.logo {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.router {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    justify-items: space-around;
    font-weight: bolder;
}

.form-section {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

.confirm-button {
  background-color: #EAEE59;
  color: white;
  text-align: center;
  width: 100%;
  height: 50px;
  font-size: 15pt;
  font-family: Verdana, Arial, sans-serif ;
  border: none;
}

.login-register-input {
    border-radius: 5px 5px 5px 5px;
    width: 400px;
    height: 30px;
    border: none;
    margin-bottom: 15px;
    padding-left: 10px
}

.sign-in, .sign-up, .flex-form {
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h2 {
    background: -webkit-linear-gradient(#C0AB1C, #EAEE59, #C0AB1C);
    font-family: 'Autography', sans-serif;
    font-size: 30px;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

a, p{
    margin-left: 20px;
    margin-right: 20px;
    color: white;
    transition: color 0.3s;
    font-family: Arial, Verdana, sans-serif;
    font-size: 15px;
    color: white;
}

.errormessage {
    color: red;
}


a:visited {
    text-decoration: none;
}

a:link {
    text-decoration: none;
}

a:hover p{
    color: #EAEE59;
}

.login-register-input:focus {
    box-shadow: 0 0 5px lightskyblue;
    border: 2px solid lightskyblue;
    outline: none;
}

</style>
