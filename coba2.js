const tooltip = document.getElementById("tooltip");
const provinces = document.querySelectorAll(".land");

// ================= TOOLTIP =================
provinces.forEach(prov => {
  prov.addEventListener("mousemove", (e) => {
    const name = prov.getAttribute("title");

    tooltip.innerHTML = name;
    tooltip.style.left = e.pageX + 10 + "px";
    tooltip.style.top = e.pageY + 10 + "px";

    tooltip.classList.add("show");
  });

  prov.addEventListener("mouseleave", () => {
    tooltip.classList.remove("show");
  });
});

// ================= LOAD DATA =================
let dataProvinsi = {};
let dataIndonesia = {};
let dataIDIpusat = {};
let dataIDIprovinsi = {};
const urlIKIP = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXyYOiEg8ic15bpY_E1ibI2vmY-4L0ppP2fcERu8vQLMkU2AjAeGRYWmVl6obotB6GOtBo1MX3b5Qj/pub?gid=0&single=true&output=csv";
const urlIDI  = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXyYOiEg8ic15bpY_E1ibI2vmY-4L0ppP2fcERu8vQLMkU2AjAeGRYWmVl6obotB6GOtBo1MX3b5Qj/pub?gid=2118180505&single=true&output=csv";
const urlIKPers = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXyYOiEg8ic15bpY_E1ibI2vmY-4L0ppP2fcERu8vQLMkU2AjAeGRYWmVl6obotB6GOtBo1MX3b5Qj/pub?gid=1952727587&single=true&output=csv";
const urlKPIP = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXyYOiEg8ic15bpY_E1ibI2vmY-4L0ppP2fcERu8vQLMkU2AjAeGRYWmVl6obotB6GOtBo1MX3b5Qj/pub?gid=749840285&single=true&output=csv";
const urlIMDI = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXyYOiEg8ic15bpY_E1ibI2vmY-4L0ppP2fcERu8vQLMkU2AjAeGRYWmVl6obotB6GOtBo1MX3b5Qj/pub?gid=782464880&single=true&output=csv";
const urlIAP = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXyYOiEg8ic15bpY_E1ibI2vmY-4L0ppP2fcERu8vQLMkU2AjAeGRYWmVl6obotB6GOtBo1MX3b5Qj/pub?gid=1382964469&single=true&output=csv";
const urlPIKP = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXyYOiEg8ic15bpY_E1ibI2vmY-4L0ppP2fcERu8vQLMkU2AjAeGRYWmVl6obotB6GOtBo1MX3b5Qj/pub?gid=1004335329&single=true&output=csv";

async function loadIKIP() {
  const res = await fetch(urlIKIP);
  const text = await res.text();
  const rows = text.split("\n").slice(1);

  const data = {};

  rows.forEach((row, index) => {
    if (!row.trim()) return;

    const cols = row.split(",");
    const nama = cols[0].trim();

    const obj = {
      "2021": parseFloat(cols[1]),
      "2022": parseFloat(cols[2]),
      "2023": parseFloat(cols[3]),
      "2024": parseFloat(cols[4]),
      "2025": parseFloat(cols[5]),
    };

    if (index === rows.length - 1){
      dataIndonesia["IKIP"] = obj;
    }else{
      data[nama] = obj;
    }
  });

  return data;
}

async function loadIDI() {
  const res = await fetch(urlIDI);
  const text = await res.text();
  const rows = text.split("\n").slice(1);

  const data = {};

  rows.forEach((row, index) => {
    if (!row.trim()) return;

    const cols = row.split(",");
    const nama = cols[0].trim();

    const obj = {
      "2021": parseFloat(cols[1]),
      "2022": parseFloat(cols[2]),
      "2023": parseFloat(cols[3]),
      "2024": parseFloat(cols[4]),
      "2025": parseFloat(cols[5]),
    };

    if (index === rows.length - 3){
      dataIndonesia["IDI"] = obj;
    }else if (index === rows.length - 2){
      dataIDIpusat = obj;
    }else if (index === rows.length - 1){
      dataIDIprovinsi = obj;
    }
    else{
      data[nama] = obj;
    }
  });

  return data;
}

async function loadIKPers() {
  const res = await fetch(urlIKPers);
  const text = await res.text();
  const rows = text.split("\n").slice(1);

  const data = {};

  rows.forEach((row, index) => {
    if (!row.trim()) return;

    const cols = row.split(",");
    const nama = cols[0].trim();

    const obj  = {
      "2021": parseFloat(cols[1]),
      "2022": parseFloat(cols[2]),
      "2023": parseFloat(cols[3]),
      "2024": parseFloat(cols[4]),
      "2025": parseFloat(cols[5]),
    };

    if (index === rows.length - 1){
      dataIndonesia["IKPers"] = obj;
    }else{
      data[nama] = obj;
    }
  });

  return data;
}

async function loadKPIP() {
  const res = await fetch(urlKPIP);
  const text = await res.text();
  const rows = text.split("\n").slice(1);

  const data = {};

  rows.forEach((row, index) => {
    if (!row.trim()) return;

    const cols = row.split(",");
    const nama = cols[0].trim();

    const obj  = {
      "2021": parseFloat(cols[1]),
      "2022": parseFloat(cols[2]),
      "2023": parseFloat(cols[3]),
      "2024": parseFloat(cols[4]),
      "2025": parseFloat(cols[5]),
    };

    if (index === rows.length - 1){
      dataIndonesia["KPIP"] = obj;
    }else{
      data[nama] = obj;
    }
  });

  return data;
}

async function loadIMDI() {
  const res = await fetch(urlIMDI);
  const text = await res.text();
  const rows = text.split("\n").slice(1);

  const data = {};

  rows.forEach((row, index) => {
    if (!row.trim()) return;

    const cols = row.split(",");
    const nama = cols[0].trim();

    const obj  = {
      "2021": parseFloat(cols[1]),
      "2022": parseFloat(cols[2]),
      "2023": parseFloat(cols[3]),
      "2024": parseFloat(cols[4]),
      "2025": parseFloat(cols[5]),
    };

    if (index === rows.length - 1){
      dataIndonesia["IMDI"] = obj;
    }else{
      data[nama] = obj;
    }
  });

  return data;
}

async function loadIAP() {
  const res = await fetch(urlIAP);
  const text = await res.text();
  const rows = text.split("\n").slice(1);

  const data = {};

  rows.forEach((row,index) => {
    if (!row.trim()) return;

    const cols = row.split(",");
    const nama = cols[0].trim();

    const obj = {
      "2021": parseFloat(cols[1]),
      "2022": parseFloat(cols[2]),
      "2023": parseFloat(cols[3]),
      "2024": parseFloat(cols[4]),
      "2025": parseFloat(cols[5]),
    };

    if (index === rows.length - 1){
      dataIndonesia["IAP"] = obj;
    }else{
      data[nama] = obj;
    }
  });

  return data;
}

async function loadPIKP() {
  const res = await fetch(urlPIKP);
  const text = await res.text();
  const rows = text.split("\n").slice(1);

  const data = {};

  rows.forEach((row, index) => {
    if (!row.trim()) return;

    const cols = row.split(",");
    const nama = cols[0].trim();

    const obj  = {
      "2021": parseFloat(cols[1]),
      "2022": parseFloat(cols[2]),
      "2023": parseFloat(cols[3]),
      "2024": parseFloat(cols[4]),
      "2025": parseFloat(cols[5]),
    };

    if (index === rows.length - 1){
      dataIndonesia["PIKP"] = obj;
    }else{
      data[nama] = obj;
    }
  });

  return data;
}

Promise.all([loadIKIP(), loadIDI(), loadIKPers(), loadKPIP(), loadIMDI(), loadIAP(), loadPIKP()]).then(([ikip, idi, ikpers, kpip, imdi, iap, pikp]) => {

  Object.keys(ikip).forEach(nama => {
    dataProvinsi[nama] = {
      IKIP: ikip[nama],
      IDI: idi[nama],
      IKPers: ikpers[nama],
      KPIP: kpip[nama],
      IMDI: imdi[nama],
      IAP: iap[nama],
      PIKP: pikp[nama] || {}
    };
  });

  console.log("DATA GABUNG:", dataProvinsi);

  updateIndonesia();
  updateWarnaPeta();
  updateIDIBox();
});

const indikatorSelect = document.getElementById("indikatorSelect");
const tahunSelect = document.getElementById("tahunSelect");

indikatorSelect.addEventListener("change", () => {
  updateIndonesia();
  updateWarnaPeta();
  updateLegend();
  updateIDIBox();
});

tahunSelect.addEventListener("change", () => {
  updateIndonesia();
  updateWarnaPeta();
  updateLegend();
  updateIDIBox();
});

// ================= CLICK EVENT =================
// ==========================================
// POPUP RESPONSIVE UNTUK FILTER ALL + ALL
// ganti seluruh CLICK EVENT lama dengan ini
// ==========================================

const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
  document.querySelector("svg").style.pointerEvents = "auto";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
    document.querySelector("svg").style.pointerEvents = "auto";
  }
});

provinces.forEach(p => {
  p.addEventListener("click", () => {

    const nama = p.getAttribute("title").trim();
    const indikator = indikatorSelect.value;
    const tahun = tahunSelect.value;
    const data = dataProvinsi[nama];

    if (!data) return;

    document.getElementById("namaProvinsi").innerHTML = nama;

    const popupBox = document.querySelector(".popup-content");
    const isiBox = document.getElementById("nilaiIndeks");

    let isi = "";

    /* ======================================
       FILTER ALL + ALL
    ====================================== */
    if (indikator === "ALL" && tahun === "ALL") {

      popupBox.style.width = "92vw";
      popupBox.style.maxWidth = "950px";
      popupBox.style.height = "47vh";
      popupBox.style.overflowY = "auto";

      isi += `
      <div style="
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(50px,1fr));
        gap:8px;
      ">
      `;

      Object.keys(data).forEach(ind => {

        isi += `
        <div style="
          border:1px solid #e5e5e5;
          border-radius:12px;
          padding:14px;
          background:#fafafa;
        ">
          <div style="
            font-size:16px;
            font-weight:700;
            color:#122f36;
            margin-bottom:10px;
            text-align:center;
          ">
            ${ind}
          </div>
        `;

        for (let th in data[ind]) {
          isi += `
          <div style="
            display:flex;
            justify-content:space-between;
            padding:5px 0;
            border-bottom:1px dashed #ddd;
            font-size:15px;
          ">
            <span>${th}:</span>
            <strong>${data[ind][th]}</strong>
          </div>
          `;
        }

        isi += `</div>`;
      });

      isi += `</div>`;
    }

    /* ======================================
       INDEKS ALL + 1 TAHUN
    ====================================== */
    else if (indikator === "ALL") {

      popupBox.style.width = "390px";
      popupBox.style.maxWidth = "90vw";
      popupBox.style.height = "auto";
      popupBox.style.padding = "10px 12px";

      isi += `
      <div style="
        font-weight:700;
        margin-bottom:3px;
        margin-top:0;
        font-size:14px;
        color:#122f36;
        text-align:center;
        padding-bottom:2px;
        line-height:1;
        border-bottom:1px solid #eee;
      ">
        ${tahun}
      </div>

      <div style="
        display:flex;
        flex-wrap:nowrap;
        gap:4px;
        overflow-x:auto;
        padding-top:1px;
        padding-bottom:1px;
      ">
      `;

      Object.keys(data).forEach(ind => {

        const nilai = data[ind]?.[tahun];

        if (nilai !== undefined && !isNaN(nilai)) {

          isi += `
          <div style="
            min-width:66px;
            flex:0 0 auto;
            border:1px solid #ddd;
            border-radius:7px;
            background:#f8fafc;
            padding:3px 3px;
            text-align:center;
            line-height:1;
          ">

            <div style="
              font-size:9px;
              color:#666;
              margin-bottom:0px;
              font-weight:600;
            ">
              ${ind}
            </div>

            <div style="
              font-size:12px;
              font-weight:700;
              color:#122f36;
              margin-top:0;
            ">
              ${nilai}
            </div>

          </div>
          `;
        }
      });

      isi += `</div>`;
    }

    /* ======================================
       1 INDEKS + TAHUN ALL
    ====================================== */
    else if (tahun === "ALL") {

      popupBox.style.width = "390px";
      popupBox.style.maxWidth = "95vw";
      popupBox.style.height = "auto";
      popupBox.style.padding = "10px 12px";

      isi += `
      <div style="
        font-weight:700;
        margin-bottom:3px;
        margin-top:0;
        font-size:14px;
        color:#122f36;
        text-align:center;
        padding-bottom:2px;
        line-height:1;
        border-bottom:1px solid #eee;
      ">
        ${indikator}
      </div>

      <div style="
        display:flex;
        flex-wrap:nowrap;
        gap:4px;
        overflow-x:auto;
        padding-top:1px;
        padding-bottom:1px;
      ">
      `;

      for (let th in data[indikator]) {

        isi += `
        <div style="
          min-width:66px;
          flex:0 0 auto;
          border:1px solid #ddd;
          border-radius:7px;
          background:#f8fafc;
          padding:3px 3px;
          text-align:center;
          line-height:1;
        ">

          <div style="
            font-size:9px;
            color:#666;
            margin-bottom:0px;
            font-weight:600;
          ">
            ${th}
          </div>

          <div style="
            font-size:12px;
            font-weight:700;
            color:#122f36;
            margin-top:0;
          ">
            ${data[indikator][th]}
          </div>

        </div>
        `;
      }

      isi += `</div>`;
    }

    /* ======================================
       NORMAL
    ====================================== */
    else {

      popupBox.style.width = "420px";
      popupBox.style.maxWidth = "95vw";
      popupBox.style.height = "auto";

      const nilai = data[indikator]?.[tahun];

      isi = `
      <div style="
        display:flex;
        justify-content:space-between;
        font-size:18px;
        margin-top:10px;
      ">
        <span>${indikator} ${tahun}</span>
        <strong>${nilai ?? "-"}</strong>
      </div>
      `;
    }

    isiBox.innerHTML = isi;
    popup.style.display = "block";
  });
});







window.addEventListener("DOMContentLoaded", () => {
  popup.style.display = "none";
  document.querySelector("svg").style.pointerEvents = "auto";
  updateIDIBox();
});

console.log("DATA PROVINSI:", dataProvinsi);

function updateIndonesia() {
  const indikator = indikatorSelect.value;
  const tahun = tahunSelect.value;

  let isi = "";

  /* =====================================
     JIKA FILTER INDEKS = ALL
  ===================================== */
  if (indikator === "ALL") {

    // =====================================
    // TAHUN = ALL  → semua indeks + semua tahun
    // =====================================
    if (tahun === "ALL") {

      isi = `
      <div style="
        display:flex;
        flex-wrap:wrap;
        gap:12px;
      ">
      `;

      Object.keys(dataIndonesia).forEach(ind => {

        isi += `
        <div style="
          min-width:170px;
          background:#f5f7fa;
          border:1px solid #ddd;
          border-radius:10px;
          padding:10px;
        ">
          <div style="
            font-weight:700;
            margin-bottom:8px;
            color:#122f36;
            text-align:center;
          ">
            ${ind}
          </div>
        `;

        for (let th in dataIndonesia[ind]) {
          isi += `
          <div style="
            display:flex;
            justify-content:space-between;
            font-size:13px;
            margin:3px 0;
          ">
            <span>${th}</span>
            <strong>${dataIndonesia[ind][th]}</strong>
          </div>
          `;
        }

        isi += `</div>`;
      });

      isi += `</div>`;
    }

    // =====================================
    // TAHUN TERTENTU → indeks berjajar horizontal
    // =====================================
    else {

      isi = `
      <div style="
        display:flex;
        flex-wrap:wrap;
        gap:10px;
      ">
      `;

      Object.keys(dataIndonesia).forEach(ind => {
        const nilai = dataIndonesia[ind]?.[tahun];

        if (nilai !== undefined && !isNaN(nilai)) {
          isi += `
          <div style="
            min-width:100px;
            background:#f5f7fa;
            border:1px solid #ddd;
            border-radius:10px;
            padding:2px;
            text-align:center;
          ">
            <div style="
              font-size:12px;
              color:#666;
              margin-bottom:2px;
            ">
              ${ind}
            </div>

            <div style="
              font-size:15px;
              font-weight:700;
              color:#122f36;
            ">
              ${nilai}
            </div>
          </div>
          `;
        }
      });

      isi += `</div>`;
    }
  }

  /* =====================================
     JIKA PILIH 1 INDEKS
  ===================================== */
  else {

    // =====================================
    // TAHUN = ALL → tampil semua tahun horizontal
    // =====================================
  if (tahun === "ALL") {

    isi = `
    <div style="
      display:flex;
      flex-wrap:nowrap;
      gap:6px;
      overflow-x:auto;
      padding-bottom:4px;
    ">
    `;

    for (let th in dataIndonesia[indikator]) {

      isi += `
      <div style="
        min-width:72px;
        flex:0 0 auto;
        background:#f5f7fa;
        border:1px solid #d9e0e4;
        border-radius:8px;
        padding:4px 5px;
        text-align:center;
        box-sizing:border-box;
      ">
        <div style="
          font-size:10px;
          color:#666;
          margin-bottom:3px;
          font-weight:600;
        ">
          ${th}
        </div>

        <div style="
          font-size:13px;
          font-weight:700;
          color:#122f36;
          line-height:1.1;
        ">
          ${dataIndonesia[indikator][th]}
        </div>
      </div>
      `;
    }

    isi += `</div>`;
  }

    // =====================================
    // MODE NORMAL
    // =====================================
    else {

      const nilai = dataIndonesia[indikator]?.[tahun];

      isi = `
      <div style="
        display:flex;
        justify-content:space-between;
        align-items:center;
        background:#f5f7fa;
        border:1px solid #ddd;
        border-radius:10px;
        padding:8px;
      ">
        <span><strong>${indikator} ${tahun}</strong></span>
        <strong style="font-size:15px; color:#122f36;">
          ${nilai ?? "-"}
        </strong>
      </div>
      `;
    }
  }

  document.getElementById("nilaiIndonesia").innerHTML = isi;
  refreshBoxNasional();
}

const levelIndeks = {
  IKIP:  [32, 60, 80, 90],
  IDI:   [0, 0, 60, 81],
  IKPers:[31, 56, 70, 90],
  KPIP:  [51, 60, 70, 80],
  IMDI:  [30.89, 36.28, 47.07, 52.48],
  IAP:   [51, 61, 76, 91],
  PIKP:  [51, 60, 70, 80]
};

function updateWarnaPeta() {
  const indikator = indikatorSelect.value;
  const tahun = tahunSelect.value;

  provinces.forEach(p => {
    const nama = p.getAttribute("title").trim();
    const data = dataProvinsi[nama];

    p.classList.remove(
      "no-data",
      "level-1",
      "level-2",
      "level-3",
      "level-4",
      "level-5",
      "level-6"
    );

    /* =====================================
       MODE ALL + ALL
       Semua provinsi dianggap punya data
    ===================================== */
    if (indikator === "ALL" && tahun === "ALL") {
      p.classList.add("level-6"); // warna netral
      p.style.cursor = "pointer";
      return;
    }

    /* =====================================
       MODE ALL INDEKS + 1 TAHUN
    ===================================== */
    if (indikator === "ALL") {

      let adaData = false;

      for (const ind in data) {
        const nilai = data[ind]?.[tahun];

        if (nilai !== undefined && !isNaN(nilai)) {
          adaData = true;
          break;
        }
      }

      if (adaData) {
        p.classList.add("level-6");
        p.style.cursor = "pointer";
      } else {
        p.classList.add("no-data");
        p.style.cursor = "default";
      }

      return;
    }

    /* =====================================
       MODE 1 INDEKS + ALL TAHUN
    ===================================== */
    if (tahun === "ALL") {

      let adaData = false;

      for (let th in data[indikator]) {
        const nilai = data[indikator][th];

        if (nilai !== undefined && !isNaN(nilai)) {
          adaData = true;
          break;
        }
      }

      if (adaData) {
        p.classList.add("level-6");
        p.style.cursor = "pointer";
      } else {
        p.classList.add("no-data");
        p.style.cursor = "default";
      }

      return;
    }

    /* =====================================
       MODE NORMAL
    ===================================== */
    const nilai = data?.[indikator]?.[tahun];

    if (nilai === undefined || isNaN(nilai)) {
      p.classList.add("no-data");
      p.style.cursor = "default";
      return;
    }

    const batas = levelIndeks[indikator];

    if (nilai < batas[0]) p.classList.add("level-1");
    else if (nilai < batas[1]) p.classList.add("level-2");
    else if (nilai < batas[2]) p.classList.add("level-3");
    else if (nilai < batas[3]) p.classList.add("level-4");
    else p.classList.add("level-5");

    p.style.cursor = "pointer";
  });
}

/* =========================================================
   TAMBAHKAN SCRIPT INI DI BAGIAN PALING BAWAH JS ANDA
   (tidak perlu menghapus script lama)
========================================================= */


/* ===============================
   AUTO LEGEND DI SIDEBAR
=============================== */
const sidebar = document.querySelector(".sidebar");

if (!document.getElementById("legendBox")) {
  sidebar.insertAdjacentHTML(
    "beforeend",
    `
    <div class="legend-box" id="legendBox">
      <h3>Legend</h3>
      <div id="legendContent"></div>
    </div>
  `
  );
}


/* ===============================
   DESKRIPSI LEVEL TIAP INDEKS
=============================== */
const legendText = {

  IKIP: [
    "Buruk Sekali",
    "Buruk",
    "Sedang",
    "Baik",
    "Baik Sekali"
  ],

  IDI: [
    "-",
    "-",
    "Buruk",
    "Sedang",
    "Baik"
  ],

  IKPers: [
    "Tidak Bebas",
    "Kurang Bebas",
    "Agak Bebas",
    "Cukup Bebas",
    "Bebas"
  ],

  KPIP: [
    "Sangat Buruk",
    "Buruk",
    "Sedang",
    "Baik",
    "Sangat Baik"
  ],

  IMDI: [
    "Sangat Rendah",
    "Rendah",
    "Cukup",
    "Tinggi",
    "Sangat Tinggi"
  ],

  IAP: [
    "Kurang",
    "Sedang",
    "Cukup",
    "Baik",
    "Amat Baik"
  ],

  PIKP: [
    "Sangat Buruk",
    "Buruk",
    "Sedang",
    "Baik",
    "Sangat Baik"
  ]
};



/* =====================================================
   LEGEND DI LUAR SIDEBAR
   GANTI SCRIPT LEGEND LAMA DENGAN INI
===================================================== */

/* ===============================
   BUAT LEGEND DI LUAR SIDEBAR
=============================== */

if (!document.getElementById("legendBox")) {

  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div class="legend-floating" id="legendBox">
      <h3>Legend</h3>
      <div id="legendContent"></div>
    </div>
  `
  );

}


/* ===============================
   FUNCTION UPDATE LEGEND
=============================== */
function updateLegend() {
  const indikator = indikatorSelect.value;
  const legend = document.getElementById("legendContent");

  if (indikator === "ALL") {
    legend.innerHTML = "Pilih indikator untuk melihat legenda.";
    return;
  }

  const texts = legendText[indikator];

  legend.innerHTML = `
    <div class="legend-item">
      <span class="legend-color warna1"></span>
      <span>${texts[0]}</span>
    </div>

    <div class="legend-item">
      <span class="legend-color warna2"></span>
      <span>${texts[1]}</span>
    </div>

    <div class="legend-item">
      <span class="legend-color warna3"></span>
      <span>${texts[2]}</span>
    </div>

    <div class="legend-item">
      <span class="legend-color warna4"></span>
      <span>${texts[3]}</span>
    </div>

    <div class="legend-item">
      <span class="legend-color warna5"></span>
      <span>${texts[4]}</span>
    </div>

    <div class="legend-item">
      <span class="legend-color warna0"></span>
      <span>Tidak ada data</span>
    </div>
  `;
}
/* ===============================
   EVENT
=============================== */
indikatorSelect.addEventListener("change", updateLegend);
tahunSelect.addEventListener("change", updateLegend);

window.addEventListener("DOMContentLoaded", updateLegend);

function updateIDIBox() {
  const tahun = tahunSelect.value;
  const indikator = indikatorSelect.value;

  const box = document.getElementById("idiBox");

  // hanya tampil jika pilih IDI
  if (indikator !== "IDI") {
    box.style.display = "none";
    return;
  }

  box.style.display = "block";

  let isi = "";

  /* ===============================
     JIKA TAHUN = ALL
  =============================== */
  if (tahun === "ALL") {

    isi += `
    <div style="
      display:flex;
      flex-wrap:nowrap;
      gap:8px;
      overflow-x:auto;
      padding-bottom:4px;
    ">
    `;

    for (let th in dataIDIpusat) {

      isi += `
      <div style="
        min-width:10px;
        flex:0 0 auto;
        border:1px solid #ddd;
        border-radius:10px;
        padding:8px;
        background:#f8fafc;
        text-align:center;
      ">
        <div style="
          font-size:11px;
          font-weight:700;
          color:#666;
          margin-bottom:6px;
        ">
          <stan style='text-decoration:underline;'>${th}<stan>
        </div>

        <div style="
          font-size:12px;
          margin-bottom:4px;
        ">
          <stan style=opacity:0.7;">Pusat:</stan><br>
          <strong>${dataIDIpusat[th] ?? "-"}</strong>
        </div>

        <div style="
          font-size:12px;
        ">
          <stan style=opacity:0.7;">Prov:</stan><br>
          <strong>${dataIDIprovinsi[th] ?? "-"}</strong>
        </div>
      </div>
      `;
    }

    isi += `</div>`;
  }

  /* ===============================
     JIKA 1 TAHUN
  =============================== */
  else {

    isi = `
    <div style="margin-bottom:8px;">
      <strong>Pusat :</strong> ${dataIDIpusat[tahun] ?? "-"}
    </div>

    <div>
      <strong>Provinsi :</strong> ${dataIDIprovinsi[tahun] ?? "-"}
    </div>
    `;
  }

  document.getElementById("nilaiIDIKhusus").innerHTML = isi;
}

/* ===================================================
   BOX NASIONAL BISA DISEMBUNYIKAN
   GANTI / TAMBAHKAN SCRIPT INI
=================================================== */

/* ===============================
   BUAT HEADER + TOGGLE BUTTON
=============================== */
const boxNasional = document.getElementById("nilaiIndonesia");
const parentNasional = boxNasional.parentElement;

/* ==========================================
   GANTI BAGIAN BUTTON TOGGLE MENJADI INI
========================================== */

if (!document.getElementById("toggleNasional")) {
  parentNasional.insertAdjacentHTML(
    "afterbegin",
    `
    <div id="headerNasional" style="
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-bottom:5px;
    ">

      <div id="toggleNasional" style="
        background:#f5f7fa;
        border:1px solid #cfd8dc;
        border-radius:10px;
        padding:2px 12px;
        cursor:pointer;
        font-size:11px;
        font-weight:600;
        color:#122f36;
        user-select:none;

        min-width:95px;

        display:flex;
        justify-content:center;
        align-items:center;

        text-align:center;
        line-height:1;
        transition:0.2s;
      ">
        Sembunyikan
      </div>
    </div>
    `
  );
}

/* ==========================================
   EFFECT HOVER
========================================== */
const tombolNasional = document.getElementById("toggleNasional");

if (tombolNasional) {
  tombolNasional.addEventListener("mouseenter", () => {
    tombolNasional.style.background = "#122f36";
    tombolNasional.style.color = "white";
  });

  tombolNasional.addEventListener("mouseleave", () => {
    tombolNasional.style.background = "#f5f7fa";
    tombolNasional.style.color = "#122f36";
  });
}

/* ===============================
   STATUS SHOW / HIDE
=============================== */
let nasionalVisible = true;

/* ===============================
   EVENT BUTTON
=============================== */
document
  .getElementById("toggleNasional")
  .addEventListener("click", function () {

    nasionalVisible = !nasionalVisible;

    if (nasionalVisible) {
      boxNasional.style.display = "block";
      this.innerHTML = "Sembunyikan";
    } else {
      boxNasional.style.display = "none";
      this.innerHTML = "Tampilkan";
    }

});

/* ===============================
   AGAR SAAT UPDATE TETAP SESUAI
=============================== */
function refreshBoxNasional() {
  const box = document.getElementById("nilaiIndonesia");
  const btn = document.getElementById("toggleNasional");

  if (nasionalVisible) {
    box.style.display = "block";
    btn.innerHTML = "Sembunyikan";
  } else {
    box.style.display = "none";
    btn.innerHTML = "Tampilkan";
  }
}

/* ======================================
   TAMBAHKAN DI AKHIR updateIndonesia()
====================================== */
// tambahkan baris ini paling bawah function updateIndonesia():
refreshBoxNasional();



