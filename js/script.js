for (let i = 0; i < 5; i++) {
    const cinqueNumeri = Math.floor(Math.random() * ((1000 + 1) - 1)) + 1;  
    document.getElementById("numero1").innerHTML = (cinqueNumeri); 
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

setTimeout(hide, 30000);

function hide(cinqueNumeri){
	cinqueNumeri=document.getElementById("numero1").style.display="none";
    for (let i = 0; i < 5; i++){
        let inserisci = prompt("Inserisci i numeri");
    }
};

//to do: if e else



