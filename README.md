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

Note: Don't forget to import `ModalAlertConfirm` from `meteor/seabrus:modal-alert-confirm`.

### Example
Here is an example:
```javascript
import ModalAlertConfirm from "meteor/seabrus:modal-alert-confirm";

  ...

  ModalAlertConfirm('Are you sure?', 'confirm', function () {
    Collection1.remove({ '_id': docId });
  });
```

### License
MIT
