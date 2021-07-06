"use strict";

let theResults = [], theCompletions = [], theResult2 = [], theId = [],
theResult3 = [], theValue = [], image, comPletion = [], results = [],
poly = [];

let Sedih = 0, Senang = 0, Terkejut = 0, Takut = 0, Menangis = 0, Tegang = 0, Tertawa = 0, Bingung = 0, Melamun = 0, Marah = 0;

//Count the polygonlabels object
let showResults = function(){
  for(let prop in theResults){
    theCompletions = theResults[prop];
    for(let comp in theCompletions){
      theResult2 = theCompletions[comp];
      image = theResult2.image;
      comPletion = theResult2[0];
      for(let Res in comPletion){
        theId = comPletion[Res];
        for (var i = theId.length - 1; i >= 0; i--) {
          results = theId[i];
          for(let Res2 in results){
            theResult3 = results[Res2];
            poly = theResult3.polygonlabels;
            for(let val in poly){
              theValue = poly[val];
              if(theValue == "Sedih"){
                Sedih += 1 ;
              }else if(theValue == "Senang"){
                Senang += 1;
              }else if(theValue == "Terkejut"){
                Terkejut += 1;
              }else if(theValue == "Takut"){
                  Takut += 1;   
              }else if(theValue == "Menangis"){
                  Menangis += 1;
              }else if(theValue == "Tegang"){
                  Tegang += 1;
              }else if(theValue == "Tertawa"){
                  Tertawa += 1;
              }else if(theValue == "Bingung"){
                  Bingung += 1;
              }else if(theValue == "Melamun"){
                  Melamun += 1;
              }else{Marah += 1;};
            };
          };
        };
      };
    };  
  };
}

//open json file
fetch("result.json","invation.json","BirdBox.json","TheWitches.json")
  .then(function(resp){
    return resp.json();
  })
  .then(function(data){
    console.log(data);
    theResults = data;
    showResults();
    
    //printing polygonlabels object
    console.log("Sedih : " + Sedih); 
    console.log("Senang : " + Senang);
    console.log("Terkejut : " + Terkejut);
    console.log("Takut : " + Takut);
    console.log("Menangis : " + Menangis);
    console.log("Tegang : " + Tegang);
    console.log("Tertawa : " + Tertawa);
    console.log("Bingung : " + Bingung);
    console.log("Melamun : " + Melamun);
    console.log("Marah : " + Marah);
    document.getElementById("p1").innerHTML += "Sedih : " + Sedih + "<br>";
    document.getElementById("p1").innerHTML += "Senang : " + Senang + "<br>";
    document.getElementById("p1").innerHTML += "Terkejut : " + Terkejut + "<br>";
    document.getElementById("p1").innerHTML += "Takut : " + Takut + "<br>";
    document.getElementById("p1").innerHTML += "Menangis : " + Menangis + "<br>";
    document.getElementById("p1").innerHTML += "Tegang : " + Tegang + "<br>";
    document.getElementById("p1").innerHTML += "Tertawa : " + Tertawa + "<br>";
    document.getElementById("p1").innerHTML += "Bingung : " + Bingung + "<br>";
    document.getElementById("p1").innerHTML += "Melamun : " + Melamun + "<br>";
    document.getElementById("p1").innerHTML += "Marah : " + Marah + "<br>";
  });