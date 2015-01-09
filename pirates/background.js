chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
  chrome.tabs.executeScript(null, { file: "pirates.html" });
  chrome.tabs.executeScript(null, { file: "pirates.js" });
  });
});