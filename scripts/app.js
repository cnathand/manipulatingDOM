// alert();
let backColor = 
[
    'color5',
    'color6',
    'color7'
];
let bgColor = 
[
    'color1',
    'color2',
    'color3'
];
let ranBackcolor = Math.floor(Math.random() * backColor.length);

let rancolor = Math.floor(Math.random() * bgColor.length);
let ranNum = (Math.floor(Math.random()* 11));


let changeBtn1 = document.getElementById('changeBtn1');
let changeBtn2 = document.getElementById('changeBtn2');
let changeBtn3 = document.getElementById('changeBtn3');
let changeBtn4 = document.getElementById('changeBtn4');
let changeBtn5 = document.getElementById('changeBtn5');
let changeBtn6 = document.getElementById('changeBtn6');
let changeBtn7 = document.getElementById('changeBtn7');
let changeBtn8 = document.getElementById('changeBtn8');
let changeBtn9 = document.getElementById('changeBtn9');
let changeBtn10 = document.getElementById('changeBtn10');

let changeMe1 = document.getElementById('changeMe1');
let changeMe2 = document.getElementById('changeMe2');
let changeMe3 = document.getElementById('changeMe3');
let changeMe4 = document.getElementById('changeMe4');
let changeMe5 = document.getElementById('changeMe5');
let changeMe6 = document.getElementById('changeMe6');
let changeMe7 = document.getElementById('changeMe7');
let changeMe8 = document.getElementById('changeMe8');
let changeMe9 = document.getElementById('changeMe9');
let changeMe10 = document.getElementById('changeMe10');

changeBtn1.addEventListener('click', function(event) {
    changeMe1.innerText = 'WOOOOO';
    changeMe1.className = 'color1 ' + 'barrelRoll';
});

changeBtn2.addEventListener('click', function(event) {
    changeMe2.className = bgColor[rancolor];   
});

changeBtn3.addEventListener('click', function(event) {
    changeMe3.innerText = ranNum;
    changeMe3.className = bgColor[rancolor] + ' rollerRight';
});
changeBtn4.addEventListener('click', function(event) {
    changeMe4.innerText = 'A lighthouse...';
    changeMe4.className = bgColor[rancolor] + ' wiggle';
});
changeBtn5.addEventListener('click', function(event){
    changeMe5.innerText = 'Theyre pretty close-knit...';
    changeMe5.className = zoomer;
});
changeBtn6.addEventListener('click', function(event){
    changeMe6.className = backColor[ranBackcolor];
});
changeBtn7.addEventListener('click', function(){
    changeMe7.className = 'fontChange ';
});
changeBtn8.addEventListener('click', function(){
    changeMe8.className = 'bigFont';
    changeMe8.innerText = 'THANK YOU!!!';
});
changeBtn9.addEventListener('click', function(){
    changeMe9.className = 'color-black';
    changeMe9.innerText = 'SURPRISE!!'
});
changeBtn10.addEventListener('click', function(){
    changeMe10.className = 'surprise-btn';
});