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

$(window).on('load resize',function(){
  if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
	 
  } else {
	  videoSize(); 
  }
  if (navigator.userAgent.match(/like Mac OS X/i)) {
      alert('Hi, you\'re browsing from an iOS device.');
  }
});