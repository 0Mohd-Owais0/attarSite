
let lastScrollTop = 0;
let cartItems = []
 cartItems.push( {
        name: "Amir",
        price: "₹300",
        images: ["./public/WhatsApp Image 2025-07-10 at 3.47.02 PM (1).jpeg", "public/WhatsApp Image 2025-07-10 at 3.47.02 PM.jpeg", "public/WhatsApp Image 2025-07-10 at 3.47.03 PM.jpeg"],
        detail: "A light, everyday fragrance with floral hints.",
        fragrance: "Musk",
        occasion: "daily"
      })


      function addToCart(pro){

        cartItems.push(pro)
      }


const cartToggleBtn = document.getElementById('cartToggleBtn');
const cartPanel = document.getElementById('cartPanel');
const closeCartBtn = document.getElementById('closeCartBtn');

cartToggleBtn.addEventListener('click', () => {
  cartPanel.classList.add('visible');
  const cartItemsList = document.getElementById('cartItemsList');
cartItemsList.innerHTML = "";

cartItems.forEach(item => {
  const li = document.createElement('li');
  li.textContent = `${item.name} - ₹${item.price}`;
  cartItemsList.appendChild(li);
});
});

closeCartBtn.addEventListener('click', () => {
  cartPanel.classList.remove('visible');
});






function card(product, brand, index) {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.setAttribute("data-brand", brand);
  card.setAttribute("data-index", index);

  card.innerHTML = `
    <img src="${product.images[0]}" alt="${product.name}">
    <div>${product.name}</div>
    <div class="price">${product.price}</div>
    <button class="add-to-cart" >Add to Cart</button>
  `;



  return card;
}


const productsByBrand = {
  "Arome": [
    {
      name: "Amir",
      price: "₹300",
      images: ["./public/WhatsApp Image 2025-07-10 at 3.47.02 PM (1).jpeg", "public/WhatsApp Image 2025-07-10 at 3.47.02 PM.jpeg", "public/WhatsApp Image 2025-07-10 at 3.47.03 PM.jpeg"],
      detail: "A light, everyday fragrance with floral hints.",
      fragrance: "Musk",
      occasion: "daily"
    },
    {
      name: "Aza",
      price: "₹300",
      images: ["public/WhatsApp Image 2025-07-10 at 3.47.01 PM (1).jpeg", "public/WhatsApp Image 2025-07-10 at 3.47.01 PM.jpeg"],
      detail: "A rich blend of oud and musk."
      ,
      fragrance: "Musk",
      occasion: "Morning"
    },
    {
      name: "Zafir",
      price: "₹300",
      images: ["./public/WhatsApp Image 2025-07-10 at 3.46.55 PM.jpeg", "./public/img4.jpg"],
      detail: "A rich blend of oud and musk."
      ,
      fragrance: "Musk",
      occasion: "Casual"

    },
    {
      name: "Kareem",
      price: "₹300",
      images: ["./public/WhatsApp Image 2025-07-10 at 3.47.00 PM (1).jpeg", "public/WhatsApp Image 2025-07-10 at 3.47.00 PM.jpeg"],
      detail: "A rich blend of oud and musk."
      ,
      fragrance: "Oud",
      occasion: "daily"
    },
    {
      name: "Maqbool",
      price: "₹300",
      images: ["./public/img3.jpg", "./public/img4.jpg"],
      detail: "A rich blend of oud and musk."
      ,
      fragrance: "light",
      occasion: "daily"
    },
    {
      name: "Awatif",
      price: "₹300",
      images: ["./public/img3.jpg", "./public/img4.jpg"],
      detail: "A rich blend of oud and musk."
      ,
      fragrance: "light",
      occasion: "daily",
      
    
    },
    {
      name: "Sultan",
      price: "₹300",
      images: ["public/WhatsApp Image 2025-07-10 at 3.47.01 PM (2).jpeg", "public/WhatsApp Image 2025-07-10 at 3.47.02 PM (2).jpeg"],
      detail: "A rich blend of oud and musk.",
      fragrance: "Amber",
      occasion: "daily",

    }
  ],
  "Al-Taif": [
    {
      name: "Attar X",
      price: "₹200",
      images: ["./public/img5.jpg"],
      detail: "A sweet and spicy fragrance ideal for evening wear."
      ,
      fragrance: "light",
      occasion: "daily"
    },
    {
      name: "Attar Y",
      price: "₹180",
      images: ["./public/img6.jpg"],
      detail: "A refreshing, citrusy blend for daily use.",
      fragrance: "light",
      occasion: "daily"

    }
  ],
  "Al-Nuaim": [
    {
      name: "Attar X",
      price: "₹200",
      images: ["./public/img5.jpg"],
      detail: "A sweet and spicy fragrance ideal for evening wear."
      ,
      fragrance: "light",
      occasion: "daily"
    },
    {
      name: "Attar Y",
      price: "₹180",
      images: ["./public/img6.jpg"],
      detail: "A refreshing, citrusy blend for daily use.",
      fragrance: "light",
      occasion: "daily"

    }
  ],
  "Meena": [
    {
      name: "Attar X",
      price: "₹200",
      images: ["./public/img5.jpg"],
      detail: "A sweet and spicy fragrance ideal for evening wear."
      ,
      fragrance: "light",
      occasion: "daily"
    },
    {
      name: "Attar Y",
      price: "₹180",
      images: ["./public/img6.jpg"],
      detail: "A refreshing, citrusy blend for daily use.",
      fragrance: "Musk",
      occasion: "Party"

    }
  ],
  "Combo": [
    {
      name: "Attar X",
      price: "₹200",
      images: ["./public/img5.jpg"],
      detail: "A sweet and spicy fragrance ideal for evening wear.",
      fragrance: "Amber",
      occasion: "daily"
    },
    {
      name: "Attar Y",
      price: "₹180",
      images: ["./public/img6.jpg"],
      detail: "A refreshing, citrusy blend for daily use.",
      fragrance: "light",
      occasion: "daily"

    }
  ],
};



const header = document.getElementById("site-header");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down → hide header
    header.classList.add("header-hidden");
  } else {
    // Scrolling up → show header
    header.classList.remove("header-hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});


const SeaInp = document.getElementById("SeaInp");
const Sear = document.getElementById("sc");
const SeaBut = document.getElementById("searchButtom");
const Sea = document.getElementById("middleHead");

SeaBut.addEventListener("click", function () {
  SeaBut.classList.toggle("open");

  if (SeaBut.classList.contains("open")) {
    SeaInp.style.display = "inline";
    Sea.style.display = "none";
    SeaBut.classList.toggle("searchSt")
    Sear.classList.toggle("serCon")


  } else {
    SeaInp.style.display = "none";
    Sea.style.display = "flex";
    SeaBut.classList.toggle("searchSt")
    Sear.classList.toggle("serCon")
  }
});


  function FilteredPro(product)
  {
    mainContent.innerHTML = "";
    const row = document.createElement("div");
  row.classList.add("fillProduct");

  product.forEach((product) => {
    const productCard = card(product, product.brand, product.index);
    row.appendChild(productCard);
  })
mainContent.appendChild(row);
};


function displayProducts(filter = {}) {
  const allProducts = Object.entries(productsByBrand).flatMap(([brand, products]) =>
    products.map((product,index) => ({ ...product, brand,index }))
  );

  const filtered = allProducts.filter(product => {
    for (let key in filter) {
      if (product[key] !== filter[key]) return false;
    }
     return true;
  });
 FilteredPro(filtered)
}



function priceFilter(startPrice, endPrice) {

  const allProducts = Object.entries(productsByBrand).flatMap(([brand, products]) =>
    products.map((product,index) => ({ ...product, brand,index }))
  );
  const filtered = allProducts.filter((product) => {
    const numericPrice = parseInt(product.price.replace("₹", ""));

    return numericPrice > startPrice && numericPrice <= endPrice;
  });

  FilteredPro(filtered)
  
}





const mainContent = document.querySelector(".main-content");
function homeCon() {
  mainContent.innerHTML = ""
  Object.keys(productsByBrand).forEach(brand => {
    const section = document.createElement("div");
    section.classList.add("brand-section");

    const heading = document.createElement("h2");
    heading.innerHTML = `${brand} <button class="view" style="font-size: 0.8rem; color: var(--secondary); text-decoration:underline; cursor:pointer ;border: none; background-color: inherit;">View All →</button>`;
    section.appendChild(heading);

    const row = document.createElement("div");
    row.classList.add("product-row");

    productsByBrand[brand].forEach((product, index) => {
      const cardElement = card(product, brand, index);
      row.appendChild(cardElement);
    });

    section.appendChild(row);
    mainContent.appendChild(section);
  })
  const viewButtons = document.getElementsByClassName("view");

  for (let i = 0; i < viewButtons.length; i++) {
    viewButtons[i].addEventListener("click", function () {
      const brandSection = this.closest(".brand-section");
      const productRow = brandSection.querySelector(".product-row");

      productRow.classList.toggle("viewStyle");
      if (productRow.classList.contains("viewStyle")) {
        this.textContent = "View Less ↑";
      } else {
        this.textContent = "View All →";
      }
    });
  }

};

homeCon()





const PopUp = document.getElementById("productPopUp");
const PopUpTitle = document.getElementById("PopUpTitle");
const PopUpPrice = document.getElementById("PopUpPrice");
const PopUpImages = document.getElementById("PopUpImages");
const PopUpSideImages = document.getElementById("SideImgCon");
const PopUpMainImg = document.getElementById("PopUpMainImg");
const PopUpDetail = document.getElementById("PopUpDetail");
const PopUpClose = document.getElementById("PopUpClose");
const addCartBut = document.getElementById("addCart")


document.addEventListener("click", function (e) {
  const card = e.target.closest(".product-card");
  if (!card) return;

  const brand = card.getAttribute("data-brand");
  const index = parseInt(card.getAttribute("data-index"));

  if (!productsByBrand[brand] || isNaN(index)) return;

  const product = productsByBrand[brand][index];
  if (!product) return;

  PopUpSideImages.innerHTML = ``;
  PopUpTitle.textContent = product.name;
  PopUpPrice.textContent = product.price;
  PopUpDetail.textContent = product.detail;
  PopUpMainImg.src = product.images[0];
  PopUpMainImg.alt = product.name;
  

  product.images.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = product.name;
    img.classList.add("SideImg");
     img.setAttribute("data-index", i);
    img.onclick = () => (PopUpMainImg.src = src);
    PopUpSideImages.appendChild(img);
  });

  PopUp.classList.remove("hidden");
  addCartBut.addEventListener('click' ,() =>{ addToCart(product)})
  console.log(product)
});


PopUpClose.addEventListener("click", () => {

  PopUp.classList.add("hidden");
});





