/**
* seabrus:modal-alert-confirm
* Bootstrap-based modal versions of alert() and confirm() functions
*
* @see {@link https://github.com/seabrus/modal-alert-confirm on GitHub}
* @license MIT
*/


// =================================================
//   ReactiveVars
// =================================================
var typeRVar = new ReactiveVar('alert');
var responseRVar = new ReactiveVar('undefined');


// =================================================
//   Template Events
// =================================================
Template.modalAlertConfirm.events({
  'click .js-yes': function (event) {
    responseRVar.set('yes');
    $("#modal-alert").modal('hide');

    return false;
  },

  'click .js-no': function (event) {
    responseRVar.set('no');
    $("#modal-alert").modal('hide');

    return false;
  },

});


// =================================================
//   Template Helpers
// =================================================
Template.modalAlertConfirm.helpers({
  isAlert: function () {
    return (typeRVar.get() === 'alert');
  },

  isConfirm: function () {
    return (typeRVar.get() === 'confirm');
  },

});


// ===========================================================================
//  @function ModalAlertConfirm
//  @public
//
//  @param {string} alertText -- a string that represents the alert or confirm dialog message
//  @param {string} alertType -- Can be "alert" or "confirm"
//  @param {function} [callbackYes] -- function that is called if user's response will be `OK/Yes`
//  @param {function} [callbackNo] -- function that is called if user's response will be `No`
// ===========================================================================
function ModalAlertConfirm(alertText, alertType, callbackYes, callbackNo) {
  var messageText = alertText || '';
  $('#modal-alert-text').text(messageText);

  var messageType = alertType || 'alert';
  typeRVar.set(messageType);

  responseRVar.set('undefined');

  Tracker.autorun(function (c) {
    if (responseRVar.get() === 'yes') {
      if (typeof callbackYes === 'function') {
        callbackYes();
      }

      c.stop();
    }

    if (responseRVar.get() === 'no') {
      if (typeof callbackNo === 'function') {
        callbackNo();
      }

      c.stop();
    }
  }); // end of "instance.autorun..."


  $("#modal-alert").modal({
    backdrop: 'static',
    keyboard: false,
    show: true,
  });

};

export default ModalAlertConfirm;

// Variables exported by this module can be imported by other packages and
// applications. See modal-alert-confirm-tests.js for an example of importing.
export const name = 'modal-alert-confirm';
