

$(document).ready(function() {
	$("#test").jqScribble();
	var canvas = $('#test');
	var ctx = canvas[0].getContext("2d");
	ctx.beginPath();
	ctx.rect(0, 0, canvas[0].width, canvas[0].height);
	ctx.fillStyle = "#C9F259";
	ctx.fill();
});



function save(){			
	var canvas = $('#test');
	var link = document.createElement('a');

	link.setAttribute("id", "file");
    link.innerHTML = 'download image';
	link.addEventListener('click', function(ev) {		
    link.href = canvas[0].toDataURL();
    link.download = "mySignature.png";
	}, false);

	document.body.appendChild(link);
	$('#file').get(0).click();
}

function white(){
	var canvas = $('#test');
	var ctx = canvas[0].getContext("2d");
	ctx.beginPath();
	ctx.rect(0, 0, canvas[0].width, canvas[0].height);
	ctx.fillStyle = "white";
	ctx.fill();
}


function addImage(){
	var img = prompt("Enter the URL of the image.");
	if(img !== '')$("#test").data("jqScribble").update({backgroundImage: img});
}
