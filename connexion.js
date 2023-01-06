document.forms["Connexion"]["pwd"].addEventListener("input", function(){
    if(this.value != document.forms["Connexion"]["pwd-confirmation"].value){
        document.querySelector("#pf").innerHTML = "c pas bon frérot";
    } else {
        document.querySelector("#pf").innerHTML = "c ok chef"       ; 
    }
})
document.forms["Connexion"].addEventListener("submit", function(e){
    var erreur = "";
    // var pseudo = document.querySelector("#pseudo");
    // var pwd = document.querySelector("#pwd");
    // var pwd2 = document.querySelector("#pwd2");

    // if(!pseudo.value){
    //     erreur += "veuillez remplir le pseudo \n";
    // }
    // if(!pwd.value){
    //     erreur += "veuillez remplir le mot de passe \n";
    // }
    // if(!pwd2.value){
    //     erreur += "veuillez confirmer le mot de passe \n";
    // }

    var inputs = this;

    // for(var i=0; i<inputs.length; i++){
    //     console.log(inputs[i].name)
    //     if(!inputs[i].value){
    //         erreur += "Veillez remplir le champ suivant : "+inputs[i].name+"\n";
    //     }
    // }

    e.preventDefault();
    if(erreur){
        alert(erreur);
        return false;
    } else {
        alert("formulaire envoyé");
    }

});


console.log(document.forms["Connexion"]["pwd"].value);