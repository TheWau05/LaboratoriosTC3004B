function Validate() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('pass').value;
		
	if (username === "" || username === null) {
		Intensify($('#userLabel'));
					return false;
  }
  
  if (password === "" || password === null) {
			 Intensify($('#passLabel'));
				return false;
  }
}

function Intensify(intense) {
	intense.addClass('animated shakeit').delay(6000).queue(function(){
					intense.removeClass('animated shakeit').dequeue();
				});
}

function Clicked() {
	$('button').addClass('clicked').delay(200).queue(function(){
		$('button').removeClass('clicked').dequeue();
	});
}

var submit = document.getElementById('submit');
submit.addEventListener('click', Clicked);
submit.addEventListener('click', Validate);