// variabila menu este definita in data.js

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
            <img src="${item.img}" alt=${item.title} class="photo" />
            <div class="item-info">
                <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price} RON</h4>
                </header>
                <p class="item-text">
                ${item.desc}
                </p>
            </div>
            </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category, index) {
      let btn_nr = "btn" + (index + 1);
      const categoryRo = {
        all: "Tot",
        breakfast: "Mic Dejun",
        lunch: "Pranz",
        dinner: "Cina",
        shakes: "Bauturi",
      };
      return `<button type="button" class="filter-btn" data-id=${category} data-nr=${btn_nr}>
    ${categoryRo[category]}
    </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;

  const filterBtn = btnContainer.querySelectorAll(".filter-btn");
  filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category == category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
