const btn_close = docuemnt.querySelector("#close");
const cont_cookies = document.querySelector(".cookie-box");
const modal = docuemnt.querySelector(".modal");
const ver_pol = document.querySelector("#ver_pol");
const c_modal = document.querySelector("#close_modal");
const ac_cookie = document.querySelector("#aceptar_cookie");
const ac_cookie2 = document.querySelector("#aceptar_modal");

(function comprobarCookies(){
if (localStorage.cookies1 == 'true'){
    cont_cookies.style.bottom = '-220px'
    
   
}


})()

function aceptarCookies(){
    localStorage.cookies1 = "true"
    cont_cookies.style.bottom = '-200px'

    let expire = new data();
    expire =new data(expire.getTime() + 776);
    document.cookies 'cookies1=aceptada; expire='+expire

}
ac_cookie.addEventListener('click', () => { 
    aceptarCookies()

})


 ac_cookie2.addEventListener('click', () => {
     aceptarCookies();
     modal.style.visibility ='hidden'
     modal.style.opacity = 0
 })

