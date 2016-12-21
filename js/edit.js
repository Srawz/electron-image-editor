window.$ = window.jQuery = require('jquery');
require('../lib/html2canvas.js');
var FileSaver = require('file-saver');
var domtoimage = require('dom-to-image');

// editing image via css properties
function editImage() {

	var gs 		 = $("#gs").val();      // grayscale
	var blur 	 = $("#blur").val();    // blur
	var br 		 = $("#br").val();      // brightness
	var ct 		 = $("#ct").val();      // contrast
	var huer	 = $("#huer").val();    //hue-rotate
	var opacity      = $("#opacity").val(); //opacity
	var invert 	 = $("#invert").val();  //invert
	var saturate     = $("#saturate").val();//saturate
	var sepia 	 = $("#sepia").val();   //sepia

	var filter = 	'grayscale(' + gs+
			'%) blur(' + blur +
			'px) brightness(' + br +
			'%) contrast(' + ct +
			'%) hue-rotate(' + huer +
			'deg) opacity(' + opacity +
			'%) invert(' + invert +
			'%) saturate(' + saturate +
			'%) sepia(' + sepia + '%)';

	$("#imageContainer img").css("filter", filter);
	$("#imageContainer img").css("-webkit-filter", filter);

}


	//When sliders change image will be updated via editImage() function
	$("input[type=range]").change(editImage).mousemove(editImage);


	// Reset sliders back to their original values on press of 'reset'
	$('#imageEditor').on('reset', function () {
		setTimeout(function() {
			editImage();
		},0);
	});

	$(".save").click(function(){
		domtoimage.toJpeg(document.getElementById('123'), { quality: 0.95 })
    .then(function (dataUrl) {
				
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });

	});
