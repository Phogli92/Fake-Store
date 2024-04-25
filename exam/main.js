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

let cartOnClick = async(link)=>{
  const response = await fetch(link);
  let data = await response.json();
  cards.innerHTML = ''
  for(let i = 0; i < sum.length; i++){
    let carts = document.createElement('div')
  carts.innerHTML = `
  <div class="card">
  <div class="img"><img src="${data[sum[i] - 1]?.image}" class="img"></div>
  <p class="title">${data[sum[i] - 1]?.title}</p>
  <h3 class="price-2">${data[sum[i] - 1]?.price}$</h3>
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

let onClick = (elem) => {sum.push(elem);cartNumber.innerHTML = res++;};
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
