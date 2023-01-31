



 
function sortCompany(item, companyName) {
    const FIkea = item.map((product) => {
        const id = product.id;
        const company = product.fields.company;
        const title = product.fields.name;
        const price = product.fields.price;
        const img = product.fields.image[0].url;

        if (company === companyName) {
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
          <h4 class="product-price">${price / 100 + '$'}</h4>
        </footer>
      </article>
      `;
        }
    })
        .join('');
    productsDOM.innerHTML = FIkea;
}
    




// function FIkea(item) {
//     const FIkea = item.map((product) => {
//         const id = product.id;
//         const company = product.fields.company;
//         const title = product.fields.name;
//         const price = product.fields.price;
//         const img = product.fields.image[0].url;

//         if (company === 'ikea') {
//             return `<article class="product">
//         <div class="product-container">
//           <img src=${img} class="product-img img" alt=${title}>

//           <div class="product-icons">
//             <a href=${id} class="product-icon">
//               <i class="fas fa-search"></i>
//             </a>
//             <button class="product-cart-btn product-icon" data-id="${id}">
//               <i class="fas fa-shopping-cart"></i>
//             </button>
//           </div>
//         </div>
//         <footer>
//           <p class="product-name">${title}</p>
//           <h5>${company}</h5>
//           <h4 class="product-price">${price / 100 + '$'}</h4>
//         </footer>
//       </article>
//       `;
//         }
//     })
//         .join('');
//     productsDOM.innerHTML = FIkea;
// }
// function FMarcos(item) {
//     const FIkea = item.map((product) => {
//         const id = product.id;
//         const company = product.fields.company;
//         const title = product.fields.name;
//         const price = product.fields.price;
//         const img = product.fields.image[0].url;

//         if (company === 'marcos') {
//             return `<article class="product">
//         <div class="product-container">
//           <img src=${img} class="product-img img" alt=${title}>

//           <div class="product-icons">
//             <a href=${id} class="product-icon">
//               <i class="fas fa-search"></i>
//             </a>
//             <button class="product-cart-btn product-icon" data-id="${id}">
//               <i class="fas fa-shopping-cart"></i>
//             </button>
//           </div>
//         </div>
//         <footer>
//           <p class="product-name">${title}</p>
//           <h5>${company}</h5>
//           <h4 class="product-price">${price / 100 + '$'}</h4>
//         </footer>
//       </article>
//       `;
//         }
//     })
//         .join('');
//     productsDOM.innerHTML = FIkea;
// }
// function FCaressa(item) {
//     const FIkea = item.map((product) => {
//         const id = product.id;
//         const company = product.fields.company;
//         const title = product.fields.name;
//         const price = product.fields.price;
//         const img = product.fields.image[0].url;

//         if (company === 'caressa') {
//             return `<article class="product">
//         <div class="product-container">
//           <img src=${img} class="product-img img" alt=${title}>

//           <div class="product-icons">
//             <a href=${id} class="product-icon">
//               <i class="fas fa-search"></i>
//             </a>
//             <button class="product-cart-btn product-icon" data-id="${id}">
//               <i class="fas fa-shopping-cart"></i>
//             </button>
//           </div>
//         </div>
//         <footer>
//           <p class="product-name">${title}</p>
//           <h5>${company}</h5>
//           <h4 class="product-price">${price / 100 + '$'}</h4>
//         </footer>
//       </article>
//       `;
//         }
//     })
//         .join('');
//     productsDOM.innerHTML = FIkea;
// }
// function FLiddy(item) {
//     const FIkea = item.map((product) => {
//         const id = product.id;
//         const company = product.fields.company;
//         const title = product.fields.name;
//         const price = product.fields.price;
//         const img = product.fields.image[0].url;

//         if (company === 'liddy') {
//             return `<article class="product">
//         <div class="product-container">
//           <img src=${img} class="product-img img" alt=${title}>

//           <div class="product-icons">
//             <a href=${id} class="product-icon">
//               <i class="fas fa-search"></i>
//             </a>
//             <button class="product-cart-btn product-icon" data-id="${id}">
//               <i class="fas fa-shopping-cart"></i>
//             </button>
//           </div>
//         </div>
//         <footer>
//           <p class="product-name">${title}</p>
//           <h5>${company}</h5>
//           <h4 class="product-price">${price / 100 + '$'}</h4>
//         </footer>
//       </article>
//       `;
//         }
//     })
//     .join('');
//     productsDOM.innerHTML = FIkea;
// }
