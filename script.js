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

console.log("hello world le programme");
document.querySelector(".game").onclick = function(){increment()};
document.querySelector(".btn-achat").onclick = function(){tirage()};
document.querySelector(".picked-card-container").onclick = function(){pickACard()};
document.querySelector("#inscription").onclick = function(){inscriptionStyle()};

////// Récupère les valeurs dans les champs sans les faires passer par l'url
document.forms["Inscription"]["Pseudo"].addEventListener("input", function(){
    logPseudo = this.value;
});
document.forms["Inscription"]["pwd"].addEventListener("input", function(){
    logPwd = this.value;
});
document.forms["Inscription"]["pwd-confirmation"].addEventListener("input", function(){
    logPwdConfirmation = this.value;
});
//////

document.querySelector('.btn-inscription').onclick = function(){connexion()};
document.forms["Inscription"]["pwd-confirmation"].addEventListener("input", function(){
    if(this.value != document.forms["Inscription"]["pwd"].value){
        document.querySelector("#msg-inscription").innerHTML = "Par contre frérot fait un effort met le même mot passe";
        document.querySelector(".btn-inscription").style.visibility = "hidden";
    } else {
        document.querySelector("#msg-inscription").innerHTML = "voila bravo fils de pioute clique sur la poutre pour créer ton compte"; 
        document.querySelector(".form-button").disabled = false;
        document.querySelector(".btn-inscription").style.visibility = "visible";
    }
});

function increment(){
    cpt+=1;
    document.querySelector(".pouet-display").innerHTML = cpt + " Pouets !";
    progressBar.style.width = progressBarLength+"%";
    document.querySelector(".game").style.boxShadow = "0 0 80px "+autoHue();
    autoStyleTirage();
    
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
    }else if(cpt >= 25 && cpt < 50){ // Tirage
        if(cpt==25){resetProgressBar();}
        btnAchat.innerHTML = "&#62&#62&#62 Tirage &#60&#60&#60";
        btnAchat.style.backgroundColor = "#B87333";
        progressBar.style.backgroundColor = "#C0C0C0";
        progressBarLength += 4;
        
    } else if(cpt >= 50 && cpt < 100){ // Super Tirage
        if(cpt==50){resetProgressBar();}
        btnAchat.style.backgroundColor = "#C0C0C0";
        progressBar.style.backgroundColor = "#FFD700";
        btnAchat.innerHTML = "&#62&#62&#62 Super Tirage &#60&#60&#60";
        progressBarLength += 100/(100-50);
        
    } else if(cpt >= 100 && cpt < 200){ // Méga Super Tirage
        if(cpt==100){resetProgressBar();}
        btnAchat.style.backgroundColor = "#FFD700";
        progressBar.style.backgroundColor = "#00b3ff";
        btnAchat.innerHTML = "&#62&#62&#62 Méga Super Tirage &#60&#60&#60";
        progressBarLength += 100/(200-100);
        
    } else if(cpt >=200 && cpt < 400){ // Wati Tirage
        if(cpt==200){resetProgressBar();}
        btnAchat.style.backgroundColor = "#00b3ff";
        progressBar.style.backgroundColor = "#870b0b";
        btnAchat.innerHTML = "&#62&#62&#62 Wati Tirage &#60&#60&#60";
        progressBarLength += 100/(400-200);
        
    } else if(cpt >= 400 && cpt < 800){ // Tirage de fou malade
        if(cpt==400){resetProgressBar();}
        btnAchat.style.backgroundColor = "#870b0b";
        progressBar.style.backgroundColor = "#fff";
        btnAchat.innerHTML = "&#62&#62&#62 Tirage de fou malade &#60&#60&#60";
        progressBarLength += 100/(800-400);
        
    } else if(cpt >= 800){ // Tirage de la mort qui tue
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
        pickACard();
        
    } else if(cpt >= 50 && cpt < 100){ // Super Tirage
        if(cpt==50){resetProgressBar();}
        cpt -= 50;
        document.querySelector(".pouet-display").innerHTML = cpt + " Pouets !";
        resizeProgressBar();
        // progressBar.style.width = (cpt*4)+"%";
        // progressBarLength -= 2;
        // progressBar.style.width = progressBarLength +"%";
        // progressBarLength += 2;
        nbTirages = 3;
        resetBtnAchat();
        pickACard();
        
    } else if(cpt >= 100 && cpt < 200){ // Méga Super Tirage
        if(cpt==100){resetProgressBar();}
        cpt -= 100;
        document.querySelector(".pouet-display").innerHTML = cpt + " Pouets !";
        resizeProgressBar();
        // progressBarLength -= 1;
        // progressBar.style.width = progressBarLength +"%";
        // progressBarLength += 1;
        nbTirages = 8;
        resetBtnAchat();
        pickACard();
        
    } else if(cpt >= 200 && cpt < 400){ // Wati Tirage
        if(cpt==200){resetProgressBar();}
        cpt -= 200;
        document.querySelector(".pouet-display").innerHTML = cpt + " Pouets !";
        resizeProgressBar();
        // progressBarLength -= 0.5;
        // progressBar.style.width = progressBarLength +"%";
        // progressBarLength += 0.5;
        nbTirages = 18;
        resetBtnAchat();
        pickACard();
        
    } else if(cpt >= 400 && cpt < 800){ // Tirage de fou malade
        if(cpt==400){resetProgressBar();}
        cpt -= 400;
        document.querySelector(".pouet-display").innerHTML = cpt + " Pouets !";
        resizeProgressBar();
        // progressBarLength -= 100/(800-400);
        // progressBar.style.width = progressBarLength +"%";
        // progressBarLength += 100/(800-400);
        nbTirages = 40;
        resetBtnAchat();
        pickACard();
        
    } else if(cpt >= 800){ // Tirage de la mort qui tue
        cpt -= 801;
        document.querySelector(".pouet-display").innerHTML = cpt + " Pouets !";
        if (cpt < 800){
            resizeProgressBar();
            // progressBarLength = (cpt % 10)*10;
            // progressBar.style.width = progressBarLength +"%";
            // progressBarLength += 10;
        }
        nbTirages = 90;
        increment();
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
        var card = "./images/cards/"+getRandomIntInclusive(1, 12)+".png";
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
            isPicked = 3;
        } else {
             isPicked = 100;
        }
    } else if(isPicked == 3) { // la carte est cachée
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

// affiche la boite de dialogue d'inscription
function inscriptionStyle(){
    document.querySelector(".inscription-frame").style.visibility = "visible";
}


//scrip permettant la connexion
function connexion(){
    console.log(logPseudo);
    console.log(logPwd);
    console.log(logPwdConfirmation);
    console.log("mes couilles");
    

    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ id: logPseudo, pwd: logPwd })
    }).then(console.log(response))
}