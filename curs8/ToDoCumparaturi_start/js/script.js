// pas 1 - adauga elemnt

var nrProduse = 0;
function addProduct() {
  let product = document.getElementById("product").value;

  if (!product) return;
  const text =
    "<li class ='product'>" +
    product +
    "<span id='" +
    nrProduse +
    "'>Sterge</span></li>";
  document.getElementById("list").insertAdjacentHTML("beforeend", text);
  document.getElementById("product").value = "";
  nrProduse = nrProduse + 1;
  if (typeof Storage !== "undefined") {
    localStorage.setItem(nrProduse, text);
    localStorage.setItem("numarProduse", nrProduse);
  }
}

let buton = document.getElementById("add");
buton.addEventListener("click", addProduct);

// selectam produsele

document.getElementById("list").addEventListener("click", function (event) {
  const element = event.target;
  element.classList.toggle("done");
});

// pas 3 - afisam produse in pagina

window.onload = function () {
  var nr = localStorage.getItem("numarProduse");
  let i;
  if (typeof Storage !== "undefined" && nr > 0) {
    nrProduse = Number(nr);
    for (i = 1; i <= nr; i++) {
        if(localStorage.getItem(i)==null){

        }
      document.getElementById("list").insertAdjacentHTML("beforeend", localStorage.getItem(i));
    }
  } else {
    nrProduse = 0;
  }
};

// pas 4 - stergem produse

document.getElementById('list').addEventListener('dblclick', function(event){
    const element = event.target;
    let storageKey = Number(element.id) + 1;
    nrProduse = nrProduse - 1;
    localStorage.removeItem(storageKey)
    //lcalStorage.setItem("numarProduse", nrProduse);

   
    location.reload()
});