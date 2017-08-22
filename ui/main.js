console.log('Loaded!');
// make changes on main-text div

var element=document.getElementById('main-text');

element.innerHTML='MADI';

var img=document.getElementById('madi');
 
img.onclick = function() {
   img.style.marginLeft="100px"; 
};