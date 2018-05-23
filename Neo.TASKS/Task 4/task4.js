var myBox = document.getElementById('Box1');
var greenbutton = document.getElementById('green');
var redbutton = document.getElementById('red');


greenbutton.addEventListener('click', function(){
myBox.style.backgroundColor = 'green'	
})


redbutton.addEventListener('click', function(){
myBox.style.backgroundColor = 'red'	
})
