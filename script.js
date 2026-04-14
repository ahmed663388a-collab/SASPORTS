/* ============================
   SA SPORTS - script.js
   ============================ */

// ===== LANGUAGE SYSTEM =====
let currentLang = localStorage.getItem('sa-lang') || 'nl';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('sa-lang', lang);
  document.body.className = document.body.className.replace(/lang-\S+/, '').trim();
  document.body.classList.add('lang-' + lang);
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

setLang(currentLang);

// ===== HEADER SCROLL =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
  document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ===== BACK TO TOP =====
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== CART STATE =====
let cart = JSON.parse(localStorage.getItem('sa-cart') || '[]');

function saveCart() {
  localStorage.setItem('sa-cart', JSON.stringify(cart));
}

function updateCartCount() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = total;
}

function renderCart() {
  const body = document.getElementById('cartItems');
  const empty = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');
  body.innerHTML = '';

  if (cart.length === 0) {
    empty.style.display = 'block';
    footer.style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  footer.style.display = 'block';

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=80&h=80&fit=crop'"/>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">€${item.price.toFixed(2)}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
          <button class="cart-item-remove" onclick="removeItem(${index})">✕</button>
        </div>
      </div>
    `;
    body.appendChild(div);
  });

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('totalAmount').textContent = '€' + total.toFixed(2);
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCart();
  updateCartCount();
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartCount();
  renderCart();
}

function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCartCount();
  renderCart();
  openCart();
}

// ===== CART SIDEBAR =====
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');

function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  renderCart();
}
function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// ===== CHECKOUT MODAL =====
document.getElementById('checkoutBtn').addEventListener('click', () => {
  closeCart();
  setTimeout(() => {
    document.getElementById('checkoutModal').style.display = 'flex';
    nextStep(1);
    renderCheckoutSummary();
  }, 350);
});

document.getElementById('modalClose').addEventListener('click', () => {
  document.getElementById('checkoutModal').style.display = 'none';
});
document.getElementById('closeOrderBtn').addEventListener('click', () => {
  document.getElementById('checkoutModal').style.display = 'none';
  cart = [];
  saveCart();
  updateCartCount();
  renderCart();
});

function nextStep(step) {
  [1, 2, 3].forEach(s => {
    document.getElementById('step' + s).style.display = s === step ? 'block' : 'none';
  });
  document.querySelectorAll('.checkout-step').forEach(el => {
    el.classList.toggle('active', parseInt(el.dataset.step) === step);
  });
  if (step === 3) {
    renderCheckoutSummary();
  }
}

function renderCheckoutSummary() {
  const summary = document.getElementById('checkoutSummary');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  summary.innerHTML = cart.map(item => `
    <div class="summary-item">
      <span>${item.name} × ${item.qty}</span>
      <span>€${(item.price * item.qty).toFixed(2)}</span>
    </div>
  `).join('');
  document.getElementById('summaryTotal').textContent = '€' + total.toFixed(2);
}

// ===== PRODUCT DATA =====
const tshirtsData = [
  { id: 'ts1', name: 'Pro Dry-Fit Running Shirt', brand: 'SA Sports', price: 34.99, oldPrice: 49.99, badge: 'NIEUW', rating: 4.8, reviews: 124, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop', desc: 'Ademende Dry-Fit technologie voor maximale prestaties tijdens elke training.' },
  { id: 'ts2', name: 'Compression Sport Tee', brand: 'SA Sports', price: 39.99, oldPrice: 54.99, badge: 'SALE', rating: 4.7, reviews: 89, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop', desc: 'Compressie T-shirt voor optimale spierprestaties en sneller herstel.' },
  { id: 'ts3', name: 'Training Essential Shirt', brand: 'SA Sports', price: 29.99, oldPrice: null, badge: null, rating: 4.6, reviews: 203, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop', desc: 'Veelzijdig trainingsshirt voor alle sporten en intensiteiten.' },
  { id: 'ts4', name: 'Athletic Slim Fit Tee', brand: 'SA Sports', price: 32.99, oldPrice: 44.99, badge: '-25%', rating: 4.9, reviews: 156, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop', desc: 'Slim fit design met stretch materiaal voor vrijheid van beweging.' },
  { id: 'ts5', name: 'Performance Mesh Shirt', brand: 'SA Sports', price: 44.99, oldPrice: 59.99, badge: 'TOP', rating: 4.8, reviews: 78, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop', desc: 'Mesh panelen voor maximale ventilatie tijdens intensieve workouts.' },
  { id: 'ts6', name: 'Sport Polo Training', brand: 'SA Sports', price: 37.99, oldPrice: null, badge: null, rating: 4.5, reviews: 92, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop', desc: 'Sportieve polo perfect voor training en casual gebruik.' }
];

const shoesData = [
  { id: 'sh1', name: 'Ultra Boost Running Pro', brand: 'SA Sports', price: 129.99, oldPrice: 169.99, badge: 'BESTSELLER', rating: 4.9, reviews: 312, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', desc: 'Maximale demping en energieteruggave voor langeafstandlopers.' },
  { id: 'sh2', name: 'Speed Trainer X', brand: 'SA Sports', price: 109.99, oldPrice: 139.99, badge: 'NIEUW', rating: 4.8, reviews: 187, image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop', desc: 'Licht en responsief voor snelheidstraining en wedstrijden.' },
  { id: 'sh3', name: 'Cross Training Elite', brand: 'SA Sports', price: 99.99, oldPrice: 124.99, badge: 'SALE', rating: 4.7, reviews: 243, image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop', desc: 'Veelzijdige crosstraining schoen voor gym en buiten.' },
  { id: 'sh4', name: 'Flex Run 3.0', brand: 'SA Sports', price: 89.99, oldPrice: null, badge: null, rating: 4.6, reviews: 165, image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop', desc: 'Flexibele zool voor natuurlijke beweging bij elke run.' },
  { id: 'sh5', name: 'Trail Blazer Outdoor', brand: 'SA Sports', price: 119.99, oldPrice: 149.99, badge: '-20%', rating: 4.8, reviews: 98, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop', desc: 'Robuuste trailrunning schoen met superieure grip op elk terrein.' },
  { id: 'sh6', name: 'Gym Master Pro', brand: 'SA Sports', price: 79.99, oldPrice: 99.99, badge: 'DEAL', rating: 4.5, reviews: 221, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop', desc: 'Stabiele gymschoen met uitstekende laterale ondersteuning.' }
];

const pantsData = [
  { id: 'pt1', name: 'Tapered Training Pants', brand: 'SA Sports', price: 59.99, oldPrice: 79.99, badge: 'TOP', rating: 4.8, reviews: 134, image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop', desc: 'Getaperde pasvorm met elastische tailleband voor maximaal comfort.' },
  { id: 'pt2', name: 'Jogger Pro Fleece', brand: 'SA Sports', price: 64.99, oldPrice: 84.99, badge: 'NIEUW', rating: 4.7, reviews: 89, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop', desc: 'Fleece gevoerde jogger voor warme trainingen en casual gebruik.' },
  { id: 'pt3', name: 'Compression Running Tights', brand: 'SA Sports', price: 54.99, oldPrice: null, badge: null, rating: 4.9, reviews: 201, image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=400&fit=crop', desc: 'Compressie tights voor betere doorbloeding en spielherstel.' },
  { id: 'pt4', name: 'Windproof Track Pants', brand: 'SA Sports', price: 69.99, oldPrice: 89.99, badge: 'SALE', rating: 4.6, reviews: 76, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&q=80&sat=-100', desc: 'Winddichte trackbroek voor buiten training in alle weersomstandigheden.' },
  { id: 'pt5', name: 'Athletic Zip Jogger', brand: 'SA Sports', price: 57.99, oldPrice: 74.99, badge: '-22%', rating: 4.7, reviews: 118, image: 'https://images.unsplash.com/photo-1571945192236-5f24cbea4bd1?w=400&h=400&fit=crop', desc: 'Jogger met zippered zakken en enkelbandjes voor een perfecte pasvorm.' },
  { id: 'pt6', name: 'Performance Slim Fit Pants', brand: 'SA Sports', price: 62.99, oldPrice: null, badge: null, rating: 4.8, reviews: 93, image: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=400&h=400&fit=crop', desc: 'Slim fit sportbroek met 4-weg stretch voor volledige bewegingsvrijheid.' }
];

const shortsData = [
  { id: 'so1', name: 'Pro 5" Running Shorts', brand: 'SA Sports', price: 34.99, oldPrice: 44.99, badge: 'BESTSELLER', rating: 4.9, reviews: 287, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop', desc: 'Lichte 5-inch hardloopshort met ingebouwde boxershort.' },
  { id: 'so2', name: 'Training Mesh Shorts', brand: 'SA Sports', price: 29.99, oldPrice: null, badge: 'NIEUW', rating: 4.7, reviews: 143, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=400&h=400&fit=crop', desc: 'Mesh shorts voor maximale luchtstroom tijdens intensieve training.' },
  { id: 'so3', name: 'Board Short Sport', brand: 'SA Sports', price: 39.99, oldPrice: 52.99, badge: 'SALE', rating: 4.6, reviews: 98, image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop&crop=bottom', desc: 'Allround sportshort perfect voor strand, gym en buiten.' },
  { id: 'so4', name: 'Compression Short 7"', brand: 'SA Sports', price: 44.99, oldPrice: 59.99, badge: '-25%', rating: 4.8, reviews: 167, image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&h=400&fit=crop', desc: '7-inch compressie short voor optimale spielondersteuning.' },
  { id: 'so5', name: 'Athletic 2-in-1 Short', brand: 'SA Sports', price: 49.99, oldPrice: 64.99, badge: 'TOP', rating: 4.9, reviews: 212, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop', desc: '2-in-1 short met ingebouwde tights voor extra ondersteuning en comfort.' },
  { id: 'so6', name: 'Quick-Dry Gym Shorts', brand: 'SA Sports', price: 27.99, oldPrice: 36.99, badge: 'DEAL', rating: 4.5, reviews: 189, image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&h=400&fit=crop', desc: 'Snel drogend materiaal voor elke gym sessie.' }
];

// ===== PRODUCT CARD BUILDER =====
function createProductCard(product) {
  const stars = '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating));
  const oldPriceHtml = product.oldPrice ? `<span class="price-old">€${product.oldPrice.toFixed(2)}</span>` : '';
  const badgeHtml = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';

  const card = document.createElement('div');
  card.className = 'product-card reveal';
  card.innerHTML = `
    <div class="product-img-wrap">
      ${badgeHtml}
      <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy"
           onerror="this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop'" />
      <button class="product-wishlist" aria-label="Wishlist" onclick="event.stopPropagation()">❤️</button>
    </div>
    <div class="product-info">
      <div class="product-brand">${product.brand}</div>
      <div class="product-name">${product.name}</div>
      <div class="product-rating">
        <span class="stars">${stars}</span>
        <span class="rating-count">(${product.reviews})</span>
      </div>
      <div class="product-bottom">
        <div class="product-price">
          <span class="price-current">€${product.price.toFixed(2)}</span>
          ${oldPriceHtml}
        </div>
        <button class="add-to-cart-btn" aria-label="Add to cart"
          onclick="event.stopPropagation(); addToCart({id:'${product.id}', name:'${product.name}', price:${product.price}, image:'${product.image}'})">
          +
        </button>
      </div>
    </div>
  `;
  card.addEventListener('click', () => openProductModal(product));
  return card;
}

function renderProducts(data, gridId) {
  const grid = document.getElementById(gridId);
  data.forEach(p => grid.appendChild(createProductCard(p)));
}

renderProducts(tshirtsData, 'tshirts-grid');
renderProducts(shoesData, 'shoes-grid');
renderProducts(pantsData, 'pants-grid');
renderProducts(shortsData, 'shorts-grid');

// ===== PRODUCT MODAL =====
function openProductModal(product) {
  const stars = '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating));
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const inner = document.getElementById('productModalInner');
  inner.innerHTML = `
    <div class="pm-img-wrap">
      <img class="pm-img" src="${product.image}" alt="${product.name}"
           onerror="this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop'" />
    </div>
    <div class="pm-info">
      <div class="pm-brand">${product.brand}</div>
      <div class="pm-name">${product.name}</div>
      <div class="pm-rating">
        <span class="stars">${stars}</span>
        <span class="rating-count">(${product.reviews} reviews)</span>
      </div>
      <div class="pm-price">€${product.price.toFixed(2)}</div>
      <div class="pm-desc">${product.desc}</div>
      <div style="margin-bottom:8px">
        <div style="font-weight:700;font-size:0.85rem;margin-bottom:8px;color:var(--text);">Maat / Size / المقاس</div>
        <div class="pm-sizes">
          ${sizes.map(s => `<button class="size-btn" onclick="selectSize(this,'${s}')">${s}</button>`).join('')}
        </div>
      </div>
      <button class="btn-primary pm-add-btn full" onclick="addToCart({id:'${product.id}',name:'${product.name}',price:${product.price},image:'${product.image}'}); closeProductModal()">
        Toevoegen / Add / أضف للسلة
      </button>
    </div>
  `;

  document.getElementById('productModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function selectSize(btn, size) {
  btn.closest('.pm-sizes').querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function closeProductModal() {
  document.getElementById('productModal').style.display = 'none';
  document.body.style.overflow = '';
}

document.getElementById('productModalClose').addEventListener('click', closeProductModal);
document.getElementById('productModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('productModal')) closeProductModal();
});

// ===== NEWSLETTER FORM =====
document.getElementById('newsletterForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('emailInput').value;
  if (email) {
    document.getElementById('newsletterForm').style.display = 'none';
    document.getElementById('newsletterSuccess').style.display = 'block';
  }
});

// ===== CONTACT FORM =====
document.getElementById('sendMsgBtn').addEventListener('click', () => {
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const msg = document.getElementById('contactMessage').value;
  if (name && email && msg) {
    document.getElementById('formSuccess').style.display = 'block';
    const whatsappMsg = encodeURIComponent(`Naam: ${name}\nEmail: ${email}\n\n${msg}`);
    setTimeout(() => {
      window.open(`https://wa.me/31685361632?text=${whatsappMsg}`, '_blank');
    }, 500);
  } else {
    alert(currentLang === 'nl' ? 'Vul alle verplichte velden in.' :
          currentLang === 'en' ? 'Please fill in all required fields.' :
          'يرجى ملء جميع الحقول المطلوبة.');
  }
});

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function observeReveal() {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
observeReveal();

// Also observe why-card, payment-card, delivery-item etc
document.querySelectorAll('.why-card, .payment-card, .delivery-item, .contact-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      const offset = document.getElementById('header').offsetHeight + 20;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});

// ===== INIT =====
updateCartCount();
renderCart();

// ===== ANNOUNCE BAR ROTATION =====
(function rotateAnnounce() {
  const bars = document.querySelectorAll('.announce-text');
  let idx = 0;
  setInterval(() => {
    bars[idx].classList.remove('active');
    idx = (idx + 1) % bars.length;
    bars[idx].classList.add('active');
  }, 4000);
})();

// Add style for announce bar
const announceStyle = document.createElement('style');
announceStyle.textContent = `.announce-text { display:none; animation: fadeIn 0.5s ease; } .announce-text.active { display:block; }`;
document.head.appendChild(announceStyle);

console.log('%cSA SPORTS 🏃 Powered by SA Sports Netherlands', 'font-size:16px; color:#FF6B35; font-weight:bold;');
