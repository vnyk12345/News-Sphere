const API_KEY = "b24d6eb15d264f1a8098978fa597fd20";
const url = "https://newsapi.org/v2/everything?q="

const fetchData = async(query) =>{
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    return data;
 
      
}
fetchData("all").then(data => renderMain(data.articles));

let moblieMenu = document.querySelector(".mobile");
let menuBtn = document.querySelector(".menuBtn");
let menuBtnDisplay = true;

menuBtn.addEventListener("click", () =>{
 moblieMenu.classList.toggle("hidden");


})
 
renderMain = (arr) =>{

let mainHTML = ""
for(let i =0; i<arr.length;i++){
    if(arr[i].urlToImage){
    mainHTML += `<div class="card">
    <a href=${arr[i].url}>
    <img src=${arr[i].urlToImage} >
    <h4>${arr[i].title}</h4>
    <div class="publishbyDate">
      <p>${arr[i].source.name}</p>
      <p>${new Date(arr[i].publishedAt).toLocaleDateString()}</p>
  </div>
  <div class="disc">${arr[i].description}
  </div>
  </a>
  </div> 
      `

}
}

document.querySelector("main").innerHTML = mainHTML

}


const searchBtn = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("submit", async (e) => {
    e.preventDefault()
   const data = await fetchData(searchInput.value)
   renderMain(data.articles)
  
})

async function Search(query){
    const data = await fetchData(query)
    renderMain(data.articles)
}
