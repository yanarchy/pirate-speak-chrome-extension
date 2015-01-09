$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  // $('p')
    var words = $('p').text().split(" ");
    $('p').text("");
    $('p').html('');
    for (var i = 0; i < words.length; i++) {
      $('p').append('<span>' + " " + words[i] + '</span>')
    }
  


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second
  setInterval(function() {

  var colors = ["blue", "green", "red", "purple"]
  $('span').each(function(ind, word) {
    $(word).css({'color': colors[Math.floor(Math.random() * colors.length + 1)]})
  })
}, 1000);
  // TODO: your code here!

});