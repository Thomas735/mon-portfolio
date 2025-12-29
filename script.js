/* --- script.js (Inchangé) --- */
function openTab(evt, tabName) {
    // 1. Cacher tous les contenus
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active-tab");
    }

    // 2. Enlever la classe "active" des boutons
    tablinks = document.getElementsByClassName("nav-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 3. Afficher le bon contenu et activer le bon bouton
    document.getElementById(tabName).style.display = "block";
    // Petite astuce pour relancer l'animation CSS à chaque clic
    void document.getElementById(tabName).offsetWidth; 
    document.getElementById(tabName).classList.add("active-tab");
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    // Simuler un clic sur le premier onglet pour charger l'état initial correctement
    document.querySelector('.nav-btn.active').click();
});