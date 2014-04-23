# modella-timestamps

Adds `createdAt` and `updatedAt` fields to the given model using the fields specified and updates them autoamtically.

## Usage Example

```javascript
var modella    = require('modella');
var timestamps = require('modella-timestamps');

var User = modella('User');

// Use the default createdAt and updatedAt field names:
User.use(timestamps);

// Specify custom field names:
User.use(timestamps('born_at', 'changed_at'));
```
