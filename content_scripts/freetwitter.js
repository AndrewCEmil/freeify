
(() => {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "freeify") {
      console.log('received freeify message');
      document.documentElement.style.overflow = "scroll";
      document.getElementById("layers").remove();
      console.log('updated');
    }
  });
  console.log('freetwitter init complete');
})();

