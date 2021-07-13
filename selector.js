
const bt= document.querySelector('.nav d-flex');
const cont = document.querySelector('.Jumbotron');
const font = document.querySelector('.font-italic')

function addLink(){
   bt.<li> </li> 
};


function changeColor() {
cont.style.color = 'red'
  };

function changeBackground(){
    cont.style.background = 'black'
};

var contador = 1 ;
function removeLinks(){
  if (contador == 1){
        $('.font-italic').animate({
            display: 'block'
        });
contador = 0 ;
       } else {
           contador = 1 ;
 $('.font-italic').animate({
            display: 'none'
        });

       }
}

function changeSize() {
cont.style.witdh = '500px'
  };
  var search = 1 ;
function removeLinks(){
  if (search == 1){
        $('').animate({
            display: 'block'
        });
contador = 0 ;
       } else {
           contador = 1 ;
 $('nav').animate({
            display: 'none'
        });

       }
}







