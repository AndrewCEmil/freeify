Installing/opening extension console:
* about:debugging

Need to open the browser console sometimes.
* https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html
* cntrl-shift-j
* You have to click the gear in top right and do "show content messages" to see the logs

Websockets:
* Seems like it might not be possible to use the extnesions api to read
  websocket data:
  * https://stackoverflow.com/questions/50077309/how-to-intercept-websocket-data
* But, you can use wrappers / mitm proxies?
* There is an open firefox bug to add this. Maybe I could implement...
  * https://bugzilla.mozilla.org/show_bug.cgi?id=1618711
  * https://bugzilla.mozilla.org/show_bug.cgi?id=885508#c60
