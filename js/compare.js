
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (!(carClass instanceof Car)) {
        throw "You need set a Car Class";
    }

    if (el.checked) {
        if (carArr.length >= 2) {
            alert("Você só pode comparar dois carros por vez.");
            el.checked = false;
            return;
        }

        // Adiciona o carro ao array
        if (GetCarArrPosition(carArr, carClass) === -1) {
            carArr.push(carClass);
        }
    } else {
        // Remove o carro do array
        let pos = GetCarArrPosition(carArr, carClass);
        if (pos !== -1) {
            carArr.splice(pos, 1);
        }
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    for (let i = 0; i < 2; i++) {
        const car = carArr[i];

        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${car.image}" width="150">`;
        document.getElementById(`compare_modelo_${i}`).textContent = car.nome;
        document.getElementById(`compare_alturacacamba_${i}`).textContent = car.alturaCacamba + " mm";
        document.getElementById(`compare_alturaveiculo_${i}`).textContent = car.alturaVeiculo + " mm";
        document.getElementById(`compare_alturasolo_${i}`).textContent = car.alturaSolo + " mm";
        document.getElementById(`compare_capacidadecarga_${i}`).textContent = car.capacidadeCarga + " kg";
        document.getElementById(`compare_motor_${i}`).textContent = car.motor + "L";
        document.getElementById(`compare_potencia_${i}`).textContent = car.potencia + " cv";
        document.getElementById(`compare_volumecacamba_${i}`).textContent = car.volumeCacamba + " L";
        document.getElementById(`compare_roda_${i}`).textContent = car.roda;
        document.getElementById(`compare_preco_${i}`).textContent = `R$ ${car.preco.toLocaleString('pt-BR')}`;
    }
}
