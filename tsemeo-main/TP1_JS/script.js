function test_age(){
    let age = prompt("Quel est votre age ?");
    if (age < 18){
        document.write("vous etes mineur");
        document.body.style.backgroundColor = "red";
    } else {
        document.write("Vous etes majeur");
        document.body.style.backgroundColor = "green"; 
    }
}

function calcul_moyenne(){
    var n1 = prompt("Entrez la première note");
    var n2 = prompt("Entrez la deuxième note");
    var n3 = prompt("Entrez la troisième note"); 

    var somme = Number(n1) + Number(n2) + Number(n3);
        
    document.write("la somme des notes est de : " + somme + "<br>"); 
    var moyenne = somme/3; 

    document.write("la moyenne est de : "+ moyenne);
}

function test_couleur(){
    let couleur = prompt("donner une couleur");
    if (couleur == "bleu" || couleur == blue){
        document.write("La couleur est bleu");
        document.body.style.backgroundColor = "blue";
    } else if (couleur == "rouge" || couleur == red){
        document.write("La couleur est rouge");
        document.body.style.backgroundColor = "red";
    } else if (couleur == "vert" || couleur == green){
        document.write("La couleur est vert" || couleur == green);
        document.body.style.backgroundColor = "green";
    } else {
        document.write("Couleur non reconnue");
        document.body.style.backgroundColor = "black";
    }
}

function simple_affichage(){
    let nom = prompt("Entrez votre nom");
    let prenom = prompt("Entrez votre prénom");
    document.write("Nom: " + nom + "<br>");
    document.write("Prénom: " + prenom + "<br>");
    
}
   