
let productsDOM = document.getElementById('products-container')

const fetchProducts = function(){
    productsDOM.innerHTML = '<div class="laoding"></div>'
    try{
        const data = productsJsonList;
        return data;
    }catch(error){
        productsDOM.innerHTML= '<p class="error"> there was an error</p>';
    }
};
// afiseaza produse
const displayProducts = (list) => {
    const productList = list.map((product)=> {
        const id = product.id;
        const company = product.fields.company;
        const title = product.fields.name;
        const price = product.fields.price;
        const img = product.fields.image[0].url;

        return `<article class="product">
        <div class="product-container">
          <img src=${img} class="product-img img" alt=${title}>
         
          <div class="product-icons">
            <a href=${id} class="product-icon">
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
          <h4 class="product-price">${price}</h4>
        </footer>
      </article>
      `;
    })
    .join('');
    productsDOM.innerHTML = productList;
};

const data = fetchProducts();
displayProducts(data);

