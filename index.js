// let modalButton = document.getElementById('showModal');
let modal = document.getElementById('theModal');
let modalClose = document.getElementById('modalClose');

// modalButton.addEventListener('click', function() {
// 	modal.style.display = 'block';
// });

document.getElementById('submit').addEventListener('click', function(e){
	e.preventDefault();
	document.getElementById('modal-form').innerHTML = "<h1>That doesn't matter anymore.</h1>";
})

modalClose.addEventListener('click', function() {
	modal.style.display = 'none';
});


setTimeout(function(){
  modal.style.display = 'block';
}, 5000);

