let grid, grid2, store, dataStore, danik;
let generatedClients = false;
let generatedProducts = false;
let seBorro = false;
let click = false;
let click2 = false;
let generatedButton = false;

// function construirFormUsuario() {
//   require([
//     "dojo/html",
//     "dojo/dom",
//     "dojo/on",
//     "dijit/form/NumberTextBox",
//     "dojo/domReady!",
//   ], function (html, dom) {
//     // on(dom.byId("setContent"), "click", function () {
//       console.log("click");
//       html.set(
//         dom.byId("content"),
//         "<div>" +
//           `  <h4>Register Client</h4><br>

//           <div data-dojo-type="dijit/form/Form" id="myForm" data-dojo-id="myForm" encType="multipart/form-data" action=""
//               method="">

//               <table style="border: 1px solid #9f9f9f;" cellspacing="10">
//                   <tr>
//                       <td>
//                           <label for="first">Name:</label>
//                       </td>
//                       <td>
//                           <input data-dojo-type="dijit/form/ValidationTextBox" id="first" name="first" data-dojo-props="
//                           promptMessage:'Enter Your Name: [A-Z] Min 3, Max 15 characters',
//                           regExp: '.[a-z, A-Z]{2,14}$',
//                           required: true,
//                           placeHolder:'Your First Name',
//                           invalidMessage: 'First Name Required, [Aa-Zz] !'" />
//                       </td>
//                   </tr>
//                   <tr>
//                       <td>
//                           <label for="last">Last Name:</label>
//                       </td>
//                       <td>
//                           <input data-dojo-type="dijit/form/ValidationTextBox" id="last" name="last" data-dojo-props="
//                           promptMessage:'Enter Your Last Name: [A-Z] Min 3, Max 15 characters',
//                           regExp: '.[a-z, A-Z]{2,14}$',
//                           required: true,
//                           placeHolder:'Your Last Name',
//                           invalidMessage: 'Last Name Required, [Aa-Zz] !'" />
//                       </td>
//                   </tr>
//                   <tr>
//                       <td>
//                           <label for="phone">Phone:</label>
//                       </td>
//                       <td>
//                           <input data-dojo-type="dijit/form/ValidationTextBox" id="phone" name="phone" data-dojo-props="
//                           promptMessage:'Enter Your Phone: Min 8, Max 14 numbers',
//                           regExp: '.[0-9]{7,13}$',
//                           required: true,
//                           placeHolder:'Your Phone',
//                           invalidMessage: 'Phone Required, Use Numbers!'" />
//                       </td>
//                   </tr>
//                   <tr>
//                       <td>
//                           <label for="email">Email:</label>
//                       </td>
//                       <td>
//                           <input data-dojo-type="dijit/form/ValidationTextBox" id="email" name="email" data-dojo-props="
//                           promptMessage:'Enter Your Email: Use format user@email.com',
//                           validator: dojox.validate.isEmailAddress,
//                           required: true,
//                           placeHolder:'Your Email',
//                           invalidMessage: 'Email Required, [user@email.com] !'" />
//                       </td>
//                   </tr>
//               </table>
//               <button id="pepe" onclick="agregar()">agregar</button>

//               <div data-dojo-type="dijit/form/Button" id="submit" type="submit" onclick="reload()"></div>
//               <div data-dojo-type="dijit/form/Button" id="reset"></div>` +
//           "</div>"
//       );

//   });
// }

function mostrarData() {
  require([
    "dojo/dom-style",
    "dojo/dom",
    "dojo/dom-construct",
    "dijit/MenuBar",
    "dijit/PopupMenuBarItem",
    "dijit/Menu",
    "dijit/MenuBarItem",
    "dijit/MenuItem",
    "dijit/DropDownMenu",
    "dojo/ready",
  ], function (
    ready,
    dom,
    domConstruct,
    MenuBar,
    PopupMenuBarItem,
    Menu,
    MenuBarItem,
    MenuItem,
    DropDownMenu
  ) {
    let arr = JSON.parse(localStorage.getItem("products"));
    let arr2 = JSON.parse(localStorage.getItem("customers"));

    let clicked = JSON.parse(localStorage.getItem("deleted"));

    if (arr.length < 32 && clicked.click === true) {
      dom.byId("gridProducts").style.display = "inline";
      showGridProducts();
    } else if (arr2.length < 12 && clicked.click2 === true) {
      showGridClients();
      dom.byId("gridClients").style.display = "inline";
    }
  });
}

function menu() {
  require([
    "dojo/dom-style",
    "dojo/dom",
    "dojo/dom-construct",
    "dijit/MenuBar",
    "dijit/PopupMenuBarItem",
    "dijit/Menu",
    "dijit/MenuBarItem",
    "dijit/MenuItem",
    "dijit/DropDownMenu",
    "dojo/html",
    "dojo/ready",
  ], function (
    ready,
    dom,
    domConstruct,
    MenuBar,
    PopupMenuBarItem,
    Menu,
    MenuBarItem,
    MenuItem,
    html,
    DropDownMenu
  ) {
    var pMenuBar = new MenuBar({}, "menu");
    pMenuBar.addChild(
      new MenuBarItem({
        id: "user",
        label: "Clients",
        onClick: function () {
          dom.byId("users").style.display = "inline";
          dom.byId("products").style.display = "none";

          generarCliente();
        },
      })
    );
    pMenuBar.addChild(
      new MenuBarItem({
        id: "prod",
        label: "Products",
        onClick: function () {
          dom.byId("products").style.display = "inline";
          dom.byId("users").style.display = "none";

          generarProducto();
        },
      })
    );

    pMenuBar.startup();
  });
}

function generarProducto() {
  require(["dojo/html", "dojo/dom"], function (html, dom) {
    html.set(
      dom.byId("products"),
      "<div styles=' width: 560px;height: 500px;'>" +
        "<object data='./gridProducts.html' style=' width: 100vw;height: 100vh;' type='text/html'>" +
        "</div>"
    );
  });
}

function generarCliente() {
  require(["dojo/html", "dojo/dom"], function (html, dom) {
    html.set(
      dom.byId("users"),
      "<div styles=' width: 560px;height: 500px;'>" +
        "<object data='./gridClients.html' style=' width: 100vw;height: 100vh;' type='text/html'>" +
        "</div>"
    );
  });
}
