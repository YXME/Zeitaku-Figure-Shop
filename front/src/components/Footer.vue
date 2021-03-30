<template>
  <footer>
    <div class="footer-top">
        <div class="footer-left">
            <!--- Liens annexes -->

            <ul class="footer-ul">
                <li class="footer-li">
                    <router-link to="/cgv"><p>CGV</p></router-link>
                </li>
                <li class="footer-li">
                    <router-link to="/about"><p>Qui sommes-nous ?</p></router-link>
                </li>
                <li class="footer-li">
                    <router-link to="/livraisons"><p>Livraisons</p></router-link>
                </li>
                <li class="footer-li">
                    <router-link to="/contact"><p>Contact</p></router-link>
                </li>
            </ul>
        </div>
        <div class="footer-right">
            <!--- Réseaux sociaux -->
            <a href="https://facebook.com"><img src="../assets/logos/facebook.png" width="50%" height="50%"/></a>
            <a href="https://twitter.com"><img src="../assets/logos/twitter.png" width="50%" height="50%"/></a>
            <a href="https://instagram.com"><img src="../assets/logos/instagram.png" width="50%" height="50%"/></a>
            <a href="https://pinterest.com"><img src="../assets/logos/pinterest.png" width="50%" height="50%"/></a>
        </div>
    </div>
    <div class="footer-bottom">
        <hr class="footer-hr"/>
        <router-link to="/"><img src="../assets/logos/logo.png" alt="Logo du site" width="191px" height="75px"/></router-link>
        <p class="footer-copyright">© Copyright ZFS - MDC S.A.R.L 2021</p>
    </div>
</footer>
</template>

<style scoped>
/* footer */

footer {
  background-color: #101010;
  width: 100%;
  height: 270px;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: top;
}

.footer-top {
  width: 99%;
  height: 160px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.footer-bottom{
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}

.footer-left {
  width: 25%;
  text-decoration: #fff;
}

.footer-ul {
  list-style: none;
}

.footer-li {
  height: 10px;
  text-align: left;
}

.footer-right {
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.footer-hr {
  color:#303030;
  width: 99%;
  height: 1px;
}

.footer-copyright{
  font-size: 8px;
  color:grey;
}

ul, p {
  font-family: Arial, Helvetica, sans-serif;
  color:#fff;
}

/* footer */
</style>