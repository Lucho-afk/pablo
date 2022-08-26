let grid, grid2, store, dataStore, danik;
let generatedClients = false;
let generatedProducts = false;
let seBorro = false;
let click = false;
let click2 = false;
let generatedButton = false;

function formDialog(){
  require([
    "dojo/parser",
    "dijit/Dialog", 
    "dijit/form/Form",
    "dijit/form/Button",
    "dijit/form/ValidationTextBox",
    "dijit/form/DateTextBox",
    "dojox/validate",
    "dojox/validate/web",
    "dojo/domReady!"  
  ],function(parser,Dialog, Form, Button, ValidationTextBox, DateTextBox, validate, web){
    
    if(!generatedButton){
    
    myDialog = new Dialog({
      title: "Register Client",
      content: "<div>" +
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
      style: "width: 300px"
  });
  myDialog.show();


      submit = new Button({
        label: "Submit",
        type: "submit",
        onClick: function (event) {
            // event.preventDefault();
            let clients = JSON.parse(localStorage.getItem("customers")) || [];
    
            console.log(clients)   
            let client = { id: "", first: "", last: "", phone: "", email: "" };
    
            client.id = (clients.length + 1).toString();
    
            if (validate) {
                client.first = dijit.byId("myForm").getValues().first;
                client.last = dijit.byId("myForm").getValues().last;
                client.phone = dijit.byId("myForm").getValues().phone;
                client.email = dijit.byId("myForm").getValues().email;
                clients = [...clients, client];
               
                localStorage.setItem("customers", JSON.stringify(clients))
              
                console.log(clients);
                // return confirm('Valid form, press OK to send');
            } else {
                alert('The form contains invalid data or missing information!');
                return false;
            }
            
            location.reload()
            // return true;
        }
      });
      submit.placeAt("submit");
      submit.startup();
        
      reset = new Button({
          label: "Reset",
          type: "reset",
          onClick: function () {
              return confirm('Press OK to reset widget values');
          }
      });
      reset.placeAt("reset");
      reset.startup();

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
            showGridClients();
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
            showGridProducts();
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

function deleteProducts(item) {
  let arr = JSON.parse(localStorage.getItem("products"));

  let newArr = arr.filter((product) => product.id != item);

  let newArrJson = JSON.stringify(newArr);

  localStorage.setItem("products", newArrJson);

  let click = { click: true, click2: false };
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

if (
  localStorage.getItem("customers") == null &&
  localStorage.getItem("products") == null &&
  localStorage.getItem("deleted") == null
) {
  getDataClients();
  getDataProducts();
  getDataDeleted();
}

function showGridClients() {
  require([
    "dojo/dom",
    "dojo/dom-construct",
    "dojo/Stateful",

    "dojo/on",
    "dojo/_base/array",

    "dojox/grid/DataGrid",
    "dojo/store/Memory",
    "dojo/data/ObjectStore",
    "dojox/grid/EnhancedGrid",
    "dojo/request",
    "dojo/domReady!",
  ], function (
    dom,
    domConstruct,
    Stateful,
    on,
    arrayUtil,
    DataGrid,
    Memory,
    ObjectStore
  ) {
    // domConstruct.create("div",{id: "grid"},"users");
    dom.byId("gridClients").style.display = "inline";

    let data = JSON.parse(localStorage.getItem("customers"));

    store = new Memory({ data: data });
    dataStore = new ObjectStore({ objectStore: store });
    danik = new Stateful(data);

    function createGrid(dataStore) {
      grid = new dojox.grid.EnhancedGrid(
        {
          store: dataStore,
          query: { id: "*" },

          structure: [
            {
              noscroll: true,
              defaultCell: { width: "100px", editable: true },
              cells: [
                { name: "Id", field: "id" },
                { name: "First Name", field: "first" },
                { name: "Last Name", field: "last" },
                { name: "Phone", field: "phone" },
                { name: "Email", field: "email", width: "160px" },
                {
                  name: "Action",
                  field: "id",
                  formatter: getDelete,
                  width: "80px",
                },
              ],
            },
          ],
        },
        "gridClients"
      );
      generatedClients = true;
      return grid;
    }

    function getDelete(item) {
      return `<button onclick=deleteCustomer(${item}) id='myButton' class='btn'>Delete</button>`;
    }

    dojo.ready(function () {
      grid = createGrid(dataStore);
      grid.startup();
    });
  });
}

function showGridProducts() {
  require([
    "dojo/dom",
    "dojo/dom-construct",
    "dojo/Stateful",

    "dojo/on",
    "dojo/_base/array",

    "dojox/grid/DataGrid",
    "dojo/store/Memory",
    "dojo/data/ObjectStore",

    "dojo/request",
    "dojo/domReady!",
  ], function (
    dom,
    domConstruct,
    Stateful,
    on,
    arrayUtil,
    DataGrid,
    Memory,
    ObjectStore
  ) {
    let getLocalStorage = JSON.parse(localStorage.getItem("products"));
    dom.byId("gridProducts").style.display = "inline";

    data = {
      items: getLocalStorage,
    };

    store = new Memory({ data: data });
    dataStore = new ObjectStore({ objectStore: store });
    danik = new Stateful(data);

    function createGrid(dataStore) {
      grid2 = new DataGrid(
        {
          store: dataStore,
          query: { id: "*" },
          onApplyCellEdit: function (inValue, inRowIndex, inFieldIndex) {
            let olaJson = JSON.stringify(getLocalStorage);

            localStorage.setItem("products", olaJson);
          },

          structure: [
            {
              noscroll: true,
              defaultCell: { width: "100px", editable: true },
              cells: [
                { name: "Id", field: "id" },
                { name: "Name", field: "name" },
                { name: "Description", field: "description" },
                { name: "Category", field: "category" },
                { name: "Price", field: "price" },
                {
                  name: "Action",
                  field: "id",
                  formatter: getDeleteProduct,
                  width: "80px",
                },
              ],
            },
          ],
        },
        "gridProducts"
      );
      generatedProducts = true;
      return grid2;
    }

    function getDeleteProduct(item) {
      return `<button onclick=deleteProducts(${item}) id='myButton' class='btn'>Delete</button>`;
    }

    dojo.ready(function () {
      grid2 = createGrid(dataStore);
      grid2.startup();
    });
  });
}

function agregar(){
  // let email = document.getElementById("fisrt")

  // console.log(email);
  location.reload()
  
}

// function formulario() {
//   require([
//       "dojo/dom",
//       "dojo/parser",
//       "dijit/form/Form",
//       "dijit/form/Button",
//       "dijit/form/ValidationTextBox",
//       "dijit/form/DateTextBox",
//       "dojox/validate",
//       "dojox/validate/web",
//       "dojo/domReady!"
//   ], function (dom, parser, Form, Button, ValidationTextBox, DateTextBox, validate, web) {

//       var submit = new Button({
//           label: "Submit",
//           type: "submit",
//           onClick: function (event) {
//               // event.preventDefault();
//               let clients = JSON.parse(localStorage.getItem("customers")) || [];

//               console.log(clients)   
//               let client = { id: "", first: "", last: "", phone: "", email: "" };

//               client.id = (clients.length + 1).toString();

//               if (validate) {
//                   client.first = dijit.byId("myForm").getValues().first;
//                   client.last = dijit.byId("myForm").getValues().last;
//                   client.phone = dijit.byId("myForm").getValues().phone;
//                   client.email = dijit.byId("myForm").getValues().email;
//                   clients = [...clients, client];
                 
//                   localStorage.setItem("customers", JSON.stringify(clients))
                
//                   console.log(clients);
//                   // return confirm('Valid form, press OK to send');
//               } else {
//                   alert('The form contains invalid data or missing information!');
//                   return false;
//               }
              
//               location.reload()
//               // return true;
//           }
//       }, "submit").startup();

//       var reset = new Button({
//           label: "Reset",
//           type: "reset",
//           onClick: function () {
//               return confirm('Press OK to reset widget values');
//           }
//       }, "reset").startup();
//   });
// }
