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
// var azaPage = document.getElementById('aza1') ;
// var Wellcome = document.getElementsByClassName('title');
// var azaContent = document.getElementsByClassName('azaSection');

// azaPage.onclick = function() {Azachange()};

// function Azachange() {
//     Wellcome[0].className = 'title2';
//     azaContent[0].className = 'azaSection2';
// }

// var logBut = document.getElementById('checkEngine');
// let usernameInput = document.getElementById('username');
// let passwordInput = document.getElementById('password');
// var modal = document.querySelector('.modal')
// var validatemodalInner = "login shodid"
// var wrongModalInner = "koskesh kii ?"
// logBut.onclick = function() {dataVarifiction()} 

// var loginbut = document.getElementById('dokme')

// function dataVarifiction(){
//     let usernameValue = usernameInput.value
//     let passwordValue = passwordInput.value
    
//     if (passwordValue.length > 8 || usernameValue.length > 8)
//         {
//             modal.innerHTML = validatemodalInner;
//             modal.style.display = 'flex';
//             loginbut.style.opacity = '0'
//             loginbut.disabled = true ;
           
//         }
//         else {
//             modal.innerHTML = wrongModalInner ;
//             modal.style.display = 'flex';
//         }

//      setTimeout(function(){
//          modal.style.display = 'none'
//      },3000)
// }

var mainReg = document.getElementsByClassName('mainreg');
var secReg = document.getElementsByClassName('secondreg')
var saveIcon = document.getElementsByClassName('contactUs');
var counter = 0;

    saveIcon[0].onclick = function() {if (counter == 0)
        {
            AboutLayer()
        }
        else {
            AboutCloseLayer()
        }
    }

console.log(counter)
function AboutLayer() {
    mainReg[0].style.animation = 'arrive 2s forwards ease-in-out'
    secReg[0].style.opacity = '0.2'
    saveIcon[0].style.animation = 'arriveSavebut 2s forwards ease-in-out'
    counter++
}

function AboutCloseLayer() {
    mainReg[0].style.animation = 'out 2s forwards ease-in-out'
    secReg[0].style.opacity = '1'
    saveIcon[0].style.animation = 'outSavebut 2s forwards ease-in-out'
    counter--
}


