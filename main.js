/*   Variables      */
$burger= document.getElementById("burger");
$close= document.getElementById('close');



function slideOutNav(){
    console.log('burger listener')
    document.getElementById("sdNav").style.width = "60px";


};
// listeners

//listener on burger
function hideNav() {
    document.getElementById("sdNav").style.width = "0px";
    
}

$burger.addEventListener('click', (event) => {
    if ($burger.style.width="0px"){
    slideOutNav();
    } /*else if ($burger.style.width="60px"){
        hideNav();
    };*/
    
});

// listener on close icon
$close.addEventListener('click', (event) => {

    hideNav();
    $burger.style.visibility="visible";
    $burger.style.width="30px";
});