// selections
const loading = document.getElementsByClassName('.page-loading');
const centerDOM = document.getElementsByClassName('.single-product-center');
const pageTitleDOM = document.getElementsByClassName('.page-hero-title');
const imgDOM = document.getElementsByClassName('.single-product-img');
const titleDOM = document.getElementsByClassName('.single-product-title');
const companyDOM = document.getElementsByClassName('.single-product-company');
const priceDOM = document.getElementsByClassName('.single-product-price');
const colorsDOM = document.getElementsByClassName('.single-product-colors');
const descDOM = document.getElementsByClassName('.single-product-desc');
const cartBtnProduct = document.getElementsByClassName('.addToCartBtn');



// cart product
let productID;

// show product when page loads
window.addEventListener('DOMContentLoaded', async function () {
  // query string-ul din URL: ?id=${id}
  const urlID = window.location.search;

  try {
    
      const product =  productsFilter(urlID);
      
      // grab data
      const { id, name, company, price, colors, image} = product[0];
      productID = id;

     
      
      // set values

      document.title = `${name.toUpperCase()} | Comfy`;
      pageTitleDOM.textContent = `Home / ${name}`;
      imgDOM.src = image;
      titleDOM.textContent = name;
      companyDOM.textContent = `by ${company}`;
      priceDOM.textContent = formatPrice(price);
      descDOM.textContent = '';//description;
      colors.forEach((color) => {
        const span = document.createElement('span');
        span.classList.add('product-color');
        span.style.backgroundColor = `${color}`;
        colorsDOM.appendChild(span);
      });
    
  } catch (error) {
    console.log(error);
  }

  
});

