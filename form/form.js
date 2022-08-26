require([
    "dojo/dom",
    "dojo/on",
    "dijit/form/Form",
    "dijit/form/Button",
    "dijit/form/ValidationTextBox",
    "dijit/form/DateTextBox",
    "dojox/validate/web"
], function (on, Form, Button, ValidationTextBox, DateTextBox, web, dom) {
    // var myForm = new Form({
    //     encType: "multipart/form-data",
    //     action: "",
    //     method: "",
    // }, "myForm");

    // on(myForm, "reset", function () {
    //     return confirm('Press OK to reset widget values');
    // });

    // on(myForm, "submit", function (e) {
    //     e.preventDefault();
    //     let clients = [];
    //     let client = { id: "", first: "", last: "", phone: "", email: "" };
    //     client.id = clients.length + 1;

    //     if (this.validate()) {
    //         client.first = myForm.getValues().first;
    //         client.last = myForm.getValues().last;
    //         client.phone = myForm.getValues().phone;
    //         client.email = myForm.getValues().email;
    //         clients = [...clients, client];
    //         console.log(clients);
    //         return confirm('Valid form, press OK to send');
    //     } else {
    //         console.log('The form contains invalid data or missing information!'); //console
    //         return false;
    //     }
    // });

    // var inputFirst = new ValidationTextBox({
    //     type: 'text',
    //     promptMessage: 'Enter Your Name: [A-Z] Min 3, Max 15 characters',
    //     regExp: '.[a-z, A-Z]{2,14}$',
    //     required: true,
    //     placeHolder: 'Your First Name',
    //     invalidMessage: 'First Name Required, [Aa-Zz] !'
    // }, "first");
    // inputFirst.startup();

    // var inputLast = new ValidationTextBox({
    //     promptMessage: 'Enter Your Last Name: [A-Z] Min 3, Max 15 characters',
    //     regExp: '.[a-z, A-Z]{2,14}$',
    //     required: true,
    //     placeHolder: 'Your Last Name',
    //     invalidMessage: 'Last Name Required, [Aa-Zz] !'
    // }, "last");
    // inputLast.startup();

    // var inputPhone = new ValidationTextBox({
    //     promptMessage: 'Enter Your Phone: Min 8, Max 14 numbers',
    //     regExp: '.[0-9]{7,13}$',
    //     required: true,
    //     placeHolder: 'Your Phone',
    //     invalidMessage: 'Phone Required!'
    // }, "phone");
    // inputPhone.startup();

    // var inputEmail = new ValidationTextBox({
    //     promptMessage: 'Enter Your Email: Use format user@email.com',
    //     validator: dojox.validate.isEmailAddress,
    //     required: true,
    //     placeHolder: 'Your Email',
    //     invalidMessage: 'Email Required, [user@email.com] !'
    // }, "email");
    // inputEmail.startup();

    // var buttonValue = new Button({
    //     onClick: function(){
    //         console.log(myForm.getValues());
    //     }
    // },"buttonValue");
    // buttonValue.startup();
    // var buttonSubmit = new Button({},"buttonSubmit");
    // buttonSubmit.startup();
    // var buttonReset = new Button({},"buttonReset");
    // buttonReset.startup();
    // myForm.startup();
});