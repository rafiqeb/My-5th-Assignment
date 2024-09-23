

const donateNow = document.getElementById('donate-now');

donateNow.addEventListener('click', function(){
    
    const donateInput = parseFloat(document.getElementById('donate-input').value);

    const floodDonate = document.getElementById('flood-donate').innerText
    const historyName = donateInput + ' Taka is ' + floodDonate;

    const historyContent = document.createElement('div');
    historyContent.className = "border p-5 rounded-xl";
    historyContent.innerHTML = `
        <h3 class="text-xl font-bold mb-5">${historyName}</p>
        <p class="mt-4 font-normal">${new Date().toLocaleTimeString()}</p>
    `
    const historyList = document.getElementById('history-list')
    const historySection = document.getElementById('history-section')
    historySection.insertBefore(historyContent, historySection.firstChild)

    // const p = document.createElement("p")
    // p.innerText(historyName)
    // console.log(p)
    // historyContent.appendChild(p)

    if(donateInput > 0){

        const balance = parseFloat(document.getElementById('new-balance').innerText);
        const newBalance = balance + donateInput
        document.getElementById('new-balance').innerText = newBalance;

        const myBalance = parseFloat(document.getElementById('my-balance').innerText);
        const balanceNow = myBalance - donateInput;
        document.getElementById('my-balance').innerText = balanceNow;
    }
    else{
        alert('Invalid Balance')
    }
    
})

//    Blog button
document.getElementById('btn-blog')
.addEventListener('click', function(){
    window.location.href = '/blog.html';
})

//   History button
const btnHistory = document.getElementById('btn-history')
btnHistory.addEventListener('click', function(){
    btnHistory.classList.add('bg-[#B4F461]')
    const btnDonation = document.getElementById('btn-donation')
    btnDonation.classList.remove('bg-[#B4F461]')

    const mainContent = document.getElementById('main-content')
    mainContent.classList.add('hidden')

    const historySection = document.getElementById('history-section')
    historySection.classList.remove('hidden')
})

// donation button
const btnDonation = document.getElementById('btn-donation')
btnDonation.addEventListener('click', function(){
    btnDonation.classList.add('bg-[#B4F461]')
    btnHistory.classList.remove('bg-[#B4F461]')
    
    const mainContent = document.getElementById('main-content')
    mainContent.classList.remove('hidden')
})