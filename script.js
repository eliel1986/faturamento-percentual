const form = document.querySelector("#form");
const volume_vinte_origem = document.querySelector("#volume_vinte_origem");
const volume_vinte_uni = document.querySelector("#volume_vinte_uni");
const densidade_vinte_uni = document.querySelector("#densidade_vinte_uni");
const peso_origem = document.querySelector("#peso_origem");
const peso_uni = document.querySelector("#peso_uni");
const volume_drenado = document.querySelector("#volume_drenado");

const calcular = () => {

    const origemMenorQueDestino = Number(peso_origem.value) < Number(peso_uni.value);

    document.getElementById("formulario_principal").style.display = "none";
    document.getElementById("resposta").style.display = "block";

    const diferenca_volume_vinte = volume_vinte_origem.value - volume_vinte_uni.value;
    document.getElementById('diferenca_volume_vinte').value = `${diferenca_volume_vinte} litros`;

    const diferenca_litros_volume = ((diferenca_volume_vinte / volume_vinte_origem.value) * 100).toFixed(2)
    document.getElementById('diferenca_litros_volume').value = `${diferenca_litros_volume} %`;

    let diferenca_peso = 0;
    if (origemMenorQueDestino) {
        diferenca_peso = (peso_origem.value - peso_uni.value) * -1;
    } else {
        diferenca_peso = peso_origem.value - peso_uni.value;
    }

    document.getElementById('diferenca_peso').value = `${diferenca_peso} Kilos`;
   
    const diferenca_litros_peso = (diferenca_peso / densidade_vinte_uni.value).toFixed(0)
    document.getElementById('diferenca_litros_peso').value = `${diferenca_litros_peso} litros`;

    let diferenca_litros_drenagem = 0;
    if (origemMenorQueDestino) {
        diferenca_litros_drenagem = Number(diferenca_litros_peso) - Number(volume_drenado.value)
    } else {
        diferenca_litros_drenagem = Number(diferenca_litros_peso) + Number(volume_drenado.value)
    }
    document.getElementById('desconto_falta').value = `${diferenca_litros_drenagem} litros`;

    const percentual_resultado = (((diferenca_volume_vinte - diferenca_litros_drenagem) / volume_vinte_origem.value) * 100).toFixed(2)
    document.getElementById('percentual_falta').value = `${percentual_resultado} %`;

    if (percentual_resultado >= -0.4 && percentual_resultado <= 0.4) {
        document.getElementById("resposta").style.backgroundColor = "green";
    } else {
        document.getElementById("resposta").style.backgroundColor = "red";
    }

}

100
150

-50

function geraErroNaDensidade() {
    densidade_vinte_uni.style.backgroundColor = 'red'
    densidade_vinte_uni.focus(); 
}

function verificarDensidade(densidade) {
    densidade_vinte_uni.style.backgroundColor = 'white'

    if (!densidade) return;

    if (!densidade.includes('.')) {
        densidade_vinte_uni.value = `.${densidade}`;
        return;
    }

    // Usuario informou manualmente o .
    // O ponto esta no local certo? Valores aceitaveis 0.850 ou .850
    const primeiraLetra = densidade.charAt(0);

    if (primeiraLetra === '0') {
        const segundaLetra = densidade.charAt(1);

        if (segundaLetra !== '.') {
            geraErroNaDensidade();
            return;
        }
    }

    if (primeiraLetra !== '.') {
        geraErroNaDensidade();
        return;
    }
}

function removePonto(input) {
    const valor = input.value;
   
    if (valor.includes('.')) {
        input.value = valor.replace('.', '')
    }
}

volume_vinte_origem.addEventListener('blur', () => {
    removePonto(volume_vinte_origem);
})

volume_vinte_uni.addEventListener('blur', () => {
    removePonto(volume_vinte_uni);
})

densidade_vinte_uni.addEventListener('blur', (e) => {
    verificarDensidade(e.target.value);
})

peso_origem.addEventListener('blur', () => {
    removePonto(peso_origem);
})

peso_uni.addEventListener('blur', () => {
    removePonto(peso_uni);
})

volume_drenado.addEventListener('blur', () => {
    removePonto(volume_drenado);
})


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const volumeVinteOrigem = volume_vinte_origem.value;
    const volumeVinteUni = volume_vinte_uni.value;
    const densidadeVinteUni = densidade_vinte_uni.value;
    const pesoOrigem = peso_origem.value;
    const pesoUni = peso_uni.value;
    const volumeDrenado = volume_drenado.value;


    if (volumeVinteOrigem && volumeVinteUni && densidadeVinteUni && pesoOrigem && pesoUni && volumeDrenado) {
        calcular();
    }
});