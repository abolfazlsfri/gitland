//overlay login
var overlay = document.getElementById('f1')
var body = document.querySelector('body');
function over() {
    overlay.style.display = 'flex';
    body.style.overflow = 'hidden'
}
function end() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
    body.style.overflow = 'auto';
}
// hamburger menu
var MobileMenuButton = document.getElementsByClassName('hambur');
var MoblieMenuOverlay = document.querySelector('.mobileMenu')
var MoblieMenuReturnOverlay = document.getElementById('f5');

MobileMenuButton[0].onclick = function() {MobileMenu()}
MoblieMenuReturnOverlay.onclick = function() {MobileMenuReturn()}

function MobileMenu() {
    MoblieMenuOverlay.style.display = 'flex';
}
function MobileMenuReturn(){
    MoblieMenuOverlay.style.display = 'none';
}

// taghire safhe be aza
var azaPage = document.getElementById('aza1') ;
var Wellcome = document.getElementsByClassName('title');
var azaContent = document.getElementsByClassName('azaSection');

azaPage.onclick = function() {Azachange()};

function Azachange() {
    Wellcome[0].className = 'title2';
    azaContent[0].className = 'azaSection2';
}

var logBut = document.getElementById('checkEngine');
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
var modal = document.querySelector('.modal')
var validatemodalInner = "login shodid"
var wrongModalInner = "koskesh kii ?"
logBut.onclick = function() {dataVarifiction()} 

var loginbut = document.getElementById('dokme')

function dataVarifiction(){
    let usernameValue = usernameInput.value
    let passwordValue = passwordInput.value
    
    if (passwordValue.length > 8 || usernameValue.length > 8)
        {
            modal.innerHTML = validatemodalInner;
            modal.style.display = 'flex';
            loginbut.style.opacity = '0'
            loginbut.disabled = true ;
           
        }
        else {
            modal.innerHTML = wrongModalInner ;
            modal.style.display = 'flex';
        }

     setTimeout(function(){
         modal.style.display = 'none'
     },3000)
}


var userError = document.querySelector('.usernameValidation');
var passError = document.querySelector('.passwordValidation');



function userValidation(){
    if (usernameInput.value.length <= 12)
        {
            userError.style.display = 'block'
            userError.style.color = 'red'
            userError.style.fontSize = '12px'
        }
        else {
            userError.style.display = 'none'

        }
}
function passValidation(){
    if (passwordInput.value.length <= 8)
        {
            passError.style.display = 'block'
        }
        else {
            passError.style.display = 'none'
        }
    
}
