function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn");

const closeBtn = document.querySelectorAll(".close");
const modalbg = document.querySelector(".bground");

const formData = document.querySelectorAll(".formData");
const crossCloseSucess = document.querySelectorAll(".cross-close-sucess");
const btnClossSucess = document.querySelectorAll(".btn-close-sucess");

const modalSucess = document.querySelector(".bground-sucess");

const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const tournament = document.querySelector("#tournament");
const checkBoxCgu = document.querySelector("#checkbox1");
const tournamentTown = document.getElementsByName("location");

const BtnSubmit = document.getElementById("btn-submit");

const formReset = document.querySelector(".reserve");


// launch modal 
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}

// close modal
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
}

crossCloseSucess.forEach((btn) =>
  btn.addEventListener("click", closeModalSucess)
);

btnClossSucess.forEach((btn) =>
  btn.addEventListener("click", closeModalSucess)
)

function closeModalSucess() {
  modalSucess.style.display = "none";
}

// Modeles regex
const regName =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regTournament = /^\d+$/;


// Fonction avec plusieurs conditions qui permet de vérifier si le champ prénom est rempli correctement
function validateFirstName() {
  const firstNameError = document.getElementById("firstNameErrorMsg");
  if (!firstName.value) {
    firstNameError.innerHTML = "Votre prénom est requis";
    firstNameError.style.display = "block";
    firstName.style.border = "1px solid red";
    return false;
  } else if (firstName.value.trim().length < 2) {
    firstNameError.innerHTML = "Veuillez renseigner 2 caractères au minimumn";
    firstNameError.style.display = "block";
    firstName.style.border = "1px solid red";
    return false;
  } else if (!regName.test(firstName.value)) {
    firstNameError.innerHTML =
      "Le champs ne doit pas comporter de chiffres ni de caractères spéciaux";
    firstNameError.style.display = "block";
    firstName.style.border = "1px solid red";
    return false;
  } else {
    firstNameError.style.display = "none";
    firstName.style.border = "1px solid green";
    return true;
  }
}

// Fonction avec plusieurs conditions qui permet de vérifier si le champ nom est rempli correctement
function validateLastName() {
  const lastNameError = document.getElementById("lastNameErrorMsg");
  if (!lastName.value) {
    lastNameError.innerHTML = "Votre nom est requis";
    lastNameError.style.display = "block";
    lastName.style.border = "1px solid red";
    return false;
  } else if (lastName.value.trim().length < 2) {
    lastNameError.innerHTML = "Veuillez renseigner 2 caractères au minimumn";
    lastNameError.style.display = "block";
    lastName.style.border = "1px solid red";
    return false;
  } else if (!regName.test(lastName.value)) {
    lastNameError.innerHTML =
      "Le champs ne doit pas comporter de chiffres ni de caractères spéciaux";
    lastNameError.style.display = "block";
    lastName.style.border = "1px solid red";
    return false;
  } else {
    lastNameError.style.display = "none";
    lastName.style.border = "1px solid green";
    return true;
  }
}

// Fonction avec plusieurs conditions qui permet de vérifier si le champ Email est rempli correctement
function validateEmail() {
  const emailErrorMsg = document.getElementById("emailErrorMsg");
  if (!email.value) {
    emailErrorMsg.innerHTML = "Votre email est requis";
    emailErrorMsg.style.display = "block";
    email.style.border = "1px solid red";
    return false;
  } else if (email.value.trim().length < 2) {
    emailErrorMsg.innerHTML = "Veuillez renseigner 2 caractères au minimumn";
    emailErrorMsg.style.display = "block";
    email.style.border = "1px solid red";
    return false;
  } else if (!regEmail.test(email.value)) {
    emailErrorMsg.innerHTML = "Format de l'email non autorisé";
    emailErrorMsg.style.display = "block";
    email.style.border = "1px solid red";
    return false;
  } else {
    emailErrorMsg.style.display = "none";
    email.style.border = "1px solid green";
    return true;
  }
}

// Fonction avec plusieurs conditions qui permet de vérifier si le champ Date de naissance est rempli correctement
function validateBirthday() {
  const birthdateErrorMsg = document.getElementById("birthdateErrorMsg");
  if (!birthdate.value) {
    birthdateErrorMsg.innerHTML =
      "Veuillez renseigner votre date d'anniversaire";
    birthdateErrorMsg.style.display = "block";
    birthdate.style.border = "1px solid red";
    return false;
  } else if (birthdate.value.trim().length >= 11) {
    birthdateErrorMsg.innerHTML = "Format de la date de naissance non autorisé";
    birthdateErrorMsg.style.display = "block";
    birthdate.style.border = "1px solid red";
    return false;
  } else {
    birthdateErrorMsg.style.display = "none";
    birthdate.style.border = "1px solid green";
    return true;
  }
}

// Fonction avec plusieurs conditions qui permet de vérifier si le champ Nombre de tournoi est rempli correctement
function validateNumberTournament() {
  const tournamentNumberErrorMsg =
    document.getElementById("tournamentNumberErrorMsg");
  if (!tournament.value) {
    tournamentNumberErrorMsg.innerHTML =
      "Si vous avez participé à aucun tournoi, veuillez saisir 0";
    tournamentNumberErrorMsg.style.display = "block";
    tournament.style.border = "1px solid red";
    return false;
  } else if (!regTournament.test(tournament.value)) {
    tournamentNumberErrorMsg.innerHTML = "Veuillez saisir un nombre";
    tournamentNumberErrorMsg.style.display = "block";
    tournament.style.border = "1px solid red";
    return false;
  } else {
    tournamentNumberErrorMsg.style.display = "none";
    tournament.style.border = "1px solid green";
    return true;
  }
}

// Fonction avec une condition qui permet de savoir si la case ville du tournoi est cochée.
function validateTownTournament() {
  const tournamentTownErrorMsg = document.getElementById(
    "tournamentTownErrorMsg"
  );
  const checkboxTown = Array.from(tournamentTown).filter(
    location => location.checked 
  )
  if (checkboxTown.length == 1) {
    tournamentTownErrorMsg.style.display = "none";
    return true;
  } else {
    tournamentTownErrorMsg.innerHTML =
      "Veuillez sélectionner une ville";
    tournamentTownErrorMsg.style.display = "block";
    return false;
  }
}

// Fonction avec une condition qui permet de savoir si la case CGU est cochée.
function validateCheckCGU() {
  const cguErrorMsg = document.getElementById("cguErrorMsg");
  if (!checkBoxCgu.checked) {
    cguErrorMsg.innerHTML = "Veuillez accepter les conditions générales";
    cguErrorMsg.style.display = "block";
    return false;
  } else {
    cguErrorMsg.style.display = "none";
    return true;
  }
}

// Fonction qui permet de vérifier si le formulaire est rempli correctement en cliquant sur le bouton "c'est parti"
BtnSubmit.addEventListener("click", function (ev) {
  ev.preventDefault();

  let validFirstname = validateFirstName();
  let validLastname = validateLastName();
  let validEmail = validateEmail();
  let validBirthday = validateBirthday();
  let validNumberTournament = validateNumberTournament();
  let validTownTournament = validateTownTournament();
  let validCheckCGU = validateCheckCGU();

  if (
    validFirstname &&
    validLastname &&
    validEmail &&
    validBirthday &&
    validNumberTournament &&
    validTownTournament &&
    validCheckCGU
  ) {
    modalbg.style.display = "none";
    modalSucess.style.display = "block";
    formReset.reset();
    firstName.removeAttribute('style')
    lastName.removeAttribute('style')
    email.removeAttribute('style')
    birthdate.removeAttribute('style')
    tournament.removeAttribute('style')
  }
});
