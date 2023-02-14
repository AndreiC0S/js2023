
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

  const getProductz = document.getElementsByClassName('show');
  const getProductzAll = document.getElementsByClassName('product');

  for (let prod of getProductzAll) {
    if (prod.classList.contains('product')) {
      for (let product of getProductzAll) {
        const productzPrice = product.children[1].children[2].textContent.split(" ")[0];
        if (Number(productzPrice) >= Number(range.value)) {
          product.classList.add("hidden");
        } else {
          product.classList.remove("hidden");
        }
      }
    } else if (prod.classList.contains('show')) {
      for (let product of getProductz) {
        const productzPrice = product.children[1].children[2].textContent.split(" ")[0];
        if (Number(productzPrice) >= Number(range.value)) {
          product.classList.add("hidden");

        } else {
          product.classList.remove("hidden");
        }
      }
    }
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

// Search Bar 

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
  } else if (searchTerm === "") {
    displayProducts(data)
  }
});

// -----------------------------------------------------------------------------


