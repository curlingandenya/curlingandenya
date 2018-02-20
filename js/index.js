function videoSize() {
  var $windowHeight = $(window).height();
  var $videoHeight = $(".video").outerHeight();
	var $scale = $windowHeight / $videoHeight;
  
  if ($videoHeight <= $windowHeight) {
    $(".video").css({
      "-webkit-transform" : "scale("+$scale+") translateY(-50%)",
			"transform" : "scale("+$scale+") translateY(-50%)"
		});
	};
}
function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
$(window).on('load resize',function(){
	if (!isMobile()) {
	  	videoSize(); 
	}
});