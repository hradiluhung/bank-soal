// KELAS
let deleteModal = document.getElementById("delete-modal");
let deleteSoalModal = document.getElementById("delete-soal-modal");
let tambahSoalModal = document.getElementById("tambah-soal-modal");
let editSoalModal = document.getElementById("edit-soal-modal");

function openHapusKelas() {
  deleteModal.style.display = "flex";
  overlay.classList.toggle("overlayStyle");

  if (header.style.zIndex = 9) {
    header.style.zIndex = 8;
  }
}

function openHapusSoal() {
  deleteSoalModal.style.display = "flex";
  overlay.classList.toggle("overlayStyle");

  if (header.style.zIndex = 9) {
    header.style.zIndex = 8;
  }
}

function openTambahSoal() {
  tambahSoalModal.style.display = "block";
  overlay.classList.toggle("overlayStyle");

  if (header.style.zIndex = 9) {
    header.style.zIndex = 8;
  }
}

function openEditSoal(editBtnId) {
  editSoalModal.style.display = "block";
  overlay.classList.toggle("overlayStyle");

  if (header.style.zIndex = 9) {
    header.style.zIndex = 8;
  }

  let selectedQNA = document.getElementById(editBtnId).parentNode.parentNode;
  let selectedQuestion = selectedQNA.firstElementChild.nextElementSibling.lastElementChild;
  let selectedQuestionImg = selectedQNA.firstElementChild.nextElementSibling.firstElementChild;
  let selectedAns = selectedQNA.lastElementChild.firstElementChild;
  let selectedAnsImg = selectedQNA.lastElementChild.lastElementChild;

  let soalEdited = document.getElementById("soal-edited");
  let jawabanEdited = document.getElementById("jawaban-edited");
  
  soalEdited.value = selectedQuestion.innerHTML;
  jawabanEdited.value = selectedAns.innerHTML;
}

function closeModal() {
  deleteModal.style.display = "none";
  deleteSoalModal.style.display = "none";
  tambahSoalModal.style.display = "none";
  editSoalModal.style.display = "none";

  dropdownProfile.style.display = "none";
  dropdownIsOpen = false;

  overlay.classList.toggle("overlayStyle");
}

function copyClassCode() {
  let copiedText = document.getElementById("kode-kelas");
  navigator.clipboard.writeText(copiedText.innerHTML);

  let copyInfo = document.querySelector(".kelas-header-1 span");
  copyInfo.style.display = "inline";
  setTimeout(() => {
    copyInfo.style.display = "none";
  }, 2000);
}

//EDIT JUDUL DAN DESKPRIPSI
let judulWithBtn = document.getElementById("judul-with-btn");
let changeJudul = document.getElementById("change-judul");

let judulLama = judulWithBtn.firstElementChild.innerHTML;
let judulBaru = changeJudul.firstElementChild;

function editJudul() {
  judulWithBtn.style.display = "none";
  changeJudul.style.display = "flex";

  judulBaru.setAttribute("value", judulLama);
}

function saveJudul() {
  let judulKelas = document.getElementById("judul-kelas");
  judulKelas.innerHTML = judulBaru.value;

  judulWithBtn.style.display = "flex";
  changeJudul.style.display = "none";
}

//save judul klik enter
let inputGantiJudul = document.querySelector('#change-judul input');

function saveJudulEnter(e) {
  if (e.keyCode === 13) {
    saveJudul();
  }
}

function cancelJudul(){
  judulWithBtn.style.display = "flex";
  changeJudul.style.display = "none";
}

let desksripsilWithBtn = document.getElementById("desksripsi-with-btn");
let changeDesksripsi = document.getElementById("change-desksripsi");

let desksripsiLama = desksripsilWithBtn.firstElementChild.innerHTML;
let desksripsiBaru = changeDesksripsi.firstElementChild;

function editDesksripsi() {
  desksripsilWithBtn.style.display = "none";
  changeDesksripsi.style.display = "flex";

  desksripsiBaru.setAttribute("value", desksripsiLama);
}

function saveDesksripsi() {
  let desksripsi = document.getElementById("desksripsi");
  desksripsi.innerHTML = desksripsiBaru.value;

  desksripsilWithBtn.style.display = "flex";
  changeDesksripsi.style.display = "none";
}

//save desksripsi klik enter
let inputGantiDesksripsi = document.querySelector('#change-desksripsi input');

function saveDesksripsiEnter(e) {
  if (e.keyCode === 13) {
    saveDesksripsi();
  }
}

function cancelDesksripsi(){
  desksripsilWithBtn.style.display = "flex";
  changeDesksripsi.style.display = "none";
}

