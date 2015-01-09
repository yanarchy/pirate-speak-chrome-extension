
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript(null, { file: "../jquery.js" }, function() {
  chrome.tabs.executeScript(null, { file: "pirates.html" });
  chrome.tabs.executeScript(null, { file: "pirates.js" });
  });
});

// function fetch_feed(url, callback) {
//   var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function(data) {
//       if (xhr.readyState == 4) {
//         if (xhr.status == 200) {
//           var data = xhr.responseText;
//           callback(data);
//         } else {
//           callback(null);
//         }
//       }
//     }
//   // Note that any URL fetched here must be matched by a 
//   // permission in the manifest.json file!
//   xhr.open('GET', url, true);
//   xhr.send();
// }
