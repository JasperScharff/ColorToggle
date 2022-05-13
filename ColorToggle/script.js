// // Als gebruiker kan ik op het hamburgerpictogram klikken en ik krijg een menu met kleurkeuzes te zien.
// Als gebruiker mag ik een kleur uit het menu kiezen (de kleuren worden in het menu beschreven als tekst). Elk item in het menu heeft een andere kleur.
// Als gebruiker kan ik maar op één kleur uit het menu klikken
// Wanneer er in het menu op de kleur wordt geklikt, verandert de achtergrond van de webpagina in de gekozen kleur.
// Nadat de kleur is gekozen, wordt het menu gesloten.

let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebarUl = document.querySelector('.nav-main ul');
    let getSidebarLinks = document.querySelectorAll('.nav-main a');

    let homeBg = document.getElementById('home');
    let redBg = document.getElementById('red');
    let orangeBg = document.getElementById('orange');
    let purpleBg = document.getElementById('purple');
    let greenBg = document.getElementById('green');



    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";



    }

    else if (toggleNavStatus === true) {

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        getSidebarUl.style.visibility = "hidden";


        toggleNavStatus = false;

    }


    homeBg.addEventListener('click', function () {
        //Change the background color
        document.body.style.backgroundColor = "grey";
        if (click = true){
            getSidebarUl.style.visibility = "hidden";
        }

    })

    redBg.addEventListener('click', function () {
        //Change the background color
        document.body.style.backgroundColor = "red";
        getSidebarUl.style.visibility = "hidden";

    })

    orangeBg.addEventListener('click', function () {
        //Change the background color
        document.body.style.backgroundColor = "orange";
        getSidebarUl.style.visibility = "hidden";

    })

    purpleBg.addEventListener('click', function () {
        //Change the background color
        document.body.style.backgroundColor = "purple";
        getSidebarUl.style.visibility = "hidden";

    })

    greenBg.addEventListener('click', function () {
        //Change the background color
        document.body.style.backgroundColor = "green";
        getSidebarUl.style.visibility = "hidden";

    })

}