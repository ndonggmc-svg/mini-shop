const cartBtn = document.getElementById("cart-btn");
const cart = document.getElementById("cart");
const closeCart = document.getElementById("close-cart");
const cartCount = document.getElementById("cart-count");
const themeToggle = document.getElementById("theme-toggle");
const filter = document.getElementById("filter");

let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

cartBtn.onclick = () => {
  cart.classList.add("open");
  cart.setAttribute("aria-hidden", "false");
};

closeCart.onclick = () => {
  cart.classList.remove("open");
  cart.setAttribute("aria-hidden", "true");
};

document.querySelectorAll(".add-cart").forEach(btn => {
  btn.onclick = e => {
    const card = e.target.closest(".card");
    const product = {
      name: card.querySelector("h3").textContent,
      price: 49.99
    };
    cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    updateCartCount();
  };
});

function updateCartCount() {
  cartCount.textContent = cartItems.length;
}

themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
};

filter.onchange = () => {
  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      filter.value === "all" || card.dataset.category === filter.value
        ? "block"
        : "none";
  });
};

const product = JSON.parse(localStorage.getItem("selectedProduct"));

if (product) {
  document.getElementById("product-title").textContent = product.name;
  document.getElementById("product-price").textContent = product.price.toFixed(2);
  document.getElementById("product-desc").textContent = product.desc;
  document.getElementById("product-img").src = product.img;
}

document.getElementById("add-cart").onclick = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produit ajouté au panier");
};

document.getElementById("payment-form").onsubmit = e => {
  e.preventDefault();
  localStorage.removeItem("cart");
  document.getElementById("success").textContent =
    "✅ Paiement simulé avec succès !";
};

function test(name, fn) {
  try {
    fn();
    console.log(`✅ ${name}`);
  } catch (e) {
    console.error(`❌ ${name}`, e.message);
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

test("Ajout au panier", () => {
  const cart = [];
  cart.push({ name: "Produit", qty: 1 });
  assert(cart.length === 1, "Le panier doit contenir 1 produit");
});

{
  id: "alpha",
  name: "Produit Alpha",
  price: 49.99,
  qty: 1
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(p => p.id === product.id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(p => p.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
}

cartItems.innerHTML = cart.map(p => `
  <li>
    ${p.name} x ${p.qty}
    <button onclick="removeFromCart('${p.id}')">❌</button>
  </li>
`).join("");

const translations = {
  fr: {
    cart: "Panier",
    pay: "Payer",
    add: "Ajouter au panier"
  },
  en: {
    cart: "Cart",
    pay: "Pay",
    add: "Add to cart"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translations[lang][el.dataset.i18n];
  });
  localStorage.setItem("lang", lang);
}

function generateInvoice() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  doc.text("Facture - Mini Shop", 20, 20);

  let y = 40;
  cart.forEach(item => {
    doc.text(
      `${item.name} x ${item.qty} - ${item.price * item.qty}€`,
      20,
      y
    );
    y += 10;
  });

  doc.save("facture.pdf");
}
