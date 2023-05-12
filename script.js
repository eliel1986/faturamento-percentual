const form = document.querySelector("#form");

const densOrig = document.querySelector("#dens-orig");
const densDest = document.querySelector("#dens-dest");
const pesoOrig = document.querySelector("#peso-orig");
const pesoDest = document.querySelector("#peso-dest");
const divteste = document.querySelector(".container");

const calcular = (number) => {

    const geral = document.createElement("div");
    geral.classList.add("resultado");
    document.getElementById("aaa").style.display = "block";

    // const dif = document.createElement("input");
    // dif.classList.add("abc");
    // dif.value = number;
    // geral.appendChild(dif);

    // divteste.appendChild(geral);

    const densidade = densOrig.value;

    document.getElementById('dens_orig').value = densidade;
}




form.addEventListener("submit", (e) => {
    e.preventDefault();

    const  result = densOrig.value;

    if(result) {
        calcular(result);
    }
});