$("document").ready(function() {


    window.animalArray = ["cats", "dogs", "snakes"];

    $("#submit").click(function() {


        var newAnimalName = $("#animal-input").val();
        // var newAnimalBtn = $('<input type="button"/>');
        // $(newAnimalBtn).val(newAnimalName);
        // newAnimalBtn.appendTo($("body"));
        $("form").trigger("reset");
        animalArray.push(newAnimalName);
        createBtns();

    });



    function createBtns() {



        animalArray;
        $("#buttonContain").html("");

        for (var i = 0; i < animalArray.length; i++) {

            var animalSearch = animalArray[i];

            var animalBtn = $("<button>");

            animalBtn.attr("data-animal", animalArray[i]);

            animalBtn.text(animalArray[i]);

            $("#buttonContain").append(animalBtn);

            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animalSearch + "&api_key=dc6zaTOxFJmzC";

            $.ajax({
                url: queryURL,
                method: 'GET'
            }).done(function(response) {

                console.log(response);

                var results = response.data;

                var gifDiv = $("<div class='item'> <div id='imgAnimate'>");

                var animalImage = $("<img>");

                animalImage.attr("src", results[i].images.fixed_height.url);
                

                gifDiv.append(animalImage);

                $("#gifs-appear-here").prepend(gifDiv);


            });



                $("#imgAnimate").hover(
                    function() {
                        $(this).attr("src", results[i].images.fixed_height.url);
                    },
                    function() {
                        $(this).attr("src", results[i].images.fixed_height_still.url);
                    });













        };









    }
});