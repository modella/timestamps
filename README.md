#modella-timestamps

Adds `createdAt` and `updatedAt` to the given model using the fields specified.


## Usage Example

    var User = require('modella')('User'),
        timestamps = require('modella-timestamps');

    // By default will use createdAt and updatedAt
    User.use(timestamps());

    // Specifying Custom Fields instead
    User.use(timestamps('created_at', 'updated_at'));
