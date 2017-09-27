function initiate()
{
	var elem = document.getElementById('canvas');
	var canvas = elem.getContext('2d');
	
	
	canvas.fillStyle = "#4286f4";
    canvas.strokeStyle = "#900";
	
	
	canvas.strokeRect(100, 100, 120, 120);
    canvas.fillRect(110, 110, 100, 100);
    canvas.clearRect(130, 130, 30, 30);
	
	
	canvas.moveTo(230, 100);
    canvas.lineTo(230, 220);
    canvas.lineTo(400, 220);
    canvas.closePath();
	canvas.stroke();
	
	canvas.font = "bold 20px segoe UI, sans-serif";
    canvas.textAlign = "start";
    canvas.textBaseline = "bottom";
    var message = "Epski Canvas";
    canvas.strokeText(message, 169, 246);
    var textSize = canvas.measureText(message);
	
	canvas.font = "bold 20px segoe UI, sans-serif";
    canvas.textAlign = "start";
    canvas.textBaseline = "bottom";
    var message = "Epski Canvas";
    canvas.fillText(message, 170, 245);
    var textSize = canvas.measureText(message);
	
	
	
}

addEventListener("load", initiate);