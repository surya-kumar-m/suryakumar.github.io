const percentageForm = document.querySelector("#percentageForm");
const calc = document.querySelector("#calc");
const answer = document.querySelector("#answer");
const reset = document.querySelector("#reset");
let total;

calc.addEventListener('click',(e)=>{
    const amount = parseInt(percentageForm.elements.value.value);
    const percentage = parseInt(percentageForm.elements.percentage.value);

    total = (amount/100)*percentage;

    answer.textContent = `Answer : ${total}`;
})

reset.addEventListener('click',(e)=>{
    percentageForm.elements.value.value = 0;
    percentageForm.elements.percentage.value = 0;
    answer.textContent = "";
})