$("document").ready(function() {


    var animalArray = ["cats", "dogs", "snakes", "beaver", "bear", "tiger"];

    $("#submit").click(function() {

       if($('#animal-input').val() == ''){
        alert("You didn't type anything!");
        return;
        }

        $("#gifs-appear-here").empty();
        $("#buttonContain").empty();

        var newAnimalName = $("#animal-input").val().trim();
        // var newAnimalBtn = $('<input type="button"/>');
        // $(newAnimalBtn).val(newAnimalName);
        // newAnimalBtn.appendTo($("body"));
        $("form").trigger("reset");
        animalArray.push(newAnimalName);
        createBtns();

    });

createBtns();


    function createBtns() {

        
        for (var i = 0; i < animalArray.length; i++) {

            animalArray;

            var animalSearch = animalArray[i];

            var animalBtn = $("<button>");

            animalBtn.attr("data-animal", animalArray[i]);

            animalBtn.text(animalArray[i]);

            $("#buttonContain").append(animalBtn);

            queryit(animalArray[i]);


            };


        };



     function queryit (animalSearch){

                var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animalSearch + "&api_key=dc6zaTOxFJmzC";

                $.ajax({
                    url: queryURL,
                    method: 'GET'
                }).done(function(response) {

                    console.log(response);

                    for (var i = 0; i < 3; i++) {

                       
                       

                        var results = response.data[i];

                        var gifDiv = $("<div class='item'> <div id='imgAnimate'>");

                        var animalImage = $("<img>");

                        animalImage.attr("src", results.images.fixed_height.url); 

                        gifDiv.append(animalImage);

                        $("#gifs-appear-here").append(gifDiv);

                        var rating = response.data[i].rating;

                        var ratingDiv = $("<p>").text("Rating: " + rating);

                        $("#gifs-appear-here").append(ratingDiv);


          
                  };


                });

    };













        









    
});