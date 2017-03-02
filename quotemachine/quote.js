// api that will provide quotes
$(document).ready(getNewQuote);

function getNewQuote() {
  console.log('Running getNewQuote');
  $.getJSON("http://quotesondesign.com/wp-json/posts? filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(data) {
    // pull in data
    const quote = data.shift();
    // console.log(quote);
    // grab quote metadata
    // grab the title
    var title = quote.title;
    // console.log(title);
    // grab the content
    var content = quote.content;
    // query the dom
    let quoteContainer = document.querySelector('.quote-container');
    let authorContainer = document.querySelector('.author-container');


    // insert data into element on the dom
    quoteContainer.innerHTML = content;
    authorContainer.textContent = title;
  });
};


// new quote button will wipe out old quote replace with new quote
    var newQuote = document.querySelector('.new-quote');
    newQuote.addEventListener('click', getNewQuote);
