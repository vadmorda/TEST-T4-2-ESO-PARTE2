// =====================================================
// TEST · Vida y arte en al-Ándalus (Apartados 4 y 5)
// 35 preguntas · imágenes libres · corrección al final
// =====================================================

const $ = (id) => document.getElementById(id);

// =====================
// Imágenes libres (Wikimedia Commons)
// =====================
const IMG = {
  arcoHerradura: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Horseshoe_arches_Mezquita_de_Cordoba.jpg?width=1400",
    credit: "Wikimedia Commons (CC BY-SA)"
  },
  mezquitaInterior: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/C%C3%B3rdoba_-_Mezquita-Catedral_-_Interior_-_04.jpg?width=1400",
    credit: "Wikimedia Commons (CC BY-SA)"
  },
  mihrab: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mezquita_de_C%C3%B3rdoba_-_Mihrab.jpg?width=1400",
    credit: "Wikimedia Commons"
  },
  patioLeones: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Patio_de_los_Leones_Alhambra_Granada.jpg?width=1400",
    credit: "Wikimedia Commons"
  },
  azulejos: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Alhambra_tile_patterns.jpg?width=1400",
    credit: "Wikimedia Commons"
  },
  yeseria: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Alhambra_stucco_details.jpg?width=1400",
    credit: "Wikimedia Commons"
  },
  caligrafia: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Arabic_calligraphy_on_tile.jpg?width=1400",
    credit: "Wikimedia Commons"
  },
  ceramica: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hispano-Moresque_ware_vase.jpg?width=1400",
    credit: "Wikimedia Commons"
  },
  zoco: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Souk_in_Fez_Morocco.jpg?width=1400",
    credit: "Wikimedia Commons"
  },
  noria: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Noria_de_la_Albolafia_C%C3%B3rdoba.jpg?width=1400",
    credit: "Wikimedia Commons"
  },
  patioCasa: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Traditional_courtyard_house_Andalusia.jpg?width=1400",
    credit: "Wikimedia Commons"
  },
  sinagogaCordoba: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sinagoga_de_C%C3%B3rdoba_-_interior.jpg?width=1400",
    credit: "Wikimedia Commons"
  },
  aceitunas: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Olive_harvest.jpg?width=1400",
    credit: "Wikimedia Commons"
  },
  huertoRegadio: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Irrigation_channel.jpg?width=1400",
    credit: "Wikimedia Commons"
  },
  minarete: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Giralda_Seville.jpg?width=1400",
    credit: "Wikimedia Commons"
  },
  ataurique: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Arabesque_ornament_Alhambra.jpg?width=1400",
    credit: "Wikimedia Commons"
  }
};

// =====================
// Utilidades
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
  return esperados.some(e => normalizar(e) === d);
}

function barajar(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// =====================
// 35 preguntas (vida + arte)
// =====================
const preguntas = [
  // ---- VIDA EN AL-ÁNDALUS (4) ----
  { tipo:"multi", es:"La sociedad andalusí se caracterizaba por ser…", opciones:["Muy heterogénea","Igualitaria","Exclusivamente musulmana"], correcta:0,
    explicacion:"Había diversidad étnica, social y religiosa." },

  { tipo:"multi", es:"¿Quiénes formaban el grupo social más poderoso?", opciones:["Musulmanes","Mozárabes","Esclavos"], correcta:0,
    explicacion:"Los musulmanes controlaban tierras y cargos." },

  { tipo:"multi", es:"¿Quiénes eran los mozárabes?", opciones:["Cristianos que mantenían su religión","Musulmanes bereberes","Judíos conversos"], correcta:0,
    explicacion:"Mozárabes = cristianos que vivían en al-Ándalus conservando su fe." },

  { tipo:"multi", es:"¿Quiénes eran los muladíes?", opciones:["Cristianos convertidos al islam","Judíos comerciantes","Árabes nobles"], correcta:0,
    explicacion:"Muladíes = cristianos que adoptaron el islam y la cultura musulmana." },

  { tipo:"corta", es:"Nombre de los barrios donde vivían los judíos (1 palabra).", respuestas:["juderias","juderías"],
    explicacion:"Vivían en juderías." },

  { tipo:"multi", es:"¿Qué grupo ocupaba el escalón social más bajo?", opciones:["Personas esclavas","Comerciantes","Nobles árabes"], correcta:0,
    explicacion:"Las personas esclavas ocupaban el escalón más bajo." },

  { tipo:"img-multi", img:IMG.zoco, es:"Observa la imagen. ¿Qué actividad económica se representa?", opciones:["Comercio","Agricultura","Minería"], correcta:0,
    explicacion:"Un zoco es un mercado: actividad comercial." },

  { tipo:"img-multi", img:IMG.huertoRegadio, es:"Observa la imagen. ¿Qué tipo de agricultura sugiere?", opciones:["Regadío","Solo secano","Industrial moderna"], correcta:0,
    explicacion:"El regadío usa canales/acequias para llevar agua a los cultivos." },

  { tipo:"img-multi", img:IMG.noria, es:"¿Para qué servía el elemento de la imagen?", opciones:["Elevar agua","Defender la ciudad","Moldear cerámica"], correcta:0,
    explicacion:"La noria elevaba agua para el regadío." },

  { tipo:"multi", es:"La base de la economía andalusí era…", opciones:["La agricultura","La industria pesada","La pesca oceánica"], correcta:0,
    explicacion:"La mayoría de la población se dedicaba a la agricultura." },

  { tipo:"img-multi", img:IMG.aceitunas, es:"Observa la imagen. ¿Qué cultivo mediterráneo fue importante en al-Ándalus?", opciones:["Olivo","Cacao","Caucho"], correcta:0,
    explicacion:"El olivo (aceite) era un cultivo mediterráneo relevante." },

  { tipo:"multi", es:"En las ciudades, la artesanía se organizaba normalmente en…", opciones:["Talleres y barrios por oficios","Castillos militares","Monasterios"], correcta:0,
    explicacion:"Los oficios se agrupaban en talleres y barrios especializados." },

  { tipo:"corta", es:"Escribe una moneda andalusí de oro (1 palabra).", respuestas:["dinar","dinár"],
    explicacion:"El dinar era la moneda de oro." },

  { tipo:"corta", es:"Escribe una moneda andalusí de plata (1 palabra).", respuestas:["dirhem","dírhem"],
    explicacion:"El dírhem era la moneda de plata." },

  { tipo:"img-multi", img:IMG.patioCasa, es:"¿Qué elemento organiza la vivienda andalusí?", opciones:["El patio","La fachada","La torre"], correcta:0,
    explicacion:"La casa se organiza en torno a un patio interior." },

  { tipo:"multi", es:"¿Por qué las ventanas a la calle solían ser pequeñas?", opciones:["Para proteger intimidad y del calor","Para que entrara más ruido","Por obligación cristiana"], correcta:0,
    explicacion:"Favorece la privacidad y ayuda a regular temperatura." },

  { tipo:"img-multi", img:IMG.sinagogaCordoba, es:"Observa la imagen. ¿Qué edificio es?", opciones:["Sinagoga","Mezquita","Catedral gótica"], correcta:0,
    explicacion:"Es una sinagoga (lugar de culto judío)." },

  { tipo:"multi", es:"En el judaísmo se cree en…", opciones:["Un único Dios","Varios dioses","Ningún dios"], correcta:0,
    explicacion:"El judaísmo es monoteísta." },

  { tipo:"corta", es:"Nombre del libro/código religioso judío citado (1 palabra).", respuestas:["torah","tora","torá"],
    explicacion:"Se menciona la Torah." },

  { tipo:"corta", es:"Día de descanso judío (1 palabra).", respuestas:["sabbat","sabat","shabbat","sabbath"],
    explicacion:"El Sabbat (sábado) es el día de descanso." },

  // ---- ARTE EN AL-ÁNDALUS (5) — MUY VISUAL ----
  { tipo:"img-multi", img:IMG.mezquitaInterior, es:"¿Qué tipo de edificio es el de la imagen?", opciones:["Mezquita","Castillo","Iglesia"], correcta:0,
    explicacion:"Es una mezquita: arquitectura religiosa islámica." },

  { tipo:"img-multi", img:IMG.arcoHerradura, es:"¿Qué elemento arquitectónico aparece?", opciones:["Arco de herradura","Arco ojival","Arco de medio punto"], correcta:0,
    explicacion:"El arco de herradura es característico en al-Ándalus." },

  { tipo:"img-multi", img:IMG.mihrab, es:"¿Qué parte de la mezquita es esta?", opciones:["Mihrab","Minarete","Patio"], correcta:0,
    explicacion:"El mihrab marca la dirección de la oración." },

  { tipo:"img-multi", img:IMG.minarete, es:"Observa la torre. ¿Qué función tenía en una mezquita?", opciones:["Minarete (llamada a la oración)","Campanario cristiano","Torre militar feudal"], correcta:0,
    explicacion:"El minarete sirve para la llamada a la oración." },

  { tipo:"img-multi", img:IMG.patioLeones, es:"¿A qué conjunto pertenece esta imagen?", opciones:["La Alhambra","Medina Azahara","Mezquita de Córdoba"], correcta:0,
    explicacion:"El Patio de los Leones está en la Alhambra (Granada)." },

  { tipo:"img-multi", img:IMG.azulejos, es:"¿Qué tipo de decoración se observa?", opciones:["Geométrica","Figurativa humana","Realismo renacentista"], correcta:0,
    explicacion:"Predomina la decoración geométrica (lacería/patrones)." },

  { tipo:"img-multi", img:IMG.yeseria, es:"¿Qué técnica decorativa aparece?", opciones:["Yesería","Fresco","Vidriera"], correcta:0,
    explicacion:"Yesería = estuco tallado, típico del arte andalusí." },

  { tipo:"img-multi", img:IMG.caligrafia, es:"¿Qué forma artística aparece?", opciones:["Caligrafía árabe","Escultura clásica","Pintura al óleo"], correcta:0,
    explicacion:"La escritura se usa como decoración artística." },

  { tipo:"img-multi", img:IMG.ataurique, es:"Observa el motivo vegetal estilizado. ¿Cómo se llama?", opciones:["Ataurique","Perspectiva","Gótico flamígero"], correcta:0,
    explicacion:"El ataurique es decoración vegetal estilizada." },

  { tipo:"img-multi", img:IMG.ceramica, es:"Esta pieza pertenece a…", opciones:["Cerámica andalusí","Arte gótico","Arte romano"], correcta:0,
    explicacion:"Es cerámica decorativa (artesanía)." },

  { tipo:"multi", es:"En el arte islámico, la decoración suele evitar…", opciones:["Figuras humanas (en contextos religiosos)","Geometría","Motivos vegetales"], correcta:0,
    explicacion:"Se evita la representación humana en el ámbito religioso." },

  { tipo:"multi", es:"¿Qué elementos decorativos son típicos en al-Ándalus?", opciones:["Geometría, ataurique y caligrafía","Retratos al óleo","Escultura de dioses"], correcta:0,
    explicacion:"Triada típica: geometría + ataurique + caligrafía." },

  { tipo:"corta", es:"Nombre del arco característico (2 palabras).", respuestas:["arco de herradura","arco herradura"],
    explicacion:"Arco de herradura." },

  { tipo:"corta", es:"Nombre de la técnica decorativa en estuco (1 palabra).", respuestas:["yeseria","yesería"],
    explicacion:"Yesería." },

  { tipo:"corta", es:"Nombre del lugar de oración en la mezquita (1 palabra).", respuestas:["mihrab"],
    explicacion:"Mihrab." }
];

// Seguridad: debe ser 35
if (preguntas.length !== 35) {
  console.warn("⚠️ El test no tiene 35 preguntas. Tiene:", preguntas.length);
}

// =====================
// Estado
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
  barra.style.width = ((indice + 1) / preguntas.length) * 100 + "%";
  label.textContent = `Pregunta ${indice + 1} de ${preguntas.length}`;
}

function renderPregunta() {
  actualizarProgreso();
  const q = preguntas[orden[indice]];
  const cont = $("question-container");

  let html = `<div class="question-text"><span class="q-es">${q.es}</span></div>`;

  if (q.img) {
    html += `
      <div class="q-image">
        <img src="${q.img.src}" alt="Imagen de apoyo"
             onerror="this.style.display='none'; this.parentElement.querySelector('.q-credit').innerHTML += ' · ❌ No se pudo cargar la imagen';">
        <div class="q-credit">${q.img.credit}</div>
      </div>`;
  }

  if (esMulti(q)) {
    const guardada = respuestasUsuario[orden[indice]];
    html += `<div class="options">`;
    q.opciones.forEach((op, i) => {
      const checked = guardada === i ? "checked" : "";
      html += `
        <label class="option">
          <input type="radio" name="resp" value="${i}" ${checked}>
          <div class="option-text">${op}</div>
        </label>`;
    });
    html += `</div>`;
  } else {
    const guardada = respuestasUsuario[orden[indice]] ?? "";
    html += `<input id="short-answer" class="short-answer" placeholder="Respuesta breve (1–3 palabras)" value="${guardada}">`;
  }

  cont.innerHTML = html;
  $("btn-prev").disabled = indice === 0;
  $("btn-next").textContent = indice === preguntas.length - 1 ? "Terminar test" : "Siguiente ▶";
}

// =====================
// Navegación y resultados
// =====================
function guardarRespuesta() {
  const q = preguntas[orden[indice]];

  if (esMulti(q)) {
    const r = document.querySelector("input[name='resp']:checked");
