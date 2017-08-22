console.log('Loaded!');
// make changes on main-text div

var element=document.getElementById('main-text');

element.innerHTML='MADI';

var img=document.getElementById('madi');

var marginLeft=0;
function moveRight(){
 marginLeft = marginLeft + 5;
 img.style.marginTop=marginLeft + "px";
}
 
img.onclick = function() {
    var interval = setInterval(moveRight,50);
};