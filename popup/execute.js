/**
 * CSS to hide everything on the page,
 * except for elements that have the "beastify-image" class.
 */
const hidePage = `body > :not(.beastify-image) {
                    display: none;
                  }`;

/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
function listenForClicks() {
  document.addEventListener("click", (e) => {
    function freeify(tabs) {
			console.log('sending freeify message');
      browser.tabs.sendMessage(tabs[0].id, {
        command: "freeify",
        beastURL: 'something'
      });
    }

    /**
     * Just log the error to the console.
     */
    function reportError(error) {
      console.error(`Could not beastify: ${error}`);
    }

    if (e.target.classList.contains("freeify")) {
      browser.tabs
        .query({ active: true, currentWindow: true })
        .then(freeify)
        .catch(reportError);
    }
  });
}

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {

  //document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  document.getElementById("error-text").innerHtml = `Error: ${error}`;
  document.getElementById("error-text").classList.remove("hidden");
  console.error(`Error: ${error}`);
  console.error(`Failed to execute beastify content script: ${error.message}`);
}

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
browser.tabs
  .executeScript({ file: "/content_scripts/freetwitter.js" })
  .then(listenForClicks)
  .catch(reportExecuteScriptError);

