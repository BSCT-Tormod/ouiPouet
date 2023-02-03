var cpt = 0;
var progressBarLength = 4;
var progressBar = document.querySelector(".progress-bar");
var btnAchat = document.querySelector(".btn-achat");
var red = 255;
var blue = 0;
var green = 0;
var isPicked = 0;
var nbTirages = 0;
var logPseudo = "";
var logPwd = "";
var logPwdConfirmation ="";
var sDrop = 0;
var ssDrop = 0;
var cardsOwned = [];
var sCardsOwned = [];
var ssCardsOwned = [];

console.log("hello world le programme");
document.querySelector(".game").onclick = function(){increment()};
document.querySelector(".btn-achat").onclick = function(){tirage()};
document.querySelector(".picked-card-container").onclick = function(){pickACard()};
document.querySelector("#collection").onclick = function(){collection()};
document.querySelector(".collection-partir").onclick = function(){fermerCollection()};

////// rompiche
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

////// Change la couleur de l'ombre tout seul (comme un grand)
window.i = 0;
setInterval(() => {
    window.i += 1;
    document.querySelector(".game").style.boxShadow = "0 0 75px "+autoHue();
    document.querySelector(".panel-button").style.boxShadow = "0 0 75px "+autoHue();
    document.querySelector("#drop-display").style.boxShadow = "0 0 75px "+autoHue();
    document.querySelector(".btn-achat").style.boxShadow = "0 0 75px "+autoHue();
}, 200);
//////

function increment(){
    cpt+=1;
    document.querySelector(".pouet-display").innerHTML = cpt + " Pouets !";
    progressBar.style.width = progressBarLength+"%";
    // document.querySelector(".game").style.boxShadow = "0 0 80px "+autoHue();
    autoStyleTirage();
    autoStyleImage();    
}

async function autoStyleImage(){
    var heightImg = 60;
    document.querySelector(".clicker").style.height = heightImg+"%";
    await sleep(20);
    document.querySelector(".clicker").style.height = "70%";
}

// change la couleur d'un element en suivant un cycle rgb complet
function autoHue(){
    if(red == 255 && green < 255 && blue == 0){
        green += 17;
    } else if(red > 0 && green >= 255 && blue == 0){
        red -= 17;
    } else if(red == 0 && green == 255 && blue < 255){
        blue += 17;
    } else if(red == 0 && green > 0 && blue == 255){
        green -= 17;
    } else if(red < 255 && green == 0 && blue == 255){
        red += 17;
    } else if (red == 255 && green == 0 && blue > 0){
        blue -= 17;
    }
    return "rgb("+red+','+green+','+blue+")";
}

// gère automatiquement l'aspect de la bare de progression et du bouton d'achat
function autoStyleTirage(){
    if(cpt<25){
        progressBarLength += 4;
        resetBtnAchat();
        document.querySelector("#normal").innerHTML = "Communes : 0%";
        document.querySelector("#secret").innerHTML = "Secrètes : 0%";
        document.querySelector("#superSecret").innerHTML = "Super Secrètes : 0%";
    }else if(cpt >= 25 && cpt < 50){ // Tirage
        if(cpt==25){resetProgressBar();}
        document.querySelector("#normal").innerHTML = "Communes : 100%";
        document.querySelector("#secret").innerHTML = "Secrètes : 0%";
        document.querySelector("#superSecret").innerHTML = "Super Secrètes : 0%";
        btnAchat.innerHTML = "&#62&#62&#62 Tirage &#60&#60&#60";
        btnAchat.style.backgroundColor = "#B87333";
        progressBar.style.backgroundColor = "#C0C0C0";
        progressBarLength += 4;
        
    } else if(cpt >= 50 && cpt < 100){ // Super Tirage
        if(cpt==50){resetProgressBar();}
        document.querySelector("#normal").innerHTML = "Communes : 95%";
        document.querySelector("#secret").innerHTML = "Secrètes : 5%";
        document.querySelector("#superSecret").innerHTML = "Super Secrètes : 0%";
        btnAchat.style.backgroundColor = "#C0C0C0";
        progressBar.style.backgroundColor = "#FFD700";
        btnAchat.innerHTML = "&#62&#62&#62 Super Tirage &#60&#60&#60";
        progressBarLength += 100/(100-50);
        
    } else if(cpt >= 100 && cpt < 200){ // Méga Super Tirage
        if(cpt==100){resetProgressBar();}
        document.querySelector("#normal").innerHTML = "Communes : 88%";
        document.querySelector("#secret").innerHTML = "Secrètes : 10%";
        document.querySelector("#superSecret").innerHTML = "Super Secrètes : 2%";
        btnAchat.style.backgroundColor = "#FFD700";
        progressBar.style.backgroundColor = "#00b3ff";
        btnAchat.innerHTML = "&#62&#62&#62 Méga Super Tirage &#60&#60&#60";
        progressBarLength += 100/(200-100);
        
    } else if(cpt >=200 && cpt < 400){ // Wati Tirage
        if(cpt==200){resetProgressBar();}
        document.querySelector("#normal").innerHTML = "Communes : 73%";
        document.querySelector("#secret").innerHTML = "Secrètes : 20%";
        document.querySelector("#superSecret").innerHTML = "Super Secrètes : 7%";
        btnAchat.style.backgroundColor = "#00b3ff";
        progressBar.style.backgroundColor = "#870b0b";
        btnAchat.innerHTML = "&#62&#62&#62 Wati Tirage &#60&#60&#60";
        progressBarLength += 100/(400-200);
        
    } else if(cpt >= 400 && cpt < 800){ // Tirage de fou malade
        if(cpt==400){resetProgressBar();}
        document.querySelector("#normal").innerHTML = "Communes : 55%";
        document.querySelector("#secret").innerHTML = "Secrètes : 35%";
        document.querySelector("#superSecret").innerHTML = "Super Secrètes : 10%";
        btnAchat.style.backgroundColor = "#870b0b";
        progressBar.style.backgroundColor = "#fff";
        btnAchat.innerHTML = "&#62&#62&#62 Tirage de fou malade &#60&#60&#60";
        progressBarLength += 100/(800-400);
        
    } else if(cpt >= 800){ // Tirage de la mort qui tue
        document.querySelector("#normal").innerHTML = "Communes : 30%";
        document.querySelector("#secret").innerHTML = "Secrètes : 50%";
        document.querySelector("#superSecret").innerHTML = "Super Secrètes : 20%";
        btnAchat.style.color = "#fff";
        btnAchat.style.backgroundColor = autoHue();
        progressBar.style.backgroundColor = autoHue();
        btnAchat.innerHTML = "&#62&#62&#62 Tirage de la mort qui tue &#60&#60&#60";
        
        
    }
}

// rénitialise les paramètres de la bare de progression
function resetProgressBar(){
    progressBar.style.width = "0%";
    progressBarLength = 0;
    btnAchat.style.color = "#fff";
    btnAchat.style.border = "5px solid #fff";
}

function resizeProgressBar(){
    if(cpt < 50){
        progressBarLength = (cpt*4);
        progressBar.style.width = progressBarLength+"%";
        progressBarLength += 4;
    } else if(cpt < 100){
        progressBarLength = (cpt*8);
        progressBar.style.width = progressBarLength+"%";
        progressBarLength += 8;
    } else if(cpt < 200){
        progressBarLength = (cpt*16);
        progressBar.style.width = progressBarLength+"%";
        progressBarLength += 16;
    } else if(cpt < 400){
        progressBarLength = (cpt*32);
        progressBar.style.width = progressBarLength+"%";
        progressBarLength += 32;
    }
}

// rénitialise les paramètres du bouton d'achat
function resetBtnAchat(){
    progressBar.style.backgroundColor = "#B87333";
    btnAchat.style.backgroundColor = "#fff";
    btnAchat.style.color = "#969696";
    btnAchat.style.border = "5px solid #969696";
    btnAchat.innerHTML = "Pas assez de Pouets";
}

// enlève des pouets et tire une carte
function tirage(){
    console.log("achat effectué");
    document.querySelector(".pouet-display");
    if(cpt<10){
        
    }else if(cpt >= 25  && cpt < 50){ // Tirage
        if(cpt==25){resetProgressBar();}
        cpt -= 25;
        document.querySelector(".pouet-display").innerHTML = cpt + " Pouets !";
        progressBarLength -= 4;
        progressBar.style.width = progressBarLength +"%";
        progressBarLength += 4;
        nbTirages = 1;
        resetBtnAchat();
        sDrop = 0;
        ssDrop = 0;
        pickACard();
        
    } else if(cpt >= 50 && cpt < 100){ // Super Tirage
        if(cpt==50){resetProgressBar();}
        cpt -= 50;
        document.querySelector(".pouet-display").innerHTML = cpt + " Pouets !";
        resizeProgressBar();
        resetBtnAchat();
        nbTirages = 3;
        sDrop = 5;
        ssDrop = 0;
        pickACard();
        
    } else if(cpt >= 100 && cpt < 200){ // Méga Super Tirage
        if(cpt==100){resetProgressBar();}
        cpt -= 100;
        document.querySelector(".pouet-display").innerHTML = cpt + " Pouets !";
        resizeProgressBar();
        resetBtnAchat();
        nbTirages = 5;
        sDrop = 10;
        ssDrop = 2;
        pickACard();
        
    } else if(cpt >= 200 && cpt < 400){ // Wati Tirage
        if(cpt==200){resetProgressBar();}
        cpt -= 200;
        document.querySelector(".pouet-display").innerHTML = cpt + " Pouets !";
        resizeProgressBar();
        resetBtnAchat();
        nbTirages = 7;
        sDrop = 20;
        ssDrop = 7;
        pickACard();
        
    } else if(cpt >= 400 && cpt < 800){ // Tirage de fou malade
        if(cpt==400){resetProgressBar();}
        cpt -= 400;
        document.querySelector(".pouet-display").innerHTML = cpt + " Pouets !";
        resizeProgressBar();
        resetBtnAchat();
        nbTirages = 7;
        sDrop = 35;
        ssDrop = 10;
        pickACard();
        
    } else if(cpt >= 800){ // Tirage de la mort qui tue
        cpt -= 801;
        document.querySelector(".pouet-display").innerHTML = cpt + " Pouets !";
        if (cpt < 800){
            resizeProgressBar();
        }
        increment();
        nbTirages = 7;
        sDrop = 50;
        ssDrop = 20;
        pickACard();
    }
    
}

// appellée dans tirage() permet de lancer l'interface de piochage
async function pickACard(){
    if (isPicked == 0){ // La carte est piochée face cachée
        document.querySelector(".radial-light").style.visibility = "hidden";
        document.querySelector(".picked-card").src = "./images/cards/back.png";
        document.querySelector(".picked-card-container").style.visibility = "visible";
        document.querySelector(".picked-card").style.visibility = "visible";
        isPicked = 1;        
    } else if(isPicked == 1){ // La carte est retournée
        var drop = getRandomIntInclusive(0, 100);
        console.log(drop,sDrop, ssDrop);
        if(drop < ssDrop){
            var nbCard = getRandomIntInclusive(1, 1);
            var card = "./images/cards/superSecrets/"+nbCard+".png";    //////// Nombre de cartes super secretes
            ssCardsOwned.push(nbCard);
        } else if (drop < sDrop){
            var nbCard = getRandomIntInclusive(1, 2);
            var card = "./images/cards/secrets/"+nbCard+".png";    //////// Nombre de cartes secretes
            sCardsOwned.push(nbCard);
        } else {
            var nbCard = getRandomIntInclusive(1, 25);
            var card = "./images/cards/"+nbCard+".png";           //////// Nombre de cartes a changer en fonction du nb total
            cardsOwned.push(nbCard);
        }
        for(var i = 1057; i >= 0; i-= 200){
            document.querySelector(".picked-card").style.aspectRatio = i+"/1465";
            await delay(5);
        }
        document.querySelector(".picked-card").src = card;
        document.querySelector(".radial-light").style.visibility = "visible";
        for(var i = 57; i <= 1057; i += 200){
            document.querySelector(".picked-card").style.aspectRatio = i+"/1465";
            await delay(5);
        }
        if(nbTirages > 1){
            nbTirages--;
            isPicked = 2;
        } else {
             isPicked = 100;
        }
    } else if(isPicked == 2) { // la carte est cachée
        isPicked = 0;           
        pickACard();
    } else { // la carte est cachée
        document.querySelector(".picked-card-container").style.visibility = "hidden";
        document.querySelector(".picked-card").style.visibility = "hidden";
        document.querySelector(".radial-light").style.visibility = "hidden";
        isPicked = 0;        
    }
}

// donne un entier aléatoire
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

//Gère toute la partie collection.
function collection(){
    document.querySelector(".collection-frame").style.visibility = "visible";
    document.querySelector(".affichage-collection").innerHTML = "";
    cardsOwned.forEach(element => {
        document.querySelector(".affichage-collection").innerHTML += "<div class=\"card\" style=\"order:"+element+";\"><br><img src=\"./images/cards/"+element+".png\" alt=\"c'est l'image\"></div>";
    });
    sCardsOwned.forEach(element => {
        document.querySelector(".affichage-collection").innerHTML += "<div class=\"card\" style=\"order:"+element*100+";\"><br><img src=\"./images/cards/secrets/"+element+".png\" alt=\"c'est l'image\"></div>";
    });
    ssCardsOwned.forEach(element => {
        document.querySelector(".affichage-collection").innerHTML += "<div class=\"card\" style=\"order:"+element*10000+";\"><br><img src=\"./images/cards/superSecrets/"+element+".png\" alt=\"c'est l'image\"></div>";
    });
}

function fermerCollection(){
    document.querySelector(".collection-frame").style.visibility = "hidden";
}