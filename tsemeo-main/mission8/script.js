function somme () {
    var a = parseInt(prompt("Entrez un premier nombre :"));
    var b = parseInt(prompt("Entrez un deuxieme nombre :"));
    var resultat = a + b;
    alert(resultat); 
}
function produit () {
    var a = parseInt(prompt("Entrez un premier nombre :"));
    var b = parseInt(prompt("Entrez un deuxieme nombre :"));
    var resultat = a * b;
    alert(resultat); 
}
function soustraction () {
    var a = parseInt(prompt("Entrez un premier nombre :"));
    var b = parseInt(prompt("Entrez un deuxieme nombre :"));
    var resultat = a - b;
    alert(resultat); 
}
function division(){
    var a = parseInt(prompt("Entrez un premier nombre :"));
    var b = parseInt(prompt("Entrez un deuxieme nombre :"));
    var resultat = a / b;
    alert(resultat); 
}
function pairImpair(){
    var a = parseInt(prompt("Entrez un nombre :"));
    if (a % 2 == 0){
        alert("Le nombre est pair");
    } else {
        alert("Le nombre est impair");
    }
}
function moyenne(){
    var a = parseInt(prompt("Entrez un premier nombre :"));
    var b = parseInt(prompt("Entrez un deuxieme nombre :"));
    var c = parseInt(prompt("Entrez un troisieme nombre :"));
    var resultat = (a + b + c) / 3;
    alert(resultat); 
}
function airecercle(){
    var r = parseInt(prompt("Entrez le rayon du cercle :"));
    var resultat = Math.PI * r * r;
    alert(resultat); 
}
function perimetreCercle(){
    var r = parseInt(prompt("Entrez le rayon du cercle :"));
    var resultat = 2 * Math.PI * r;
    alert(resultat); 
}
function aireRectangle(){
    var l = parseInt(prompt("Entrez la longueur du rectangle :"));
    var L = parseInt(prompt("Entrez la largeur du rectangle :"));
    var resultat = 2 * (l + L);
    alert(resultat); 
}
function table (){
    var a = parseInt(prompt("Entrez un nombre :"));
    for (var i = 1; i <= 10; i++){
        alert(a + " * " + i + " = " + a * i);
    }
}
function factorielle(){
    var a = parseInt(prompt("Entrez un nombre :"));
    var resultat = 1;
    for (var i = 1; i <= a; i++){
        resultat = resultat * i;
    }
    alert(resultat);
}
function puissance(){
    var a = parseInt(prompt("Entrez un nombre :"));
    var b = parseInt(prompt("Entrez la puissance :"));
    var resultat = Math.pow(a, b);
    alert(resultat);
}
function racine(){
    var a = parseInt(prompt("Entrez un nombre :"));
    var resultat = Math.sqrt(a);
    alert(resultat);
}
function premier(){
    var a = parseInt(prompt("Entrez un nombre :"));
    var i = 2;
    while (i < a){
        if (a % i == 0){
            alert("Le nombre n'est pas premier");
            return;
        }
        i++;
    }
    alert("Le nombre est premier");
}
function division(){
    var a = parseInt(prompt("Entrez un premier nombre :"));
    var b = parseInt(prompt("Entrez un deuxieme nombre :"));
    var resultat = a / b;
    alert(resultat); 

}

document.getElementById('solutionBtna').addEventListener('click', function() {
    var solutionDiv = document.getElementById('solutionDiva');
    if (solutionDiv.style.display === 'none' || solutionDiv.style.display === '') {
        solutionDiv.style.display = 'block';
    } else {
        solutionDiv.style.display = 'none';
    }
});
document.getElementById('solutionBtnb').addEventListener('click', function() {
    var solutionDiv = document.getElementById('solutionDivb');
    if (solutionDiv.style.display === 'none' || solutionDiv.style.display === '') {
        solutionDiv.style.display = 'block';
    } else {
        solutionDiv.style.display = 'none';
    }
});
document.getElementById('solutionBtnc').addEventListener('click', function() {
    var solutionDiv = document.getElementById('solutionDivc');
    if (solutionDiv.style.display === 'none' || solutionDiv.style.display === '') {
        solutionDiv.style.display = 'block';
    } else {
        solutionDiv.style.display = 'none';
    }
});
document.getElementById('solutionBtnd').addEventListener('click', function() {
    var solutionDiv = document.getElementById('solutionDivd');
    if (solutionDiv.style.display === 'none' || solutionDiv.style.display === '') {
        solutionDiv.style.display = 'block';
    } else {
        solutionDiv.style.display = 'none';
    }
});
document.getElementById('solutionBtne').addEventListener('click', function() {
    var solutionDiv = document.getElementById('solutionDive');
    if (solutionDiv.style.display === 'none' || solutionDiv.style.display === '') {
        solutionDiv.style.display = 'block';
    } else {
        solutionDiv.style.display = 'none';
    }
});
document.getElementById('solutionBtnf').addEventListener('click', function() {
    var solutionDiv = document.getElementById('solutionDivf');
    if (solutionDiv.style.display === 'none' || solutionDiv.style.display === '') {
        solutionDiv.style.display = 'block';
    } else {
        solutionDiv.style.display = 'none';
    }
});
document.getElementById('solutionBtng').addEventListener('click', function() {
    var solutionDiv = document.getElementById('solutionDivg');
    if (solutionDiv.style.display === 'none' || solutionDiv.style.display === '') {
        solutionDiv.style.display = 'block';
    } else {
        solutionDiv.style.display = 'none';
    }
});
document.getElementById('solutionBtnh').addEventListener('click', function() {
    var solutionDiv = document.getElementById('solutionDivh');
    if (solutionDiv.style.display === 'none' || solutionDiv.style.display === '') {
        solutionDiv.style.display = 'block';
    } else {
        solutionDiv.style.display = 'none';
    }
});
document.getElementById('solutionBtni').addEventListener('click', function() {
    var solutionDiv = document.getElementById('solutionDivi');
    if (solutionDiv.style.display === 'none' || solutionDiv.style.display === '') {
        solutionDiv.style.display = 'block';
    } else {
        solutionDiv.style.display = 'none';
    }
});
document.getElementById('solutionBtnj').addEventListener('click', function() {
    var solutionDiv = document.getElementById('solutionDivj');
    if (solutionDiv.style.display === 'none' || solutionDiv.style.display === '') {
        solutionDiv.style.display = 'block';
    } else {
        solutionDiv.style.display = 'none';
    }
});
document.getElementById('solutionBtnk').addEventListener('click', function() {
    var solutionDiv = document.getElementById('solutionDivk');
    if (solutionDiv.style.display === 'none' || solutionDiv.style.display === '') {
        solutionDiv.style.display = 'block';
    } else {
        solutionDiv.style.display = 'none';
    }
});
document.getElementById('solutionBtnl').addEventListener('click', function() {
    var solutionDiv = document.getElementById('solutionDivl');
    if (solutionDiv.style.display === 'none' || solutionDiv.style.display === '') {
        solutionDiv.style.display = 'block';
    } else {
        solutionDiv.style.display = 'none';
    }
});
document.getElementById('solutionBtnm').addEventListener('click', function() {
    var solutionDiv = document.getElementById('solutionDivm');
    if (solutionDiv.style.display === 'none' || solutionDiv.style.display === '') {
        solutionDiv.style.display = 'block';
    } else {
        solutionDiv.style.display = 'none';
    }
});
document.getElementById('solutionBtnn').addEventListener('click', function() {
    var solutionDiv = document.getElementById('solutionDivn');
    if (solutionDiv.style.display === 'none' || solutionDiv.style.display === '') {
        solutionDiv.style.display = 'block';
    } else {
        solutionDiv.style.display = 'none';
    }
});
document.getElementById('solutionBtno').addEventListener('click', function() {
    var solutionDiv = document.getElementById('solutionDivo');
    if (solutionDiv.style.display === 'none' || solutionDiv.style.display === '') {
        solutionDiv.style.display = 'block';
    } else {
        solutionDiv.style.display = 'none';
    }
});


