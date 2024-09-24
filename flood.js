// Donation for flood

const donateNow = document.getElementById('donate-now');

donateNow.addEventListener('click', function () {

    const donateInput = parseFloat(document.getElementById('donate-input').value);
    const floodDonate = document.getElementById('flood-donate').innerText
    const historyName = donateInput + ' Taka is ' + floodDonate;

    const historyContent = document.createElement('div');
    historyContent.className = "border p-5 rounded-xl";
    historyContent.innerHTML = `
        <h3 class="text-xl font-bold mb-5">${historyName}</p>
        <p class="mt-4 font-normal">${new Date().toString()}</p>
    `
    const historyList = document.getElementById('history-list')
    const historySection = document.getElementById('history-section')
    historySection.insertBefore(historyContent, historySection.firstChild)

    const balance = parseFloat(document.getElementById('new-balance').innerText);
    const newBalance = balance + donateInput
    document.getElementById('new-balance').innerText = newBalance.toFixed(2);

    const myBalance = parseFloat(document.getElementById('my-balance').innerText);
    const balanceNow = myBalance - donateInput;
    document.getElementById('my-balance').innerText = balanceNow.toFixed(2);

    document.getElementById('donate-input').value = '';

    if (donateInput > 0 && balanceNow > 0) {
        return donateInput, balanceNow;
    }
    else {
        alert('Invalid Balance')
    }

})

// donation for feni

document.getElementById('feni-donate-now').addEventListener('click', function () {
    const feniInput = parseFloat(document.getElementById('feni-input').value);
    const feniDonation = parseFloat(document.getElementById('feni-donation').innerText)
    const feniNewBalance = feniDonation + feniInput;
    document.getElementById('feni-donation').innerText = feniNewBalance.toFixed(2)
    const myBalance = parseFloat(document.getElementById('my-balance').innerText);
    const newMyBalance = myBalance - feniInput;
    document.getElementById('my-balance').innerText = newMyBalance.toFixed(2);

    const feniName = document.getElementById('feni-name').innerText
    const feniHistoryName = feniInput + ' Taka is ' + feniName;

    const feniContent = document.createElement('div');
    feniContent.className = "border p-5 rounded-xl";
    feniContent.innerHTML = `
        <h3 class="text-xl font-bold mb-5">${feniHistoryName}</p>
        <p class="mt-4 font-normal">${new Date().toString()}</p>
    `
    const feniList = document.getElementById('feni-list')
    const feniHistory = document.getElementById('feni-history')
    feniHistory.insertBefore(feniContent, feniHistory.firstChild)

    document.getElementById('feni-input').value = '';

    if (feniInput > 0 && newMyBalance > 0) {
        return feniInput, newMyBalance;
    }
    else {
        alert('Invalid Balance')
    }

})

// 3rd section

document.getElementById('donate-injured').addEventListener('click', function () {
    const injuredInput = parseFloat(document.getElementById('injured-input').value)
    const injuredDonation = parseFloat(document.getElementById('injured-donation').innerText)
    const injuredBalance = injuredDonation + injuredInput;
    document.getElementById('injured-donation').innerText = injuredBalance.toFixed(2);

    const myBalance = parseFloat(document.getElementById('my-balance').innerText);
    const newMyBalance = myBalance - injuredInput;
    document.getElementById('my-balance').innerText = newMyBalance.toFixed(2);

    const injuredName = document.getElementById('injured-name').innerText;
    const injuredHistoryName = injuredInput + ' Taka is Donated for ' + injuredName;

    const feniContent = document.createElement('div');
    feniContent.className = "border p-5 rounded-xl";
    feniContent.innerHTML = `
        <h3 class="text-xl font-bold mb-5">${injuredHistoryName}</p>
        <p class="mt-4 font-normal">${new Date().toString()}</p>
    `
    const feniList = document.getElementById('feni-list')
    const feniHistory = document.getElementById('feni-history')
    feniHistory.insertBefore(feniContent, feniHistory.firstChild)
    console.log(injuredHistoryName)

    document.getElementById('injured-input').value = '';

    if (injuredInput > 0 && newMyBalance > 0) {
        return injuredInput, newMyBalance;
    }
    else {
        alert('Invalide Balance')
    }
})

//    Blog button
document.getElementById('btn-blog')
    .addEventListener('click', function () {
        window.location.href = './blog.html';
    })

//   History button
const btnHistory = document.getElementById('btn-history')
btnHistory.addEventListener('click', function () {
    btnHistory.classList.add('bg-[#B4F461]')
    const btnDonation = document.getElementById('btn-donation')
    btnDonation.classList.remove('bg-[#B4F461]')

    const mainContent = document.getElementById('main-content')
    mainContent.classList.add('hidden')

    const historySection = document.getElementById('history-section')
    historySection.classList.remove('hidden')

    const feniHistory = document.getElementById('feni-history')
    feniHistory.classList.remove('hidden')
})

// donation button
const btnDonation = document.getElementById('btn-donation')
btnDonation.addEventListener('click', function () {
    btnDonation.classList.add('bg-[#B4F461]')
    btnHistory.classList.remove('bg-[#B4F461]')

    const mainContent = document.getElementById('main-content')
    mainContent.classList.remove('hidden')

    const historySection = document.getElementById('history-section')
    historySection.classList.add('hidden')

    const feniHistory = document.getElementById('feni-history')
    feniHistory.classList.add('hidden')
})