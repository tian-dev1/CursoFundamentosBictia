var card = {
    "img": "https://image.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg",
    "title": "Cats are Awesome",
    "subtitle": "Cats are sooooo cute :3"
};

var card1 = {
    "img": "https://image.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg",
    "title": "Cats are Awesome 1",
    "subtitle": "Cats are sooooo cute 1 :3"
};

var card2 = {
    "img": "https://image.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg",
    "title": "Cats are Awesome 2",
    "subtitle": "Cats are sooooo cute 2 :3"
};

var card3 = {
    "img": "https://static.lared.cl/wp-content/uploads/2016/10/portada-3.jpg",
    "title": "Cats are Awesome 3",
    "subtitle": "Cats are sooooo cute 3 :3"
}; 
var card4 = {
    "img": "https://image.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg",
    "title": "Cats are Awesome",
    "subtitle": "Cats are sooooo cute :3"
};

var card5 = {
    "img": "https://image.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg",
    "title": "Cats are Awesome 1",
    "subtitle": "Cats are sooooo cute 1 :3"
};

var card6 = {
    "img": "https://image.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg",
    "title": "Cats are Awesome 2",
    "subtitle": "Cats are sooooo cute 2 :3"
};

var card7 = {
    "img": "https://static.lared.cl/wp-content/uploads/2016/10/portada-3.jpg",
    "title": "Cats are Awesome 3",
    "subtitle": "Cats are sooooo cute 3 :3"
}; 

var cards = [card,card1,card2,card3,card4,card5,card6,card7];

var div = document.getElementById('cards');

var content = '';
for (var i = 0; i < cards.length; i++){
    console.log(cards[i]);
    content += '<div class="card col-3">'
                    + '<img src="' + cards[i].img + '">' // Cards[0] = card
                    + '<h1>' + cards[i].title + '</h3>'
                    + '<p>' + cards[i].subtitle + '</p>'
                    + "</div>";
}

console.log(content);
div.innerHTML = '<div class="row">' +content + '</div>'; 
