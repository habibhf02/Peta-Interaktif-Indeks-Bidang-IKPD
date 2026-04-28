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
const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQXyYOiEg8ic15bpY_E1ibI2vmY-4L0ppP2fcERu8vQLMkU2AjAeGRYWmVl6obotB6GOtBo1MX3b5Qj/pub?gid=0&single=true&output=csv";

async function loadData() {
  const res = await fetch(url);
  const text = await res.text();

  const rows = text.split("\n").slice(1);
  const data = {};

  rows.forEach(row => {
  const cols = row.split(",");

  const id = cols[0].trim();     // 🔥 penting
  const nama = cols[0].trim();
  const indeks = cols[1].trim();

  data[id] = {
    nama: nama,
    indeks: parseFloat(indeks)
  };
});

  return data;
}



loadData().then(data => {
  dataProvinsi = data;
  console.log("DATA:", dataProvinsi); // debug
});



// ================= CLICK EVENT =================
provinces.forEach(p => {
  p.addEventListener("click", () => {

    const id = p.getAttribute("title");
    const data = dataProvinsi[id];

    if (!data) {
      alert("Data tidak ditemukan: " + id);
      return;
    }

    document.getElementById("namaProvinsi").innerHTML = data.nama;
    document.getElementById("nilaiIndeks").innerHTML =
      "Indeks: " + data.indeks;

    popup.style.display = "block";

    // 🔥 matikan klik peta saat popup terbuka
    document.querySelector("svg").style.pointerEvents = "none";
  });
});
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");

closeBtn.addEventListener("click", () => {
  popup.style.display = "block";
  document.querySelector("svg").style.pointerEvents = "auto";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
    document.querySelector("svg").style.pointerEvents = "auto";
  }
});

document.getElementById("popup").style.display = "block";


popup.classList.add("show");   // buka
popup.classList.remove("show"); // tutup

// 🔥 penting: biar tombol close bisa diklik
document.querySelector("svg").style.pointerEvents = "none";

window.addEventListener("DOMContentLoaded", () => {
  popup.style.display = "none";
  document.querySelector("svg").style.pointerEvents = "auto";
});