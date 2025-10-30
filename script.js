// Nitropop tropical — interactividad y carrito (simulado)
const PRODUCTS = [{"id": "p1", "name": "Explosión Cítrica", "price": 2.5, "desc": "Limón, naranja y maracuyá — muy refrescante.", "img": "A_logo_for_a_nitrogen-infused_beverage_brand_named.png"}, {"id": "p2", "name": "Fresa Nube", "price": 2.8, "desc": "Sabor a fresa con espuma aterciopelada.", "img": "A_logo_for_a_nitrogen-infused_beverage_brand_named.png"}, {"id": "p3", "name": "Mango Nitro", "price": 3.0, "desc": "Mango tropical cremoso.", "img": "A_logo_for_a_nitrogen-infused_beverage_brand_named.png"}, {"id": "p4", "name": "Pack 4 sabores", "price": 9.5, "desc": "Mini-tasters de los 4 sabores más populares.", "img": "A_logo_for_a_nitrogen-infused_beverage_brand_named.png"}];

// helpers
function $(sel){return document.querySelector(sel)}
function $all(sel){return document.querySelectorAll(sel)}

function formatPrice(n){ return 'S/ ' + n.toFixed(2); }

// Render products on tienda
function renderProducts(){
  const list = $('#product-list');
  if(!list) return;
  list.innerHTML = PRODUCTS.map(p => `
    <article class="card">
      <img src="${p.img || ''}" alt="${p.name}" class="prod-img"/>
      <h3>${p.name}</h3>
      <p class="muted">${p.desc}</p>
      <div class="product-row">
        <strong>${formatPrice(p.price)}</strong>
        <button class="btn-buy" data-id="${p.id}">Añadir</button>
      </div>
    </article>
  `).join('');
  // bind
  $all('.btn-buy').forEach(b => b.addEventListener('click', (e)=> {
    const id = e.currentTarget.dataset.id;
    addToCart(id);
  }));
}

// CART (localStorage)
const CART_KEY = 'nitropop_cart_v1';
function getCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }catch(e){return {} }}
function saveCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); updateCartCount(); }
function addToCart(id){
  const cart = getCart();
  cart[id] = (cart[id]||0) + 1;
  saveCart(cart);
  alert('Añadido al carrito');
}
function updateCartCount(){
  const cart = getCart();
  const count = Object.values(cart).reduce((a,b)=>a+b,0);
  const el = document.getElementById('cart-count');
  if(el) el.textContent = count;
}
function init(){
  renderProducts();
  updateCartCount();
  document.getElementById('year').textContent = new Date().getFullYear();
  // contact form
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = form.name.value.trim();
      $('#formMsg').textContent = '¡Gracias, ' + (name || 'Amig@') + '! Recibimos tu mensaje.';
      form.reset();
    });
  }
}

init();
