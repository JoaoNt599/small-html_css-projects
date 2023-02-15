function  calculateTip(event) {
   event.preventDefault();

   let bill = document.getElementById('bill').value;
   let serviceQual = document.getElementById('serviceQual').value;
   let numPeople = document.getElementById('people').value;

   if(bill == '' | serviceQual == 0) {
       alert('Por favor, preencha os valores!');
       return;
   }

   // verifica se o numero de pessoas é igaul a 1
   if(numPeople == "" | numPeople <= 1) {
       numPeople = 1;
       document.getElementById('each').style.display = "none";
   } else {
       document.getElementById('each').style.display = "block";
   }

   // calcula valor da gorjeta baseado no numero de pessoas
   let total = (bill * serviceQual) / numPeople; 
   total = total.toFixed(2);
   document.getElementById('tip').innerHTML = total;
   document.getElementById('totalTip').style.display = "block";


}

// limpa o total de pessoas 
document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);


