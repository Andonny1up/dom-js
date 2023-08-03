const iptNumberOne = document.getElementById("id_number_one");
const iptNumberTwo = document.getElementById("id_number_two");
const btnCalcular = document.getElementById("btn_cal");

const result = document.getElementById("id_result")
const form = document.getElementById("puto")


//btnCalcular.addEventListener('click',calcularOperacion);

form.addEventListener("submit",calcularOperacion)

function calcularOperacion(event) 
{
    event.preventDefault();    
    result.innerText= Number(iptNumberOne.value) + Number(iptNumberTwo.value);
};