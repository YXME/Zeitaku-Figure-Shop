<template>
    <div class="info-user">
        <table cellpadding="20">
            <thead> <!-- En-tête du tableau -->
                <tr>
                    <th>Commande n°</th>
                    <th>Date de commande</th>
                    <th>État du paiement</th>
                    <th>Statut d'exécution</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Carmen</td>
                    <td>33 ans</td>
                    <td>Espagne</td>
                    <td>full</td>
                    <td>1234</td>
                </tr>
                <tr>
                    <td>Michelle</td>
                    <td>26 ans</td>
                    <td>États-Unis</td>
                    <td>full</td>
                    <td>5678</td>
                </tr>
            </tbody>
        </table>

        <div class="account-details">
            <p>Informations personnelles</p>
            <p>AZERTY uiop<br>
            adresse*<br>
            @mail <br>
            ville<br>
            <br>
            code postal<br>
            pays<br>

            <div class=" log-out">
                <form>
                    <button class="log-out">Déconnexion</button>
                </form>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
.info-user {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    color: white;
    width: 100%;
    margin-top: 20px;
    margin-left:20px;
    text-align: center;
    font-family: Verdana, Arial, sans-serif;
}

table {
    border-collapse: collapse; /* Les bordures du tableau seront collées (plus joli) */
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

.account-details {
    margin-left: 100px;
    color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-start;
    font-family: Verdana, Arial, sans-serif;
}

.log-out {
    background-color: #EAEE59;
    color: white;
    text-align: center;
    margin-bottom:10px;
    font-size: 15pt;
    font-family: Verdana, Arial, sans-serif ;
    border: none;
}

.commander{
        background-color: #EAEE59;
        color: white;
        text-align: center;
        margin-bottom:10px;
        margin-left:100px;
        font-size: 15pt;
        font-family: Verdana, Arial, sans-serif ;
        border: none;
}
</style>

