let buy = document.querySelectorAll(".buy");
let all = document.querySelector(".filter-all");
let elc = document.querySelector(".filter-electro");
let wom = document.querySelector(".filter-woman");
let jew = document.querySelector(".filter-jew");
let men = document.querySelector(".filter-men");
let cards = document.querySelector(".cards");
let cartNumber = document.querySelector(".cart");
let cart = document.querySelector(".cart-parent");
let cartLook = document.querySelector('.cart-look')
let sum = [];
let res = 1;
if(localStorage.key('key-name') != Number){

}
else{
  let res4 = localStorage.setItem('key-name', 100)
  res4.slice(0,1)
}
let keyItems = []
if(localStorage.key('key-name') == Number){
  let pushItems = localStorage.getItem('key-name').split(',')
}
else{
  let pushItems = localStorage.getItem('key-name')
  keyItems.push(pushItems)
}
console.log(keyItems)



let cartOnClick = async(link)=>{
  const response = await fetch(link);
  let data = await response.json();
  cards.innerHTML = ''
  for (let i = 0; i < keyItems.length; i++) {
    let filterData = data.filter((data) => data.id == keyItems[i]);
    let carts = document.createElement('div')
  carts.innerHTML = `
  <div class="card">
  <div class="img"><img src="${filterData[sum[i] - 1]?.image}" class="img"></div>
  <p class="title">${filterData[sum[i] - 1]?.title}</p>
  <h3 class="price-2">${filterData[sum[i] - 1]?.price}$</h3>
</div>
  `
  cartLook.appendChild(carts)
  }
}

let cartClose = ()=>{
  location.reload()
}

let test = async (link) => {
  const response = await fetch(link);
  let data = await response.json();

  data.forEach((item) => {
    let card = document.createElement("div");
    card.innerHTML = `
    <div class="card">
        <div class="img"><img src="${item?.image}" class="img"></div>
        <p class="title">${item?.title}</p>
        <h3 class="price-2">${item?.price}$</h3>
        <button onclick="onClick(${item?.id})">Buy!</button>
    </div>`;
    cards.appendChild(card);
  });
};


let cartClear = ()=>{
  localStorage.clear()
}
let onClick = (elem) => {sum.push(elem);keyItems.push(elem);console.log(elem, keyItems);cartNumber.innerHTML = res++; localStorage.setItem('key-name', `${keyItems}`)}
test("https://fakestoreapi.com/products");
let filters = async (link, mat) => {
  const response = await fetch(link);
  let data = await response.json();
  let filterData = data.filter((data) => data.category == mat);
  cards.innerHTML = "";

  for (let i = 0; i < filterData.length; i++) {
    cards.innerHTML += `
            <div class="card">
            <div class="img">
                <img src="${filterData[i].image}" alt="" class="imgs">
            </div>
            <div class="text">
                <p class="title">${filterData[i].title}</p>
                <div class="price">
                    <h3 class="price-2">${filterData[i].price}$</h3>
                    <p>category: <span class="categ">${filterData[i].category}</span></p>
                </div>
            </div>
        </div>`;
  }
};
elc.onclick = () => {
  filters("https://fakestoreapi.com/products", "electronics");
};
men.onclick = () => {
  filters("https://fakestoreapi.com/products", "men's clothing");
};
wom.onclick = () => {
  filters("https://fakestoreapi.com/products", "women's clothing");
};
jew.onclick = () => {
  filters("https://fakestoreapi.com/products", "jewelery");
};
all.onclick = () => {
  test("https://fakestoreapi.com/products");
};

cartNumber.innerHTML = 0;

// localStorage.clear()

