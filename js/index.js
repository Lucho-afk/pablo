let grid, grid2, store, dataStore, danik;
let generatedClients = false;
let generatedProducts = false;
let seBorro = false;
let click = false;
let click2 = false;
let generatedButton = false;

function formDialog() {
  require([
    "dojo/parser",
    "dijit/Dialog",
    "dijit/form/Form",
    "dijit/form/Button",
    "dijit/form/ValidationTextBox",
    "dijit/form/DateTextBox",
    "dojox/validate",
    "dojox/validate/web",
    "dojo/domReady!",
  ], function (
    parser,
    Dialog,
    Form,
    Button,
    ValidationTextBox,
    DateTextBox,
    validate,
    web
  ) {
    if (!generatedButton) {
      myDialog = new Dialog({
        title: "Register Client",
        content:
          "<div>" +
          ` 

      <div data-dojo-type="dijit/form/Form" id="myForm" data-dojo-id="myForm" encType="multipart/form-data" action=""
          method="">
  
          <table style="border: 1px solid #9f9f9f;" cellspacing="10">
              <tr>
                  <td>
                      <label for="first">Name:</label>
                  </td>
                  <td>
                      <input data-dojo-type="dijit/form/ValidationTextBox" id="first" name="first" data-dojo-props="
                      promptMessage:'Enter Your Name: [A-Z] Min 3, Max 15 characters',
                      regExp: '.[a-z, A-Z]{2,14}$',
                      required: true,
                      placeHolder:'Your First Name',
                      invalidMessage: 'First Name Required, [Aa-Zz] !'" />
                  </td>
              </tr>
              <tr>
                  <td>
                      <label for="last">Last Name:</label>
                  </td>
                  <td>
                      <input data-dojo-type="dijit/form/ValidationTextBox" id="last" name="last" data-dojo-props="
                      promptMessage:'Enter Your Last Name: [A-Z] Min 3, Max 15 characters',
                      regExp: '.[a-z, A-Z]{2,14}$',
                      required: true,
                      placeHolder:'Your Last Name',
                      invalidMessage: 'Last Name Required, [Aa-Zz] !'" />
                  </td>
              </tr>
              <tr>
                  <td>
                      <label for="phone">Phone:</label>
                  </td>
                  <td>
                      <input data-dojo-type="dijit/form/ValidationTextBox" id="phone" name="phone" data-dojo-props="
                      promptMessage:'Enter Your Phone: Min 8, Max 14 numbers',
                      regExp: '.[0-9]{7,13}$',
                      required: true,
                      placeHolder:'Your Phone',
                      invalidMessage: 'Phone Required, Use Numbers!'" />
                  </td>
              </tr>
              <tr>
                  <td>
                      <label for="email">Email:</label>
                  </td>
                  <td>
                      <input data-dojo-type="dijit/form/ValidationTextBox" id="email" name="email" data-dojo-props="
                      promptMessage:'Enter Your Email: Use format user@email.com',
                      validator: dojox.validate.isEmailAddress,
                      required: true,
                      placeHolder:'Your Email',
                      invalidMessage: 'Email Required, [user@email.com] !'" />
                  </td>
              </tr>
          </table>
            
          <div data-dojo-type="dijit/form/Button" id="submit"></div>
          <div data-dojo-type="dijit/form/Button" id="reset" type="reset"></div>` +
          "</div>",
        style: "width: 300px",
      });
      myDialog.show();

      submit = new Button({
        label: "Submit",
        type: "submit",
        onClick: function (event) {
          // event.preventDefault();
          let clients = JSON.parse(localStorage.getItem("customers")) || [];

          console.log(clients);
          let client = { id: "", first: "", last: "", phone: "", email: "" };

          client.id = (clients.length + 1).toString();

          if (validate) {
            client.first = dijit.byId("myForm").getValues().first;
            client.last = dijit.byId("myForm").getValues().last;
            client.phone = dijit.byId("myForm").getValues().phone;
            client.email = dijit.byId("myForm").getValues().email;
            clients = [...clients, client];

            localStorage.setItem("customers", JSON.stringify(clients));

            console.log(clients);
            // return confirm('Valid form, press OK to send');
          } else {
            alert("The form contains invalid data or missing information!");
            return false;
          }

          location.reload();
          // return true;
        },
      });
      submit.placeAt("submit");

      reset = new Button({
        label: "Reset",
        type: "reset",
        onClick: function () {
          return confirm("Press OK to reset widget values");
        },
      });
      reset.placeAt("reset");
    }
    generatedButton = true;
    myDialog.show();
  });
}

function formDialogP() {
  require([
    "dojo/parser",
    "dijit/Dialog",
    "dijit/form/Form",
    "dijit/form/Button",
    "dijit/form/ValidationTextBox",
    "dijit/form/DateTextBox",
    "dojox/validate",
    "dojox/validate/web",
    "dojo/domReady!",
  ], function (
    parser,
    Dialog,
    Form,
    Button,
    ValidationTextBox,
    DateTextBox,
    validate,
    web
  ) {
    if (!generatedButton) {
      myDialog = new Dialog({
        title: "Register Product",
        content:
          "<div>" +
          ` 

      <div data-dojo-type="dijit/form/Form" id="myForm" data-dojo-id="myForm" encType="multipart/form-data" action=""
          method="">
  
          <table style="border: 1px solid #9f9f9f;" cellspacing="10">
          <tr>
              <td>
                  <label for="name">Product:</label>
              </td>
              <td>
                  <input data-dojo-type="dijit/form/ValidationTextBox" id="products" name="products" data-dojo-props="
                  promptMessage:'Enter a Product: Max 25 characters',
                  regExp: '.[a-z, A-Z, 0-9]{2,24}$',
                  required: true,
                  placeHolder:'add Product Name',
                  invalidMessage: 'add Name Required!'" />
              </td>
          </tr>

          <tr>
              <td>
                  <label for="name">Precio: US$</label>
              </td>
              <td>
                  <input data-dojo-type="dijit/form/ValidationTextBox" id="price" name="price" data-dojo-props="
                  promptMessage:'Enter a price: Max 7 characters',
                  regExp: '.[0-9]{0,6}$',
                  required: true,
                  placeHolder:'US$ add price',
                  invalidMessage: 'add price Required!'" />
              </td>
          </tr>

      </table>
            
          <div data-dojo-type="dijit/form/Button" id="submit"></div>
          <div data-dojo-type="dijit/form/Button" id="reset" type="reset"></div>` +
          "</div>",
        style: "width: 300px",
      });
      myDialog.show();

      submit = new Button({
        label: "Submit",
        type: "submit",
        onClick: function (event) {
          // event.preventDefault();
          let prods = JSON.parse(localStorage.getItem("products")) || [];

          console.log(prods);
          let prod = { id: "", name: "", price: "" };

          prod.id = (prods.length + 1).toString();

          if (validate) {
            prod.name = dijit.byId("myForm").getValues().name;
            prod.price = dijit.byId("myForm").getValues().price;

            prods = [...prods, prod];

            localStorage.setItem("products", JSON.stringify(prods));

            console.log(prods);
            // return confirm('Valid form, press OK to send');
          } else {
            alert("The form contains invalid data or missing information!");
            return false;
          }

          location.reload();
          // return true;
        },
      });
      submit.placeAt("submit");

      reset = new Button({
        label: "Reset",
        type: "reset",
        onClick: function () {
          return confirm("Press OK to reset widget values");
        },
      });
      reset.placeAt("reset");
    }
    generatedButton = true;
    myDialog.show();
  });
}

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
    var pMenuBar = new MenuBar({}, "menu");
    pMenuBar.addChild(
      new MenuBarItem({
        id: "user",
        label: "Users",
        onClick: function () {
          dom.byId("users").style.display = "inline";
          dom.byId("products").style.display = "none";
          dom.byId("addUser").style.display = "inline";
          dom.byId("addProduct").style.display = "none";

          if (!generatedClients) {
            grilla();
          } else dom.byId("gridClients").style.display = "inline";

          dom.byId("gridProducts").style.display = "none";
        },
      })
    );
    pMenuBar.addChild(
      new MenuBarItem({
        id: "prod",
        label: "Productos",
        onClick: function () {
          dom.byId("products").style.display = "inline";
          dom.byId("users").style.display = "none";
          dom.byId("addProduct").style.display = "inline";
          dom.byId("addUser").style.display = "none";

          if (!generatedProducts) {
            grilla2();
          } else dom.byId("gridProducts").style.display = "inline";

          dom.byId("gridClients").style.display = "none";
        },
      })
    );

    pMenuBar.startup();
  });
}

function deleteCustomer(item) {
  let arr = JSON.parse(localStorage.getItem("customers"));

  let newArr = arr.filter((contact) => contact.id != item);

  let newArrJson = JSON.stringify(newArr);

  localStorage.setItem("customers", newArrJson);

  let click = { click: false, click2: true };
  localStorage.setItem("deleted", JSON.stringify(click));

  window.location.reload();
}

function getDataClients() {
  require(["dojo/request"], function (request) {
    request.get("../clients.json").then(function (data) {
      localStorage.setItem("customers", data);
    });
  });
}

function deleteProducts(item) {
  let arr = JSON.parse(localStorage.getItem("products"));

  let newArr = arr.filter((product) => product.id != item);

  let newArrJson = JSON.stringify(newArr);

  localStorage.setItem("products", newArrJson);

  let click = { click: true, click2: false };
  localStorage.setItem("deleted", JSON.stringify(click));

  window.location.reload();
}

function getDataProducts() {
  require(["dojo/request"], function (request) {
    request.get("../products.json").then(function (data) {
      localStorage.setItem("products", data);
    });
  });
}

function getDataDeleted() {
  localStorage.setItem(
    "deleted",
    JSON.stringify({ click: false, click2: false })
  );
}

function grilla() {
  require([
    "dojo/ready",
    "dojo/parser",
    "dojo/query",
    "dojo/dom",
    "dijit/registry",
    "dojo/request",
    "dojox/grid/EnhancedGrid",
    "dojo/data/ItemFileWriteStore",
    "dojox/grid/enhanced/plugins/Menu",
    "dojox/grid/enhanced/plugins/DnD",
    "dojox/grid/enhanced/plugins/Pagination",
    "dojox/grid/enhanced/plugins/Filter",
    "dojox/grid/enhanced/plugins/NestedSorting",
    "dojox/grid/enhanced/plugins/IndirectSelection",
    "dijit/Menu",
    "dijit/MenuItem",
    "dijit/MenuSeparator",
    "dijit/PopupMenuItem",
    "dijit/ColorPalette",
  ]);
  /*
  dojo.require("dojox.grid.EnhancedGrid");
  dojo.require("dojox.grid.enhanced.plugins.Pagination");
  dojo.require("dojo.data.ItemFileWriteStore");
  dojo.require("dojox.grid.enhanced.plugins.Filter");
*/
  if (localStorage.getItem("customers") == null) {
    getDataClients();
  }

  let data1 = JSON.parse(localStorage.getItem("customers"));

  dojo.ready(function () {
    /*set up data store*/
    var data = {
      identifier: "id",
      items: data1,
    };

    var store = new dojo.data.ItemFileWriteStore({ data: data });

    /*set up layout*/
    var layout = [
      { field: "id", datatype: "string" },
      { field: "first", datatype: "string" },
      { field: "last", datatype: "string" },
      { field: "phone", datatype: "string" },
      { name: "Email", field: "email", width: "160px" },
      {
        name: "Action",
        field: "id",
        formatter: getDelete,
        width: "80px",
      },
    ];

    function showFilterBar() {
      dijit.byId("grid").showFilterBar(true);
    }

    /*create a new grid:*/
    var grid = new dojox.grid.EnhancedGrid(
      {
        id: "grid",
        store: store,
        structure: layout,
        rowSelector: "50px",
        plugins: {
          pagination: {
            pageSizes: ["5", "50", "100", "All"],
            description: true,
            sizeSwitch: true,
            pageStepper: true,
            gotoButton: true,
            /*page step to be displayed*/
            maxPageStep: 4,
            /*position of the pagination bar*/
            position: "bottom",
          },
          filter: {
            // Show the closeFilterbarButton at the filter bar
            closeFilterbarButton: true,
            // Set the maximum rule count to 5
            ruleCount: 5,
            // Set the name of the items
            itemsName: "songs",
          },
        },
      }
      //document.createElement("div")
    );

    /*append the new grid to the div*/
    //dojo.byId("gridClients").appendChild(grid.domNode);
    function getDelete(item) {
      return `<button onclick=deleteCustomer(${item}) id='myButton' class='btn'>Delete</button>`;
    }

    /*Call startup() to render the grid*/
    generatedClients = true;
    grid.placeAt("gridClientes");
  });
}

function grilla2() {
  require([
    "dojo/ready",
    "dojo/parser",
    "dojo/query",
    "dojo/dom",
    "dijit/registry",
    "dojo/request",
    "dojox/grid/EnhancedGrid",
    "dojo/data/ItemFileWriteStore",
    "dojox/grid/enhanced/plugins/Menu",
    "dojox/grid/enhanced/plugins/DnD",
    "dojox/grid/enhanced/plugins/Pagination",
    "dojox/grid/enhanced/plugins/Filter",
    "dojox/grid/enhanced/plugins/NestedSorting",
    "dojox/grid/enhanced/plugins/IndirectSelection",
    "dijit/Menu",
    "dijit/MenuItem",
    "dijit/MenuSeparator",
    "dijit/PopupMenuItem",
    "dijit/ColorPalette",
  ]);
  /*
  dojo.require("dojox.grid.EnhancedGrid");
  dojo.require("dojox.grid.enhanced.plugins.Pagination");
  dojo.require("dojo.data.ItemFileWriteStore");
  dojo.require("dojox.grid.enhanced.plugins.Filter");
*/
  if (localStorage.getItem("products") == null) {
    getDataProducts();
  }

  let getLocalStorage = JSON.parse(localStorage.getItem("products"));

  dojo.ready(function () {
    /*set up data store*/
    let data = {
      identifier: "id",
      items: getLocalStorage,
    };

    let store = new dojo.data.ItemFileWriteStore({ data: data });

    /*set up layout*/
    let layout = [
      { field: "id", datatype: "number" },
      { field: "name", datatype: "string" },
      { field: "description", datatype: "string" },
      { field: "category", datatype: "string" },
      { field: "price", datatype: "number" },
      {
        name: "Action",
        field: "id",
        formatter: getDeleteProduct,
        width: "80px",
      },
    ];

    function showFilterBar() {
      dijit.byId("grid2").showFilterBar(true);
    }

    /*create a new grid:*/
    let grid2 = new dojox.grid.EnhancedGrid({
      id: "grid",
      store: store,
      structure: layout,
      rowSelector: "50px",
      plugins: {
        pagination: {
          pageSizes: ["5", "50", "100", "All"],
          description: true,
          sizeSwitch: true,
          pageStepper: true,
          gotoButton: true,
          /*page step to be displayed*/
          maxPageStep: 4,
          /*position of the pagination bar*/
          position: "bottom",
        },
        filter: {
          // Show the closeFilterbarButton at the filter bar
          closeFilterbarButton: true,
          // Set the maximum rule count to 5
          ruleCount: 5,
          // Set the name of the items
          itemsName: "songs",
        },
      },
      //document.createElement("div")
    });

    /*append the new grid to the div*/
    dojo.byId("gridProducts").appendChild(grid2.domNode);
    function getDeleteProduct(item) {
      return `<button onclick=deleteProducts(${item}) id='myButton' class='btn'>Delete</button>`;
    }

    grid2.startup();
    grid2.placeAt("gridProducts");
    generatedProducts = true;
    /*Call startup() to render the grid*/
  });
}
