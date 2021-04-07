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
                <label for="email"></label>
                <input v-model="email" id="email" class="login-register-input" type="text" placeholder="Adresse e-mail"/>
                <label for="password" ></label>
                <input v-model="password" id="password" class="login-register-input" type="password" placeholder="Mot de passe"/>
                <button type="click" @click="postUserAuthLogin" class="confirm-button">Se connecter</button>
            </div>
        </section>
    </article>
</template>

<script>

    import { postUserAuthLogin } from '../services/AccountService'

    export default {
        data(){
            return {
                email : "",
                password : ""
            }
        },
        methods : {
            async postUserAuthLogin() {
                if (this.password.length > 0) {
                    postUserAuthLogin(this.email, this.password).then(response => {
                        console.log(response)
                        console.log(response.user)
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
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
                }
            },
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
