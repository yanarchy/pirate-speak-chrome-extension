chrome.webRequest.onCompleted.addListener( function( details ) {
  chrome.tabs.getSelected( null, function( tab ) {
    chrome.tabs.sendRequest( tab.id, {}, function(){} );
  } );
}, {
  urls: [
    "http://*/*"
  ]
});


function fetch_feed(url, callback) {
  var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(data) {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          var data = xhr.responseText;
          callback(data);
        } else {
          callback(null);
        }
      }
    }
  // Note that any URL fetched here must be matched by a 
  // permission in the manifest.json file!
  xhr.open('GET', url, true);
  xhr.send();
}