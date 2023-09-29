let joke = document.querySelector('.joke')
let btn = document.querySelector('.btn')
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";


let loadJoke = ()=>{
 
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        if(item.joke)
        joke.textContent = `${item.joke}`
    else{
        joke.textContent = "Oops! Couldn't load a joke. Please try again.";
    }
    })

}
btn.addEventListener('click',loadJoke)
loadJoke()
