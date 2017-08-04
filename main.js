$(document).ready(function() {

    var get_quote = function() {
        $.getJSON("https://got-quotes.herokuapp.com/quotes", function(json) {

        var quote = "";
        quote += json.quote;
        quote += "<br><br>- ";
        quote += "<cite class='character'>";
        quote += json.character;
        quote += "</cite>";
        
        $(".quote").html(quote);
        
        var tweet = "";
        tweet += "<a href='https://twitter.com/intent/tweet?hashtags=quotes&text=\"";
        tweet += json.quote;
        tweet += '\"%20'
        tweet += json.character
        tweet += "' target='_blank'><button class='btn twitter'><span class='fa fa-twitter'></span></button></a>";

        $(".btn-twitter").html(tweet);
      });
    };
    get_quote();

    $("#getQuote").on("click", get_quote);
  });
