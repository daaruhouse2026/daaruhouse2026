// ============================================================
//  DAARU HOUSE — App Logic
//  Sections:
//  1. State
//  2. Init
//  3. Page Navigation
//  4. Render: Featured
//  5. Render: Reviews
//  6. Render: Filters
//  7. Render: Menu
//  8. Cart Logic
//  9. Checkout
// 10. Payment
// 11. UI Helpers (toast, theme, mobile menu)
// ============================================================


// ===== 1. STATE =====
let cart = {};

let activeFilter = "All Items";


// localstorage for cart
function saveCart() {
  localStorage.setItem("daaruCart", JSON.stringify(cart));
}

function loadCart() {
  const saved = localStorage.getItem("daaruCart");
  if (saved) {
    cart = JSON.parse(saved);
  }
}

// ===== 2. INIT =====
document.addEventListener('DOMContentLoaded', () => {
   loadCart();
  renderFeatured();
  renderReviews();
  renderFilters();
  renderMenu();
  updateCartUI();

  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
  });
});


// ===== 3. PAGE NAVIGATION =====
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  const pageMap = {
    home:     'homePage',
    menu:     'menuPage',
    checkout: 'checkoutPage',
    payment:  'paymentPage',
  };

  const el = document.getElementById(pageMap[page]);
  if (el) {
    el.classList.add('active');
    window.scrollTo(0, 0);
  }

  if (page === 'checkout') renderCheckout();
  if (page === 'payment')  renderPayment();
}

function scrollToSection(id) {
  showPage('home');
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}


// ===== 4. RENDER: FEATURED =====


function renderFeatured() {
  const container = document.getElementById('featuredDishes');
  container.innerHTML = FEATURED.map(d => {

    const imageHTML = d.image
      ? `<img src="${d.image}" 
              alt="${d.name}"
              style="width:100%;height:100%;object-fit:cover;"
              onerror="this.style.display='none'">`
      : `<span style="position:relative;z-index:1;font-size:70px">${d.emoji}</span>`;

    return `
      <div class="dish-card">
        <div class="dish-img">
          <span class="dish-badge ${d.veg ? 'badge-veg' : 'badge-nonveg'}">
            ${d.veg ? '🟢 VEG' : '🔴 NON-VEG'}
          </span>
          ${imageHTML}
        </div>
        <div class="dish-body">
          <div class="dish-name">${d.name}</div>
          <div class="dish-cat">${d.cat}</div>
          <div class="dish-footer">
            <div class="dish-price">${d.price} <span>THB</span></div>
            <button class="btn-add" onclick="addToCart(${d.id})">+ Add</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}


// ===== 5. RENDER: REVIEWS =====
function renderReviews() {
  document.getElementById('reviewsGrid').innerHTML = REVIEWS.map(r => `
    <div class="review-card">
      <div class="review-quote">"</div>
      <p class="review-text">${r.text}</p>
      <div class="review-stars">${'★'.repeat(r.stars)}</div>
      <div class="review-author">
        <div class="review-avatar">${r.init}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-loc">📍 ${r.loc}</div>
        </div>
      </div>
    </div>
  `).join('');
}


// ===== 6. RENDER: FILTERS =====
function renderFilters() {
  document.getElementById('filterBtns').innerHTML = FILTERS.map(f => `
    <button
      class="filter-btn ${f === activeFilter ? 'active' : ''}"
      onclick="setFilter('${f}')">
      ${f}
    </button>
  `).join('');
}

function setFilter(f) {
  activeFilter = f;
  renderFilters();
  filterMenu();
}


// ===== 7. RENDER: MENU =====
function renderMenu() {
  filterMenu();
}


/*
function filterMenu() {
  const query = document.getElementById('menuSearch').value.toLowerCase();
  let items = MENU_DATA;

  // Apply category / veg filter
if (activeFilter !== "All Items") {
  items = items.filter(i => i.cat === activeFilter);
}
  // Apply search query
  if (query) {
    items = items.filter(i =>
      i.name.toLowerCase().includes(query) ||
      i.cat.toLowerCase().includes(query)
    );
  }

  const categories = [...new Set(items.map(i => i.cat))];
  const menuContent = document.getElementById('menuContent');

  if (!items.length) {
    menuContent.innerHTML = '<div class="no-results">🍽 No dishes found. Try a different search.</div>';
    return;
  }

  menuContent.innerHTML = categories.map(cat => {
    const catItems = items.filter(i => i.cat === cat);
    return `
      <div class="menu-category">
        <div class="cat-header">
          <h3 class="cat-title">${cat}</h3>
          <div class="cat-line"></div>
        </div>
        <div class="menu-items-grid">
          ${catItems.map(item => renderMenuCard(item)).join('')}
        </div>
      </div>
    `;
  }).join('');
}*/

function filterMenu() {
  const query = document.getElementById('menuSearch').value.toLowerCase();

  // Search always from all items
  let items = MENU_DATA.filter(i =>
    i.name.toLowerCase().includes(query) ||
    i.cat.toLowerCase().includes(query)
  );

  // Category filter apply only if no search text
  if (!query && activeFilter !== "All Items") {
    items = items.filter(i => i.cat === activeFilter);
  }

  const categories = [...new Set(items.map(i => i.cat))];
  const menuContent = document.getElementById('menuContent');

  if (!items.length) {
    menuContent.innerHTML =
      '<div class="no-results">🍽 No dishes found.</div>';
    return;
  }

  menuContent.innerHTML = categories.map(cat => {
    const catItems = items.filter(i => i.cat === cat);
    return `
      <div class="menu-category">
        <div class="cat-header">
          <h3 class="cat-title">${cat}</h3>
          <div class="cat-line"></div>
        </div>
        <div class="menu-items-grid">
          ${catItems.map(item => renderMenuCard(item)).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function renderMenuCard(item) {
  const qty = cart[item.id] ? cart[item.id].qty : 0;

  // Image unte photo, lekapothe emoji show cheyyi
  const imageHTML = item.image
    ? `<img src="${item.image}" 
            alt="${item.name}"
            style="width:100%;height:100%;object-fit:cover;"
            onerror="this.style.display='none'">`
    : `<span style="position:relative;z-index:0;font-size:56px">${item.emoji}</span>`;

  return `
    <div class="menu-card" id="card-${item.id}">
      <div class="menu-card-img">
        <span class="dish-badge ${item.veg ? 'badge-veg' : 'badge-nonveg'}"
              style="position:absolute;top:8px;right:8px;z-index:1">
          ${item.veg ? '🟢' : '🔴'}
        </span>
        ${imageHTML}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-name">${item.name}</div>
        <div class="menu-card-cat">${item.cat}</div>
        <div class="menu-card-footer">
          <div class="menu-price">${item.price} <sup>THB</sup></div>
          ${qty === 0
            ? `<button class="btn-add-sm" onclick="addToCart(${item.id})">+</button>`
            : `<div class="qty-control">
                <button class="qty-btn" onclick="decQty(${item.id})">−</button>
                <span class="qty-num">${qty}</span>
                <button class="qty-btn" onclick="addToCart(${item.id})">+</button>
               </div>`
          }
        </div>
      </div>
    </div>
  `;
}

// ===== 8. CART LOGIC =====
function addToCart(id) {
  const item = MENU_DATA.find(i => i.id === id);
  if (!item) return;
  if (!cart[id]) cart[id] = { item, qty: 0 };
  cart[id].qty++;
  saveCart();
  updateCartUI();
  refreshCardQty(id);
  showToast(`${item.emoji} ${item.name} added!`);
}

function decQty(id) {
  if (!cart[id]) return;
  cart[id].qty--;
  if (cart[id].qty <= 0) delete cart[id];
  saveCart();
  updateCartUI();
  refreshCardQty(id);
}

function refreshCardQty(id) {
  const item = MENU_DATA.find(i => i.id === id);
  const card = document.getElementById(`card-${id}`);
  if (!card || !item) return;

  const footer = card.querySelector('.menu-card-footer');
  if (!footer) return;

  const qty = cart[id] ? cart[id].qty : 0;
  const priceHTML = footer.querySelector('.menu-price').outerHTML;

  footer.innerHTML = priceHTML + (qty === 0
    ? `<button class="btn-add-sm" onclick="addToCart(${id})">+</button>`
    : `<div class="qty-control">
        <button class="qty-btn" onclick="decQty(${id})">−</button>
        <span class="qty-num">${qty}</span>
        <button class="qty-btn" onclick="addToCart(${id})">+</button>
       </div>`
  );
}

function getTotal() {
  return Object.values(cart).reduce((sum, c) => sum + c.item.price * c.qty, 0);
}

function getTotalQty() {
  return Object.values(cart).reduce((sum, c) => sum + c.qty, 0);
}

function updateCartUI() {
  document.getElementById('cartCount').textContent = getTotalQty();
  renderCartItems();
  const total = getTotal();
  document.getElementById('cartSubtotal').textContent = total + ' THB';
  document.getElementById('cartTotal').textContent    = total + ' THB';
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const items = Object.values(cart);

  if (!items.length) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🍽</div>
        <p>Your cart is empty.<br>Add some delicious items!</p>
      </div>`;
    return;
  }

  container.innerHTML = items.map(({ item, qty }) => `
    <div class="cart-item">
      <div class="cart-item-icon">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price * qty} THB</div>
      </div>
      <div class="cart-item-qty">
        <button class="cqty-btn" onclick="decQty(${item.id})">−</button>
        <span style="font-family:'Cinzel',serif;font-size:13px;min-width:18px;text-align:center">${qty}</span>
        <button class="cqty-btn" onclick="addToCart(${item.id})">+</button>
      </div>
    </div>
  `).join('');
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
}

function goToCheckout() {
  if (!getTotalQty()) { showToast('Please add items first!'); return; }
  closeCart();
  showPage('checkout');
}


// ===== 9. CHECKOUT =====
function renderCheckout() {
  const container = document.getElementById('checkoutItems');
  const items = Object.values(cart);

  container.innerHTML = items.map(({ item, qty }) => `
    <div class="summary-item">
      <span class="summary-item-name">${item.emoji} ${item.name} × ${qty}</span>
      <span class="summary-item-price">${item.price * qty} THB</span>
    </div>
  `).join('');

  document.getElementById('checkoutTotal').textContent = getTotal() + ' THB';
}

function proceedToPayment() {
  const name  = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  if (!name || !phone) {
    showToast('Please fill in your name and phone number');
    return;
  }
  showPage('payment');
}


// ===== 10. PAYMENT =====
function renderPayment() {
  document.getElementById('paymentAmt').textContent = getTotal();
}

function selectPayment(el) {
  document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
  el.classList.add('selected');
}

function placeOrder() {
  document.getElementById('successModal').classList.add('open');
  cart = {};
  localStorage.removeItem("daaruCart");
  updateCartUI();
}

function closeSuccess() {
  document.getElementById('successModal').classList.remove('open');
  showPage('home');
}


// ===== 11. UI HELPERS =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? '' : 'dark');
  document.querySelector('.theme-toggle').textContent = isDark ? '🌙' : '☀️';
}

function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
