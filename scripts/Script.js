function () {
	var yesButton = ("#yesbutton");
	var theModal = ("#themodal");
	var progress = ("#doitprogress");
	
	yesButton.click(function () {
		yesButton.button("loading");
		
		var counter = 0;
		varcountDown = function () {
			counter++;
			if (counter == 11) {
				yesButton.button("reset");
				theModal.modal("hide");
			}
			else {
				progress.width(counter * 10 + "%");
				setTimeout(countDown, 500);
			}
		};
		setTimeout(countDown, 500);
   };
};