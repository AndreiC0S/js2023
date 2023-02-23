
const data = productsJsonList;
const productsDOM = document.getElementById('single-products')

const SingleProduct = (list) => {


  const productList = list.map((product) => {
    const id = product.id;
    const company = product.fields.company;
    const title = product.fields.name;
    const priceProduct = product.fields.price;
    const img = product.fields.image[0].url;
    const price = priceProduct / 100;
    const color1 = product.fields.colors[0];
    const color2 = product.fields.colors[1];

    if (window.location.href.includes(id)) {
      
      return `<div class="section-center single-product-center">
      <img src="${img}" class="single-product-img img" alt="">
      <article class="single-product-info">
        <div>
          <h2 class="single-product-title">${title}</h2>
          <p class="single-product-company text-slanted">by ${company}</p>
          <p class="single-product-price">$${price}</p>
          <div class="single-product-colors"><span class="product-color" style="background-color: ${color1};"></span><span class="product-color" style="background-color: ${color2});"></span></div>
          <p class="single-product-desc">Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>
          <button class="addToCartBtn btn" data-id="id">
            add to cart
          </button>
        </div>
      </article>
    </div>`
    }
    
  })
  productsDOM.innerHTML = productList.join(" ");
};
SingleProduct(data);

