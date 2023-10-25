const apiKey = "qgI_lSgTvjG8xGH_Z_pnwSOlivSjyxHzuwkjbIjHYLY";
const form=document.querySelector('form');
const input = document.getElementById("search-input");
const submitbutton=document.getElementById('search-button');
const searchResults = document.querySelector(".search");
const showMore = document.getElementById("show-more");
let inputData='';
let page=1;
async function searchImages(){
    inputData=input.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`;
    const response =await fetch(url);
    const data=await response.json();
    console.log(data);
    const results=data.results;
    if(page===1){
searchResults.innerHTML='';
    }
    results.map((result)=>{
        const imageWrapper=document.createElement('div');
        imageWrapper.classList.add('search-result');
        const image=document.createElement('img');
        const imageLink=document.createElement('a');
        image.src=result.urls.small;
        image.alt=result.alt_description;
        imageLink.target="_blank";
        imageLink.textContent=result.alt_description;
        imageLink.href=result.links.html
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    })
    page++;
    if(page>1){
        showMore.style.display='block';
    }
}
submitbutton.addEventListener('click',(event)=>{
    event.preventDefault();
    page=1;
    searchImages();
})
showMore.addEventListener("click", () => {
searchImages();
});