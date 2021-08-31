

      /*
        JS Exercises
        EX11) Write a function to add a new link into the navbar
        EX12) Write a function to change the color of the main title
        EX13) Write a function to change the background of the jumbotron
        EX14) Write a function to remove all the links under "Elsewhere"
        EX15) Write a function to change the column size for heading in jumbotron
        EX16) Write a function to remove the "Search" magnifying glass icon
        EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
        EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
        EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
        EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
    */
 



const bt= document.querySelector('.nav d-flex');
const cont = document.querySelector('.Jumbotron');
const font = document.querySelector('.font-italic')

function addLink(){
   bt.innerHTML = "<a class="p-2 text-muted" href="#">World</a>"
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







