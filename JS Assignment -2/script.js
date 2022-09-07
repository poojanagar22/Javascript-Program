$(document).ready(function() {
	$('.myButton').click(function() {
		$(".myresults").html("");
    $(':input').each(function(index){
			if($(this).val() == "") {
				$('span').show();
			} else {
    		//console.log($(this));
    		//$("#myresults").append("<b>Input Type:</b> " + $(this).attr('type') + " ");
    			$(".myresults").append("<p>" + $(this).attr('name') + ": " + $(this).val() +"</p>"); 
          $("#country option:selected").text();
				$('form').addClass('hideELement');
			}
   		});
	});

});
