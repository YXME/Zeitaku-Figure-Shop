<template>
  <div class="about">

    <h1>Formulaire de réclamation</h1>
      
    <form action="/ma-page-de-traitement" method="post">
    <div>
        <label for="name">Nom :</label>
        <input type="text" id="name" name="user_name">
    </div>
    <div>
        <label for="mail">E-mail :</label>
        <input type="email" id="mail" name="user_mail">
    </div>
    <div class="choix">   
        <label for="probleme">Problème lié à :</label>
            <select name="raison" class="probleme" size="1">
                <option value="la livraison">Livraison</option>
                <option value="réception">Réception</option>
                <option value="casse">Casse sur le produit</option>
                <option value="manque">Absence de certains éléments</option>
            </select>
    </div>

    <div>
        <label for="msg">Message :</label>
        <textarea id="msg" name="user_message"></textarea>
    </div>
     <div class="button">
        <button type="submit">Envoyer le message</button>
    </div>
</form>


  </div>
</template>

<style scoped>
h1{
    color:white;
}
form {
  /* Uniquement centrer le formulaire sur la page */
  margin: 0 auto;
  width: 400px;
  /* Encadré pour voir les limites du formulaire */
  color:white;
  margin-bottom:30px;
}

form div + div {
  margin-top: 1em;
}

label {
  /* Pour être sûrs que toutes les étiquettes ont même taille et sont correctement alignées */
  display: inline-block;
  width: 100%;
  text-align: left;
}

.probleme{
    display: inline-block;
  width: 100%;
  text-align: right;
    
}
input, textarea {
  /* Pour s'assurer que tous les champs texte ont la même police.
     Par défaut, les textarea ont une police monospace */
  font: 1em sans-serif;

  /* Pour que tous les champs texte aient la même dimension */
  width: 100%;
    

  /* Pour harmoniser le look & feel des bordures des champs texte */
  border: 1px solid #999;
}

input:focus, textarea:focus {
  /* Pour souligner légèrement les éléments actifs */
  border-color: #000;
}

textarea {
  /* Pour donner assez de place pour écrire du texte */
  height: 5em;
}

.choix{
    text-align:right;
}


button {
background-color: #EAEE59;
  color: white;
  text-align: center;
  width: 100%;
  height: 50px;
  font-size: 15pt;
  font-family: Verdana, Arial, sans-serif ;
  border: none;
}
</style>