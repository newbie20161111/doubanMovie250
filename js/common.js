/******detail.js评论功能*******/
var comment = function(){
	$(".textArea").on("change",function(){
		if($(this).val()){
			$(".commentBtn").removeAttr("disabled");
		}
	})
}