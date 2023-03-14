
let productsDOM = document.getElementById('products-container')
const range = document.getElementById('range');
const priceValue = document.querySelector('.price-value')
let companyQuery = "product";
const AllProductz = document.getElementsByClassName('product');

//Gaseste produsele
const fetchProducts = function () {

  productsDOM.innerHTML = '<div class="laoding"></div>'
  try {
    const data = productsJsonList;
    return data;
  }
  catch (error) {
    productsDOM.innerHTML = '<p class="error"> there was an error</p>';
  }
};

const toggleClasses = (product) => {
  const productzPrice = product.querySelector(".product-price").textContent.split(" ")[0];
  if (!(Number(productzPrice) >= Number(range.value))) {
    product.classList.remove("hidden");
    return;
  }
  product.classList.add("hidden");
}

// afiseaza produse
const displayProducts = (list) => {



  const productList = list.map((product) => {


    const id = product.id;
    const company = product.fields.company;
    const title = product.fields.name;
    const priceProduct = product.fields.price;
    const img = product.fields.image[0].url;
    const price = priceProduct / 100;

    return `<article class="product price" >
    <div class="product-container">
      <img src="${img}" class="product-img img" alt="${title}">
    
      <div class="product-icons">
        <a href="product.html?id=${id}" class="product-icon" >
          <i class="fas fa-search"></i>
        </a>
        <button class="product-cart-btn product-icon" data-id="${id}">
          <i class="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
    <footer>
      <p class="product-name">${title}</p>
      <h5>${company}</h5>
      <h4 class="product-price">${price} $</h4>
    </footer>
  </article>
    `;

  })
    .join('');
  productsDOM.innerHTML = productList;
};
const data = fetchProducts();
displayProducts(data);


// -----------------------------------------------------------------------------

// Filters

// By Company

document.getElementById("all").onclick = function () {
  displayProducts(data);
};

function sortCompany(companyName) {
  companyQuery = companyName;

  const CompanySort = document.getElementsByClassName('product');

  for (let productz of CompanySort) {
    const NameCompany = productz.children[1].children[1].textContent;
    if (NameCompany === companyQuery) {
      productz.classList.remove("hiddenCompany");
      productz.classList.add("show");

    } else {
      productz.classList.remove("show");
      productz.classList.add("hiddenCompany");
    }
  }
}

// -----------------------------------------------------------------------------

// Filter by price (input range)

function Test() {
  for (let prod of AllProductz) {
    toggleClasses(prod);
  }
}


// -----------------------------------------------------------------------------


// detalii price 

pValue(80);
function pValue(nr) {
  priceValue.textContent = `Value: ${nr}$`
}

range.addEventListener("change", function (e) {
  e.preventDefault()
  pValue(e.target.value)
  Test()
});

// -----------------------------------------------------------------------------



//---------------------------Search Bar----------------------------------------- 

const search_bar = document.getElementById('searchbar');
const formular = document.querySelector(".input-form");

function search_bar_resut(search) {

  const searchProd = document.getElementsByClassName('price');


  for (let products of searchProd) {
    const productTitle = products.children[1].children[0].textContent;
    console.log(typeof productTitle)
    if (productTitle.includes(search)) {
      products.classList.remove("hiddenSearch");
      products.classList.add("show");

    } else {
      products.classList.add("hiddenSearch");
      products.classList.remove("show");
    }

  }
}

formular.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search_bar.value.trim();
  if (searchTerm !== "") {
    search_bar_resut(searchTerm.toLowerCase());
    return;
  };
  displayProducts(data);


});

//------------------------------------------------------------------------------



//----------------------------CART BOX VISIBILITY-------------------------------


const cartListBox = document.getElementById('kart-box')

const toggleChartList = () => {
  if (cartListBox.classList.contains('kart-hidden')) {
    cartListBox.classList.remove("kart-hidden")
    cartListBox.classList.add('kart-box')
  } else {
    cartListBox.classList.add("kart-hidden")
  }
}
const cartListButton = document.querySelector(".toggle-cart")

cartListButton.addEventListener("click", function () {
  toggleChartList()

})


//------------------------------------------------------------------------------

// function changeQuantity(index, quantity) {
//   [isInCartindex].quantity += quantity;

// }

// {
//   name: "numele produsului",
//   company: "numele companiei",
//   price: 999,
//   quantity: 1,
//   image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1668084633/product-1_evgdfv.jpg",
// }

// isInCart[index].quantity += 1;

// isInCart.map((produs, index) => `<div class="addItemToCart">
//   <img src="${img}"
//     class="single-product-img img" alt="">
//   <div>
//     <h3>${title}</h3>
//     <div class="detalii">
//       <p>${company}</p>

//       <div id="btnContainer">
//           <p class = 'qtyItems'>Qty: ${c}</p>
//           <button class="btnSubProduct" onclick="test(${index}, -1)">-</button>
//           <button class="btnAddProduct" onclick="test(${index}, 1)">+</button>
//       </div>
//     </div>
//   </div>
//   <div>
//     <p class='pPrice' data-price="${price}" data-index="">Price: ${(price*c).toFixed(2)}$</p>
//   </div>
// </div>`)

//-------------------------------ADD TO CART BUTTON-----------------------------


const kartProducts = document.querySelector('#kart-box-content');
let getAllBtn = document.querySelectorAll('[data-id]')
const productNumber = document.querySelector(".cart-item-count")
const isInCart = [];
let productArray = []


getAllBtn.forEach(element => {

  element.addEventListener('click', function () {


    let productObj = data.find((product) => product.id == this.dataset.id)

    let quantity = 1
    const id = productObj.id;
    const company = productObj.fields.company;
    const title = productObj.fields.name;
    const price = productObj.fields.price / 100;
    const img = productObj.fields.image[0].url;

    productArray.push({
      quantity,
      id,
      company,
      title,
      price,
      img,
    })
    
  
    isInCart.push(this.dataset.id)

    productNumber.textContent = isInCart.length
    addItemsToCart(productArray,isInCart)

    // addItemsToCart(isInCart, data)

    console.log(productArray)

    totalPrice()


  })

});

// -----------------------------------------------------------------------------

// -------------------------- TEST ---------------------------------------------


function addItemsToCart(productArray,isInCart) {

  const productList = productArray.map((product, index) =>{

    return`<div class="addItemToCart">
    <img src="${product.img}"
     class="single-product-img img" alt="">
   <div>
     <h3>${product.title}</h3>
     <div class="detalii">
       <p>${product.company}</p>
       
       <div id="btnContainer">
            <p class = 'qtyItems'>Qty: ${product.quantity} </p>
            <button class="btnSubProduct" onclick="AddSubItem(${index}, -1)">-</button>
            <button class="btnAddProduct" onclick="AddSubItem(${index}, 1)">+</button>
        </div>
     </div>
   </div>
 <div>
     <p class='pPrice' data-price="${product.price}" data-quantity="${product.quantity}">Price: ${(product.price * product.quantity).toFixed(2)}$</p>
   </div>
 </div>`
    
  })
  kartProducts.innerHTML = productList.join('');
}

function AddSubItem(index, quantity) {
  console.log(index, quantity)
  productArray[index].quantity += quantity;
  kartProducts.innerHTML = addItemsToCart(productArray)
    .join("");
}



//----------------------------Add item to cart ---------------------------------


// let PriceArray = []


// const addItemsToCart = (isInChart, data) => {

//   const productList = data.map((product) => {
//     const id = product.id;
//     const company = product.fields.company;
//     const title = product.fields.name;
//     const priceProduct = product.fields.price;
//     const img = product.fields.image[0].url;
//     const price = priceProduct / 100;



//     if (isInChart.includes(id)) {

//       return `<div class="addItemToCart">
//              <img src="${img}"
//                class="single-product-img img" alt="">
//              <div>
//                <h3>${title}</h3>
//                <div class="detalii">
//                  <p>${company}</p>

//                  <div id="btnContainer">
//                       <p class = 'qtyItems'>Qty: </p>
//                       <button class="btnSubProduct" onclick="test(, -1)">-</button>
//                       <button class="btnAddProduct" onclick="test(, +1)">+</button>
//                   </div>
//                </div>
//              </div>
//            <div>
//                <p class='pPrice' data-price="${price}" data-quantity="">Price: ${(price).toFixed(2)}$</p>
//              </div>
//            </div>`
//     }

//   })
//     .join("")
//   kartProducts.innerHTML = productList;


// }
//------------------------------------------------------------------------------

// function test(index, quantity) {
//   console.log(index, quantity)
//   isInCart[index].quantity += quantity;
//   // kartProducts.innerHTML = showCartProducts().join("");
// }




// -----------------------------PRET TOTAL--------------------------------------



function totalPrice() {

  const DOMNode = document.querySelector("#total");
  let total = 0;
  const cartArr = [];
  kartProducts.querySelectorAll(".pPrice").forEach((product) => {
    const { price, quantity } = product.dataset;
    cartArr.push({
      price,
      quantity,
    })
  });

  for (let i = 0; i < cartArr.length; i++) {
    total += Number(cartArr[i].price) * Number(cartArr[i].quantity);
  }
  
  DOMNode.textContent = `${Math.floor(total * 100) / 100} $`;
}


//------------------------------------------------------------------------------



