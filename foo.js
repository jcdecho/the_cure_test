jquery = require('jquery');

console.log("Hello");

var foo_fn = function(a_string) { console.log(a_string); };

foo_fn("Greetings");

jquery.getJSON("https://github.com/jcdecho/the_cure_test/data/playlist_query_1.json",
    foo_fn);





