$(document).ready(function() {

		function actieYYY() {
			var actie = $("#keuze").val(), 
			eerste = $('#eerste').val(), 
			tweede = $("#tweede").val();


			if (isNaN(eerste)) {
				return 'enter a number 1'
			}

			if (isNaN(tweede)) {
				return 'enter a number 2'
			}

			if (actie == "%" && tweede == 0) {
				return "you cannot divide with zero"
			}


			if (actie == "x") {
				return eerste * tweede;
			} else if (actie == "%") {
				return eerste / tweede;
			} else if (actie == "+") {
				return eerste + tweede;
			} else { 
				return eerste - tweede;
			}
		}

		$("#knop").click(function() {
	    	$("#uitkomst").val(actieYYY);
		});
});