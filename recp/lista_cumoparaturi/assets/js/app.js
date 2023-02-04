// de incercat:

//  daca price > range.value... .product setattribute('calss','hidden')
//  poate asa o sa dispara elementete care au pretul mai mare decat range.value 
//  fara sa fac alta functie separata care sa 'injecteze' un html nou.
//  same shit cu butoanele vietii. Poate asa iese si saracia de searchbar mai fancy


let productsDOM = document.getElementById('products-container')
const range = document.getElementById('range');
const priceValue = document.querySelector('.price-value')


const fetchProducts = function () {
  productsDOM.innerHTML = '<div class="laoding"></div>'
  try {
    const data = productsJsonList;
    return data;
  } catch (error) {
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
    const price = priceProduct / 100

    // sort by price
    if (price <= range.value) {
      return `<article class="product">
      <div class="product-container">
        <img src="${img}" class="product-img img" alt="${title}">
       
        <div class="product-icons">
          <a href="product.html?id=${id}" class="product-icon">
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
    }
  
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
  // const sortbyCompany = sortCompany(data)
  // console.log(sortbyCompany)
function sortCompany(item, companyName) {
  const FIkea = item.map((product) => {
    const id = product.id;
    const company = product.fields.company;
    const title = product.fields.name;
    const priceProduct = product.fields.price;
    const img = product.fields.image[0].url;
    const price = priceProduct / 100;

    if (company === companyName) {
      return `<article class="product">
      <div class="product-container">
        <img src="${img}" class="product-img img" alt="${title}">
       
        <div class="product-icons">
          <a href="product.html?id=${id}" class="product-icon">
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
    }
  })
    .join('');
  productsDOM.innerHTML = FIkea;
}

// -----------------------------------------------------------------------------

// detalii price 
pValue(80);
function pValue(nr) {
  priceValue.textContent = `Value: ${nr}$`
}

range.addEventListener("change", function (e) {
  displayProducts(data); pValue(e.target.value)
});

// -----------------------------------------------------------------------------

// Search Bar 
const search_bar = document.getElementById('searchbar');
const formular = document.querySelector(".input-form");

function search_bar_resut(producs, search){
  const productList = producs.map((product) => {
    const id = product.id;
    const company = product.fields.company;
    const title = product.fields.name;
    const priceProduct = product.fields.price;
    const img = product.fields.image[0].url;
    const price = priceProduct / 100
    
    
    if(title.includes(search) || company.includes(search) || id.includes(search)){
      return `<article class="product">
      <div class="product-container">
        <img src="${img}" class="product-img img" alt="${title}">
       
        <div class="product-icons">
          <a href="product.html?id=${id}" class="product-icon">
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
    }
  })
  .join('');
  productsDOM.innerHTML = productList;
}

formular.addEventListener("input", (e) => {
  e.preventDefault();
  // productsDOM.innerHTML = '';
  
  const searchTerm = search_bar.value;
  
  if (searchTerm !=="") {
      search_bar_resut(data, searchTerm.toLowerCase());
  }else if(searchTerm === ""){
    displayProducts(data)

  }
});

// -----------------------------------------------------------------------------
