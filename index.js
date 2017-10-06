// let modalButton = document.getElementById('showModal');
let modal = document.getElementById('theModal');
let modalClose = document.getElementById('modalClose');

// modalButton.addEventListener('click', function() {
// 	modal.style.display = 'block';
// });

modalClose.addEventListener('click', function() {
	modal.style.display = 'none';
});


setTimeout(function(){
  modal.style.display = 'block';
}, 5000);

