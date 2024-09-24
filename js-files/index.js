// container-1

document.getElementById('donate1-btn').addEventListener('click', function(){

    const inputValue1 = getInputValue('donat-input1');
    const totalAmount1 = totalAmount();

    if(inputValue1 <= 0 || isNaN(inputValue1) || inputValue1 > totalAmount1){
        alert('Invalid Donate Amount');
        document.getElementById('donat-input1').value = '';
        return;
    }
    
    const donatingAmount1 = totalDonatedAmount('donating-amount1');

    const totalDonatedAmount1 = inputValue1 + donatingAmount1;
    
    // showing in div by add donate money
    document.getElementById('donating-amount1').innerText = totalDonatedAmount1;

    // subtract and show the amount at the top
    
    const remainigTotal1 = totalAmount1 - inputValue1;
    document.getElementById('total-amount').innerText = remainigTotal1;
    
    // popup card showed
    const popup1 = document.getElementById('popup-1');
    popup1.classList.remove('hidden');
    document.getElementById('close-popup1').addEventListener('click', function(){
        popup1.classList.add('hidden');
    })
    

    // history container

    const history1 = historyContainer();
    const camp1 = document.getElementById('camp-1').innerText;
    const div = document.createElement('div');
    div.innerHTML = `<div class="border p-4 rounded-lg mb-4">
       <h1 class= "font-bold mb-2">${inputValue1} tk is Donated for ${camp1} <h1>
       <p>${new Date()} <p>
    </div>`;
    
    history1.insertBefore(div, history1.firstChild);
    

    document.getElementById('donat-input1').value = '';

    
    
})



// container-2
document.getElementById('donate2-btn').addEventListener('click', function(){

    const inputValue2 = getInputValue('donat-input2');
    const totalAmount2 = totalAmount();

    // validation
    if(inputValue2 <= 0 || isNaN(inputValue2) || inputValue2 > totalAmount2){
        alert('Invalid Donate Amount');
        document.getElementById('donat-input2').value = '';
        return;
    }
    
    const donatingAmount2 = totalDonatedAmount('donating-amount2');

    const totalDonatedAmount2 = inputValue2 + donatingAmount2;
    
    // showing in div by add donate money
    document.getElementById('donating-amount2').innerText = totalDonatedAmount2;

    // subtract and show the amount at the top
    const remainigTotal2 = totalAmount2 - inputValue2;
    document.getElementById('total-amount').innerText = remainigTotal2;

    // popup container
    const popup2 = document.getElementById('popup-2');
    popup2.classList.remove('hidden');
    document.getElementById('close-popup2').addEventListener('click', function(){
        popup2.classList.add('hidden');
    })

    // history container

    const history2 = historyContainer();
    const camp2 = document.getElementById('camp-2').innerText;
    const div2 = document.createElement('div');
    div2.innerHTML = `<div class="border p-4 rounded-lg mb-4">
       <h1 class= "font-bold mb-2">${inputValue2} tk is Donated for ${camp2} <h1>
       <p>${new Date()} <p>
    </div>`;
    
    history2.insertBefore(div2, history2.firstChild);
    

    document.getElementById('donat-input2').value = '';
})



// conatiner-3

document.getElementById('donate3-btn').addEventListener('click', function(){

    const inputValue3 = getInputValue('donat-input3');
    const totalAmount3 = totalAmount();

    // validation

    if(inputValue3 <= 0 || isNaN(inputValue3) || inputValue3 > totalAmount3){
        alert('Invalid Donate Amount');
        document.getElementById('donat-input3').value = '';
        return;
    }
    
    const donatingAmount3 = totalDonatedAmount('donating-amount3');

    const totalDonatedAmount3 = inputValue3 + donatingAmount3;
    
    // showing in div by add donate money
    document.getElementById('donating-amount3').innerText = totalDonatedAmount3;

    // subtract and show the amount at the top
    const remainigTotal3 = totalAmount3 - inputValue3;
    document.getElementById('total-amount').innerText = remainigTotal3;

    // popup-3
    const popup3 = document.getElementById('popup-3');
    popup3.classList.remove('hidden');
    document.getElementById('close-popup3').addEventListener('click', function(){
        popup3.classList.add('hidden');
    })

    // history container

    const history3 = historyContainer();
    const camp3 = document.getElementById('camp-3').innerText;
    const div3 = document.createElement('div');
    div3.innerHTML = `<div class="border p-4 rounded-lg mb-4">
       <h1 class= "font-bold mb-2">${inputValue3} tk is Donated for ${camp3} <h1>
       <p>${new Date()} <p>
    </div>`;
    
    history3.insertBefore(div3, history3.firstChild);
    

    document.getElementById('donat-input3').value = '';
})







