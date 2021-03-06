// DASHBOARD
let searchBarKelas = document.getElementById("search-bar-kelas");
let modalBuat = document.getElementById("modal-buat");
let modalJoin = document.getElementById("modal-join");

function openSearchBar() {
  let searchBarKelas = document.getElementById("search-bar-kelas");

  searchBarKelas.classList.toggle("search-bar-kelas-on");
}

function openBuatKelas() {
  modalBuat.style.display = "block";
  overlay.classList.toggle("overlayStyle");

  if (header.style.zIndex = 9) {
    header.style.zIndex = 8;
  }
}

function openJoinKelas() {
  modalJoin.style.display = "block";
  overlay.classList.toggle("overlayStyle");

  if (header.style.zIndex = 9) {
    header.style.zIndex = 8;
  }
}

function closeModal() {
  modalBuat.style.display = "none";
  modalJoin.style.display = "none";
  dropdownProfile.style.display = "none";
  dropdownIsOpen = false;
  
  overlay.classList.toggle("overlayStyle");

  //remove input
  let inputJudulKelas = document.getElementById("judul-kelas");
  inputJudulKelas.value = "";
  let inputDesksripsiKelas = document.getElementById("desksripsi-kelas");
  inputDesksripsiKelas.value = "";
  let inputGambarKelas = document.getElementById("cover-img");
  inputGambarKelas.value = null;
  let inputKodeKelas = document.getElementById("kode-kelas");
  inputKodeKelas.value = "";

  // reset uploaded image cover label
  document.querySelector(".upload-btn span").innerHTML = "Upload gambar";
}

// UPLOADED IMAGE NAME CATCH
function uploadFile(target) {
  document.getElementById("file-name").innerHTML = target.files[0].name;
}