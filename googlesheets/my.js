function Pesquisas(){
    
    const urlPesquisas = "https://api.pesquisas.testes.unicef.org.br/api/responses/24"

   
    fetch(urlPesquisas).then(resp => resp.json()).then(pesq => { 
        console.log(pesq)
    })
 };
    
 function GoogleSheets2(){
    
        const urlGoogleSheets = "https://script.googleusercontent.com/a/macros/sacerdata.com/echo?user_content_key=iH217F3PhpmwhIVj3xxQEZ-acKW-54ysds_kjXkZ10PvRyUmgZWKDuFK0f1TtmfU3-yCmg-csJOoQ8UKldOB6ox-H-NfJwr8OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKABMdhIukkvs6OAXq8WIw61S4chwneYR2tabMaZK5WVSLiw38AP0flRWL7b0_wcUl34Sy0yzUYatgV09QT_AyYxdojx0va4DO25eE3Ka-fv72e_e9UdkBQ7foGe1xjIDgKagQEneoX2wQ&lib=MNbHkqaTzNWnWJkAJ2kLyy8FoayRW2YNB"
    
       
        fetch(urlGoogleSheets).then( resp => resp.json()).then(pralhinha => {
            console.log(pranilha)
        })
        };


document.getElementById("btn").addEventListener("click",Pesquisas);
document.getElementById("btn2").addEventListener("click",GoogleSheets2);