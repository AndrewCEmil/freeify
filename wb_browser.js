const networkFilters = {
    urls: [ "wss://*/game.php*", "ws://*/*"]
};

// Might want to also look at
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/ondata

browser.webRequest.onBeforeRequest.addListener((details) => {
    const { tabId, requestId } = details;
    // do stuff here
  console.log('inside details!');
  console.log('url');
  console.log(details.url);
  console.log('frameId');
  console.log(details.frameId);
  console.log('type');
  console.log(details.type);

  const filter = browser.webRequest.filterResponseData(details.requestId);
  filter.ondata = (event) => {
    console.log('handling inside filter data!');
    console.log(filter.data.byteLength);
    filter.write(event.data);
  }
  filter.onstop = (event) => {
    filter.close();
  }
}, networkFilters);

