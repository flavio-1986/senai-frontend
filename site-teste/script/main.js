function mudarH1(){
    const novaH1 = document.querySelector("h1");
    novaH1.textContent = "Olá Mundo";
}


function verificarCarro(){
    let carro = prompt("Fale qual seu Carro:");
    if (carro === "Maverick"){
        alert("Power");
    }else{
        alert("Potinho de sorvete");
        window.location.href = "http://www.google.com"
}

}

document.querySelector("img").addEventeListener("Click",verficarTime)


