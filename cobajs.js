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

  rows.forEach(row => {
    if (!row.trim()) return;

    const cols = row.split(",");
    const nama = cols[0].trim();

    data[nama] = {
      "2021": parseFloat(cols[1]),
      "2022": parseFloat(cols[2]),
      "2023": parseFloat(cols[3]),
      "2024": parseFloat(cols[4]),
      "2025": parseFloat(cols[5]),
    };
  });

  return data;
}

async function loadIDI() {
  const res = await fetch(urlIDI);
  const text = await res.text();
  const rows = text.split("\n").slice(1);

  const data = {};

  rows.forEach(row => {
    if (!row.trim()) return;

    const cols = row.split(",");
    const nama = cols[0].trim();

    data[nama] = {
      "2021": parseFloat(cols[1]),
      "2022": parseFloat(cols[2]),
      "2023": parseFloat(cols[3]),
      "2024": parseFloat(cols[4]),
      "2025": parseFloat(cols[5]),
    };
  });

  return data;
}

async function loadIKPers() {
  const res = await fetch(urlIKPers);
  const text = await res.text();
  const rows = text.split("\n").slice(1);

  const data = {};

  rows.forEach(row => {
    if (!row.trim()) return;

    const cols = row.split(",");
    const nama = cols[0].trim();

    data[nama] = {
      "2021": parseFloat(cols[1]),
      "2022": parseFloat(cols[2]),
      "2023": parseFloat(cols[3]),
      "2024": parseFloat(cols[4]),
      "2025": parseFloat(cols[5]),
    };
  });

  return data;
}

async function loadKPIP() {
  const res = await fetch(urlKPIP);
  const text = await res.text();
  const rows = text.split("\n").slice(1);

  const data = {};

  rows.forEach(row => {
    if (!row.trim()) return;

    const cols = row.split(",");
    const nama = cols[0].trim();

    data[nama] = {
      "2021": parseFloat(cols[1]),
      "2022": parseFloat(cols[2]),
      "2023": parseFloat(cols[3]),
      "2024": parseFloat(cols[4]),
      "2025": parseFloat(cols[5]),
    };
  });

  return data;
}

async function loadIMDI() {
  const res = await fetch(urlIMDI);
  const text = await res.text();
  const rows = text.split("\n").slice(1);

  const data = {};

  rows.forEach(row => {
    if (!row.trim()) return;

    const cols = row.split(",");
    const nama = cols[0].trim();

    data[nama] = {
      "2021": parseFloat(cols[1]),
      "2022": parseFloat(cols[2]),
      "2023": parseFloat(cols[3]),
      "2024": parseFloat(cols[4]),
      "2025": parseFloat(cols[5]),
    };
  });

  return data;
}

async function loadIAP() {
  const res = await fetch(urlIAP);
  const text = await res.text();
  const rows = text.split("\n").slice(1);

  const data = {};

  rows.forEach(row => {
    if (!row.trim()) return;

    const cols = row.split(",");
    const nama = cols[0].trim();

    data[nama] = {
      "2021": parseFloat(cols[1]),
      "2022": parseFloat(cols[2]),
      "2023": parseFloat(cols[3]),
      "2024": parseFloat(cols[4]),
      "2025": parseFloat(cols[5]),
    };
  });

  return data;
}

async function loadPIKP() {
  const res = await fetch(urlPIKP);
  const text = await res.text();
  const rows = text.split("\n").slice(1);

  const data = {};

  rows.forEach(row => {
    if (!row.trim()) return;

    const cols = row.split(",");
    const nama = cols[0].trim();

    data[nama] = {
      "2021": parseFloat(cols[1]),
      "2022": parseFloat(cols[2]),
      "2023": parseFloat(cols[3]),
      "2024": parseFloat(cols[4]),
      "2025": parseFloat(cols[5]),
    };
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
});

const indikatorSelect = document.getElementById("indikatorSelect");
const tahunSelect = document.getElementById("tahunSelect");

// ================= CLICK EVENT =================
provinces.forEach(p => {
  p.addEventListener("click", () => {

    const nama = p.getAttribute("title").trim();
    const indikator = indikatorSelect.value;
    const tahun = tahunSelect.value;

    const data = dataProvinsi[nama];

    if (!data) {
      alert("Data tidak ditemukan");
      return;
    }

    document.getElementById("namaProvinsi").innerHTML = nama;

    let isi = "";

    // ✅ MODE SEMUA INDEKS
    if (indikator === "ALL") {

      for (const ind in data) {
        const nilai = data[ind]?.[tahun];

        if (nilai !== undefined && !isNaN(nilai)) {
          isi += `
            <div style="display:flex; justify-content:space-between; margin:5px 0;">
              <span>${ind}</span>
              <strong>${nilai}</strong>
            </div>
          `;
        }
      }

      if (isi === "") {
        isi = "Data tidak tersedia";
      }

    } else {
      // ✅ MODE SATU INDEKS
      const nilai = data[indikator]?.[tahun];

      if (!nilai) {
        isi = "Data tidak tersedia";
      } else {
        isi = `${indikator} ${tahun} : <strong>${nilai}</strong>`;
      }
    }

    document.getElementById("nilaiIndeks").innerHTML = isi;

    // ✅ TAMPILKAN POPUP
    popup.style.display = "block";
  });
});

// tahunSelect.addEventListener("change", () => {
//  const tahun = tahunSelect.value;

//  Object.keys(dataProvinsi).forEach(nama => {
//    const el = document.querySelector(`[title="${nama}"]`);
//    const nilai = dataProvinsi[nama]?.[tahun];

  //  if (!el || !nilai) return;

    //if (nilai > 80) el.style.fill = "green";
    //else if (nilai > 75) el.style.fill = "orange";
    //else el.style.fill = "red";
  //});
//});

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


window.addEventListener("DOMContentLoaded", () => {
  popup.style.display = "none";
  document.querySelector("svg").style.pointerEvents = "auto";
});

console.log("DATA PROVINSI:", dataProvinsi);
