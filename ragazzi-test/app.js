const categories = [
  ['01','Vorspeisen',''],['02','Pizza','Spezial Pizza · vegane Pizza · Calzone · Family - Party Pizza'],['03','Pizzabrötchen',''],['04','Nudelgerichte',''],['05','Aus dem Backofen',''],['06','Salate',''],['07','Beilagen',''],['08','Snacks / Menüs',''],['09','Fleisch-Gerichte','Gyros vom Hähnchen'],['10','indische Gerichte','vegetarische Hauptgerichte · Hauptgerichte Hähnchen · Hauptgerichte Lamm · Biryani · indisches Brot'],['11','Desserts',''],['12','Getränke','']
];
const categoryRoot = document.getElementById('categories');
categories.forEach(([n,name,sub])=>{const el=document.createElement('article');el.className='category';el.innerHTML=`<span class="number">${n}</span><h3>${name}</h3><p>${sub||'Auswahl aus der bestehenden Speisekarte'}</p>`;el.addEventListener('click',()=>alert(`${name}: Die vollständige Speisekarte wird als nächster Schritt eingebaut.`));categoryRoot.appendChild(el)});
const panel=document.getElementById('cartPanel'),overlay=document.getElementById('overlay');
function openCart(){panel.classList.add('open');overlay.classList.add('show')}function closeCart(){panel.classList.remove('open');overlay.classList.remove('show')}
document.getElementById('cartButton').addEventListener('click',openCart);document.getElementById('closeCart').addEventListener('click',closeCart);overlay.addEventListener('click',closeCart);
document.getElementById('deliveryButton').addEventListener('click',()=>document.getElementById('menu').scrollIntoView({behavior:'smooth'}));
