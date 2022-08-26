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
      },
      document.createElement("div")
    );

    /*append the new grid to the div*/
    dojo.byId("gridClientes").appendChild(grid.domNode);
    function getDelete(item) {
      return `<button onclick=deleteCustomer(${item}) id='myButton' class='btn'>Delete</button>`;
    }

    /*Call startup() to render the grid*/
    grid.startup();
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

function getDataDeleted() {
  localStorage.setItem(
    "deleted",
    JSON.stringify({ click: false, click2: false })
  );
}

function formDialog() {
  require([
    "dojo/parser",
    "dijit/Dialog",
    "dijit/form/Form",
    "dijit/form/Button",
    "dijit/form/ValidationTextBox",
    "dijit/form/DateTextBox",
    "dojox/validate/web",
    "dojo/domReady!",
  ], function (
    parser,
    Dialog,
    Form,
    Button,
    ValidationTextBox,
    DateTextBox,
    web
  ) {
    //if (!generatedButtonClient) {
    myDialogClient = new Dialog({
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
            
          <div id="submit"></div>
          <div id="reset"></div>` +
        "</div>",
      // style: "width: 300px",
    });
    myDialogClient.show();

    submit = new Button({
      label: "Submit",
      type: "submit",
      onClick: function (event) {
        // event.preventDefault();
        let clients = JSON.parse(localStorage.getItem("customers")) || [];

        let client = { id: "", first: "", last: "", phone: "", email: "" };
        // console.log("ultimo id: ",clients[clients.length - 1].id)

        let newId = parseInt(clients[clients.length - 1].id) + 1;
        client.id = newId.toString();
        var form = dijit.byId("myForm");

        if (form.validate()) {
          client.first = dijit.byId("myForm").getValues().first;
          client.last = dijit.byId("myForm").getValues().last;
          client.phone = dijit.byId("myForm").getValues().phone;
          client.email = dijit.byId("myForm").getValues().email;
          clients = [...clients, client];

          localStorage.setItem("customers", JSON.stringify(clients));
        } else {
          alert("The form contains invalid data or missing information!");
          return false;
        }

        location.reload();
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
    //}
    //generatedButtonClient = true;
    myDialogClient.show();
  });
}
