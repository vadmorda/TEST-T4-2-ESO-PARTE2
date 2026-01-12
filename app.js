// app.js — 35 preguntas (apartados 4–5) + corrección SOLO al final (con fallos corregidos)

const $ = (id) => document.getElementById(id);

// =====================
// Imágenes (libres + tus imágenes del libro en /img)
// =====================
const IMG = {
  // ✅ TUS IMÁGENES (sube al repo a /img)
  libroSociedadJudia: {
    src: "img/7.jpg",
    credit: "Imagen del libro (uso educativo en tu material).",
    link: "#"
  },
  libroEconomiaVivienda: {
    src: "img/8.jpg",
    credit: "Imagen del libro (uso educativo en tu material).",
    link: "#"
  },

  // ✅ LIBRES (Wikimedia Commons)
  mezquitaCordoba: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/C%C3%B3rdoba%20-%20Mezquita-Catedral%20-%20Interior%20-%2004.jpg?width=1400",
    credit: "Wikimedia Commons (CC BY-SA).",
    link: "https://commons.wikimedia.org/wiki/File:C%C3%B3rdoba_-_Mezquita-Catedral_-_Interior_-_04.jpg"
  },
  mihrabCordoba: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mezquita%20de%20C%C3%B3rdoba%20-%20Mihrab.jpg?width=1400",
    credit: "Wikimedia Commons (licencia en Commons).",
    link: "https://commons.wikimedia.org/wiki/File:Mezquita_de_C%C3%B3rdoba_-_Mihrab.jpg"
  },
  arcoHerradura: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Horseshoe%20arches%20Mezquita%20de%20Cordoba.jpg?width=1400",
    credit: "Wikimedia Commons (licencia en Commons).",
    link: "https://commons.wikimedia.org/wiki/File:Horseshoe_arches_Mezquita_de_Cordoba.jpg"
  },
  alhambraPatio: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Patio%20de%20los%20Leones%20Alhambra%20Granada.jpg?width=1400",
    credit: "Wikimedia Commons (licencia en Commons).",
    link: "https://commons.wikimedia.org/wiki/File:Patio_de_los_Leones_Alhambra_Granada.jpg"
  },
  azulejos: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Alhambra%20tile%20patterns.jpg?width=1400",
    credit: "Wikimedia Commons (licencia en Commons).",
    link: "https://commons.wikimedia.org/wiki/File:Alhambra_tile_patterns.jpg"
  },
  yeseria: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Alhambra%20stucco%20details.jpg?width=1400",
    credit: "Wikimedia Commons (licencia en Commons).",
    link: "https://commons.wikimedia.org/wiki/File:Alhambra_stucco_details.jpg"
  },
  caligrafiaArabe: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Arabic%20calligraphy%20on%20tile.jpg?width=1400",
    credit: "Wikimedia Commons (licencia en Commons).",
    link: "https://commons.wikimedia.org/wiki/File:Arabic_calligraphy_on_tile.jpg"
  },
  ceramicaAndalusi: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hispano-Moresque%20ware%20vase.jpg?width=1400",
    credit: "Wikimedia Commons (licencia en Commons).",
    link: "https://commons.wikimedia.org/wiki/File:Hispano-Moresque_ware_vase.jpg"
  },
  zoco: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Souk%20in%20Fez%20Morocco.jpg?width=1400",
    credit: "Wikimedia Commons (licencia en Commons).",
    link: "https://commons.wikimedia.org/wiki/File:Souk_in_Fez_Morocco.jpg"
  },
  noria: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Noria%20de%20la%20Albolafia%20C%C3%B3rdoba.jpg?width=1400",
    credit: "Wikimedia Commons (CC BY-SA).",
    link: "https://commons.wikimedia.org/wiki/File:Noria_de_la_Albolafia_C%C3%B3rdoba.jpg"
  },
  patioAndalusi: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Traditional%20courtyard%20house%20Andalusia.jpg?width=1400",
    credit: "Wikimedia Commons (licencia en Commons).",
    link: "https://commons.wikimedia.org/wiki/File:Traditional_courtyard_house_Andalusia.jpg"
  }
};

// =====================
// Helpers
// =====================
function normalizar(str) {
  return String(str)
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, " ");
}

function esMulti(q) { return q.tipo === "multi" || q.tipo === "img-multi"; }
function esCorta(q) { return q.tipo === "corta" || q.tipo === "img-corta"; }

function coincideCorta(dado, esperados) {
  const d = normalizar(dado);
  return (esperados || []).some(e => normalizar(e) === d);
}

function barajar(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// =====================
// 35 preguntas (apartados 4 y 5)
// =====================
const preguntas = [
  // -------- APARTADO 4: Vida en al-Ándalus (sociedad, economía, vivienda, religión judía) --------

  { tipo:"img-multi", img: IMG.libroSociedadJudia, es:"Observa la página. ¿Cómo se describe la sociedad andalusí?", hint:"Idea general del apartado 4.", opciones:["Muy heterogénea (diversidad étnica y religiosa)","Homogénea y sin diferencias","Solo urbana y sin campo"], correcta:0,
    explicacion:"La sociedad andalusí era <strong>muy heterogénea</strong> por su diversidad étnica y religiosa." },

  { tipo:"multi", img: IMG.libroSociedadJudia, es:"¿Cuál era el grupo más poderoso?", hint:"Quién controlaba mejores tierras y cargos.", opciones:["Los musulmanes (invasores y descendientes)","Los esclavos","Los campesinos cristianos"], correcta:0,
    explicacion:"El grupo más poderoso eran <strong>los musulmanes</strong> (invasores y descendientes)." },

  { tipo:"multi", img: IMG.libroSociedadJudia, es:"Dentro de los musulmanes, ¿quién solía reservarse mejores tierras y altos cargos?", hint:"Minoría dominante.", opciones:["La minoría de origen árabe","Los mozárabes","Los esclavos"], correcta:0,
    explicacion:"La <strong>minoría árabe</strong> solía reservarse mejores tierras y altos cargos." },

  { tipo:"multi", img: IMG.libroSociedadJudia, es:"¿Qué grupo ocupaba una posición inferior y protagonizó revueltas para mejorar su situación?", hint:"También presentes en ejército y administración.", opciones:["Bereberes","Muladíes","Judíos"], correcta:0,
    explicacion:"Los <strong>bereberes</strong> ocupaban una posición inferior y hubo revueltas." },

  { tipo:"multi", img: IMG.libroSociedadJudia, es:"¿Quiénes eran los mozárabes?", hint:"Cristianos en al-Ándalus.", opciones:["Cristianos que mantenían su religión y pagaban impuestos","Cristianos convertidos al islam","Musulmanes recién llegados"], correcta:0,
    explicacion:"Mozárabes = <strong>cristianos</strong> que mantenían su religión (y pagaban impuestos)." },

  { tipo:"multi", img: IMG.libroSociedadJudia, es:"¿Quiénes eran los muladíes?", hint:"Cambio religioso/cultural.", opciones:["Cristianos convertidos al islam (adoptan religión, lengua y costumbres)","Judíos comerciantes","Árabes nobles"], correcta:0,
    explicacion:"Muladíes = <strong>cristianos convertidos al islam</strong>." },

  { tipo:"corta", img: IMG.libroSociedadJudia, es:"Escribe el nombre del barrio separado donde vivían muchos judíos (1 palabra).", hint:"Aparece en el texto.", respuestas:["juderias","juderías"],
    explicacion:"Vivían en barrios separados llamados <strong>juderías</strong>." },

  { tipo:"multi", img: IMG.libroSociedadJudia, es:"¿Qué grupo ocupaba el escalón más bajo de la sociedad?", hint:"Condición social.", opciones:["Personas esclavas","Comerciantes","Altos cargos"], correcta:0,
    explicacion:"El escalón más bajo lo ocupaban <strong>las personas esclavas</strong>." },

  { tipo:"multi", img: IMG.libroSociedadJudia, es:"Según el texto, las mujeres…", hint:"Situación social.", opciones:["Estaban sometidas a la autoridad de un hombre","Gobernaban el califato","No podían vivir en ciudades"], correcta:0,
    explicacion:"El texto indica que las mujeres estaban <strong>sometidas</strong> a la autoridad de un hombre." },

  { tipo:"img-multi", img: IMG.zoco, es:"Observa la imagen. ¿Cómo se llamaban los mercados urbanos donde se vendían productos?", hint:"Palabra clave del comercio.", opciones:["Zocos","Feudos","Castillos"], correcta:0,
    explicacion:"En las ciudades había <strong>zocos</strong> (mercados)." },

  { tipo:"img-multi", img: IMG.noria, es:"Observa la imagen. ¿Qué elemento del regadío representa?", hint:"Agua y agricultura.", opciones:["Una noria","Una muralla","Una mina"], correcta:0,
    explicacion:"Es una <strong>noria</strong>, usada para elevar agua en el regadío." },

  { tipo:"multi", img: IMG.libroEconomiaVivienda, es:"La actividad principal de la mayoría de la población andalusí era…", hint:"Base económica.", opciones:["La agricultura","La minería","La pesca oceánica"], correcta:0,
    explicacion:"La mayoría se dedicaba a la <strong>agricultura</strong>." },

  { tipo:"multi", img: IMG.libroEconomiaVivienda, es:"¿Dónde se encontraban las tierras más fértiles y se desarrolló el regadío?", hint:"Piensa en ríos.", opciones:["En las vegas de los ríos","En las cumbres montañosas","En los desiertos interiores"], correcta:0,
    explicacion:"Las tierras más fértiles estaban en <strong>las vegas de los ríos</strong> (regadío con acequias/norias)." },

  { tipo:"corta", img: IMG.libroEconomiaVivienda, es:"Escribe una técnica/elemento de regadío mencionado (1 palabra).", hint:"Dos opciones típicas.", respuestas:["acequias","acequia","norias","noria"],
    explicacion:"Se menciona el regadío con <strong>acequias</strong> y <strong>norias</strong>." },

  { tipo:"multi", img: IMG.libroEconomiaVivienda, es:"En las ciudades, la artesanía se organizaba en…", hint:"Talleres agrupados.", opciones:["Zocos y barrios (por oficios)","Monasterios","Castillos"], correcta:0,
    explicacion:"Los talleres se agrupaban por <strong>zocos</strong> y por <strong>barrios</strong>." },

  { tipo:"img-multi", img: IMG.ceramicaAndalusi, es:"Observa la imagen. ¿Qué tipo de producción urbana representa?", hint:"Artesanía.", opciones:["Cerámica/artesanía","Ganadería trashumante","Minería"], correcta:0,
    explicacion:"Representa <strong>artesanía</strong>, por ejemplo <strong>cerámica</strong>." },

  { tipo:"multi", img: IMG.libroEconomiaVivienda, es:"¿Qué monedas se citan en el texto?", hint:"Oro y plata.", opciones:["Dinar (oro) y dírhem (plata)","Euro y dólar","Sestercio romano"], correcta:0,
    explicacion:"Se usaban el <strong>dinar</strong> de oro y el <strong>dírhem</strong> de plata." },

  { tipo:"corta", img: IMG.libroEconomiaVivienda, es:"Escribe la moneda de oro (1 palabra).", hint:"Empieza por di-.", respuestas:["dinar","dinár"],
    explicacion:"La moneda de oro era el <strong>dinar</strong>." },

  { tipo:"corta", img: IMG.libroEconomiaVivienda, es:"Escribe la moneda de plata (1 palabra).", hint:"Con tilde a veces.", respuestas:["dirhem","dírhem"],
    explicacion:"La moneda de plata era el <strong>dírhem</strong>." },

  { tipo:"img-multi", img: IMG.patioAndalusi, es:"Observa la imagen. ¿Qué elemento organizaba la vivienda hispanomusulmana?", hint:"Estructura típica.", opciones:["El patio central","Un gran jardín exterior abierto a la calle","Una plaza pública"], correcta:0,
    explicacion:"Las viviendas se organizaban alrededor de un <strong>patio</strong>." },

  { tipo:"multi", img: IMG.libroEconomiaVivienda, es:"Según el texto, la vivienda hispanomusulmana solía tener…", hint:"Alturas.", opciones:["Dos plantas","Una sola planta siempre","Cinco plantas"], correcta:0,
    explicacion:"Se indica que solían tener <strong>dos plantas</strong>." },

  { tipo:"img-multi", img: IMG.libroEconomiaVivienda, es:"En el dibujo de la vivienda, la letra A corresponde a…", hint:"Mira el centro.", opciones:["Patio","Cocina","Despensa"], correcta:0,
    explicacion:"La letra <strong>A</strong> marca el <strong>patio</strong>." },

  { tipo:"img-multi", img: IMG.libroEconomiaVivienda, es:"En el dibujo, la letra C corresponde a…", hint:"Espacio para preparar comida.", opciones:["Cocina","Patio","Salón de visitas"], correcta:0,
    explicacion:"La letra <strong>C</strong> corresponde a la <strong>cocina</strong>." },

  { tipo:"img-multi", img: IMG.libroEconomiaVivienda, es:"En el dibujo, la letra D corresponde a…", hint:"Almacén de alimentos.", opciones:["Despensa","Patio","Dormitorio superior"], correcta:0,
    explicacion:"La letra <strong>D</strong> corresponde a la <strong>despensa</strong>." },

  { tipo:"multi", img: IMG.libroEconomiaVivienda, es:"¿Para quién se reservaba a menudo el piso superior?", hint:"Organización social.", opciones:["Para las mujeres","Para los animales","Para los mercados"], correcta:0,
    explicacion:"El texto dice que el piso superior se reservaba para <strong>las mujeres</strong>." },

  { tipo:"multi", img: IMG.libroSociedadJudia, es:"En el judaísmo se cree en…", hint:"Idea básica.", opciones:["Un único Dios","Varios dioses","Ningún dios"], correcta:0,
    explicacion:"El judaísmo es <strong>monoteísta</strong>: cree en <strong>un único Dios</strong>." },

  { tipo:"corta", img: IMG.libroSociedadJudia, es:"Escribe el nombre del libro/código religioso citado (1 palabra).", hint:"Parte del Antiguo Testamento.", respuestas:["torah","tora","torá"],
    explicacion:"Se menciona la <strong>Torah</strong>." },

  { tipo:"multi", img: IMG.libroSociedadJudia, es:"¿Cómo se llama el lugar de culto judío?", hint:"Edificio religioso.", opciones:["Sinagoga","Mezquita","Catedral"], correcta:0,
    explicacion:"El lugar de culto es la <strong>sinagoga</strong>." },

  { tipo:"corta", img: IMG.libroSociedadJudia, es:"Escribe el día de descanso judío (1 palabra).", hint:"Sábado.", respuestas:["sabbat","sabat","shabbat","sabbath"],
    explicacion:"El descanso es el <strong>Sabbat</strong> (sábado)." },

  // -------- APARTADO 5: ARTE en al-Ándalus (muchas con imagen) --------

  { tipo:"img-multi", img: IMG.mezquitaCordoba, es:"Observa la imagen. ¿Qué tipo de edificio es?", hint:"Arte andalusí: arquitectura religiosa.", opciones:["Mezquita","Castillo feudal","Iglesia románica"], correcta:0,
    explicacion:"Es una <strong>mezquita</strong>, clave en el arte islámico andalusí." },

  { tipo:"img-multi", img: IMG.arcoHerradura, es:"Observa la imagen. ¿Qué arco es característico en al-Ándalus?", hint:"Forma ‘de herradura’.", opciones:["Arco de herradura","Arco ojival gótico","Arco de medio punto romano"], correcta:0,
    explicacion:"El <strong>arco de herradura</strong> es muy característico." },

  { tipo:"img-multi", img: IMG.mihrabCordoba, es:"Observa la imagen. ¿Qué elemento de la mezquita es?", hint:"Zona orientada a la oración.", opciones:["Mihrab","Campanario","Retablo"], correcta:0,
    explicacion:"Es el <strong>mihrab</strong> (nicho orientado hacia la oración)." },

  { tipo:"img-multi", img: IMG.alhambraPatio, es:"Observa la imagen. ¿Qué conjunto monumental representa?", hint:"Granada.", opciones:["La Alhambra","La Mezquita de Córdoba","La Giralda"], correcta:0,
    explicacion:"Es la <strong>Alhambra</strong> (Granada)." },

  { tipo:"img-multi", img: IMG.azulejos, es:"Observa la imagen. ¿Qué recurso decorativo aparece?", hint:"Repetición geométrica.", opciones:["Azulejos/patrones geométricos","Pintura al óleo barroca","Escultura griega"], correcta:0,
    explicacion:"Son <strong>azulejos</strong> y <strong>patrones geométricos</strong> (decoración islámica)." },

  { tipo:"img-multi", img: IMG.yeseria, es:"Observa la imagen. ¿Qué material/técnica decorativa es típica?", hint:"Relieves en muros.", opciones:["Yesería (estuco tallado)","Hormigón armado","Vidrieras góticas"], correcta:0,
    explicacion:"Es <strong>yesería</strong> (estuco tallado), muy típica." },

  { tipo:"img-multi", img: IMG.caligrafiaArabe, es:"Observa la imagen. ¿Qué forma artística aparece?", hint:"Letras como decoración.", opciones:["Caligrafía árabe","Mosaico romano con dioses","Escultura de mármol"], correcta:0,
    explicacion:"Es <strong>caligrafía árabe</strong>, muy usada como decoración." },

  { tipo:"multi", img: IMG.caligrafiaArabe, es:"En el arte islámico, la escritura decorativa suele tener función…", hint:"Qué aporta a la decoración.", opciones:["Decorativa y simbólica","Solo militar","Solo agrícola"], correcta:0,
    explicacion:"La caligrafía cumple función <strong>decorativa</strong> y a menudo <strong>simbólica/religiosa</strong>." },

  { tipo:"img-multi", img: IMG.ceramicaAndalusi, es:"Observa la pieza. ¿A qué artes decorativas pertenece?", hint:"Producción urbana.", opciones:["Cerámica andalusí","Escultura gótica","Pintura rupestre"], correcta:0,
    explicacion:"Pertenece a la <strong>cerámica</strong> (artes decorativas)." },

  { tipo:"multi", img: IMG.azulejos, es:"Los motivos geométricos repetidos en el arte andalusí se asocian a…", hint:"Idea clave del estilo.", opciones:["Lacería/patrones geométricos","Perspectiva renacentista","Realismo fotográfico"], correcta:0,
    explicacion:"Es típico el uso de <strong>lacería</strong> y patrones <strong>geométricos</strong>." },

  { tipo:"corta", img: IMG.arcoHerradura, es:"Escribe el nombre del arco de la imagen (2 palabras).", hint:"herr-...", respuestas:["arco herradura","arco de herradura"],
    explicacion:"Es el <strong>arco de herradura</strong>." },

  { tipo:"corta", img: IMG.yeseria, es:"Escribe el nombre de la técnica/material de relieve en muros (1 palabra).", hint:"ye-...", respuestas:["yeseria","yesería"],
    explicacion:"La técnica es la <strong>yesería</strong>." },

  { tipo:"corta", img: IMG.azulejos, es:"Escribe el nombre de las piezas cerámicas decorativas de pared (1 palabra).", hint:"a-zu-...", respuestas:["azulejos","azulejo"],
    explicacion:"Se llaman <strong>azulejos</strong>." }
];

// Seguridad: debe ser 35
if (preguntas.length !== 35) {
  console.warn("⚠️ El test no tiene 35 preguntas. Tiene:", preguntas.length);
}

// =====================
// Estado + orden aleatorio
// =====================
let orden = [...preguntas.keys()];
barajar(orden);

let indice = 0;
let respuestasUsuario = new Array(preguntas.length).fill(null);

// =====================
// Render
// =====================
function actualizarProgreso() {
  const barra = $("progress-bar");
  const label = $("progress-label");
  const porcentaje = ((indice + 1) / preguntas.length) * 100;
  barra.style.width = porcentaje + "%";
  label.textContent = `Pregunta ${indice + 1} de ${preguntas.length}`;
}

function renderPregunta() {
  actualizarProgreso();

  const idxPregunta = orden[indice];
  const q = preguntas[idxPregunta];
  const cont = $("question-container");

  let html = `
    <div class="question-text">
      <span class="q-es">${q.es}</span>
      <span class="q-hint">${q.hint ?? ""}</span>
    </div>
  `;

  if (q.img) {
    html += `
      <div class="q-image">
        <img src="${q.img.src}" alt="Imagen de apoyo"
             onerror="this.closest('.q-image').style.display='none';">
        <div class="q-credit">${q.img.credit} ${q.img.link && q.img.link !== "#" ? `· <a href="${q.img.link}" target="_blank" rel="noopener">Fuente/licencia</a>` : ""}</div>
      </div>
    `;
  }

  if (esMulti(q)) {
    const respGuardada = respuestasUsuario[idxPregunta];
    html += `<div class="options">`;
    q.opciones.forEach((op, iOp) => {
      const checked = respGuardada === iOp ? "checked" : "";
      html += `
        <label class="option">
          <input type="radio" name="resp" value="${iOp}" ${checked}>
          <div class="option-text">${op}</div>
        </label>
      `;
    });
    html += `</div>`;
  } else if (esCorta(q)) {
    const valor = respuestasUsuario[idxPregunta] ?? "";
    html += `
      <input id="short-answer" class="short-answer" type="text"
             value="${valor}" placeholder="Respuesta muy breve (1–3 palabras)">
      <div class="hint">Consejo: 1–3 palabras (sin frases largas)</div>
    `;
  }

  cont.innerHTML = html;

  $("btn-prev").disabled = (indice === 0);
  $("btn-next").textContent = (indice === preguntas.length - 1) ? "Terminar test" : "Siguiente ▶";
}

// =====================
// Guardar respuesta actual
// =====================
function guardarRespuestaActual() {
  const idxPregunta = orden[indice];
  const q = preguntas[idxPregunta];

  if (esMulti(q)) {
    const marcada = document.querySelector("input[name='resp']:checked");
    if (!marcada) return false;
    respuestasUsuario[idxPregunta] = parseInt(marcada.value, 10);
    return true;
  }

  if (esCorta(q)) {
    const input = $("short-answer");
    if (!input) return false;
    const valor = input.value.trim();
    if (!valor) return false;
    respuestasUsuario[idxPregunta] = valor;
    return true;
  }

  return false;
}

// =====================
// Navegación
// =====================
function siguiente() {
  if (!guardarRespuestaActual()) {
    alert("Responde antes de continuar 🙂");
    return;
  }

  indice++;
  if (indice >= preguntas.length) {
    mostrarResultados();
  } else {
    renderPregunta();
  }
}

function anterior() {
  if (indice === 0) return;
  indice--;
  renderPregunta();
}

// =====================
// Resultados: aciertos/fallos + fallos corregidos
// =====================
function textoRespuestaUsuario(q, resp) {
  if (resp === null || resp === undefined) return "—";
  if (esMulti(q)) return q.opciones[resp] ?? "—";
  return String(resp);
}

function textoCorrecto(q) {
  if (esMulti(q)) return q.opciones[q.correcta];
  return (q.respuestas && q.respuestas[0]) ? q.respuestas[0] : "—";
}

function esCorrecta(q, resp) {
  if (resp === null || resp === undefined) return false;
  if (esMulti(q)) return resp === q.correcta;
  return coincideCorta(resp, q.respuestas);
}

function mostrarResultados() {
  $("test-card").classList.add("hidden");
  $("result-card").classList.remove("hidden");

  let correctas = 0;
  const fallos = [];

  preguntas.forEach((q, idx) => {
    const resp = respuestasUsuario[idx];
    if (esCorrecta(q, resp)) correctas++;
    else fallos.push({ q, resp });
  });

  const total = preguntas.length;
  const errores = total - correctas;

  let html = `
    <h2>Resultados del test</h2>
    <div class="summary">
      ✅ Aciertos: <strong>${correctas}</strong> / ${total}<br>
      ❌ Fallos: <strong>${errores}</strong>
    </div>
    <div class="summary" style="margin-top:10px">
      Revisa abajo los fallos con la <strong>respuesta correcta</strong> y la <strong>idea clave</strong>.
    </div>
  `;

  if (fallos.length > 0) {
    html += `<div class="summary" style="margin-top:12px"><strong>Fallos corregidos</strong>:</div>`;
    html += `<ul class="list-fails">`;

    fallos.forEach(({ q, resp }) => {
      html += `
        <li>
          <span class="qtitle">${q.es}</span>
          <span class="line">Tu respuesta: <strong>${textoRespuestaUsuario(q, resp)}</strong></span>
          <span class="line">Correcta: <strong>${textoCorrecto(q)}</strong></span>
          <span class="line">${q.explicacion ?? ""}</span>
          <span class="pill-mini">Repasar 30s</span>
        </li>
      `;
    });

    html += `</ul>`;
  }

  html += `
    <div class="summary" style="margin-top:14px;text-align:center">
      <button class="btn btn-primary" onclick="location.reload()">🔁 Volver a practicar</button>
    </div>
  `;

  $("result-content").innerHTML = html;
}

// =====================
// Init
// =====================
document.addEventListener("DOMContentLoaded", () => {
  $("btn-prev").addEventListener("click", anterior);
  $("btn-next").addEventListener("click", siguiente);
  renderPregunta();
});
