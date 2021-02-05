// ce code la c est pour le que quand on clique sur la photo la deuxieme photo apparait vers la droite puis disparait 
/*document.getElementById('image1').style.left = '640px'; // si on le retire l'image partira pas sur la droite et on aura le premier effet des deux dernier qui change en opacity quand on clique sur la premiere image
document.getElementById('image1').style.opacity = 0;
document.getElementById('image2').style.opacity = 1; */


 // rajoute un écouteur d'évèvement pour addEventListener
/**************** EXO D UNE PREMIERE FACON A CORRIGER ****************/

/*document.getElementById('carousel').addEventListener('click', function () {

    // Quand on clique sur l'image on est censé avoir le prompt en dessous
    // alert('T\'es la meilleure du monde Eugénie');

    var imageEnCours = document.getElementById('carousel').getAttribute('data-image');
    console.log(imageEnCours);

    if(imageEnCours == 'image1') {
        document.getElementById('image1').style.left = '640px';
        document.getElementById('image1').style.opacity = 0;
        document.getElementById('image2').style.opacity = 1;
        document.getElementById('carousel').setAttribute('data-image', 'image2');
    } else if (imageEnCours == 'image2') {
        document.getElementById('image2').style.left = '640px';
        document.getElementById('image2').style.opacity = 0;
        document.getElementById('image3').style.opacity = 1;
        document.getElementById('carousel').setAttribute('data-image', 'image3');
    } else if (imageEnCours == 'image3') {
        document.getElementById('image3').style.left = '640px';
        document.getElementById('image3').style.opacity = 0;
        document.getElementById('image4').style.opacity = 1;
        document.getElementById('carousel').setAttribute('data-image', 'image4');
    } else if (imageEnCours == 'image4') {
        document.getElementById('image4').style.left = '640px';
        document.getElementById('image4').style.opacity = 0;
        document.getElementById('image5').style.opacity = 1;
        document.getElementById('carousel').setAttribute('data-image', 'image5');
    } else if (imageEnCours == 'image5') {
        document.getElementById('image5').style.left = '640px';
        document.getElementById('image5').style.opacity = 0;
        document.getElementById('image1').style.opacity = 1;
        document.getElementById('carousel').setAttribute('data-image', 'image1');
    }
});  */



// n°4 evenement déclenché automatiquement selon un timer
// setInterval() est une fonction js permettant d'exécuter la fonction fournie en premier argument (ici "maFonction") selon un timer en milliseconde fourni en deuxième argument (ici 3000 : 3s)
// pour arreter le setInterval, on peut utiliser clearInterval (voir l'évènement n°2)
var carouselAuto = setInterval(maFonction, 3000);



//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------


// evenement 1 avec fonction anonyme
// EXO D UNE DEUXIEME FACON 

document.getElementById('carousel').addEventListener('click', function () {

    // Quand on clique sur l'image on est censé avoir le prompt
    // alert('T\'es la meilleure du monde Eugénie');

    var imageEnCours = document.getElementById('carousel').getAttribute('data-image');
    console.log(imageEnCours);

    if(imageEnCours == 'image1') {
        document.getElementById('image1').style.opacity = 0;
        document.getElementById('image2').style.opacity = 1;
        document.getElementById('carousel').setAttribute('data-image', 'image2');
    } else if (imageEnCours == 'image2') {
        document.getElementById('image2').style.opacity = 0;
        document.getElementById('image3').style.opacity = 1;
        document.getElementById('carousel').setAttribute('data-image', 'image3');
    } else if (imageEnCours == 'image3') {
        document.getElementById('image3').style.opacity = 0;
        document.getElementById('image4').style.opacity = 1;
        document.getElementById('carousel').setAttribute('data-image', 'image4');
    } else if (imageEnCours == 'image4') {
        document.getElementById('image4').style.opacity = 0;
        document.getElementById('image5').style.opacity = 1;
        document.getElementById('carousel').setAttribute('data-image', 'image5');
    } else if (imageEnCours == 'image5') {
        document.getElementById('image5').style.opacity = 0;
        document.getElementById('image1').style.opacity = 1;
        document.getElementById('carousel').setAttribute('data-image', 'image1');
    }
});



//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------

// n°3 l'evenement 1 isolé dans une fonction pour pouvoir l'appeler sur d'autres evenements
// 3 evenements pour changer l'image : click sur l'image, survol entrant sur l'image, survol sortant sur l'image
document.getElementById('carousel').addEventListener('click', maFonction);
document.getElementById('carousel').addEventListener('mouseover', maFonction);
document.getElementById('carousel').addEventListener('mouseout', maFonction);

function maFonction () {
    // alert('ok');

    var imageEnCours = document.getElementById('carousel').getAttribute('data-image');
    console.log(imageEnCours);

    if(imageEnCours == 'image1') {
        document.getElementById('image1').style.opacity = 0;
        document.getElementById('image2').style.opacity = 1;
        document.getElementById('carousel').setAttribute('data-image', 'image2');
    } else if (imageEnCours == 'image2') {
        document.getElementById('image2').style.opacity = 0;
        document.getElementById('image3').style.opacity = 1;
        document.getElementById('carousel').setAttribute('data-image', 'image3');
    } else if (imageEnCours == 'image3') {
        document.getElementById('image3').style.opacity = 0;
        document.getElementById('image4').style.opacity = 1;
        document.getElementById('carousel').setAttribute('data-image', 'image4');
    } else if (imageEnCours == 'image4') {
        document.getElementById('image4').style.opacity = 0;
        document.getElementById('image5').style.opacity = 1;
        document.getElementById('carousel').setAttribute('data-image', 'image5');
    } else {
        document.getElementById('image5').style.opacity = 0;
        document.getElementById('image1').style.opacity = 1;
        document.getElementById('carousel').setAttribute('data-image', 'image1');
    }    

}


//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------


// Evènement n°2
// le click sur le lien doit changer l'image du carousel
document.getElementById('changerImage').addEventListener('click', function (e) {
    // le fait de mettre un argument dans les () de la fonction ici "e", cet argument représente l'événement concerné.
    // cela nous permet par exemple de bloquer l'évènement
    // pour bloquer un évènement : preventDefault()
    e.preventDefault(); // pour bloquer un comportement par defaut de cet élement
    console.log(e);

    // on arrete le setInterval déclaré tout en haut de ce fichier.
    clearInterval(carouselAuto);

    // on met en place une boucle pour identifier l'image actuellement visible => si opacity == 1

    // on récupère la liste des img
    var listeImages = document.querySelectorAll('#carousel img');
    console.log(listeImages);

    for(let img of listeImages) {
        // console.log('La valeur de l\'opacity de l\'image avec l\'id : ' + img.id + ' a une opacity : ' + img.style.opacity);
        if(img.style.opacity == 1) {
            var imageEnCours = img.id;
        }
    }


    if(imageEnCours == 'image1') {
        document.getElementById('image1').style.opacity = 0;
        document.getElementById('image2').style.opacity = 1;
    } else if (imageEnCours == 'image2') {
        document.getElementById('image2').style.opacity = 0;
        document.getElementById('image3').style.opacity = 1;
    } else if (imageEnCours == 'image3') {
        document.getElementById('image3').style.opacity = 0;
        document.getElementById('image4').style.opacity = 1;
    } else if (imageEnCours == 'image4') {
        document.getElementById('image4').style.opacity = 0;
        document.getElementById('image5').style.opacity = 1;
    } else {
        document.getElementById('image5').style.opacity = 0;
        document.getElementById('image1').style.opacity = 1;
    }    
});




//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------


// EXERCICE :
// mettre un evenement click sur le div id="carre"
// lors de cet evenement : il faut changer le backgroundColor de l'element.
// pour aller plus loin : si c'est bleu on passe en rouge et essayez de faire le comportement inverse : si c'est rouge on passe en bleu.



document.getElementById('carre').addEventListener('click', function() {
    var carre = document.getElementById('carre').style.backgroundColor;

    if(carre == 'blue') {
        document.getElementById('carre').style.backgroundColor = 'red';
    }

    if(carre == 'red') {
        document.getElementById('carre').style.backgroundColor = 'blue';
    }

});



// EXERCICE CORRIGE PAR LE PROF AVEC SON AUTRE FACON DE FAIRE
// mettre un evenement click sur le div id="carre"
// lors de cet evenement : il faut changer le backgroundColor de l'element.
// Pour aller plus loin : si c'est bleu on passe en rouge et essayez de faire le comportement inverse : si c'est rouge on passe en bleu.
// on récupère l'élément html avec getElementById et on ajoute un evenement dessus via addEventListener
document.getElementById('carre').addEventListener('click', function () {
    // alert(1);

    // on récupère la couleur actuelle de l'element
    var couleur = document.getElementById('carre').style.backgroundColor;
    console.log(couleur);

    // on test la couleur dans un if pour appliquer une couleur ou une autre
    if(couleur == 'blue') {
        document.getElementById('carre').style.backgroundColor = 'red';
    } else {
        document.getElementById('carre').style.backgroundColor = 'blue';
    }
});



//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------


// EXERCICE PROF CORRECTION UNE AUTRE FACON DE FAIRE AVEC RIEN ' '
// mettre un evenement click sur le div id="carre"
// lors de cet evenement : il faut changer le backgroundColor de l'element.
// Pour aller plus loin : si c'est bleu on passe en rouge et essayez de faire le comportement inverse : si c'est rouge on passe en bleu.
// on récupère l'élément html avec getElementById et on ajoute un evenement dessus via addEventListener
document.getElementById('carre').addEventListener('click', function () {
    // alert(1);

    // on récupère la couleur actuelle de l'element
    var couleur = document.getElementById('carre').style.backgroundColor;
    console.log(couleur);

    // on test la couleur dans un if pour appliquer une couleur ou une autre
    if(couleur == 'blue' || couleur == '') {
        document.getElementById('carre').style.backgroundColor = 'red';
    } else {
        document.getElementById('carre').style.backgroundColor = 'blue';
    }
});

