const utenti = ["ciccioGamer", "icardi", "khaby", "rocco", "anna"];
const password = ["ciccio1", "wandanara", "tiktok", "siffredi33", "tatangelo"];
const campoPassword = document.getElementById("passwordInput");
const pulsanteMostraPassword = document.getElementById("togglePassword");
const iconaPassword = document.getElementById("iconaPassword");
const formLogin = document.getElementById("formLogin");
const usernameInput = document.getElementById("username-input");
const alertLogin = document.getElementById("alertLogin");

pulsanteMostraPassword.addEventListener("click", () => {
	const mostraPassword = campoPassword.type === "password";

	campoPassword.type = mostraPassword ? "text" : "password";
	pulsanteMostraPassword.setAttribute("aria-label", mostraPassword ? "Nascondi password" : "Mostra password");
	pulsanteMostraPassword.setAttribute("aria-pressed", String(mostraPassword));
	pulsanteMostraPassword.title = mostraPassword ? "Nascondi password" : "Mostra password";
	iconaPassword.classList.toggle("bi-eye", !mostraPassword);
	iconaPassword.classList.toggle("bi-eye-slash", mostraPassword);
});

formLogin.addEventListener("submit", (evento) => {
	evento.preventDefault();

	const nomeUtente = usernameInput.value.trim();
	const indiceUtente = utenti.indexOf(nomeUtente);
    alertLogin.classList.remove("d-none", "alert-success", "alert-danger");

	if(indiceUtente !== -1 && password[indiceUtente] === campoPassword.value){
        alertLogin.classList.add("alert-success");
        alertLogin.textContent = "Accesso effettuato con successo!";
        return;
    }

	alertLogin.classList.add("alert-danger");
    alertLogin.textContent = indiceUtente === -1 ? "Utente non registrato" : "Password errata";
    
});

