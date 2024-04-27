let URL = "https://fakestoreapi.com/products"
async function getData(URL){
    let response = await fetch(URL)
    let data = await response.json()
    showData(data)
}
let display = document.getElementById("show")
function showData(arr){
  arr.forEach(function(ele){
    let box = document.createElement("div");
    let img = document.createElement("img")
    img.src = ele.image;
    let title = document.createElement("h3");
    title.innerText = ele.title;
    let price = document.createElement("h2");
    price.innerText = `Price : ${ele.price}`
     
    box.append(img,title,price)
    display.append(box)
  })
}

let selectCategory = document.getElementById("category");
selectCategory.addEventListener("change", function(e){
    let selectedCategory = e.target.value;
    if(selectedCategory == "All products"){
        getData(URL)
    }
    else{
        showCategoryData(selectedCategory)
    }
    
})

async function showCategoryData(name){
    let response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
    let data = await response.json()
    display.innerHTML = null;
    showData(data)
}





getData(URL)