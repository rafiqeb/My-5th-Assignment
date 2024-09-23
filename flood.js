

const donateNow = document.getElementById('donate-now');

donateNow.addEventListener('click', function(){
    
    const donateInput = parseFloat(document.getElementById('donate-input').value);

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
// const btnHistory = document.getElementById('btn-history')
// btnHistory.addEventListener('click', function(){
    
//     const historyContent = document.getElementById('history-content')
//     const newElement = document.createElement('div')

//     newElement.innerHTML=`
//     <h3 class="font-bold text-xl"><span>{donateInput}</span> Taka is Donated for Flood at Noakhali, Bangladesh</h3>
//     <p>time zone</p>
//     `
//     historyContent.appendChild(newElement);
// })