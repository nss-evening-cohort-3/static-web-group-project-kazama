//create product array
//name description price URL
var chips = [
  queso = {
    name: "Bull's Milk Queso",
    description: "a description will go here",
    url: "img/bullsqueso.jpg",
    price: 12.49
  },
  salsaPurse = {
    name: "Salsa Purse",
    description: "an exciting description goes here",
    url: "img/purse.jpg",
    price: 42.99
  },
  guac = {
    name: "Table-Side, Spoon-Fed Quacamole",
    description: "you need more description than that",
    url: "img/guac.jpg",
    price: 1.54
  }
];
var burrita = [
  kitchenLeavings = {
    name: "Smoked Kitchen Leavings",
    description: "Yummy!",
    url: "img/kitchen-waste.jpg",
    price: 32.78
  },
  blackRice = {
    name: "Black Rice",
    description: "Our finest selection. Queso not included.",
    url: "img/blackrice.jpg",
    price: 7.86
  },
  refriedBeans = {
    name: "Refried Coffee Beans",
    description: "another clever description",
    url: "img/refried-coffee.jpg",
    price: 5.77
  },
  tortSoup = {
    name: "Vietnamese Style Tortilla Soup Dressing",
    description: "Ultra-spicy, ultra-sexy",
    url: "img/tortillasoup.jpg",
    price: 9.99
  },
  pizzaRoll = {
    name: "Rolled Up Piece of Pizza",
    description: "Why not?",
    url: "img/totinosrito.jpg",
    price: 3.88
  },
  greenTomatillo = {
    name: "Fried Green Tomatillos",
    description: "So Southern, and artisinal",
    url: "img/tomatillo.jpg",
    price: 3.44
  }
];
//ittirate thru array
//append to the DOM
//repeat for chips
for (var i = 0; i < burrita.length; i++) {
  var productElement = document.getElementById("burrita");
  productElement.innerHTML += "<article>" + "<img src=" + '"' + burrita[i].url +
    '"' + ">" + "<h3>" + burrita[i].name + "</h3>" + "<p>" + burrita[i].description +
    "</p>" + "<p>" + burrita[i].price + "</p>" + "</article>";
}
for (var i = 0; i < chips.length; i++) {
  var productElement = document.getElementById("chips");
  productElement.innerHTML += "<article>" + "<img src=" + '"' + chips[i].url +
    '"' + ">" + "<h3>" + chips[i].name + "</h3>" + "<p>" + chips[i].description +
    "</p>" + "<p>" + chips[i].price + "</p>" + "</article>";
}
//add CSS thru JS