/* ====================================
   SA SPORTS – MAIN SCRIPT
   Cart · Products · i18n · Checkout
   ==================================== */

// ===================================
// 1. TRANSLATIONS
// ===================================
const TRANSLATIONS = {
  nl: {
    nav_home: 'Home', nav_shop: 'Shop', nav_contact: 'Contact',
    hero_badge: 'Nieuw Seizoen 2025',
    hero_title: 'Sportkleding in Nederland',
    hero_sub: 'Hoogwaardige sportkleding voor elke sporter. Snelle levering door heel Europa.',
    hero_cta: 'Shop Nu', hero_cta2: 'Bekijk Collectie',
    badge1: 'Gratis verzending boven €75', badge2: '30 dagen retour', badge3: 'Veilig betalen',
    trust1: 'Levering in heel Europa', trust2: 'Snelle verzending NL',
    trust3: 'Veilig & Beveiligd', trust4: '30 Dagen Retour',
    cat_title: 'Shop op Categorie', cat_sub: 'Vind de perfecte uitrusting voor jouw sport',
    cat_tshirts: 'T-Shirts', cat_shoes: 'Schoenen', cat_shorts: 'Shorts', cat_pants: 'Broeken',
    feat_title: 'Uitgelichte Producten', feat_all: 'Alles bekijken →',
    new_title: 'Nieuw Binnen',
    promo_title: 'Levering in heel Europa 🚚',
    promo_sub: 'Nederland: 1-2 werkdagen · Europa: 3-5 werkdagen · Gratis boven €75',
    promo_cta: 'Shop nu',
    contact_title: 'Neem Contact Op',
    contact_sub: 'Vragen over producten of bestellingen? Wij helpen je graag!',
    form_name: 'Volledige naam', form_email: 'E-mailadres', form_phone: 'Telefoonnummer',
    form_address: 'Straat en huisnummer', form_zip: 'Postcode', form_city: 'Stad',
    form_country: 'Land', form_message: 'Uw bericht...', form_send: 'Versturen',
    cart_title: 'Winkelwagen', cart_total: 'Totaal',
    cart_checkout: 'Afrekenen', cart_empty: 'Je winkelwagen is leeg',
    shop_title: 'Alle Producten', shop_sub: 'Ontdek onze volledige collectie sportkleding',
    filter_cat: 'Categorieën', filter_all: 'Alle', filter_price: 'Prijs', filter_sort: 'Sorteren',
    sort_default: 'Standaard', sort_asc: 'Prijs: laag-hoog', sort_desc: 'Prijs: hoog-laag', sort_name: 'Naam A-Z',
    add_cart: 'In winkelwagen', added_cart: 'Toegevoegd!',
    in_stock: 'Op voorraad', low_stock: 'Nog maar %n over!', limited: 'Beperkte voorraad',
    step_cart: 'Winkelwagen', step_info: 'Gegevens', step_payment: 'Betaling',
    checkout_contact: 'Contactgegevens', checkout_shipping: 'Afleveradres', checkout_payment: 'Betaling',
    demo_mode: 'Demo Modus', demo_notice: 'Dit is een demo. Er worden geen echte betalingen verwerkt.',
    pay_btn: 'Betaal nu via Stripe (Demo)', secure_note: 'Beveiligde verbinding · SSL versleuteld',
    summary_title: 'Besteloverzicht', summary_subtotal: 'Subtotaal', summary_shipping: 'Verzendkosten',
    success_title: 'Bestelling Geplaatst!',
    success_sub: 'Bedankt voor je bestelling. Je ontvangt een bevestiging per e-mail.',
    success_back: 'Terug naar Home',
    footer_tagline: 'Premium sportkleding voor elke sporter in Nederland en Europa.',
    footer_shop: 'Shop', footer_info: 'Informatie', footer_contact: 'Contact',
    footer_shipping: 'Verzending', footer_returns: 'Retourneren',
    footer_rights: 'Alle rechten voorbehouden.', footer_payment: 'Veilig betalen via Stripe',
    products_found: '%n producten gevonden', quick_view: 'Snel bekijken',
    shipping_nl: 'Nederland: 1-2 werkdagen · Gratis verzending!',
    shipping_eu: 'Europa: 3-5 werkdagen · Standaard verzending',
  },
  en: {
    nav_home: 'Home', nav_shop: 'Shop', nav_contact: 'Contact',
    hero_badge: 'New Season 2025',
    hero_title: 'Sportswear in Netherlands',
    hero_sub: 'Premium sportswear for every athlete. Fast delivery across Europe.',
    hero_cta: 'Shop Now', hero_cta2: 'View Collection',
    badge1: 'Free shipping over €75', badge2: '30-day returns', badge3: 'Secure checkout',
    trust1: 'Delivery across Europe', trust2: 'Fast shipping NL',
    trust3: 'Safe & Secure', trust4: '30-Day Returns',
    cat_title: 'Shop by Category', cat_sub: 'Find the perfect gear for your sport',
    cat_tshirts: 'T-Shirts', cat_shoes: 'Shoes', cat_shorts: 'Shorts', cat_pants: 'Pants',
    feat_title: 'Featured Products', feat_all: 'View all →',
    new_title: 'New Arrivals',
    promo_title: 'Delivery across Europe 🚚',
    promo_sub: 'Netherlands: 1-2 workdays · Europe: 3-5 workdays · Free over €75',
    promo_cta: 'Shop now',
    contact_title: 'Get in Touch',
    contact_sub: 'Questions about products or orders? We are happy to help!',
    form_name: 'Full name', form_email: 'Email address', form_phone: 'Phone number',
    form_address: 'Street address', form_zip: 'Postal code', form_city: 'City',
    form_country: 'Country', form_message: 'Your message...', form_send: 'Send',
    cart_title: 'Shopping Cart', cart_total: 'Total',
    cart_checkout: 'Checkout', cart_empty: 'Your cart is empty',
    shop_title: 'All Products', shop_sub: 'Discover our full sportswear collection',
    filter_cat: 'Categories', filter_all: 'All', filter_price: 'Price', filter_sort: 'Sort',
    sort_default: 'Default', sort_asc: 'Price: low-high', sort_desc: 'Price: high-low', sort_name: 'Name A-Z',
    add_cart: 'Add to cart', added_cart: 'Added!',
    in_stock: 'In stock', low_stock: 'Only %n left!', limited: 'Limited stock',
    step_cart: 'Cart', step_info: 'Details', step_payment: 'Payment',
    checkout_contact: 'Contact Details', checkout_shipping: 'Shipping Address', checkout_payment: 'Payment',
    demo_mode: 'Demo Mode', demo_notice: 'This is a demo. No real payments are processed.',
    pay_btn: 'Pay now via Stripe (Demo)', secure_note: 'Secure connection · SSL encrypted',
    summary_title: 'Order Summary', summary_subtotal: 'Subtotal', summary_shipping: 'Shipping',
    success_title: 'Order Placed!',
    success_sub: 'Thank you for your order. You will receive a confirmation by email.',
    success_back: 'Back to Home',
    footer_tagline: 'Premium sportswear for every athlete in the Netherlands and Europe.',
    footer_shop: 'Shop', footer_info: 'Information', footer_contact: 'Contact',
    footer_shipping: 'Shipping', footer_returns: 'Returns',
    footer_rights: 'All rights reserved.', footer_payment: 'Secure payments via Stripe',
    products_found: '%n products found', quick_view: 'Quick view',
    shipping_nl: 'Netherlands: 1-2 workdays · Free shipping!',
    shipping_eu: 'Europe: 3-5 workdays · Standard shipping',
  },
  ar: {
    nav_home: 'الرئيسية', nav_shop: 'المتجر', nav_contact: 'اتصل بنا',
    hero_badge: 'موسم جديد 2025',
    hero_title: 'ملابس رياضية في هولندا',
    hero_sub: 'ملابس رياضية عالية الجودة لكل رياضي. توصيل سريع في جميع أنحاء أوروبا.',
    hero_cta: 'تسوق الآن', hero_cta2: 'استعرض المجموعة',
    badge1: 'شحن مجاني فوق €75', badge2: 'إرجاع 30 يوم', badge3: 'دفع آمن',
    trust1: 'التوصيل في جميع أنحاء أوروبا', trust2: 'شحن سريع NL',
    trust3: 'آمن ومضمون', trust4: 'إرجاع 30 يوم',
    cat_title: 'تسوق حسب الفئة', cat_sub: 'ابحث عن التجهيزات المثالية لرياضتك',
    cat_tshirts: 'تي شيرت', cat_shoes: 'أحذية', cat_shorts: 'شورت', cat_pants: 'بناطيل',
    feat_title: 'المنتجات المميزة', feat_all: 'عرض الكل →',
    new_title: 'وصل حديثاً',
    promo_title: 'التوصيل في جميع أنحاء أوروبا 🚚',
    promo_sub: 'هولندا: 1-2 أيام عمل · أوروبا: 3-5 أيام عمل · مجاني فوق €75',
    promo_cta: 'تسوق الآن',
    contact_title: 'تواصل معنا',
    contact_sub: 'أسئلة عن المنتجات أو الطلبات؟ نحن هنا للمساعدة!',
    form_name: 'الاسم الكامل', form_email: 'البريد الإلكتروني', form_phone: 'رقم الهاتف',
    form_address: 'العنوان', form_zip: 'الرمز البريدي', form_city: 'المدينة',
    form_country: 'الدولة', form_message: 'رسالتك...', form_send: 'إرسال',
    cart_title: 'سلة التسوق', cart_total: 'المجموع',
    cart_checkout: 'الدفع', cart_empty: 'سلة التسوق فارغة',
    shop_title: 'جميع المنتجات', shop_sub: 'اكتشف مجموعتنا الكاملة من الملابس الرياضية',
    filter_cat: 'الفئات', filter_all: 'الكل', filter_price: 'السعر', filter_sort: 'ترتيب',
    sort_default: 'افتراضي', sort_asc: 'السعر: من الأقل للأعلى', sort_desc: 'السعر: من الأعلى للأقل', sort_name: 'الاسم أ-ي',
    add_cart: 'أضف للسلة', added_cart: 'تمت الإضافة!',
    in_stock: 'متوفر', low_stock: 'بقي %n فقط!', limited: 'مخزون محدود',
    step_cart: 'السلة', step_info: 'البيانات', step_payment: 'الدفع',
    checkout_contact: 'بيانات التواصل', checkout_shipping: 'عنوان الشحن', checkout_payment: 'الدفع',
    demo_mode: 'وضع تجريبي', demo_notice: 'هذا عرض تجريبي. لا تتم معالجة مدفوعات حقيقية.',
    pay_btn: 'الدفع عبر Stripe (تجريبي)', secure_note: 'اتصال آمن · تشفير SSL',
    summary_title: 'ملخص الطلب', summary_subtotal: 'المجموع الفرعي', summary_shipping: 'تكلفة الشحن',
    success_title: 'تم تقديم الطلب!',
    success_sub: 'شكراً لطلبك. ستتلقى تأكيداً على بريدك الإلكتروني.',
    success_back: 'العودة للرئيسية',
    footer_tagline: 'ملابس رياضية ممتازة لكل رياضي في هولندا وأوروبا.',
    footer_shop: 'المتجر', footer_info: 'معلومات', footer_contact: 'اتصل بنا',
    footer_shipping: 'الشحن', footer_returns: 'الإرجاع',
    footer_rights: 'جميع الحقوق محفوظة.', footer_payment: 'دفع آمن عبر Stripe',
    products_found: '%n منتج وجد', quick_view: 'عرض سريع',
    shipping_nl: 'هولندا: 1-2 أيام عمل · شحن مجاني!',
    shipping_eu: 'أوروبا: 3-5 أيام عمل · شحن عادي',
  }
};

// ===================================
// 2. PRODUCT DATA
// ===================================
const PRODUCTS = [
  // T-Shirts
  { id: 1, category: 'tshirts', name: { nl: 'Pro Training T-Shirt', en: 'Pro Training T-Shirt', ar: 'تي شيرت تدريب احترافي' }, price: 29.99, badge: 'new', stock: 8, emoji: '👕', color: 'linear-gradient(135deg,#667eea,#764ba2)', featured: true },
  { id: 2, category: 'tshirts', name: { nl: 'Sport Dry-Fit Shirt', en: 'Sport Dry-Fit Shirt', ar: 'تي شيرت Dry-Fit رياضي' }, price: 24.99, badge: null, stock: 15, emoji: '👕', color: 'linear-gradient(135deg,#f093fb,#f5576c)', featured: false },
  { id: 3, category: 'tshirts', name: { nl: 'Performance T-Shirt', en: 'Performance T-Shirt', ar: 'تي شيرت أداء عالي' }, price: 34.99, oldPrice: 44.99, badge: 'sale', stock: 3, emoji: '👕', color: 'linear-gradient(135deg,#4facfe,#00f2fe)', featured: true },
  { id: 4, category: 'tshirts', name: { nl: 'Athletic Long Sleeve', en: 'Athletic Long Sleeve', ar: 'كم طويل رياضي' }, price: 39.99, badge: null, stock: 12, emoji: '👕', color: 'linear-gradient(135deg,#43e97b,#38f9d7)', featured: false },
  // Shoes
  { id: 5, category: 'shoes', name: { nl: 'Sprint Runner Pro', en: 'Sprint Runner Pro', ar: 'حذاء سبرينت رانر' }, price: 89.99, badge: 'new', stock: 5, emoji: '👟', color: 'linear-gradient(135deg,#fa709a,#fee140)', featured: true },
  { id: 6, category: 'shoes', name: { nl: 'Gym Trainer X', en: 'Gym Trainer X', ar: 'حذاء جيم ترينر' }, price: 74.99, badge: null, stock: 20, emoji: '👟', color: 'linear-gradient(135deg,#a18cd1,#fbc2eb)', featured: false },
  { id: 7, category: 'shoes', name: { nl: 'Cross Trainer Ultra', en: 'Cross Trainer Ultra', ar: 'حذاء كروس ترينر' }, price: 99.99, oldPrice: 129.99, badge: 'sale', stock: 2, emoji: '👟', color: 'linear-gradient(135deg,#84fab0,#8fd3f4)', featured: true },
  { id: 8, category: 'shoes', name: { nl: 'Outdoor Sport Schoen', en: 'Outdoor Sport Shoe', ar: 'حذاء رياضي خارجي' }, price: 64.99, badge: null, stock: 18, emoji: '👟', color: 'linear-gradient(135deg,#fddb92,#d1fdff)', featured: false },
  // Shorts
  { id: 9, category: 'shorts', name: { nl: 'Pro Gym Short', en: 'Pro Gym Short', ar: 'شورت جيم احترافي' }, price: 22.99, badge: 'new', stock: 25, emoji: '🩲', color: 'linear-gradient(135deg,#30cfd0,#667eea)', featured: true },
  { id: 10, category: 'shorts', name: { nl: 'Running Short Light', en: 'Running Short Light', ar: 'شورت جري خفيف' }, price: 19.99, badge: null, stock: 30, emoji: '🩲', color: 'linear-gradient(135deg,#f77062,#fe5196)', featured: false },
  { id: 11, category: 'shorts', name: { nl: 'Basketball Short', en: 'Basketball Short', ar: 'شورت كرة سلة' }, price: 27.99, badge: 'limited', stock: 4, emoji: '🩲', color: 'linear-gradient(135deg,#4481eb,#04befe)', featured: true },
  { id: 12, category: 'shorts', name: { nl: 'Compression Short', en: 'Compression Short', ar: 'شورت ضغط' }, price: 32.99, badge: null, stock: 14, emoji: '🩲', color: 'linear-gradient(135deg,#a1c4fd,#c2e9fb)', featured: false },
  // Pants
  { id: 13, category: 'pants', name: { nl: 'Training Jogger', en: 'Training Jogger', ar: 'بنطلون تدريب جوجر' }, price: 44.99, badge: 'new', stock: 10, emoji: '👖', color: 'linear-gradient(135deg,#0ba360,#3cba92)', featured: true },
  { id: 14, category: 'pants', name: { nl: 'Slim Fit Sportbroek', en: 'Slim Fit Sport Pants', ar: 'بنطلون رياضي سليم فيت' }, price: 39.99, badge: null, stock: 22, emoji: '👖', color: 'linear-gradient(135deg,#e0c3fc,#8ec5fc)', featured: false },
  { id: 15, category: 'pants', name: { nl: 'Fleece Joggingbroek', en: 'Fleece Jogger Pants', ar: 'بنطلون فليس' }, price: 49.99, oldPrice: 64.99, badge: 'sale', stock: 6, emoji: '👖', color: 'linear-gradient(135deg,#fccb90,#d57eeb)', featured: true },
  { id: 16, category: 'pants', name: { nl: 'Windbreaker Pants', en: 'Windbreaker Pants', ar: 'بنطلون واقي من الريح' }, price: 54.99, badge: 'limited', stock: 3, emoji: '👖', color: 'linear-gradient(135deg,#96fbc4,#f9f586)', featured: false },
];

// ===================================
// 3. STATE
// ===================================
let currentLang = localStorage.getItem('sa_lang') || 'nl';
let cart = JSON.parse(localStorage.getItem('sa_cart') || '[]');
let activeFilters = { categories: [], maxPrice: 200, sort: 'default' };

// ===================================
// 4. UTILITIES
// ===================================
const t = (key, vars = {}) => {
  let str = TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS['nl'][key] || key;
  Object.entries(vars).forEach(([k, v]) => str = str.replace(`%${k}`, v));
  return str;
};

const formatPrice = (p) => `€${p.toFixed(2).replace('.', ',')}`;

const showToast = (msg) => {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2800);
};

// ===================================
// 5. LANGUAGE SYSTEM
// ===================================
const applyLang = () => {
  const html = document.documentElement;
  html.lang = currentLang;
  html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (TRANSLATIONS[currentLang][key]) el.textContent = TRANSLATIONS[currentLang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (TRANSLATIONS[currentLang][key]) el.placeholder = TRANSLATIONS[currentLang][key];
  });

  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });
};

// ===================================
// 6. CART SYSTEM
// ===================================
const saveCart = () => localStorage.setItem('sa_cart', JSON.stringify(cart));

const addToCart = (productId) => {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart();
  updateCartUI();
  showToast(`${product.name[currentLang]} ${t('added_cart')}`);
  openCart();
};

const removeFromCart = (productId) => {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
};

const changeQty = (productId, delta) => {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
};

const getCartTotal = () => cart.reduce((sum, item) => {
  const product = PRODUCTS.find(p => p.id === item.id);
  return sum + (product ? product.price * item.qty : 0);
}, 0);

const getCartCount = () => cart.reduce((sum, item) => sum + item.qty, 0);

const updateCartUI = () => {
  const count = getCartCount();
  const countEls = document.querySelectorAll('#cartCount');
  countEls.forEach(el => {
    el.textContent = count;
    el.classList.toggle('visible', count > 0);
  });
  renderCartItems();
};

const renderCartItems = () => {
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  const emptyEl = document.getElementById('cartEmpty');
  const totalEl = document.getElementById('cartTotal');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = '';
    if (footerEl) footerEl.style.display = 'none';
    if (emptyEl) emptyEl.style.display = 'flex';
    return;
  }
  if (emptyEl) emptyEl.style.display = 'none';
  if (footerEl) footerEl.style.display = 'block';

  itemsEl.innerHTML = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return '';
    return `
      <div class="cart-item">
        <div class="cart-item-img">
          <div style="width:100%;height:100%;background:${product.color};display:flex;align-items:center;justify-content:center;font-size:1.8rem">${product.emoji}</div>
        </div>
        <div class="cart-item-info">
          <h4>${product.name[currentLang]}</h4>
          <div class="item-price">${formatPrice(product.price)}</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="changeQty(${product.id}, -1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${product.id}, +1)">+</button>
            <button class="remove-btn" onclick="removeFromCart(${product.id})">✕</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (totalEl) totalEl.textContent = formatPrice(getCartTotal());
};

const openCart = () => {
  document.getElementById('cartDrawer')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
};

const closeCart = () => {
  document.getElementById('cartDrawer')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
};

// ===================================
// 7. PRODUCT CARD RENDERER
// ===================================
const createProductCard = (product) => {
  const badgeMap = { new: 'badge-new', sale: 'badge-sale', limited: 'badge-limited' };
  const badgeLabelMap = { new: 'NEW', sale: 'SALE', limited: 'LIMITED' };
  const stockText = product.stock <= 5
    ? `<span class="product-stock low">${t('low_stock', { n: product.stock })}</span>`
    : product.stock <= 10
      ? `<span class="product-stock">${t('limited')}</span>`
      : '';

  return `
    <div class="product-card" data-id="${product.id}" data-category="${product.category}">
      <div class="product-img-wrap">
        <div class="product-img-placeholder" style="background:${product.color}">
          <span style="font-size:3.5rem">${product.emoji}</span>
        </div>
        ${product.badge ? `<span class="product-badge ${badgeMap[product.badge]}">${badgeLabelMap[product.badge]}</span>` : ''}
        <div class="product-img-overlay">
          <button class="quick-view-btn">${t('quick_view')}</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${t(`cat_${product.category}`)}</div>
        <div class="product-name">${product.name[currentLang]}</div>
        ${stockText}
        <div class="product-footer">
          <div class="product-price">
            ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
            ${formatPrice(product.price)}
          </div>
          <button class="add-cart-btn" onclick="addToCart(${product.id})" aria-label="${t('add_cart')}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;
};

// ===================================
// 8. FEATURED PRODUCTS (index.html)
// ===================================
const renderFeatured = () => {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 4);
  grid.innerHTML = featured.map(createProductCard).join('');
};

const renderNew = () => {
  const grid = document.getElementById('newGrid');
  if (!grid) return;
  const recent = [...PRODUCTS].slice(-4).reverse();
  grid.innerHTML = recent.map(createProductCard).join('');
};

// ===================================
// 9. SHOP PAGE FILTERING & RENDERING
// ===================================
const getFilteredProducts = () => {
  let products = [...PRODUCTS];

  // Category filter
  if (activeFilters.categories.length > 0) {
    products = products.filter(p => activeFilters.categories.includes(p.category));
  }

  // Price filter
  products = products.filter(p => p.price <= activeFilters.maxPrice);

  // Sort
  if (activeFilters.sort === 'price-asc') products.sort((a, b) => a.price - b.price);
  else if (activeFilters.sort === 'price-desc') products.sort((a, b) => b.price - a.price);
  else if (activeFilters.sort === 'name') products.sort((a, b) => a.name[currentLang].localeCompare(b.name[currentLang]));

  return products;
};

const renderShopGrid = () => {
  const grid = document.getElementById('shopGrid');
  const countEl = document.getElementById('productCount');
  if (!grid) return;

  const products = getFilteredProducts();
  countEl && (countEl.textContent = t('products_found', { n: products.length }));
  grid.innerHTML = products.length > 0
    ? products.map(createProductCard).join('')
    : '<p style="grid-column:1/-1;text-align:center;color:var(--gray-500);padding:60px 0">Geen producten gevonden</p>';
};

// Pre-select category from URL
const initShopFilters = () => {
  const params = new URLSearchParams(location.search);
  const cat = params.get('cat');

  if (cat && cat !== 'all') {
    const allCheckbox = document.getElementById('catAll');
    if (allCheckbox) allCheckbox.checked = false;
    const catCheckbox = document.querySelector(`.cat-filter[value="${cat}"]`);
    if (catCheckbox) {
      catCheckbox.checked = true;
      activeFilters.categories = [cat];
    }
  }

  // Category checkboxes
  document.querySelectorAll('.cat-filter').forEach(cb => {
    cb.addEventListener('change', () => {
      const checked = [...document.querySelectorAll('.cat-filter:checked')].map(c => c.value);
      activeFilters.categories = checked;
      const allCb = document.getElementById('catAll');
      if (allCb) allCb.checked = checked.length === 0;
      renderShopGrid();
    });
  });

  const allCb = document.getElementById('catAll');
  if (allCb) {
    allCb.addEventListener('change', () => {
      if (allCb.checked) {
        document.querySelectorAll('.cat-filter').forEach(cb => cb.checked = false);
        activeFilters.categories = [];
        renderShopGrid();
      }
    });
  }

  const priceRange = document.getElementById('priceRange');
  const priceVal = document.getElementById('priceVal');
  if (priceRange && priceVal) {
    priceRange.addEventListener('input', () => {
      activeFilters.maxPrice = +priceRange.value;
      priceVal.textContent = `€${priceRange.value}`;
      renderShopGrid();
    });
  }

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      activeFilters.sort = sortSelect.value;
      renderShopGrid();
    });
  }

  // View toggle
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const grid = document.getElementById('shopGrid');
      if (grid) {
        grid.classList.toggle('list-view', btn.dataset.view === 'list');
      }
    });
  });

  renderShopGrid();
};

// ===================================
// 10. CHECKOUT PAGE
// ===================================
const renderCheckoutSummary = () => {
  const itemsEl = document.getElementById('summaryItems');
  const subtotalEl = document.getElementById('summarySubtotal');
  const shippingEl = document.getElementById('summaryShipping');
  const totalEl = document.getElementById('summaryTotal');
  if (!itemsEl) return;

  const subtotal = getCartTotal();
  const isFreeShipping = subtotal >= 75;
  const shipping = isFreeShipping ? 0 : 5.95;

  itemsEl.innerHTML = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return '';
    return `
      <div class="summary-item">
        <div class="summary-item-img">
          <div style="width:100%;height:100%;background:${product.color};display:flex;align-items:center;justify-content:center;font-size:1.4rem">${product.emoji}</div>
        </div>
        <div class="summary-item-name">${product.name[currentLang]}</div>
        <div class="summary-item-qty">×${item.qty}</div>
        <div class="summary-item-price">${formatPrice(product.price * item.qty)}</div>
      </div>
    `;
  }).join('') || '<p style="color:var(--gray-500);font-size:.85rem">Geen items</p>';

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (shippingEl) shippingEl.textContent = isFreeShipping ? 'Gratis' : formatPrice(shipping);
  if (totalEl) totalEl.textContent = formatPrice(subtotal + shipping);
};

const initCheckout = () => {
  if (!document.getElementById('payBtn')) return;

  renderCheckoutSummary();

  // Shipping estimate based on country
  const countrySelect = document.getElementById('ckCountry');
  const shippingText = document.getElementById('shippingText');
  if (countrySelect && shippingText) {
    const updateShipping = () => {
      shippingText.textContent = countrySelect.value === 'nl'
        ? t('shipping_nl')
        : t('shipping_eu');
    };
    updateShipping();
    countrySelect.addEventListener('change', updateShipping);
  }

  // Payment method selection
  document.querySelectorAll('.payment-method').forEach(pm => {
    pm.addEventListener('click', () => {
      document.querySelectorAll('.payment-method').forEach(p => p.classList.remove('active'));
      pm.classList.add('active');
      pm.querySelector('input[type="radio"]').checked = true;
    });
  });

  // Pay button
  const payBtn = document.getElementById('payBtn');
  payBtn.addEventListener('click', () => {
    const name = document.getElementById('ckName')?.value.trim();
    const email = document.getElementById('ckEmail')?.value.trim();
    const address = document.getElementById('ckAddress')?.value.trim();
    const zip = document.getElementById('ckZip')?.value.trim();
    const city = document.getElementById('ckCity')?.value.trim();

    if (!name || !email || !address || !zip || !city) {
      showToast('Vul alle verplichte velden in');
      return;
    }

    // Simulate processing
    payBtn.textContent = '⏳ Verwerken...';
    payBtn.disabled = true;

    setTimeout(() => {
      // Show success
      const overlay = document.getElementById('successOverlay');
      const details = document.getElementById('successDetails');
      if (details) {
        details.innerHTML = `
          <p><strong>Naam:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Adres:</strong> ${address}, ${zip} ${city}</p>
          <p><strong>Totaal:</strong> ${formatPrice(getCartTotal())}</p>
          <p style="margin-top:8px;color:var(--green);font-weight:600">✓ Betaling gesimuleerd (Demo)</p>
        `;
      }
      if (overlay) overlay.style.display = 'flex';
      // Clear cart
      cart = [];
      saveCart();
      updateCartUI();
    }, 1800);
  });
};

// ===================================
// 11. NAVBAR SCROLL & HAMBURGER
// ===================================
const initNavbar = () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  document.getElementById('cartBtn')?.addEventListener('click', openCart);
  document.getElementById('closeCart')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
};

// ===================================
// 12. CONTACT FORM
// ===================================
const initContactForm = () => {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('✓ Bericht verzonden!');
    form.reset();
  });
};

// ===================================
// 13. LANGUAGE SWITCHER EVENTS
// ===================================
const initLangSwitcher = () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem('sa_lang', currentLang);
      applyLang();
      // Re-render products if on those pages
      renderFeatured();
      renderNew();
      renderShopGrid();
      renderCartItems();
      renderCheckoutSummary();
    });
  });
};

// ===================================
// 14. INIT
// ===================================
document.addEventListener('DOMContentLoaded', () => {
  applyLang();
  initNavbar();
  initLangSwitcher();
  updateCartUI();
  renderFeatured();
  renderNew();
  initShopFilters();
  initContactForm();
  initCheckout();
});
