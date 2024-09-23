const historyBtn = document.getElementById('history-btn');

const donationBtn =document.getElementById('donation-btn');

// for history button
historyBtn.addEventListener('click', function(){
    historyBtn.classList.remove("border", "text-gray-700", "font-medium");
    historyBtn.classList.add("bg-lime-300", "font-bold");

    
    donationBtn.classList.remove("bg-lime-300", "font-bold");
    donationBtn.classList.add("border", "text-gray-700", "font-medium");

    // removing + adding hidden
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('main-container').classList.add('hidden');
})


// for donation Button
donationBtn.addEventListener('click', function(){
    donationBtn.classList.remove("border", "text-gray-700", "font-medium");
    donationBtn.classList.add("bg-lime-300", "font-bold");

    historyBtn.classList.remove("bg-lime-300", "font-bold");
    historyBtn.classList.add("border", "text-gray-700", "font-medium");


    // adding+removing hidden
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById('main-container').classList.remove('hidden');
})
