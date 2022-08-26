function construirForm() {
    require([
      "dojo/html",
      "dojo/dom",
      "dojo/on",
      "dijit/form/NumberTextBox",
      "dojo/domReady!",
    ], function (html, dom, on) {
      on(dom.byId("setContent"), "click", function () {
        html.set(
          dom.byId("agregar"),
          "<div>" +
            "<object data='./form.html' type='text/html'>" +
            "</div>"
        );
      });
    });
  }