const accessKey="Gj8ZDSL84CUYRHw0CZzkDK2iLb-QALv97Mc_FhoW2Mw"
const formElement=document.querySelector("form")
const inputElement=document.getElementById("search-input")
const searchResults=document.querySelector(".search-results")
const showMore=document.getElementById("show-more-button")

let inputData=""
let page=1;

async function searchImages(){
        inputData=inputElement.value;
        const url='https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}'
        const response=await fetch(url)
        const data =await response.json()

        const results=data.results
}
