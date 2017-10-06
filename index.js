let modal = document.getElementById('theModal');
let modalClose = document.getElementById('modalClose');


document.getElementById('submit').addEventListener('click', function(e){
	e.preventDefault();
	document.getElementById('modal-form').innerHTML = "<h1>That doesn't matter anymore.</h1>";
});

document.getElementById('submit-page').addEventListener('click', function(e){
	e.preventDefault();
	document.getElementById('page-form').innerHTML = "<h1>We will be abducting you shortly!</h1>";
});

modalClose.addEventListener('click', function() {
	modal.style.display = 'none';
});


setTimeout(function(){
  modal.style.display = 'block';
}, 3000);

