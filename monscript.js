function compteursuper (){
  var varJSCpt = document.getElementById("pCpt");

  var nombre = parseInt(varJSCpt.innerHTML);
  varJSCpt.innerHTML = nombre + 1;
}

function afficherPhoto(objet){
  console.log("function afficher Photo appelée");

  if (objet.className == "zoomImage" ){
    objet.className = "";
  }
  else{
    objet.className = "zoomImage";
  }
}
