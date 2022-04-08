var modalBtns = document.querySelectorAll('.modal-able');

modalBtns.forEach(function(btn){
    btn.onclick = function(){
    var modal = btn.getAttribute('data-modal');

    document.getElementById(modal).style.display = "flex";
  };
});   

var closeBtns = document.querySelectorAll(".modal__close");

closeBtns.forEach(function(btn){
btn.onclick = function(){
  var modal = (btn.closest(".modal-holder").style.display = "none");
  };
});

document.addEventListener('mousemove', parallax);
function parallax(e){
  this.querySelectorAll('.layer').forEach(layer =>{
    var speed = layer.getAttribute('data-speed');
    var x     = (window.innerWidth - e.pageX * speed)/100;
    var y     = (window.innerWidth - e.pageY * speed)/100;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`

  });
}