$("document").ready(function() {

    var animalArray = ["cats", "dogs", "snakes", "beaver", "bear", "tiger"];

    createBtns();

    function createBtns() {

        for (var i = 0; i < animalArray.length; i++) {

            animalArray;

            var animalSearch = animalArray[i];

            var animalBtn = $("<button>");

            animalBtn.attr("data-animal", animalArray[i]);

            animalBtn.text(animalArray[i]);

            $("#buttonContain").append(animalBtn);


        };
    };


var input = $(":button").add


    $('#buttonContain').on('click', "button", function() {
      

        console.log($(this).text());

        var clickname = $(this).text();

        showGiphy(clickname);


    });




    function showGiphy(buttonclick) {

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + buttonclick + "&api_key=dc6zaTOxFJmzC";

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function(response) {
            $("#gifs-appear-here").empty();

            for (var i = 0; i < 11; i++) {

                var results = response.data[i];

                var gifDiv = $("<div class='item'> <div id=" + [i]);

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



    $("#submit").click(function() {

        if ($('#animal-input').val() == '') {
            alert("You didn't type anything!");
        } else {

          
            var newAnimalName = $("#animal-input").val().trim();
        
            animalArray.push(newAnimalName);

            $("#animal-form").trigger("reset");
            $("#gifs-appear-here").empty();
            $("#buttonContain").empty();

            createBtns();

            showGiphy(newAnimalName);



        };

    });









});