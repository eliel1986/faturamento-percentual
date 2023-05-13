const form = document.querySelector("#form");

const vol_vinte_orig = document.querySelector("#vol-vinte-origem");
const vol_V_Uni = document.querySelector("#vol-vinte-uni");
const dens_V_Uni = document.querySelector("#dens-vinte-uni");
const pesoOrig = document.querySelector("#peso-orig");
const pesoUni = document.querySelector("#peso-uni");
const volDren = document.querySelector("#vol-dren");

// const divteste = document.querySelector(".container");

const calcular = (number) => {

    // if (vol_vinte_orig !== '' && vol_V_Uni !== '' && dens_V_Uni !== '' && pesoOrig && pesoUni && volDren) { 

    // const geral = document.createElement("div");
    // geral.classList.add("resposta");
    document.getElementById("bbb").style.display = "none";
    document.getElementById("aaa").style.display = "block";



    // const dif = document.createElement("input");
    // dif.classList.add("abc");
    // dif.value = number;
    // geral.appendChild(dif);

    // divteste.appendChild(geral);

    const dif_vol_vinte = vol_vinte_orig.value - vol_V_Uni.value;
    document.getElementById('dif_vol_vinte').value = `${dif_vol_vinte} litros`;

    const dif_litros_vol = ((dif_vol_vinte / vol_vinte_orig.value)*100).toFixed(2)
    document.getElementById('dif_vol_litros').value = `${dif_litros_vol} %`;

    const dif_peso = pesoOrig.value - pesoUni.value
    document.getElementById('dif_peso').value = `${dif_peso} Kilos`;

    const dif_litros_peso = (dif_peso / (dens_V_Uni.value / 1000)).toFixed(0)
    document.getElementById('dif_litros_peso').value = `${dif_litros_peso} litros`;

    const dif_litros_dreno = Number(dif_litros_peso) + Number(volDren.value)
    document.getElementById('desc_falta').value = `${dif_litros_dreno} litros`;

    const perc_result = (((dif_vol_vinte - dif_litros_dreno) / vol_vinte_orig.value)*100).toFixed(2)
    document.getElementById('perc_falta').value = `${perc_result} %`;

    if (perc_result >= -0.4 && perc_result <= 0.4) {
        document.getElementById("aaa").style.backgroundColor = "green";
    } else {
        document.getElementById("aaa").style.backgroundColor = "red";
    }

//}


}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const vv = vol_vinte_orig.value;
    const vvu = vol_V_Uni.value;


    if(vv && vvu) {
        calcular(vv);
    }
});

// function reset() {

//     vol_vinte_orig = '';
//     vol_V_Uni = '';
//     dens_V_Uni = '';
//     pesoOrig = '';
//     pesoUni = '';
//     volDren = '';
// }