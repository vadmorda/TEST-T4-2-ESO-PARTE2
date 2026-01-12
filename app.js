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
    credit: "Wikimedia Commons (CC BY-SA)",
  },
  mezquitaInterior: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/C%C3%B3rdoba_-_Mezquita-Catedral_-_Interior_-_04.jpg?width=1400",
    credit: "Wikimedia Commons (CC BY-SA)",
  },
  mihrab: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mezquita_de_C%C3%B3rdoba_-_Mihrab.jpg?width=1400",
    credit: "Wikimedia Commons",
  },
  patioLeones: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Patio_de_los_Leones_Alhambra_Granada.jpg?width=1400",
    credit: "Wikimedia Commons",
  },
  azulejos: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Alhambra_tile_patterns.jpg?width=1400",
    credit: "Wikimedia Commons",
  },
  yeseria: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Alhambra_stucco_details.jpg?width=1400",
    credit: "Wikimedia Commons",
  },
  caligrafia: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Arabic_calligraphy_on_tile.jpg?width=1400",
    credit: "Wikimedia Commons",
  },
  ceramica: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hispano-Moresque_ware_vase.jpg?width=1400",
    credit: "Wikimedia Commons",
  },
  zoco: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Souk_in_Fez_Morocco.jpg?width=1400",
    credit: "Wikimedia Commons",
  },
  noria: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Noria_de_la_Albolafia_C%C3%B3rdoba.jpg?width=1400",
    credit: "Wikimedia Commons",
  },
  patioCasa: {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Traditional_courtyard_house_Andalusia.jpg?width=1400",
    credit: "Wikimedia Commons",
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
    .trim();
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

  // ---- VIDA EN AL-ÁNDALUS ----
  { tipo:"multi", es:"La sociedad andalusí se caracterizaba por ser…", opciones:["Muy heterogénea","Igualitaria","Exclusivamente musulmana"], correcta:0,
    explicacion:"Había diversidad étnica, social y religiosa." },

  { tipo:"multi", es:"¿Quiénes formaban el grupo social más poderoso?", opciones:["Musulmanes","Mozárabes","Esclavos"], correcta:0,
    explicacion:"Los musulmanes controlaban tierras y cargos." },

  { tipo:"multi", es:"¿Quiénes eran los mozárabes?", opciones:["Cristianos que mantenían su religión","Musulmanes bereberes","Judíos conversos"], correcta:0,
    explicacion:"Cristianos que vivían en al-Ándalus conservando su fe." },

  { tipo:"multi", es:"¿Quiénes eran los muladíes?", opciones:["Cristianos convertidos al islam","Judíos comerciantes","Árabes nobles"], correcta:0,
    explicacion:"Cristianos que adoptaron el islam y la cultura musulmana." },

  { tipo:"corta", es:"Nombre de los barrios donde vivían los judíos (1 palabra).", respuestas:["juderias","juderías"],
    explicacion:"Vivían en juderías." },

  { tipo:"img-multi", img:IMG.zoco, es:"Observa la imagen. ¿Qué actividad económica se representa?", opciones:["Comercio","Agricultura","Minería"], correcta:0,
    explicacion:"Los zocos eran mercados urbanos." },

  { tipo:"img-multi", img:IMG.noria, es:"¿Para qué servía el elemento de la imagen?", opciones:["Elevar agua","Defender la ciudad","Moldear cerámica"], correcta:0,
    explicacion:"La noria elevaba agua para el regadío." },

  { tipo:"multi", es:"La base de la economía andalusí era…", opciones:["La agricultura","La industria pesada","La ganadería extensiva"], correcta:0,
    explicacion:"La mayoría de la población se dedicaba a la agricultura." },

  { tipo:"corta", es:"Escribe una moneda andalusí de oro (1 palabra).", respuestas:["dinar"],
    explicacion:"El dinar era la moneda de oro." },

  { tipo:"img-multi", img:IMG.patioCasa, es:"¿Qué elemento organiza la vivienda andalusí?", opciones:["El patio","La fachada","La torre"], correcta:0,
    explicacion:"La casa se organizaba en torno a un patio." },

  // ---- ARTE EN AL-ÁNDALUS ----
  { tipo:"img-multi", img:IMG.mezquitaInterior, es:"¿Qué tipo de edificio es el de la imagen?", opciones:["Mezquita","Castillo","Iglesia"], correcta:0,
    explicacion:"Es una mezquita, edificio religioso islámico." },

  { tipo:"img-multi", img:IMG.arcoHerradura, es:"¿Qué elemento arquitectónico aparece?", opciones:["Arco de herradura","Arco ojival","Arco romano"], correcta:0,
    explicacion:"El arco de herradura es característico de al-Ándalus." },

  { tipo:"img-multi", img:IMG.mihrab, es:"¿Qué parte de la mezquita es esta?", opciones:["Mihrab","Minarete","Patio"], correcta:0,
    explicacion:"El mihrab indica la dirección de la oración." },

  { tipo:"img-multi", img:IMG.patioLeones, es:"¿A qué conjunto pertenece esta imagen?", opciones:["La Alhambra","Medina Azahara","Mezquita de Córdoba"], correcta:0,
    explicacion:"El Patio de los Leones está en la Alhambra." },

  { tipo:"img-multi", img:IMG.azulejos, es:"¿Qué tipo de decoración se observa?", opciones:["Geométrica","Figurativa","Realista"], correcta:0,
    explicacion:"Predomina la decoración geométrica." },

  { tipo:"img-multi", img:IMG.yeseria, es:"¿Qué técnica decorativa aparece?", opciones:["Yesería","Fresco","Vidriera"], correcta:0,
    explicacion:"La yesería es estuco tallado." },

  { tipo:"img-multi", img:IMG.caligrafia, es:"¿Qué forma artística es esta?", opciones:["Caligrafía árabe","Escultura","Pintura mural"], correcta:0,
    explicacion:"La escritura se usa como decoración." },

  { tipo:"img-multi", img:IMG.ceramica, es:"Esta pieza pertenece a…", opciones:["Cerámica andalusí","Arte gótico","Arte romano"], correcta:0,
    explicacion:"Es cerámica decorativa andalusí." },

  { tipo:"multi", es:"En el arte islámico, la decoración suele evitar…", opciones:["Figuras humanas","Formas geométricas","Motivos vegetales"], correcta:0,
    explicacion:"Se evita la representación humana en contextos religiosos." },

  { tipo:"corta", es:"Nombre del arco característico (2 palabras).", respuestas:["arco de herradura","arco herradura"],
    explicacion:"Arco de herradura." },

  { tipo:"corta", es:"Nombre de la técnica decorativa en estuco (1 palabra).", respuestas:["yeseria","yesería"],
    explicacion:"Yesería." },

  { tipo:"corta", es:"Nombre del lugar de oración en la mezquita (1 palabra).", respuestas:["mihrab"],
    explicacion:"Mihrab." },

  { tipo:"multi", es:"Los motivos vegetales estilizados se llaman…", opciones:["Atarique","Perspectiva","Relieve clásico"], correcta:0,
    explicacion:"El ataurique es decoración vegetal." },

  { tipo:"multi", es:"¿Dónde se desarrolló especialmente el arte nazarí?", opciones:["Granada","Toledo","Zaragoza"], correcta:0,
    explicacion:"En el reino nazarí de Granada." },

  { tipo:"multi", es:"¿Qué función tenía el arte andalusí?", opciones:["Decorativa y simbólica","Solo defensiva","Industrial"], correcta:0,
    explicacion:"Arte con valor decorativo y simbólico." }
];

// Seguridad
if (preguntas.length !== 35) {
  console.warn("El test no tiene 35 preguntas:", preguntas.length);
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
        <img src="${q.img.src}">
        <div class="q-credit">${q.img.credit}</div>
      </div>`;
  }

  if (esMulti(q)) {
    html += `<div class="options">`;
    q.opciones.forEach((op, i) => {
      html += `
        <label class="option">
          <input type="radio" name="resp" value="${i}">
          <div class="option-text">${op}</div>
        </label>`;
    });
    html += `</div>`;
  } else {
    html += `<input id="short-answer" class="short-answer" placeholder="Respuesta breve">`;
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
    if (!r) return false;
    respuestasUsuario[orden[indice]] = parseInt(r.value);
    return true;
  } else {
    const v = $("short-answer").value.trim();
    if (!v) return false;
    respuestasUsuario[orden[indice]] = v;
    return true;
  }
}

function siguiente() {
  if (!guardarRespuesta()) { alert("Responde antes de continuar"); return; }
  indice++;
  indice >= preguntas.length ? mostrarResultados() : renderPregunta();
}

function anterior() {
  if (indice > 0) { indice--; renderPregunta(); }
}

function esCorrecta(q, r) {
  if (r == null) return false;
  return esMulti(q) ? r === q.correcta : coincideCorta(r, q.respuestas);
}

function mostrarResultados() {
  $("test-card").classList.add("hidden");
  $("result-card").classList.remove("hidden");

  let correctas = 0;
  let html = `<h2>Resultados</h2><ul class="list-fails">`;

  preguntas.forEach((q, i) => {
    const r = respuestasUsuario[i];
    if (esCorrecta(q, r)) correctas++;
    else {
      html += `<li>
        <strong>${q.es}</strong><br>
        Tu respuesta: ${r ?? "—"}<br>
        Correcta: ${esMulti(q) ? q.opciones[q.correcta] : q.respuestas[0]}<br>
        ${q.explicacion}
      </li>`;
    }
  });

  html += `</ul>
    <p>✅ Aciertos: ${correctas} / ${preguntas.length}</p>
    <button class="btn btn-primary" onclick="location.reload()">🔁 Repetir</button>`;

  $("result-content").innerHTML = html;
}

// =====================
document.addEventListener("DOMContentLoaded", () => {
  $("btn-prev").addEventListener("click", anterior);
  $("btn-next").addEventListener("click", siguiente);
  renderPregunta();
});
