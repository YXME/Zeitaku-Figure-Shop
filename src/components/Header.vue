<template>
    <header>
            <div class="main-logo">
                <router-link to="/">
                    <img src="../assets/logos/logo.png" alt="Logo du site" width="216px" height="85px"/>
                </router-link> 
            </div>

            <div>
                <form action="" method="GET" id="search-form" class="search-form">
                      <input class="search-input" type="text" placeholder=" Que recherchez-vous ?" name="search"/>
                      <button class="search-button" type="submit" name="button">
                          <img src="../assets/logos/search-icon.png" class="search-logo"/>
                        </button>
                  </form>
            </div>

            <div class="pu">
                <router-link to="/user">
                    <img src="../assets/logos/user-icon.png" alt="Logo user" width="44px" height="50px"/>
                </router-link> 

                <router-link to="/cart">
                    <img src ="../assets/logos/panier-icon.png" alt="Logo du panier" width="60px" height="50px"/>
                </router-link> 
            </div>
        </header>
</template>

<style scoped>
header {
    background-color: #303030;
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
}

.main-logo {
  flex-grow: 0;
}

.pu {
    width: 125px;
    height: 110px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.search-form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.search-imput:focus {
    outline: none !important;
    border:1px solid red;
    box-shadow: 0 0 10px #719ECE;
}

.search-input {
  /*border-radius: 5px 0 0 5px;*/
  width: 450px;
  height: 30px;
  border:none;
}

.search-button {
  /*border-radius: 0 5px 5px 0;*/
  width: 35px;
  height: 33px;
  background-color:#1D1D1D;
  border:none;
  transition: color 0.3s;
}

.search-button:hover {
  background-color: #3d3d3d;
}

.search-logo {
  width: 17px;
  height: 17px;
  margin-left: 0;
}
</style>