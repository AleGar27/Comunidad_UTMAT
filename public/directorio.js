// Datos de Muestra de Vendedores
const VENDEDORES_EJEMPLO = [
  {
    _id: "demo_1",
    nombrePadre: "María López García",
    nombreAlumno: "Juan Pérez López",
    grupo: "TI 3°A",
    telefono: "4491234567",
    oficio: "Mantenimiento PC Express",
    categoria: "Oficio",
    descripcion: "Reparación de computadoras, limpieza interna, cambio de pasta térmica, instalación de SSD y formateo rápido antes de tus exámenes.",
    ubicacion: "Gilberto López Velarde 521A, Aguascalientes",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Gilberto+L%C3%B3pez+Velarde+521A%2C+Aguascalientes",
    horario: "8:00 AM - 8:00 PM",
    promocion: "15% dto. presentando credencial UTMAT",
    esUrgente: true,
    aceptaTrueque: true,
    verificado: true,
    autorizaDirectorio: true,
    galeria: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80"
    ],
    calificaciones: [
      { nombreUsuario: "Carlos M.", estrellas: 5, comentario: "¡Me salvó la laptop para mi entrega final!" },
      { nombreUsuario: "Ana R.", estrellas: 5, comentario: "Excelente atención y descuento respetado." }
    ]
  },
  {
    _id: "demo_2",
    nombrePadre: "Roberto Hernández",
    nombreAlumno: "Sofía Hernández",
    grupo: "Mecatrónica 2°B",
    telefono: "4499876543",
    oficio: "Repostería & Pasteles Creativos",
    categoria: "Comercio o negocio",
    descripcion: "Pasteles personalizados para cumpleaños, brownies, cupcakes y galletas decoradas para eventos dentro y fuera de la universidad.",
    ubicacion: "Fracc. Villas del Río (A 3 min de UTMAT)",
    horario: "9:00 AM - 7:00 PM",
    promocion: "Cupcake de regalo en pedidos mayores a $200",
    esUrgente: false,
    aceptaTrueque: false,
    verificado: true,
    autorizaDirectorio: true,
    galeria: [
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80"
    ],
    calificaciones: [
      { nombreUsuario: "Laura G.", estrellas: 5, comentario: "El pastel de chocolate estuvo delicioso." }
    ]
  },
  {
    _id: "demo_3",
    nombrePadre: "Ing. Fernando Castro",
    nombreAlumno: "Diego Castro",
    grupo: "Industrial 4°A",
    telefono: "4495551234",
    oficio: "Asesorías de Cálculo e Inglés",
    categoria: "Profesión",
    descripcion: "Clases particulares de matemáticas, álgebra, cálculo e inglés B2 para regularización o preparación de exámenes extraordinarios.",
    ubicacion: "Atención presencial en Campus UTMAT o En Línea",
    horario: "4:00 PM - 9:00 PM",
    promocion: "Primera hora con 50% de descuento",
    esUrgente: true,
    aceptaTrueque: true,
    verificado: true,
    autorizaDirectorio: true,
    galeria: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
    ],
    calificaciones: [
      { nombreUsuario: "Esteban K.", estrellas: 5, comentario: "Aprobé mi examen gracias a sus explicaciones." }
    ]
  },
  {
    _id: "demo_4",
    nombrePadre: "Gonzalo Ramírez",
    nombreAlumno: "Mateo Ramírez",
    grupo: "Energías 1°A",
    telefono: "4494443322",
    oficio: "Cerrajería & Duplicado de Llaves",
    categoria: "Oficio",
    descripcion: "Apertura de autos, chapas residenciales y duplicado de llaves al instante. Servicio de emergencia las 24 horas.",
    ubicacion: "Servicio a domicilio Aguascalientes Norte",
    horario: "24 Horas",
    promocion: "Duplicado sencillo gratis al cambiar combinación",
    esUrgente: true,
    aceptaTrueque: false,
    verificado: false,
    autorizaDirectorio: true,
    galeria: [],
    calificaciones: [
      { nombreUsuario: "Jorge L.", estrellas: 5, comentario: "Llegó súper rápido cuando me quedé afuera." }
    ]
  },
  {
    _id: "demo_5",
    nombrePadre: "Elena Torres",
    nombreAlumno: "Paola Torres",
    grupo: "Desarrollo de Software 5°B",
    telefono: "4491112233",
    oficio: "Diseño Gráfico & Impresiones Lona",
    categoria: "Profesión",
    descripcion: "Diseño de logotipos, tarjetas de presentación, posters, vinil e impresiones en gran formato para proyectos escolares.",
    ubicacion: "Av. Universidad, Aguascalientes",
    horario: "9:00 AM - 6:00 PM",
    promocion: "10% dto. en impresiones para entregas finales",
    esUrgente: false,
    aceptaTrueque: true,
    verificado: true,
    autorizaDirectorio: true,
    galeria: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80"
    ],
    calificaciones: []
  },
  {
    _id: "demo_6",
    nombrePadre: "Javier Mendoza",
    nombreAlumno: "Rodrigo Mendoza",
    grupo: "Automotriz 3°C",
    telefono: "4498887766",
    oficio: "Barbería & Corte de Cabello Masculino",
    categoria: "Servicio",
    descripcion: "Cortes modernos, arreglo de barba, delineado e hidratación facial. Citas a domicilio o en local establecido.",
    ubicacion: "Fracc. Campestre / A domicilio",
    horario: "10:00 AM - 8:00 PM",
    promocion: "Corte + Barba por $180 a estudiantes",
    esUrgente: false,
    aceptaTrueque: false,
    verificado: true,
    autorizaDirectorio: true,
    galeria: [
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80"
    ],
    calificaciones: [
      { nombreUsuario: "Kevin P.", estrellas: 5, comentario: "Muy profesional y rápido." }
    ]
  },
  {
    _id: "demo_7",
    nombrePadre: "Patricia Morales",
    nombreAlumno: "Camila Morales",
    grupo: "Gestión 2°A",
    telefono: "4496665544",
    oficio: "Snacks, Lonches & Chilaquiles UTMAT",
    categoria: "Comercio o negocio",
    descripcion: "Venta de chilaquiles recién hechos, tortas, jugos naturales y snacks preparados. Entregas en el punto de reunión del campus.",
    ubicacion: "Entregas en Campus UTMAT",
    horario: "7:30 AM - 2:00 PM",
    promocion: "Café gratis en tu combo de chilaquiles los lunes",
    esUrgente: true,
    aceptaTrueque: false,
    verificado: true,
    autorizaDirectorio: true,
    galeria: [
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
    ],
    calificaciones: [
      { nombreUsuario: "Daniel S.", estrellas: 5, comentario: "Los chilaquiles verdes son los mejores." }
    ]
  },
  {
    _id: "demo_8",
    nombrePadre: "Martín Delgado",
    nombreAlumno: "Valeria Delgado",
    grupo: "Industrial 1°B",
    telefono: "4492223344",
    oficio: "Instalaciones Eléctricas & Fontanería",
    categoria: "Oficio",
    descripcion: "Diagnóstico de fallas eléctricas, instalación de lámparas LED, fugas de agua y mantenimiento a calentadores solares.",
    ubicacion: "Atención a domicilio en todo Aguascalientes",
    horario: "8:00 AM - 7:00 PM",
    promocion: "Revisión y cotización sin costo",
    esUrgente: true,
    aceptaTrueque: true,
    verificado: false,
    autorizaDirectorio: true,
    galeria: [],
    calificaciones: []
  }
];

let registrosOriginales = [];
let registrosFiltrados = [];
let categoriaActiva = 'todos';
let modalidadFiltro = 'todos';
let proveedorSeleccionadoId = null;
let favoritosSet = new Set(JSON.parse(localStorage.getItem('utma_favs') || '[]'));

let paginaActual = 1;
const POR_PAGINA = 8;

// SISTEMA DE NOTIFICACIONES FLOTANTES (TOAST EN LA PARTE INFERIOR)
function mostrarNotificacion(mensaje, tipo = 'exito') {
  let contenedor = document.getElementById('toast-container');
  if (!contenedor) {
    contenedor = document.createElement('div');
    contenedor.id = 'toast-container';
    document.body.appendChild(contenedor);
  }

  const toast = document.createElement('div');
  toast.className = `toast-notification toast-${tipo}`;
  
  const icono = tipo === 'exito' ? '✨' : tipo === 'advertencia' ? '⚠️' : '❌';
  toast.innerHTML = `<span class="toast-icon">${icono}</span> <span class="toast-text">${mensaje}</span>`;

  contenedor.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

async function cargarTodos() {
  try {
    const response = await fetch('/api/padres');
    let datosBd = [];
    if (response.ok) {
      datosBd = await response.json();
    }
    registrosOriginales = [...datosBd, ...VENDEDORES_EJEMPLO];
    actualizarContadorFavs();
    aplicarFiltros();
  } catch (error) {
    console.log('Usando datos demostrativos para vista previa');
    registrosOriginales = VENDEDORES_EJEMPLO;
    actualizarContadorFavs();
    aplicarFiltros();
  }
}

function filtrarCategoria(cat) {
  categoriaActiva = cat;
  
  document.querySelectorAll('.cat-card').forEach(btn => {
    if (btn.getAttribute('data-cat') === cat) btn.classList.add('active');
    else btn.classList.remove('active');
  });

  const selectCat = document.getElementById('selectCategoriaFilter');
  if (selectCat) selectCat.value = cat;

  aplicarFiltros();
}

function cambiarSelectCategoria(val) {
  filtrarCategoria(val);
}

function filtrarModalidad(mod) {
  modalidadFiltro = mod;
  document.querySelectorAll('.quick-chip').forEach(btn => btn.classList.remove('active'));

  if (mod === 'todos') document.getElementById('chipModalidadTodos').classList.add('active');
  if (mod === 'promos') document.getElementById('chipModalidadPromos').classList.add('active');
  if (mod === 'urgente') document.getElementById('chipModalidadUrgente').classList.add('active');
  if (mod === 'trueque') document.getElementById('chipModalidadTrueque').classList.add('active');
  if (mod === 'domicilio') document.getElementById('chipModalidadDomicilio').classList.add('active');

  aplicarFiltros();
}

function obtenerEstadoHorario(horarioStr = '') {
  const ahora = new Date();
  const hora = ahora.getHours();
  const es24h = horarioStr.includes('24');
  const abierto = es24h || (hora >= 8 && hora < 20);

  return {
    estaAbierto: abierto,
    badgeText: abierto ? '🟢 Abierto Ahora' : '🔴 Cerrado',
    badgeClass: abierto ? 'status-open' : 'status-closed'
  };
}

function aplicarFiltros() {
  const buscadorInput = document.getElementById('buscador');
  const texto = buscadorInput ? buscadorInput.value.toLowerCase().trim() : '';
  const orden = document.getElementById('selectOrdenFilter') ? document.getElementById('selectOrdenFilter').value : 'recientes';
  const ratingMin = parseFloat(document.getElementById('selectRatingMin') ? document.getElementById('selectRatingMin').value : '0');

  registrosFiltrados = registrosOriginales.filter(r => {
    const coincideCategoria = categoriaActiva === 'todos' || 
      (r.categoria && r.categoria.toLowerCase() === categoriaActiva.toLowerCase());

    const { promedio } = calcularPromedio(r.calificaciones);
    const cumpleRating = parseFloat(promedio) >= ratingMin;

    let cumpleModalidad = true;
    if (modalidadFiltro === 'promos') {
      cumpleModalidad = Boolean(r.promocion);
    } else if (modalidadFiltro === 'urgente') {
      cumpleModalidad = Boolean(r.esUrgente);
    } else if (modalidadFiltro === 'trueque') {
      cumpleModalidad = Boolean(r.aceptaTrueque);
    } else if (modalidadFiltro === 'domicilio') {
      cumpleModalidad = (r.ubicacion || '').toLowerCase().includes('domicilio') || (r.descripcion || '').toLowerCase().includes('domicilio');
    }

    const contenido = `
      ${r.nombreAlumno || ''} 
      ${r.grupo || ''} 
      ${r.nombrePadre || ''} 
      ${r.oficio || ''} 
      ${r.categoria || ''} 
      ${r.descripcion || ''} 
      ${r.ubicacion || ''}
      ${r.promocion || ''}
    `.toLowerCase();
    
    const coincideTexto = !texto || contenido.includes(texto);

    return coincideCategoria && cumpleRating && cumpleModalidad && coincideTexto;
  });

  if (orden === 'rating') {
    registrosFiltrados.sort((a, b) => {
      const promA = parseFloat(calcularPromedio(a.calificaciones).promedio);
      const promB = parseFloat(calcularPromedio(b.calificaciones).promedio);
      return promB - promA;
    });
  } else if (orden === 'az') {
    registrosFiltrados.sort((a, b) => (a.oficio || '').localeCompare(b.oficio || ''));
  }

  paginaActual = 1;
  renderizarGridPaginado();
}

function renderizarGridPaginado() {
  const contenedor = document.getElementById('cuerpoTabla');
  const btnMas = document.getElementById('btnCargarMas');
  if (!contenedor) return;

  contenedor.innerHTML = '';
  const autorizados = registrosFiltrados.filter(r => r.autorizaDirectorio === true || r.autorizaDirectorio === 'true');

  if (autorizados.length === 0) {
    contenedor.innerHTML = '<div class="empty-state"><p>No se encontraron servicios que coincidan con los filtros seleccionados.</p></div>';
    if (btnMas) btnMas.style.display = 'none';
    document.getElementById('panelDetalle').innerHTML = `
      <div class="detail-placeholder">
        <span class="ph-icon">🔍</span>
        <h3>Sin resultados</h3>
        <p>Prueba ajustando la búsqueda o cambiando de filtro.</p>
      </div>`;
    return;
  }

  const limite = paginaActual * POR_PAGINA;
  const mostrados = autorizados.slice(0, limite);

  mostrados.forEach((r, idx) => {
    const { promedio, conteo, estrellasHtml } = calcularPromedio(r.calificaciones);
    const estadoHorario = obtenerEstadoHorario(r.horario);
    const esFav = favoritosSet.has(r._id);

    const card = document.createElement('div');
    card.className = `compact-card ${proveedorSeleccionadoId === r._id ? 'selected' : ''}`;
    card.setAttribute('data-id', r._id);
    card.onclick = () => seleccionarProveedor(r._id);

    const defaultImg = (r.galeria && r.galeria.length > 0) ? r.galeria[0] : (
      r.categoria === 'Oficio' 
        ? 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80'
        : r.categoria === 'Profesión'
        ? 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80'
        : r.categoria === 'Comercio o negocio'
        ? 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=600&q=80'
        : 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80'
    );

    card.innerHTML = `
      <div class="card-thumb-wrapper">
        <img src="${defaultImg}" alt="${r.oficio}" class="card-thumb">
        <span class="status-pill ${estadoHorario.badgeClass}">${estadoHorario.badgeText}</span>
        ${r.verificado ? '<span class="verified-badge">✓ Verificado</span>' : ''}
        <button class="btn-fav ${esFav ? 'active' : ''}" onclick="toggleFavorito(event, '${r._id}')">
          ${esFav ? '❤️' : '🤍'}
        </button>
      </div>

      <div class="card-compact-body">
        <div class="card-head-info">
          <h3 class="card-title">${r.oficio || 'Servicio'}</h3>
          <span class="badge badge-${(r.categoria || 'otra').toLowerCase().replace(/\s+/g, '')}">${r.categoria || 'General'}</span>
        </div>

        <p class="card-provider-name">👤 ${r.nombrePadre}</p>

        <div class="stars-row">
          <span class="stars">${estrellasHtml}</span>
          <span class="rating-num">${promedio} (${conteo})</span>
        </div>

        ${r.promocion ? `<div class="card-promo-tag">🎁 ${r.promocion}</div>` : ''}

        <p class="card-short-desc">${r.descripcion || 'Sin descripción disponible.'}</p>

        <div class="card-location-tag">
          📍 ${r.ubicacion || 'UTMAT / Aguascalientes'}
        </div>
      </div>
    `;

    contenedor.appendChild(card);

    if (idx === 0 && !proveedorSeleccionadoId) {
      seleccionarProveedor(r._id);
    }
  });

  if (btnMas) {
    btnMas.style.display = limite < autorizados.length ? 'inline-block' : 'none';
  }
}

function cargarMasPagina() {
  paginaActual++;
  renderizarGridPaginado();
}

function calcularPromedio(calificaciones = []) {
  if (!calificaciones.length) return { promedio: '0.0', conteo: 0, estrellasHtml: '☆☆☆☆☆' };
  const suma = calificaciones.reduce((acc, curr) => acc + curr.estrellas, 0);
  const promedio = (suma / calificaciones.length).toFixed(1);
  const entero = Math.round(promedio);
  const estrellas = '★'.repeat(entero) + '☆'.repeat(5 - entero);
  return { promedio, conteo: calificaciones.length, estrellasHtml: estrellas };
}

function seleccionarProveedor(id) {
  proveedorSeleccionadoId = id;

  document.querySelectorAll('.compact-card').forEach(c => {
    if (c.getAttribute('data-id') === id) c.classList.add('selected');
    else c.classList.remove('selected');
  });

  const proveedor = registrosOriginales.find(r => r._id === id);
  if (proveedor) renderizarPanelDetalle(proveedor);
}

function seleccionarProveedorPorOficio(oficioBusqueda) {
  const prov = registrosOriginales.find(r => r.oficio.toLowerCase().includes(oficioBusqueda.toLowerCase()));
  if (prov) {
    seleccionarProveedor(prov._id);
    const panel = document.getElementById('panelDetalle');
    if (panel) panel.scrollIntoView({ behavior: 'smooth' });
  }
}

function renderizarPanelDetalle(r) {
  const panel = document.getElementById('panelDetalle');
  if (!panel) return;

  const { promedio, conteo, estrellasHtml } = calcularPromedio(r.calificaciones);
  const estadoHorario = obtenerEstadoHorario(r.horario);
  const esFav = favoritosSet.has(r._id);

  const defaultBanner = (r.galeria && r.galeria.length > 0) ? r.galeria[0] : (
    r.categoria === 'Oficio' 
      ? 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80'
      : 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80'
  );

  const opinionesHtml = (r.calificaciones || []).map(c => `
    <div class="opinion-card">
      <div class="opinion-head">
        <strong>${c.nombreUsuario || 'Cliente Verificado'}</strong>
        <span class="stars-sm">${'★'.repeat(c.estrellas)}${'☆'.repeat(5 - c.estrellas)}</span>
      </div>
      <p class="opinion-text">"${c.comentario || 'Servicio recomendado.'}"</p>
    </div>
  `).join('');

  const galeriaHtml = (r.galeria && r.galeria.length > 0) ? `
    <div class="detail-section">
      <h4>📸 Portafolio & Trabajos Realizados</h4>
      <div class="portfolio-grid">
        ${r.galeria.map(img => `<img src="${img}" class="portfolio-img" alt="Trabajo realizado">`).join('')}
      </div>
    </div>
  ` : '';

  let urlMapa = r.googleMapsUrl || '';
  if (!urlMapa && r.ubicacion) {
    urlMapa = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.ubicacion + ', Aguascalientes')}`;
  }

  const mensajeCotizar = encodeURIComponent(`Hola ${r.nombrePadre}, vi tu servicio de *${r.oficio}* en el Directorio Digital UTMAT. Me gustaría pedirte una cotización e información sobre disponibilidad.`);
  const linkCotizarWhatsApp = `https://wa.me/52${r.telefono.replace(/\D/g,'')}?text=${mensajeCotizar}`;

  panel.innerHTML = `
    <div class="detail-card-view">
      
      <div class="detail-hero-img">
        <img src="${defaultBanner}" alt="${r.oficio}">
        <button class="btn-fav-large ${esFav ? 'active' : ''}" onclick="toggleFavorito(event, '${r._id}')">
          ${esFav ? '❤️ En favoritos' : '🤍 Agregar a favoritos'}
        </button>
      </div>

      <div class="detail-header">
        <h2>${r.oficio || 'Servicio'}</h2>
        <span class="badge badge-${(r.categoria || 'otra').toLowerCase().replace(/\s+/g, '')}">${r.categoria || 'General'}</span>
      </div>

      <div class="detail-rating-row">
        <span class="stars-gold">${estrellasHtml}</span>
        <span class="score">${promedio}</span>
        <span class="reviews-count">(${conteo} opiniones)</span>
        <span class="status-pill ${estadoHorario.badgeClass}">${estadoHorario.badgeText}</span>
      </div>

      ${r.promocion ? `
        <div class="promo-banner-detail">
          🎁 <strong>PROMO UTMAT:</strong> ${r.promocion}
        </div>
      ` : ''}

      <p class="detail-location">📍 UTMAT / ${r.ubicacion || 'Aguascalientes'}</p>

      <div class="attributes-chips">
        ${r.verificado ? '<div class="chip chip-verified">🛡️ Miembro UTMAT Verificado</div>' : ''}
        ${r.aceptaTrueque ? '<div class="chip chip-swap">🤝 Acepta Intercambio / Trueque</div>' : ''}
        ${r.esUrgente ? '<div class="chip chip-urgent">⚡ Atención Rápida / Mismo día</div>' : ''}
        <div class="chip">⏰ Horario: ${r.horario || 'Flexible'}</div>
      </div>

      <div class="detail-section">
        <h4>Descripción del Servicio</h4>
        <p class="desc-full">${r.descripcion || 'Sin detalles adicionales especificados.'}</p>
        <p class="desc-sub"><strong>Ofrecido por:</strong> ${r.nombrePadre} (Padre/Tutor de: ${r.nombreAlumno || 'Alumno'} - ${r.grupo || 'Grupo'})</p>
      </div>

      ${galeriaHtml}

      <div class="detail-section">
        <h4>Contacto & Cotización Directa</h4>
        <p class="phone-number">📞 ${r.telefono}</p>
        
        <div class="contact-buttons-group">
          <a href="tel:${r.telefono}" class="btn-action btn-call">
            📞 Llamar Directo
          </a>
          <a href="${linkCotizarWhatsApp}" target="_blank" class="btn-action btn-whatsapp">
            💬 Pedir Cotización
          </a>
        </div>

        <div class="secondary-actions-group">
          <button onclick="compartirServicio('${r.oficio}', '${r.nombrePadre}', '${r.telefono}', '${r.ubicacion || 'Aguascalientes'}', '${promedio}')" class="btn-action btn-share">
            🔗 Compartir Servicio
          </button>

          ${urlMapa ? `
            <a href="${urlMapa}" target="_blank" class="btn-action btn-maps">
              📍 Ver en Google Maps
            </a>
          ` : ''}
        </div>
      </div>

      <div class="detail-section">
        <div class="section-title-flex">
          <h4>Opiniones de clientes</h4>
          <span class="count-pill">${conteo}</span>
        </div>

        <div class="opinions-list">
          ${opinionesHtml || '<p class="no-reviews">Aún no hay opiniones escritas. ¡Sé el primero!</p>'}
        </div>

        <form class="form-calificar-box" onsubmit="enviarCalificacion(event, '${r._id}')">
          <h5>Calificar servicio</h5>
          
          <label class="check-container">
            <input type="checkbox" name="recibiServicio" required />
            <span>Confirmo que ya recibí o contraté este servicio</span>
          </label>

          <div class="stars-picker">
            <span>Tu evaluación:</span>
            <div class="estrellas-rating">
              <input type="radio" id="st5" name="estrellas" value="5" required /><label for="st5">★</label>
              <input type="radio" id="st4" name="estrellas" value="4" /><label for="st4">★</label>
              <input type="radio" id="st3" name="estrellas" value="3" /><label for="st3">★</label>
              <input type="radio" id="st2" name="estrellas" value="2" /><label for="st2">★</label>
              <input type="radio" id="st1" name="estrellas" value="1" /><label for="st1">★</label>
            </div>
          </div>

          <input type="text" name="nombreUsuario" placeholder="Tu nombre (opcional)" class="input-light" />
          <textarea name="comentario" placeholder="Escribe tu opinión sobre el servicio recibido..." rows="2" class="input-light"></textarea>
          <button type="submit" class="btn-submit-review">⭐ Publicar reseña</button>
        </form>
      </div>

    </div>
  `;
}

function compartirServicio(oficio, proveedor, telefono, ubicacion, promedio) {
  const titulo = `Servicio: ${oficio}`;
  const texto = `¡Hola! Te comparto este servicio de la Comunidad UTMAT:\n📌 ${oficio}\n👤 Proveedor: ${proveedor}\n📞 Teléfono: ${telefono}\n📍 Ubicación: ${ubicacion}\n⭐ Calificación: ${promedio} estrellas`;
  const url = window.location.href;

  if (navigator.share) {
    navigator.share({
      title: titulo,
      text: texto,
      url: url
    }).catch(() => console.log('Compartir cancelado'));
  } else {
    navigator.clipboard.writeText(`${texto}\n🔗 ${url}`);
    mostrarNotificacion('¡Información copiada al portapapeles!', 'exito');
  }
}

async function enviarCalificacion(event, id) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const datos = Object.fromEntries(formData.entries());

  if (!datos.estrellas) {
    mostrarNotificacion('Por favor selecciona una evaluación de estrellas.', 'advertencia');
    return;
  }

  if (id.startsWith('demo_')) {
    const proveedor = registrosOriginales.find(r => r._id === id);
    if (proveedor) {
      if (!proveedor.calificaciones) proveedor.calificaciones = [];
      proveedor.calificaciones.push({
        nombreUsuario: datos.nombreUsuario ? datos.nombreUsuario.trim() : 'Cliente Verificado',
        estrellas: parseInt(datos.estrellas, 10),
        comentario: datos.comentario ? datos.comentario.trim() : 'Servicio recomendado.'
      });
      
      mostrarNotificacion('¡Gracias! Tu opinión ha sido publicada.', 'exito');
      form.reset();
      renderizarGridPaginado();
      seleccionarProveedor(id);
    }
    return;
  }

  try {
    const response = await fetch(`/api/padres/${id}/calificar`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });

    const res = await response.json();
    if (response.ok && (res.exito !== false)) {
      mostrarNotificacion('¡Gracias! Tu opinión ha sido publicada.', 'exito');
      form.reset();
      await cargarTodos();
      seleccionarProveedor(id);
    } else {
      mostrarNotificacion(res.mensaje || 'Error al enviar la calificación.', 'error');
    }
  } catch (err) {
    console.error('Error al calificar:', err);
    mostrarNotificacion('Error de conexión al guardar tu opinión.', 'error');
  }
}

function toggleFavorito(event, id) {
  event.stopPropagation();
  if (favoritosSet.has(id)) {
    favoritosSet.delete(id);
    mostrarNotificacion('Eliminado de tus favoritos', 'advertencia');
  } else {
    favoritosSet.add(id);
    mostrarNotificacion('Guardado en tus favoritos', 'exito');
  }
  localStorage.setItem('utma_favs', JSON.stringify([...favoritosSet]));
  actualizarContadorFavs();
  aplicarFiltros();
  if (proveedorSeleccionadoId === id) {
    const p = registrosOriginales.find(r => r._id === id);
    if (p) renderizarPanelDetalle(p);
  }
}

function actualizarContadorFavs() {
  const el = document.getElementById('favCount');
  if (el) el.innerText = `(${favoritosSet.size})`;
}

function mostrarFavoritos(e) {
  e.preventDefault();
  registrosFiltrados = registrosOriginales.filter(r => favoritosSet.has(r._id));
  paginaActual = 1;
  renderizarGridPaginado();
}

document.addEventListener('DOMContentLoaded', cargarTodos);