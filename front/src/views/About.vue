<template>
  <div class="about">

    <h2>A PROPOS DE NOUS</h2>
    <div class="logos">
      <img src="../assets/logos/logo.png"/>
      <img src="../assets/logos/mdc_logo.png"/>
    </div>

    <div>
      <p>MDC S.A.R.L a été fondée en Septembre 2019 par 3 entrepreuneurs. Soucieux de l'évolution du milieu de la culture japonaise en France et plus particulièrement de la japanimation et des mangas, ces trois co-fondateurs ont créé "Manga Digital Collection"</p>
      <p>Manga Digital Collection, lancé en Mai 2020 avait pour but de permettre aux amateurs de japanimation et de mangas de tenir des listes des oeuvres qu'iels ont regardé, et se les partager. Le site permettait également de laisser un avis sur les oeuvres présente sur le site</p>
      <p>Fort de son succès, une application lancée en Octobre 2020 vint compléter l'offre du site, permettant aux utilisateurs mobiles de profiter du service tout en ayant une interface adaptée.</p>

      <p>C'est lors de l'année 2020 que vint également l'idée à l'entreprise de se diversifier. En Octobre 2020, Emeric J., l'un des co-fondateurs de MDC S.A.R.L en collaboration Arthur G., un énminent entrepreneur décidèrent de lancer la deuxième filiale de l'entreprise : ZFS.</p>

      <p>ZFS ou Zeitaku Figure Shop est un entreprise dont le but était de vendre des statues de collection, complétant l'offre de MDC, gérant désormais le site "Manga Digital Collection"</p>
        
      <p>De par son statut, son originalité, son service et la notoriété de Manga Digital Collection, Zeitaku Figure Shop réussit à se hisser sur le marché des statues de collection.</p>
        
      <p>Grâce à la sauvegarde de licences japonaises de renom, ZFS a donné naissance à un panel de personnages destinés aux collectionneurs exigeants. Le tout appuyé par la confiance de certaines des principales sociétés du monde du manga et de l'anime, comme Shueisha, Toei Animation, TV Tokyo ou Kodansha.</p>

      <p>Aujourd'hui, connu comme les principaux acteurs français du milieu, ZFS réalisa un chiffre d'affaire d'affaire de 5.000.000€ en quelques mois et MDC 250.000€ sur la même période.</p>
    </div>
    <div class="citations">
      <div class="citation">
        <p>"Nous attachons la plus grande importance à la qualité de nos produits, nous espérons atteindre l'excellence pour chacun de nos projets, c'est pourquoi tout doit être bien pensé."<br/> - Emeric J.</p>
      </div>
      <div class="citation">
        <p>"Nous souhaitons vraiment apporter notre touche personnelle, tout en respectant le travail des auteurs, un peu comme une marque de griffe sur ces statues de luxe."<br/> - Arthur G.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.about{
  color:white;
  margin : 3%;
  text-align:justify;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}

.logos {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}

img {
  width: 25%;
  margin-left: 1%;
  margin-right: 1%;
}

h2{
  background: -webkit-linear-gradient(#C0AB1C, #EAEE59, #C0AB1C);
  font-family: 'Autography', sans-serif;
  font-size: 30px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact {
  width: 60%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

p, h1, li, i, strong {
  font-family: Arial, Verdana, sans-serif;
  color:#fff;
}

.citations {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%
}

.citation {
  width: 25%
}

@media (max-width: 900px) { 
  .citation {
    width: 100%
  }
}

</style>