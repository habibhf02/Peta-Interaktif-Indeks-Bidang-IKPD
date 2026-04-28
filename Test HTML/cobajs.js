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

Promise.all([loadIKIP(), loadIDI()]).then(([ikip, idi]) => {

  Object.keys(ikip).forEach(nama => {
    dataProvinsi[nama] = {
      IKIP: ikip[nama],
      IDI: idi[nama] || {}
    };
  });

  console.log("DATA GABUNG:", dataProvinsi);
});

const indikatorSelect = document.getElementById("indikatorSelect");
const tahunSelect = document.getElementById("tahunSelect");

// ================= CLICK EVENT =================
provinces.forEach(p => {
  p.addEventListener("click", () => {

    const nama = p.getAttribute("title");
    const indikator = indikatorSelect.value;
    const tahun = tahunSelect.value;

    const nilai = dataProvinsi[nama]?.[indikator]?.[tahun];

    if (!nilai) {
      alert("Data tidak ditemukan");
      return;
    }

    document.getElementById("namaProvinsi").innerHTML = nama;
    document.getElementById("nilaiIndeks").innerHTML =
      `${indikator} ${tahun}: ${nilai}`;

    popup.style.display = "block";
    document.querySelector("svg").style.pointerEvents = "none";
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