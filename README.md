# ModalAlertConfirm

ModalAlertConfirm is a [Meteor](https://www.meteor.com/) package that provides Bootstrap-based modal versions of alert() and confirm() functions.

### How to Install
To add this package to your app use the command:
```
meteor add seabrus:modal-alert-confirm
```

### Usage
Add somewhere in your template:
```html
  {{> modalAlertConfirm}}
```

Then call the function `ModalAlertConfirm` in the javascript code on the client:
```javascript
import ModalAlertConfirm from "meteor/seabrus:modal-alert-confirm";

  ...

  ModalAlertConfirm(alertText, alertType, [callbackYes], [callbackNo]);
```

- The argument `alertText` should be a string that represents the alert or confirm dialog message;
- `alertType` can be `"alert"` or `"confirm"`;
- The optional arguments `callbackYes` and `callbackNo` are functions which should be called if user's response will be `OK/Yes` or `No` respectively.

**Note**: Don't forget to import `ModalAlertConfirm` from `"meteor/seabrus:modal-alert-confirm"`. `ModalAlertConfirm` is defined as a default export value, therefore don't use curly braces.

### Example
Here is an example:
```javascript
import ModalAlertConfirm from "meteor/seabrus:modal-alert-confirm";

  ...

  ModalAlertConfirm('Are you sure?', 'confirm', function () {
    Collection1.remove({ '_id': docId });
  });
```

### Styles
The modal dialog in this package is built on the basis of Bootstrap modals. Additional CSS classes that help to design the look and feel of the dialog window are as follows:
 - `modal-alert-confirm-window` - the dialog window style
 - `modal-alert-confirm-text-container` - the style of container for the dialog message
 - `modal-alert-confirm-text` - the style of the dialog message text
 - `modal-alert-confirm-button` - the style of "OK" / "Yes" and "No" buttons

Initially these classes are defined as
```css
.modal-alert-confirm-window {
  border-radius: 10px;
}

.modal-alert-confirm-text-container {
  margin-bottom: 0px;
}

.modal-alert-confirm-text {
  text-align: center;
  font-size: 1.5em;
}

.modal-alert-confirm-button {
  font-size: 1.25em;
}
```

### License
MIT
