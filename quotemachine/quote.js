// api that will provide quotes
$(document).ready(function() {
  $.getJSON("http://quotesondesign.com/wp-json/posts? filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(data) {
    // pull in data
    const quote = data.shift();
    // grab quote metadata
      // grab the title
      // grab the content
    // query the dom
    let quoteContainer = document.querySelector('.quote-container');
    let authorContainer = document.querySelector('.author-container');

  });
});



// insert data into element on the dom

// data.content

//

// new quote button will wipe out old quote replace with new quote
