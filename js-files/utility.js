
function getInputValue(id){
    const inputDonateAmount = parseFloat(document.getElementById(id).value);
    if(inputDonateAmount < 0 || isNaN(inputDonateAmount)){
        alert('Invalid Donate Amount');
        return;
    }

    return inputDonateAmount;

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
    
    



