<template>
    <div>
        <hr class="border"/>
        <section>
          <section class="section">
            
            <article class="illustration">
              <img src= "../assets/illu/Broly_photo_accueil.jpg" alt="image1" width="100%" height="100%"/>
            </article>

            <aside class="text-box">
              <p class="title">BROLY KING OF DESTRUCTION - DRAGON BALL Z</p>
              <p class="description">Designé par Akira Toriyama mais créé par Shigeyasu Yamauchi. <br/>
                Maitre Yamauchi a voulu rendre hommage à la puissance de Broly en adaptant la scène où il domine le combat contre Goku et maintient le héros inerte par la tête.
              </p>

              <a href="figure.html"> 
                <p class="link">Découvrir ></p> 
              </a>
            </aside>
          </section>
        </section>

        <hr class="border"/>

        <section>
          <section class="section">
            
            <article class="illustration">
              <img src= "../assets/illu/guts_photo_accueil.jpg" alt="image1" width="100%" height="100%"/>
            </article>

            <aside class="text-box">
              <p class="title">GUTS & ZODD VS GANISHKA - BERSERK</p>
              <p class="description">Diorama limité à 450 exemplaires dans le monde et approuvé par le Maître Kentaro Miura. <br/>
                Nous pouvoir voir une scène culte du manga, où le héros Guts s'associe à Zood sous sa forme bestiale, pour faire tomber l'empereur de Kushan: Ganishka.
              </p>

              <a href="figure.html"> 
                <p class="link">Découvrir ></p> 
              </a>
            </aside>
          </section>
        </section>

        <hr class="border"/>

        <section>
          <section class="section">
            
            <article class="illustration">
              <img src="../assets/illu/snk_photo_accueil.jpg" alt="image1" width="100%" height="100%"/>
            </article>

            <aside class="text-box">
              <p class="title">EREN JÄGER VS ARMORED TITAN - 進撃の巨人</p>
              <p class="description">Créée par la même équipe légendaire que le primé Devilman vs Amon.  <br/>
                La statue exclusive Figurama Collectors Attack on Titan Elite immortalise la bataille brutale entre Eren Jäger et le Titan cuirassé.
              </p>

              <a href="figure.html"> 
                <p class="link">Découvrir ></p> 
              </a>
            </aside>
          </section>
        </section>

        <hr class="border"/>
        <section class="others-products-section">
          <p class="others-products-p">Découvrez d'autres produits de notre collection...</p>
          <nav class="others-products-nav">
            <article class="others-products-article" onmouseover="show('fig1')" onmouseout="hide('fig1')"> <!-- mettre des id sur les balises articles et en fonction de l'article sélectionné caher les autres-->
              <img src="../assets/illu/snk_photo_accueil.jpg" class="cropped-version" width="250px" height="250px" />  
              <aside id="fig1" class="others-products-aside">
                <p class="title" >Lorem Ipsum</p>
                <p class="description">Designé par Akira Toriyama mais créé par Shigeyasu Yamauchi. <br/>
                  Nous avons voulu rendre hommage à sa puissance en adaptant la scène où il domine le combat contre Goku et maintient le héros inerte par la tête.</p>
                <a href="figure.html"><p class="link">Découvrir ></p></a>
              </aside>
            </article>

            <article class="others-products-article" onmouseover="show('fig2')" onmouseout="hide('fig2')">
              <img src="../assets/illu/snk_photo_accueil.jpg" class="cropped-version" width="250px" height="250px" />  
              <aside id="fig2" class="others-products-aside">
                <p class="title" >Lorem Ipsum</p> 
                <p class="description">Designé par Akira Toriyama mais créé par Shigeyasu Yamauchi. <br/>
                  </p>
                <a href="figure.html"><p class="link">Découvrir ></p></a>
              </aside>
            </article>

            <article class="others-products-article" onmouseover="show('fig3')" onmouseout="hide('fig3')">
              <img src="../assets/illu/snk_photo_accueil.jpg" class="cropped-version" width="250px" height="250px" />  
              <aside id="fig3" class="others-products-aside">
                <p class="title" >Lorem Ipsum</p>  
                <p class="description">Designé par Akira Toriyama mais créé par Shigeyasu Yamauchi. <br/>
                  Nous avons voulu rendre hommage à sa puissance en adaptant la scène où il domine le combat contre Goku et maintient le héros inerte par la tête.</p>
                <a href="figure.html"><p class="link">Découvrir ></p></a>
              </aside>
            </article>

            <article class="others-products-article" onmouseover="show('fig4')" onmouseout="hide('fig4')">
              <img src="../assets/illu/snk_photo_accueil.jpg" class="cropped-version" width="250px" height="250px" />  
              <aside id="fig4" class="others-products-aside">
                <p class="title" >Lorem Ipsum</p>  
                <p class="description">Designé par Akira Toriyama mais créé par Shigeyasu Yamauchi. <br/>
                  Nous avons voulu rendre hommage à sa puissance en adaptant la scène où il domine le combat contre Goku et maintient le héros inerte par la tête.</p>
                <a href="figure.html"><p class="link">Découvrir ></p></a>
              </aside>
            </article>
          </nav>
        </section>
        <hr class="border"/>
    </div>
</template>

<script>
/*
function hide(id){ 
  document.getElementById(id).style.display = "none";
}

function show(id){
  document.getElementById(id).style.display = "block";
}*/
</script>

<style scoped>
.border{
  background:linear-gradient(to right, #C0AB1C, #EAEE59, #C0AB1C);
  height: 5px;
  width: 100%;
  margin: 0;
}

.section {
  overflow: none;
  width: 100%;
  height: min-content;
  background-color:#000000;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
}

.illustration{
  width: 25%;
  height: fit-content;
  display: inline-block;
  position: relative;
}

.illustration:after {
  content:'';
  position: absolute;
  left: 0; 
  top: 0;
  width: 100%; 
  height: 100%;
  display: inline-block;
  background: linear-gradient(to right, rgba(0,0,0,0) 80%,rgba(0, 0, 0, 1) 100%); /* W3C */
}

.illustration img{
  display: block;
}

.text-box{
  height: inherit;
  width: 75%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}

.title {
  background: -webkit-linear-gradient(#C0AB1C, #EAEE59, #C0AB1C);
  font-family: kashima, Autography, sans-serif;
  font-size: 30px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description{
  font-family: Verdana, Arial, sans-serif;
  font-style: oblique;
  font-size: 15px;
  text-align: center;
}

.link{
  font-family: Verdana, Arial, sans-serif;
  font-weight: bolder;
  font-size: 17px;
  text-align: center;
}

.others-products-section{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 50px 0 50px 0;
}

.others-products-p{
  background: -webkit-linear-gradient(#C0AB1C, #EAEE59, #C0AB1C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Verdana, Arial, sans-serif;
  font-weight: bolder;
  font-size: 17px;
  text-align: center;
}

.others-products-article{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 50px 0 50px 0;
}

.others-products-article img{
  box-shadow: 3px 3px 5px black;
}


.others-products-aside{
  width: fit-content;
  height: 250px;
  padding:0 10px 0 10px;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);

}

.others-products-nav{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.cropped-version{
  object-fit: cover;
}

p {
    color: white;
}
</style>
