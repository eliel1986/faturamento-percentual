const form = document.querySelector("#form");

const densOrig = document.querySelector("#dens-orig").value;
const densDest = document.querySelector("#dens-dest").value;
const pesoOrig = document.querySelector("#peso-orig").value;
const pesoDest = document.querySelector("#peso-dest").value;

const result = pesoDest * densDest;

const resume = (text) => {
    const ele = document.createElement("div")
    ele.classList.add("ele")

    
}



form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (result) {
        resume(result)
    }
});