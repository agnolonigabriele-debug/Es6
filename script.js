const utenti = ["ciccioGamer", "icardi", "khaby", "rocco", "anna"];
const password = ["ciccio1", "wandanara", "tiktok", "siffredi33", "tatangelo"];
const campoPassword = document.getElementById("passwordInput");
const pulsanteMostraPassword = document.getElementById("togglePassword");
const iconaPassword = document.getElementById("iconaPassword");
const formLogin = document.getElementById("formLogin");
const usernameInput = document.getElementById("username-input");
const alertLogin = document.getElementById("alertLogin");
const creaAccount = document.getElementById("crea-account");
const modaleAccount = document.getElementById("modale-account");


const campoPasswordRegistrazione = document.getElementById("passwordInput-registrazione");
const pulsanteMostraPasswordRegistrazione = document.getElementById("togglePassword-registrazione");
const iconaPasswordRegistrazione = document.getElementById("iconaPassword-registrazione");
const formLoginRegistrazione = document.getElementById("formRegistrazione");
const usernameInputRegistrazione = document.getElementById("username-input-registrazione");



//parte login 
pulsanteMostraPassword.addEventListener("click", () => {
	const mostraPassword = campoPassword.type === "password";

	campoPassword.type = mostraPassword ? "text" : "password";
	iconaPassword.classList.toggle("bi-eye", !mostraPassword);
	iconaPassword.classList.toggle("bi-eye-slash", mostraPassword);
});

formLogin.addEventListener("submit", (evento) => {
	evento.preventDefault();

	const nomeUtente = usernameInput.value.trim();
	const indiceUtente = utenti.indexOf(nomeUtente);
	alertLogin.classList.remove("d-none", "alert-success", "alert-danger");

	if (indiceUtente !== -1 && password[indiceUtente] === campoPassword.value) {
		alertLogin.classList.add("alert-success");
		alertLogin.textContent = "Accesso effettuato con successo!";
		return;
	}

	alertLogin.classList.add("alert-danger");
	alertLogin.textContent = indiceUtente === -1 ? "Utente non registrato" : "Password errata";

});



//parte registrazione

creaAccount.addEventListener("click", function () {
	const istanza = new bootstrap.Modal(modaleAccount);
	istanza.show();
});

pulsanteMostraPasswordRegistrazione.addEventListener("click", () => {
	const mostraPassword = campoPasswordRegistrazione.type === "password";

	campoPasswordRegistrazione.type = mostraPassword ? "text" : "password";
	iconaPasswordRegistrazione.classList.toggle("bi-eye", !mostraPassword);
	iconaPasswordRegistrazione.classList.toggle("bi-eye-slash", mostraPassword);
});


formLoginRegistrazione.addEventListener("submit", (evento) => {
	evento.preventDefault();

	const nuovoUtente = usernameInputRegistrazione.value.trim();
	const nuovaPassword = campoPasswordRegistrazione.value;

	const quantiNumeri = (nuovaPassword.match(/\d/g) || []).length;
	const quanteMaiuscole = (nuovaPassword.match(/[A-Z]/g) || []).length;
	const quantiSpeciali = (nuovaPassword.match(/[^a-zA-Z0-9]/g) || []).length;
	const quanteLettere = nuovaPassword.length;

	if (!nuovaPassword || quantiNumeri < 1 || quantiSpeciali < 1 || quanteMaiuscole < 1 || quanteLettere < 7) {
		alert("Inserisci sia lo username che la password. La password deve avere almeno una lettera maiuscola, un carattere speciale, almeno un numero e almeno 7 caratteri.");
		return;
	}


	// Controllo se l'utente esiste già
	if (utenti.includes(nuovoUtente)) {
		alert("Questo username è già registrato, fai il login.");
		return;
	}

	utenti.push(nuovoUtente);
	password.push(nuovaPassword);


	formLoginRegistrazione.reset();


	const istanzaModale = bootstrap.Modal.getInstance(modaleAccount);
	istanzaModale.hide();

	alertLogin.classList.remove("d-none", "alert-danger");
	alertLogin.classList.add("alert-success");
	alertLogin.textContent = "Account creato! Ora puoi effettuare l'accesso.";
});

