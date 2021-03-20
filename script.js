const card = document.querySelector('.content');
const qouteButton = document.querySelector('.new-qoute-button');

const nameSimpson = document.createElement('h1');
const avatarSimpson = document.createElement('img');
const textSimpson = document.createElement('p');

let data = {};

card.appendChild(avatarSimpson);
card.appendChild(nameSimpson);
card.appendChild(textSimpson);

function takeApi(){
    const url = "https://simpsons-quotes-api.herokuapp.com/quotes"
    axios.get(url).then(res => data = res.data[0]).then(datas => updatequote(datas))
}

function updatequote(data){
    console.log(data);
    nameSimpson.innerText = data.character;
    avatarSimpson.src = data.image;
    textSimpson.innerText = data.quote;
}

takeApi();

qouteButton.addEventListener('click', ()=> {
    takeApi();
    
})