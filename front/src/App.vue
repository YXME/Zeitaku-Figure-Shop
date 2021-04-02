<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data(){
    return{
      main_figures: []
    } 
  },
  methods: {
    fetch_main_figures_from_database(){
      this.main_figures.push();
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@font-face {
    font-family: 'Autography';
    src: url('./assets/fonts/Autography.eot');
    src: url('./assets/fonts/Autography.eot?#iefix') format('embedded-opentype'),
        url('./assets/fonts/Autography.woff2') format('woff2'),
        url('./assets/fonts/Autography.woff') format('woff'),
        url('./assets/fonts/Autography.ttf') format('truetype'),
        url('./assets/fonts/Autography.svg#Autography') format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}


html, head, body, |* {
  margin: 0 !important;
}

body{
  margin: 0 !important;
  overflow-x:hidden;
  width: 100%;
  height: 100%;
  background-image: url("./assets/back.jpg");
  background-repeat: repeat;
}

a p{
  color: white;
  transition: color 0.3s;
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

</style>
