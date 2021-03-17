<template>
    <header>
            <div class="main-logo">
                <a href="#">
                    <img src="logos/logo.png" alt="Logo du site" width="216px" height="85px"/>
                </a>
            </div>

            <div>
                <form action="" method="GET" id="search-form" class="search-form">
                      <input class="search-input" type="text" placeholder=" Que recherchez-vous ?" name="search"/>
                      <button class="search-button" type="submit" name="button">
                          <img src="logos/search-icon.png" class="search-logo"/>
                        </button>
                  </form>
            </div>

            <div class="pu">
                <a href ="user.html">
                    <img src="logos/user-icon.png" alt="Logo user" width="44px" height="50px"/>
                </a>

                <a href="cart.html">
                    <img src ="logos/panier-icon.png" alt="Logo du panier" width="60px" height="50px"/>
                </a>
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

.pu{
    width: 125px;
    height: 110px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.search-form{
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

.search-input{
  border-radius: 5px 0 0 5px;
  width: 450px;
  height: 30px;
  border:none;
}

.search-button{
  border-radius: 0 5px 5px 0;
  width: 35px;
  height: 30px;
  background-color:#1D1D1D;
  border:none;
}

.search-logo{
  width: 17px;
  height: 17px;
  margin-left: 0;
}

/* header */
</style>