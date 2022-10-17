let wallet = document.getElementById('wallet');
  let amount = localStorage.getItem('amount');

  wallet.innerText = amount;

  let movieDataLS = JSON.parse(localStorage.getItem('movie'));
  let movieTab = document.getElementById('movie');
  let append = (data) => {
    let title = document.createElement('h1');
    title.innerText = data.Title;

    let image = document.createElement('img');

    image.src = data.Poster;
    movieTab.append(title, image);


  }
  append(movieDataLS);

  let conbtn = document.getElementById('confirm');
  conbtn.onclick = () => {
    let seats = document.getElementById('number_of_seats').value;
    let total = 100*(+seats);
    if(total > +amount){
      alert('Inefficient Balance!');
    }
    else{
      alert('Booking Successful!');
      amount = +amount - total;
      wallet.innerText = amount;
      localStorage.setItem('amount', amount);
      window.location.href = 'index.html';
    }

    

  };