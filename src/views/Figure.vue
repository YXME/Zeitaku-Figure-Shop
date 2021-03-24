<template>
    <div>
        <!-- création d'un carrousel, et description du produit-->
        <!-- enlever les effets de liens, changer la police, -->
        <!-- nom du fabricant, (site amiami), en dessous detail item, viewed item (même licence/ même fabricant), enlever les liens cliquables des fabricants-->
        <div class="content">

          <article class="img">
            <a><img src= "res/images/illu/broly_photo_1.jpg" alt="image1" width="95%" height="95%"></a>
            <br>
            <!--<a><img src= "res/images/illu/broly_photo_3.jpg" alt="image2"></a>
            <br>
            <a><img src= "res/images/illu/broly_photo_2.jpg" alt="image3"></a>-->
          </article>

          <aside class="data">
            <div class="title">
              <h1>Broly Super Saiyan Légendaire HQS+</h1>
              <h4>(ブロリー-伝説のスーパーサイヤ人)</h4>
            </div>
            <div class ="prix">
              <p class="price-display">1399€</p><p class="price-yens-display">(182,099¥)</p>
            </div>      

            <div class="order">
              <form>
                <button class="add-cart">Ajouter au panier</button>
              </form>
            </div>
          </aside>
        </div>


        
        <div class="infos"> <!-- en dessous une descrition de la statue (ctrlc, ctrlv des sites) -->
          <b>Fabricant</b>: TSUME ART <br>
            <hr>

          <b>Licence</b>: DRAGON BALL Z <br>
            <hr>

          <b>Dimensions</b>: 76cm*44cm*68cm <br>
            <hr>

          <b>Echelle</b>: 1/4<br>
            <hr>

          <b>Poids</b>: 50KG <br>
            <hr>

          <b>Tirage</b>: 1500 pièces <br>
            <hr>
        </div>
        <br/>
        
        <div class="descriptif">
          <i> Designé par Akira Toriyama mais créé par Shigeyasu Yamauchi, Broly apparaît pour la première fois dans le film "Dragon Ball Z : Broly le super guerrier". Sa popularité lui vaudra un retour dans un autre film : "Dragon Ball Z : Rivaux dangereux".

            Nous avons voulu rendre hommage à sa puissance en adaptant la scène où il domine le combat contre Goku et maintient le héros inerte par la tête.  
            
            L'échelle 1/4 met en valeur la stature imposante du guerrier de l'espace et permet d'affiner les détails et les textures des différents éléments du diorama.
            
            Une édition collector est aussi disponible et comprend en plus un buste alternatif qui le montre en train de préparer un Kikoha. 
          </i>
        </div>
    <div>
</template>

<style scoped>
.content {
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
}

.img{ /*classe relative aux images de la statue*/
    margin-left:3%;
    margin-top:50px;
    width:35%;
}


.infos{ /*données relatives à la statue*/ 
    color:#fff;
    font-size:20px;  
}

.prix { /*prix de la statue en euros et en yen*/
    color:white;
    font-size: 30px;
    display: flex;
    width: 180px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.data { /*nom de la statue en fr et en jap*/
    width:45%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
}

.descriptif{
  color:white;
  font-family:Arial;
  margin-left: 20px;
}

.infos {
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 5%;
  margin-right: 5%;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  color:#fff;
}

h1 {
    font-family: kashima, sans-serif;
    color:#EAEE59;
}

h4 {
    font-family: MSGothic, sans-serif;
    color:#949494;
}

.price-display {
    color: #EAEE59;
}

.price-yens-display{
    color: #949494;
    font-size: 14pt;
}

.add-cart {
  background-color: #EAEE59;
  color: white;
  text-align: center;
  width: 50%;
  height: 50px;
  font-size: 15pt;
  font-family: Verdana, Arial, sans-serif ;
  border: none;
}

.descriptif {
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 50px;
}
</style>