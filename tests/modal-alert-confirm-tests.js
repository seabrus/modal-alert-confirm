// see https://themeteorchef.com/recipes/writing-a-package/

// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";


import { name as packageName } from "meteor/seabrus:modal-alert-confirm";

Tinytest.add('Test 1: import of name should give "modal-alert-confirm"', function (test) {
  test.equal(packageName, "modal-alert-confirm");
});


import ModalAlertConfirm from "meteor/seabrus:modal-alert-confirm";

Tinytest.add('Test 2: ModalAlertConfirm should be function', function (test) {
  test.equal(typeof ModalAlertConfirm, 'function');
});

/*
Tinytest.addAsync('Test 3: ModalAlertConfirm should be function', function (test, next) {
  const x = 15;
  const callbackYes = function () {
    test.equal(x, 15);
    next();
  };

  ModalAlertConfirm('Are you sure?', 'confirm', callbackYes);
});
*/


// Import and rename a variable exported by modal-alert-confirm.js.
//import { name as packageName } from "meteor/modal-alert-confirm";
