let body =document.getElementById('body');

console.log(body)

function ajaxCall(i) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
        if (this.readyState == 4 && this.status == 200) {

            let data = JSON.parse( this.responseText );
            console.log(data);


            
                
                body.innerHTML += '<div id="drinkCon' + i + '"> </div>';
                
                let drinkCon = document.getElementById('drinkCon' + i);

                drinkCon.innerHTML += '<h2>' + data.drinks[0].strDrink + '</h2><br>';
                drinkCon.innerHTML += '<img class="image" src="' + data.drinks[0].strDrinkThumb+ '">';
                drinkCon.innerHTML += '<p>' + data.drinks[0].strAlcoholic + '</p>';
            
        }
    }

    xhttp.open('GET', "https://www.thecocktaildb.com/api/json/v1/1/random.php", true)
    xhttp.send();

}


for(let i = 0; i < 5; ++i) {
    ajaxCall(i);
}


