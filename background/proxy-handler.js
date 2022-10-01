// Initialize the list of blocked hosts
let blockedHosts = ["example.org"];

// Managed the proxy

// Listen for a request to open a webpage
browser.proxy.onRequest.addListener(handleProxyRequest, {urls: ["<all_urls>"]});

// On the request to open a webpage
function handleProxyRequest(requestInfo) {
	// Read the web address of the page to be visited 
  const url = new URL(requestInfo.url);
	// Determine whether the domain in the web address is on the blocked hosts list
  if (blockedHosts.indexOf(url.hostname) != -1) {
		// Write details of the proxied host to the console and return the proxy address
    console.log(`Proxying: ${url.hostname}`);
    return {type: "http", host: "127.0.0.1", port: 65535};
  }
	// Return instructions to open the requested webpage
  return {type: "direct"};
}

// Log any errors from the proxy script
browser.proxy.onError.addListener(error => {
  console.error(`Proxy error: ${error.message}`);
});

