for (let i = 0; i < 5; i++) {
    const cinqueNumeri = Math.floor(Math.random() * ((1000 + 1) - 1)) + 1;  
    document.getElementById("numero1").innerHTML = (cinqueNumeri); 
    //scrivere tutti e cinque i numeri
};

// const primoNum = Math.floor(Math.random() * ((1000 + 1) - 1)) + 1;  
// console.log(primoNum);
// const secNum = Math.floor(Math.random() * ((1000 + 1) - 1)) + 1; 
// console.log(secNum); 
// const terzoNum = Math.floor(Math.random() * ((1000 + 1) - 1)) + 1;  
// console.log(terzoNum);
// const quartoNum = Math.floor(Math.random() * ((1000 + 1) - 1)) + 1;  
// console.log(quartoNum);
// const quintoNum = Math.floor(Math.random() * ((1000 + 1) - 1)) + 1;  
// console.log(quintoNum);

// document.getElementById("numero1").innerHTML = (primoNum);
// document.getElementById("numero2").innerHTML = (secNum);  
// document.getElementById("numero3").innerHTML = (terzoNum);  
// document.getElementById("numero4").innerHTML = (quartoNum);  
// document.getElementById("numero5").innerHTML = (quintoNum);  

setTimeout(hide, 3000);

function hide(cinqueNumeri){
	cinqueNumeri=document.getElementById("numero1").style.display="none";
    for (let i = 0; i < 5; i++){
        let inserisciNum = prompt("Inserisci i numeri");
        
        //non funziona
        // if (inserisciNum === cinqueNumeri) {
        //     document.getElementById("vittoria").innerHTML = ('il numero è corretto');
        // } else {
        //     document.getElementById("sconfitta").innerHTML = ('try again');
        // };
    };    
};

