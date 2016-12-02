$("document").ready(function() {





    $("body").on("keypress", function search(e) {
        if (e.keyCode == 13) {

            var newAnimalName = $(this).val();
            var newAnimalBtn = $('<input type="button"/>');
            $(newAnimalBtn).val("newAnimalName");
            newAnimalBtn.appendTo($("body"));

              
        }
    });


   

    function createBtns() {

        animal = ["dog", "cat"]

        for (var i = 0; i < animal.length; i++) {


            var animalBtn = $("<button>");

            animalBtn.attr("data-animal", animal[i]);

            animalBtn.text(animal[i]);

            $("#animalButtons").after(animalBtn);





        }

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + [i] + "&api_key=dc6zaTOxFJmzC";


        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function(response) {
            console.log(response);

        });






    }
});