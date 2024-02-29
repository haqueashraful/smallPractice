const para = document.getElementById("p")

const jokes = async ()=>{
    const res = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
    const data = await res.json()
    
    para.innerText = data.joke;
    console.log(data.joke)
}
// jokes()
setInterval(jokes, 4000);