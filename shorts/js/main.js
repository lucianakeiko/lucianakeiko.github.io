const WHATSAPP = '5511993832671';

const COLOR_MAP = {
  preto:   { label: 'Preto',   hex: '#1a1a1a' },
  branco:  { label: 'Branco',  hex: '#f5f5f5' },
  vermelho:{ label: 'Vermelho',hex: '#c0392b' },
  azul:    { label: 'Azul',    hex: '#1a3a8a' },
  rosa:    { label: 'Rosa',    hex: '#e84393' },
  lilas:   { label: 'Lilás',   hex: '#b39ddb' },
  verde:   { label: 'Verde',   hex: '#2d5016' },
  amarelo: { label: 'Amarelo', hex: '#f1c40f' },
  dourado: { label: 'Dourado', hex: '#c9a227' },
};

const PRODUCTS = [
  {
    id: 1,
    name: 'Split Dragon',
    image: 'modelo_01.png',
    colors: ['lilas', 'preto'],
    badge: 'Exclusivo',
    price: 58,
  },
  {
    id: 2,
    name: 'CKL Warrior',
    image: 'modelo_02.png',
    colors: ['vermelho', 'azul', 'dourado'],
    badge: 'Clássico',
    price: 87,
  },
  {
    id: 3,
    name: 'Golden Eagle',
    image: 'modelo_03.png',
    colors: ['branco', 'vermelho', 'azul', 'dourado'],
    badge: 'Premium',
    price: 87,
  },
  {
    id: 4,
    name: 'Royal Navy',
    image: 'modelo_04.png',
    colors: ['azul', 'vermelho', 'dourado'],
    badge: 'Clássico',
    price: 87,
  },
  {
    id: 5,
    name: 'Pink Shadow',
    image: 'modelo_05.png',
    colors: ['preto', 'rosa', 'dourado'],
    badge: 'Exclusivo',
    price: 87,
  },
  {
    id: 6,
    name: 'Tribal Pink',
    image: 'modelo_06.png',
    colors: ['rosa', 'preto', 'dourado'],
    badge: 'Novo',
    price: 87,
  },
  {
    id: 7,
    name: 'Dok To Green',
    image: 'modelo_07.png',
    colors: ['verde', 'dourado'],
    badge: 'Premium',
    price: 87,
  },
  {
    id: 8,
    name: 'Lucklife Black',
    image: 'modelo_08.png',
    colors: ['preto', 'rosa', 'dourado'],
    badge: 'Exclusivo',
    price: 87,
  },
  {
    id: 9,
    name: 'Dojo Blue',
    image: 'modelo_09.png',
    colors: ['azul', 'amarelo'],
    badge: 'Novo',
    price: 87,
  },
];

const SIZES = ['P', 'M', 'G', 'GG'];

const selectedSizes = {};

function getAllColors() {
  const set = new Set();
  PRODUCTS.forEach((p) => p.colors.forEach((c) => set.add(c)));
  return [...set].sort((a, b) =>
    COLOR_MAP[a].label.localeCompare(COLOR_MAP[b].label, 'pt-BR')
  );
}

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function buildWhatsAppUrl(product, size) {
  const msg = encodeURIComponent(
    `Olá! Tenho interesse no short *${product.name}* (${formatPrice(product.price)}) no tamanho *${size}*. Pode me passar mais informações?`
  );
  return `https://wa.me/${WHATSAPP}?text=${msg}`;
}

function whatsAppIcon() {
  return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>`;
}

function renderFilters(activeColor) {
  const container = document.querySelector('.filters');
  const colors = getAllColors();

  const tags = [
    `<button class="filter-tag${activeColor === 'todos' ? ' active' : ''}" data-color="todos">Todos</button>`,
    ...colors.map(
      (c) => `
      <button class="filter-tag${activeColor === c ? ' active' : ''}" data-color="${c}">
        <span class="filter-dot" style="background:${COLOR_MAP[c].hex}"></span>
        ${COLOR_MAP[c].label}
      </button>`
    ),
  ];

  container.innerHTML = tags.join('');

  container.querySelectorAll('.filter-tag').forEach((btn) => {
    btn.addEventListener('click', () => {
      renderFilters(btn.dataset.color);
      renderProducts(btn.dataset.color);
    });
  });
}

function renderProducts(filterColor = 'todos') {
  const grid = document.getElementById('product-grid');
  const empty = document.getElementById('empty-state');

  const filtered =
    filterColor === 'todos'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.colors.includes(filterColor));

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.hidden = false;
    return;
  }

  empty.hidden = true;

  grid.innerHTML = filtered
    .map((product) => {
      if (!selectedSizes[product.id]) selectedSizes[product.id] = 'M';

      const colorChips = product.colors
        .map(
          (c) =>
            `<span class="color-chip">${COLOR_MAP[c].label}</span>`
        )
        .join('');

      const sizeBtns = SIZES.map(
        (s) =>
          `<button class="size-btn${selectedSizes[product.id] === s ? ' selected' : ''}" data-product="${product.id}" data-size="${s}">${s}</button>`
      ).join('');

      return `
      <article class="card" data-id="${product.id}">
        <div class="card-image-wrap">
          <span class="card-badge">${product.badge}</span>
          <span class="card-price"><span class="price-icon" aria-hidden="true">🥊</span>${formatPrice(product.price)}<span class="price-icon" aria-hidden="true">🥊</span></span>
          <img src="${product.image}" alt="Short Muay Thai ${product.name}" loading="lazy">
        </div>
        <div class="card-body">
          <h3 class="card-title">${product.name}</h3>
          <div class="card-colors">${colorChips}</div>
          <div class="card-sizes">
            <span class="sizes-label">Tamanho</span>
            <div class="size-options">${sizeBtns}</div>
          </div>
          <a class="btn-wa" href="${buildWhatsAppUrl(product, selectedSizes[product.id])}" target="_blank" rel="noopener noreferrer" data-product="${product.id}">
            ${whatsAppIcon()}
            Comprar no WhatsApp
          </a>
        </div>
      </article>`;
    })
    .join('');

  grid.querySelectorAll('.size-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const productId = Number(btn.dataset.product);
      selectedSizes[productId] = btn.dataset.size;

      const card = btn.closest('.card');
      card.querySelectorAll('.size-btn').forEach((b) => b.classList.remove('selected'));
      btn.classList.add('selected');

      const product = PRODUCTS.find((p) => p.id === productId);
      const waLink = card.querySelector('.btn-wa');
      waLink.href = buildWhatsAppUrl(product, btn.dataset.size);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderFilters('todos');
  renderProducts('todos');
});
