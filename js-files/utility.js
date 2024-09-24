
function getInputValue(id){
    const inputDonateAmount = document.getElementById(id).value;
    if(isNaN(inputDonateAmount)){
      return;
    }

    const inpautDonateNumber = parseFloat(inputDonateAmount);
    return inpautDonateNumber;

}

function totalDonatedAmount(id){
  const donatedAmount = parseFloat(document.getElementById(id).innerText);
  return donatedAmount;
}

function totalAmount(){
   const totalFund = parseFloat(document.getElementById('total-amount').innerText);

   return totalFund;
}


function historyContainer(){
   const history = document.getElementById('history-container');
   return history;
}




    
    



