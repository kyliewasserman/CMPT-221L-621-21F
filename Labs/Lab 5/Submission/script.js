//h1 text change
document.getElementsByTagName('body')[0].getElementsByTagName('section')[0].getElementsByClassName('title')[0].innerHTML='Lab 5';

//description change to name
document.getElementsByTagName('body')[0].getElementsByTagName('section')[0].getElementsByTagName('p')[1].innerHTML='Kylie Wasserman';

//make the text less bossy
document.getElementsByTagName('body')[0].getElementsByTagName('section')[0].getElementsByTagName('h3')[0].innerHTML='Pretty please do these things ... :(';

//make the first li to be blue
const zero = document.getElementsByTagName('body')[0].getElementsByTagName('section')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[0];
zero.style.color = "blue";

//make the second li to be a background color of cream (cream isn't a set option so I did beige)
const one = document.getElementsByTagName('body')[0].getElementsByTagName('section')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[1];
one.style.backgroundColor = "beige";

//change the background of the whole thing to grey
document.getElementsByTagName('body')[0].style.background = "grey";

//make the fourth li item all uppercase
const three = document.getElementsByTagName('body')[0].getElementsByTagName('section')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[3];
three.style.textTransform = "uppercase";

//change the last li to say the name of the class
const four = document.getElementsByTagName('body')[0].getElementsByTagName('section')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[4];
four.setAttribute("class", "title");