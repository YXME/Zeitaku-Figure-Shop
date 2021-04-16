<template>
    <section class="main-content">  
        <h1>FRAIS DE PORT</h1>
        <p>La liste ci-dessous présente les différents transporteurs prenant en charge la livraison des colis sur chaque continent. Pour rechercher le tarif applicable dans votre pays de résidence, merci de vous référer au tarif en vigueur sur le contient relatif au pays souhaité.<p>
        <p>Tous nos produits, possèdent un carton, un surcarton, un sur emballage pour éviter tout type de casse lors du transport. Les tarifs que nous appliquons, prennent en compte le transport des marchandises en avion, en camion ou en bateau.</p>
        <p>Si vous avez des questions ou des réclamations, n'hésitez pas à contacter notre support technique.</p>
        <section class="tables">
            <table>
                <tr>
                    <td>Transporteur <br> / <br> Contient</td>
                    <td>DHL</td>
                    <td>EMS</td>
                    <td>Chronopost</td>
                    <td>FEDEX</td>
                </tr>
                <tr>
                    <td>Amérique</td>
                    <td>●</td>
                    <td></td>
                    <td></td>
                    <td>●</td>
                </tr>
                <tr>
                    <td>Océanie</td>
                    <td> </td>
                    <td>●</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Europe</td>
                    <td>●</td>
                    <td>●</td>
                    <td>●</td>
                    <td>●</td>
                </tr>
                <tr>
                    <td>Asie</td>
                    <td>●</td>
                    <td></td>
                    <td></td>
                    <td>●</td>
                </tr>
                <tr>
                    <td>Afrique</td>
                    <td>●</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <table>
                <tr>
                    <td>Continent<br> /<br> Poids du produit</td>
                    <td >Amérique</td>
                    <td>Europe</td>
                    <td>Asie</td>
                    <td>Océanie</td>
                    <td>Afrique</td>
                </tr>
                <tr>
                    <td>de 15 à 25kg</td>
                    <td><a href="#">150€<span>19416¥</span></a></td>
                    <td><a href="#">50€<span>6472¥</span></a></td>
                    <td><a href="#">280€<span>36243¥</span></a></td>
                    <td><a href="#">350€<span>45304¥</span></a></td>
                    <td><a href="#">280€<span>6472¥</span></a></td>
                </tr>
                <tr>
                    <td>de 25 à 35kg</td>
                    <td><a href="#">290€<span>37538¥</span></a></td>
                    <td><a href="#">150€<span>19416¥</span></a></td>
                    <td><a href="#">360€<span>46598¥</span></a></td>
                    <td><a href="#">490€<span>63426¥</span></a></td>
                    <td><a href="#">360€<span>6472¥</span></a></td>
                </tr>
                <tr>
                    <td>de 35 à 45kg</td>
                    <td><a href="#">380€<span>49187¥</span></a></td>
                    <td><a href="#">250€<span>32360¥</span></a></td>
                    <td><a href="#">420€<span>54365¥</span></a></td>
                    <td><a href="#">740€<span>95785¥</span></a></td>
                    <td><a href="#">420€<span>6472¥</span></a></td>
                </tr>
                <tr>
                    <td>de 45 à 55kg</td>
                    <td><a href="#">510€<span>66014¥</span></a></td>
                    <td><a href="#">300€<span>38832¥</span></a></td>
                    <td><a href="#">750€<span>97080¥</span></a></td>
                    <td><a href="#">820€<span>106141¥</span></a></td>
                    <td><a href="#">750€<span>6472¥</span></a></td>
                </tr>
                <tr>
                    <td>de 55 à 65kg</td>
                    <td><a href="#">640€<span>82841¥</span></a></td>
                    <td><a href="#">450€<span>58248¥</span></a></td>
                    <td><a href="#">850€<span>110024¥</span></a></td>
                    <td><a href="#">900€<span>116496¥</span></a></td>
                    <td><a href="#">850€<span>6472¥</span></a></td>
                </tr>
                <tr>
                    <td>de 65 à 75kg</td>
                    <td><a href="#">700€<span>90608¥</span></a></td>
                    <td><a href="#">500€<span>64720¥</span></a></td>
                    <td><a href="#">1000€<span>129440¥</span></a></td>
                    <td><a href="#">1500€<span>194160¥</span></a></td>
                    <td><a href="#">1000€<span>129440¥</span></a></td>
                </tr>     
            </table>
        </section>
    </section>	
</template>

<style scoped>
p{
    text-align:left;
}

.main-content {
    color:white;
    margin: 5%;
}

td {
    border: 1px solid white;
    margin-right: 5px;
}

th {
    border: 1px solid white;
    margin-left: 5px;
    margin-right: 5px;
}

.tables {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
}
table {
    width: 45%;
    border-collapse: collapse;
}

a {
    color:white;
    text-shadow:0 -1px 0 black;                
}
a:hover,a:focus{
    background:rgba(0,0,0,.4);
    box-shadow:0 1px 0 rgba(255,255,255,.4);
}

a span{
    position:absolute;   
    color: #EAEE59;
    background:rgba(0,0,0,.9);
    padding:15px;
    border-radius:3px;
    box-shadow:0 0 2px rgba(0,0,0,.5);     
    margin-top:23px;
    margin-left:-35px;   
    transform:scale(0) rotate(-12deg); 
    transition:all .25s;
    opacity:0;    
}
a:hover span, a:focus span{
    transform:scale(1) rotate(0);   
    opacity:1;     
}

p, h1, td {
    font-family: Arial, Verdana, sans-serif;
    color:#fff;
}

h1 {
    background: -webkit-linear-gradient(#C0AB1C, #EAEE59, #C0AB1C);
    font-family: 'Autography', sans-serif;
    font-size: 30px;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

@media screen and (max-width: 900px) {
  table {
    border: 0;
    width: 92%;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}
</style>