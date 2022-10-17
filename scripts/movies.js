let wallet = document.getElementById('wallet');
  let amount = localStorage.getItem('amount');
  wallet.innerText = amount;

  let id;
  let search = document.getElementById('search');
  search.oninput = () =>{
    debouncing(main , 1500);
  }

  let getData = async () =>{
    let query = search.value;
    const url = `https://www.omdbapi.com/?apikey=f14e2ffd&s=${query}`

    let res = await fetch(url);

    let data = await res.json();

    return (data.Search);
  }

  let append = (data) => {
    let container = document.getElementById('movies');
    container.innerHTML = null;
    data.forEach(function(el){
      let div = document.createElement('div');
      div.setAttribute('class', 'movie_tab');
      let image = document.createElement('img');
      image.src = el.Poster;
      let title = document.createElement('p');
      title.innerText = el.Title;
      let btn = document.createElement('button');
      btn.setAttribute('class', 'book_now');
      btn.innerText = "Book Now";
      btn.onclick = () => {
        localStorage.setItem('movie',JSON.stringify(el));
        window.location.href = 'checkout.html';
      }
      div.append(image,title,btn);
      container.append(div);
    })
  };

  let main =async () => {
      let movData = await getData();
      append(movData);
    }

  let debouncing = (functn , dealy) => {
    if(id){
      clearInterval(id);
    }
    id = setTimeout(()=>{
      functn();
    },dealy);

  };

