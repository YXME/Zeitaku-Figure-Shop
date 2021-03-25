<template class="page-container">
    <article class="page-content">
        <article class="logo">
            <img src="../assets/logos/logo.png" width="35%" height="35%"/>
            <h3>On n'a pas encore de slogan mais tkt.</h3>
        </article>
        <aside class="form-section">
            <section class="sign-in">
                <h3>Connexion</h3>
                <form class="flex-form">
                    <input class="login-register-input" type="text" placeholder="Adresse e-mail"/>
                    <input class="login-register-input" type="password" placeholder="Mot de passe"/>
                    <button class="confirm-button">Se connecter</button>
                </form>
            </section>
            <div class="separator"></div>
            <section class="sign-up">
                <h3>Inscription</h3>
                <form class="flex-form">
                    <input class="login-register-input" type="text" placeholder="Nom complet"/>
                    <input class="login-register-input" type="text" placeholder="Adresse e-mail"/>
                    <input class="login-register-input" type="password" placeholder="Mot de passe"/>
                    <input class="login-register-input" type="password" placeholder="Confirmer le mot de passe"/>
                    <button class="confirm-button">S'inscrire</button>
                </form>
            </section>
        </aside>
    </article>
</template>

<script>


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
    margin: 15px 15% 15px 0;
}

.logo {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.form-section {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

.separator {
  border-left:2px solid white;
  height: 300px;
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
  /*border-radius: 5px 0 0 5px;*/
  width: 400px;
  height: 30px;
  border:none;
  margin-bottom: 15px;
}

.sign-in, .sign-up, .flex-form {
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h3 {
    color:#EAEE59;
}

</style>
