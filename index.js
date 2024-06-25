function getRandomDiceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

//function sort( )

$( "h1" ).on( "click", function() {
    $( this ).slideUp();
  } );
// Event listener for the 'roll' button
$(document).ready(function() {
    $("#roll").on("click", function() {
        var sum = 0;
        var count = 0;
        //get the id of the h4 for the d6 rolls
        var children = $("[id^=stat]").children();
        rolls = [getRandomDiceRoll(), getRandomDiceRoll(), getRandomDiceRoll(), getRandomDiceRoll()];
        $(children).each(function() { 
            
            rolls.sort((a, b) => a - b);
            // Set the text to a random number between 1 and 6
            $(this).text(rolls[count]);
            count += 1;
           
            if (count == 4){
                //collect sums
                sum = rolls[1] + rolls[2] + rolls[3];
                $(this).parent().siblings(".sums").text(sum);
                sum = 0;
                count = 0;
                rolls = [getRandomDiceRoll(), getRandomDiceRoll(), getRandomDiceRoll(), getRandomDiceRoll()];
            };
        });



    });
});