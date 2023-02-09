let searchBtn           = document.getElementById("search_btn");

searchBtn.addEventListener("click", getMeals);

//test d'une autre API de chat
async function getMeals(){
 
     let urlAPI   = 'https://api.thecatapi.com/v1/images/search?limit=10';

     console.log('hello');
    const apiFetch = await fetch(urlAPI)
    const apiResult = await apiFetch.json()

 
}