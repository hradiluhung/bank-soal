// KELAS
let deleteModal = document.getElementById("delete-modal");
let deleteSoalModal = document.getElementById("delete-soal-modal");
let tambahSoalModal = document.getElementById("tambah-soal-modal");
let editSoalModal = document.getElementById("edit-soal-modal");

function openHapusKelas() {
  deleteModal.classList.toggle("delete-modalStyle");
  overlay.classList.toggle("overlayStyle");

  if (header.style.zIndex = 9) {
    header.style.zIndex = 8;
  }
}

function openHapusSoal() {
  deleteSoalModal.classList.toggle("delete-soal-modalStyle");
  overlay.classList.toggle("overlayStyle");

  if (header.style.zIndex = 9) {
    header.style.zIndex = 8;
  }
}

function openTambahSoal() {
  tambahSoalModal.classList.toggle("tambah-soal-modalStyle");
  overlay.classList.toggle("overlayStyle");

  if (header.style.zIndex = 9) {
    header.style.zIndex = 8;
  }
}

function openEditSoal() {
  editSoalModal.classList.toggle("edit-soal-modalStyle");
  overlay.classList.toggle("overlayStyle");

  if (header.style.zIndex = 9) {
    header.style.zIndex = 8;
  }
}

function closeModal() {
  modalBuat.style.display = "none";
  modalJoin.style.display = "none";
  overlay.classList.toggle("overlayStyle");

  // remove upload image cover
  document.querySelector(".upload-btn span").innerHTML = "Upload gambar";
}