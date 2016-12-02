$("document").ready(function() {  

	$("input").on("keydown",function search(e) {
    if(e.keyCode == 13) {
    	var newAnimal = $(this).val();
    	alert(newAnimal);

    }
});

//THIS KEYPRESS WILL TRIGGER OUR AJAX CALL

	
    	var newAnimal = $("#animal-input").val();
    	
    	
 

    


function createBtns (x){
	var animal = ["bird", "cat", x];
	


	for (var i = 0; i < animal.length; i++) {

		animal;

		
	    var animalBtn = $("<button>");

	    animalBtn.attr("data-animal", animal[i]);

	    animalBtn.text(animal[i]);

	    $("#animalButtons").after(animalBtn);



	    
		
}

var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + [i] + "&api_key=dc6zaTOxFJmzC";


$.ajax({ url: queryURL, method: 'GET' }).done(function(response) {
	        console.log(response);

	    });






	}
});