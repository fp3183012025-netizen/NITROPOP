const PRODUCTS = [{"id": "p1", "name": "Explosión Cítrica", "price": 2.5, "desc": "Limón, naranja y maracuyá — muy refrescante.", "img": "A_logo_for_a_nitrogen-infused_beverage_brand_named.png"}, {"id": "p2", "name": "Fresa Nube", "price": 2.8, "desc": "Sabor a fresa con espuma aterciopelada.", "img": "A_logo_for_a_nitrogen-infused_beverage_brand_named.png"}, {"id": "p3", "name": "Mango Nitro", "price": 3.0, "desc": "Mango tropical cremoso.", "img": "A_logo_for_a_nitrogen-infused_beverage_brand_named.png"}, {"id": "p4", "name": "Pack 4 sabores", "price": 9.5, "desc": "Mini-tasters de los 4 sabores más populares.", "img": "A_logo_for_a_nitrogen-infused_beverage_brand_named.png"}];
const CART_KEY = 'nitropop_cart_v1';

function getCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }catch(e){return {}} }
function saveCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); }
function formatPrice(n){ return 'S/ ' + n.toFixed(2); }

function renderCart(){
  const container = document.getElementById('cart-contents');
  const actions = document.getElementById('cart-actions');
  const cart = getCart();
  if(!Object.keys(cart).length){
    container.innerHTML = '<p>Tu carrito está vacío.</p><p><a href="index.html">Seguir comprando</a></p>';
    actions.innerHTML = '';
    return;
  }
  let html = '<table class="cart-table"><thead><tr><th>Producto</th><th>Cant.</th><th>Precio</th><th>Subtotal</th></tr></thead><tbody>';
  let total = 0;
  Object.keys(cart).forEach(id => {
    const qty = cart[id];
    const p = PRODUCTS.find(x=>x.id===id);
    const sub = p.price * qty;
    total += sub;
    html += `<tr data-id="${id}"><td>${p.name}</td><td><button class="dec">-</button> ${qty} <button class="inc">+</button></td><td>${formatPrice(p.price)}</td><td>${formatPrice(sub)}</td></tr>`;
  });
  html += '</tbody></table>';
  html += `<p class="total">Total: <strong>${formatPrice(total)}</strong></p>`;
  container.innerHTML = html;
  actions.innerHTML = '<button id="clearCart" class="btn">Vaciar carrito</button> <button id="checkout" class="cta">Simular pago</button>';
  // bind inc/dec
  document.querySelectorAll('.inc').forEach(b => b.addEventListener('click', (e)=> {
    const id = e.target.closest('tr').dataset.id;
    const cart = getCart(); cart[id] = (cart[id]||0)+1; saveCart(cart); renderCart();
  }));
  document.querySelectorAll('.dec').forEach(b => b.addEventListener('click', (e)=> {
    const id = e.target.closest('tr').dataset.id;
    const cart = getCart(); cart[id] = Math.max(0,(cart[id]||0)-1); if(cart[id]===0) delete cart[id]; saveCart(cart); renderCart();
  }));
  document.getElementById('clearCart').addEventListener('click', ()=> { localStorage.removeItem(CART_KEY); renderCart(); alert('Carrito vaciado'); });
  document.getElementById('checkout').addEventListener('click', ()=> { localStorage.removeItem(CART_KEY); renderCart(); alert('Simulación completada. Gracias por tu compra.'); });
}

renderCart();
