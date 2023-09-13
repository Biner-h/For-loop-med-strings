let app = document.getElementById("app");

//View
updateView();
function updateView() {
    app.innerHTML = /*html*/ `
        <input type="text" id="inputStreng">
        <button onclick="telleVokaler()">Tell Vokaler</button>
        <p>Resultat:</p>
        <div id="resultat"></div>
    `;
}

function telle
