# Config

Any properties specified in the config files, package.json, environment
variables or command-line arguments are availble through nconf using the
following syntax.

```
var myProp = global.nconf.get('PROPERTY_NAME');
```

Properties are overriden and read with the following priority.

- command-line arguments
- environment variables
- config/local.json
- config/environment.json
- config/global.json
- package.json
