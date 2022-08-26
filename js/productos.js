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
          pageSizes: ["10", "20", "30", "All"],
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

function getDataProducts() {
  require(["dojo/request"], function (request) {
    request.get("../products.json").then(function (data) {
      localStorage.setItem("products", data);
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

function getDataDeleted() {
  localStorage.setItem(
    "deleted",
    JSON.stringify({ click: false, click2: false })
  );
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
    //if (!generatedButtonProduct) {
    myDialogProduct = new Dialog({
      title: "Register Product",
      content:
        "<div id='productosForm'>" +
        ` 

      <div data-dojo-type="dijit/form/Form" id="myForm2" data-dojo-id="myForm" encType="multipart/form-data" action=""
          method="">
  
          <table style="border: 1px solid #9f9f9f;" cellspacing="10">
          <tr>
              <td>
                  <label for="product">Product:</label>
              </td>
              <td>
                  <input data-dojo-type="dijit/form/ValidationTextBox" id="product" name="product" data-dojo-props="
                  promptMessage:'Enter a Product: Max 25 characters',
                  regExp: '.[a-z, A-Z, 0-9]{2,24}$',
                  required: true,
                  placeHolder:'add Name',
                  invalidMessage: 'add Name Required!'" />
              </td>
          </tr>
          <tr>
          <td>
              <label for="description">Descripcion:</label>
          </td>
          <td>
              <input data-dojo-type="dijit/form/ValidationTextBox" id="description" name="description" data-dojo-props="
              promptMessage:'Enter a Product: Max 25 characters',
              regExp: '.[a-z, A-Z, 0-9]{2,24}$',
              required: true,
              placeHolder:'add Description',
              invalidMessage: 'add Description Required!'" />
          </td>
      </tr> <tr>
      <td>
          <label for="category">Category:</label>
      </td>
      <td>
          <input data-dojo-type="dijit/form/ValidationTextBox" id="category" name="category" data-dojo-props="
          promptMessage:'Enter a Product: Max 25 characters',
          regExp: '.[a-z, A-Z, 0-9]{2,24}$',
          required: true,
          placeHolder:'add Category',
          invalidMessage: 'add Category Required!'" />
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
            
          <div id="submit2"></div>
          <div id="reset2" type="reset"></div>` +
        "</div>",
      // style: "width: 300px"
    });
    myDialogProduct.show();
    submit = new Button({
      label: "Submit",
      type: "submit",
      onClick: function (event) {
        // event.preventDefault();
        let prods = JSON.parse(localStorage.getItem("products")) || [];

        let prod = {
          id: "",
          name: "",
          price: "",
          description: "",
          category: "",
        };
        let newId = parseInt(prods[prods.length - 1].id) + 1;
        prod.id = newId.toString();

        var form = dijit.byId("myForm2");

        if (form.validate()) {
          prod.name = dijit.byId("myForm2").getValues().product;
          prod.price = dijit.byId("myForm2").getValues().price;
          prod.description = dijit.byId("myForm2").getValues().description;
          prod.category = dijit.byId("myForm2").getValues().category;
          prods = [...prods, prod];

          localStorage.setItem("products", JSON.stringify(prods));
        } else {
          alert("The form contains invalid data or missing information!");
          return false;
        }

        location.reload();
      },
    });
    submit.placeAt("submit2");

    reset = new Button({
      label: "Reset",
      type: "reset",
      onClick: function () {
        return confirm("Press OK to reset widget values");
      },
    });
    reset.placeAt("reset2");
    //}
    //generatedButtonProduct = true;
    myDialogProduct.show();
  });
}
