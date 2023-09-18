let app = document.getElementById("app");

let text = "";
let counter = "";

//View
updateView();
function updateView() {
    app.innerHTML = /*html*/ `
        <div class="app">
            <input class="input" type="text" onchange="text = this.value" value = '${text}'>
            <button class="knapp" onclick="telleVokaler(text)">Tell Vokaler</button>
            <div class="resultat" id="resultat">Resultat: ${counter}</div>
        </div>
    `;
}

function telleVokaler(string) {
    let vokaler = "aeiouyæøå";
    let vokalTeller = 0;

    for (let i = 0; i < string.length; i++) {
        let bokstav = string[i];
        if (vokaler.includes(bokstav)) {
            vokalTeller++;
        }
    }
    counter = vokalTeller;
    updateView();
}
