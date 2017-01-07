//check off specific Todos By Clicking
$("ul").on("click", "li", function(){
	//if li is gray
	$(this).toggleClass("completed");
	
});

//click on x to delete to do 
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	event.stopPropagation();

});

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var todotext = $(this).val();
		$(this).val("");

	//create a new li and add to ul 
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>");
	}

});

$(".fa-plus").click(function() {
	$("input[type = 'text']").fadeToggle();
})