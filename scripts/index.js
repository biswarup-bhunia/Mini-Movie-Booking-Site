let btn = document.getElementById('add_to_wallet');
    let wallet = document.getElementById('wallet');
    let amount = localStorage.getItem('amount')||0;
    wallet.innerText = amount;
    btn.onclick = () =>{
    let money = document.getElementById('amount').value;
    location.reload();
    if(amount){
    money = +(amount)+(+(money));
    wallet.innerText = money;
    localStorage.setItem('amount', money);
    }
    else{
    wallet.innerText = money;
    localStorage.setItem('amount', money);
    }
  };
