# geojson2csv

a node.js module for converting a geojson file to a csv file

```bash
npm install geojson2csv
```

## API

This module takes a geojson feature collection of points and converts it to a csv file.

```javascript
var geojson2csv = require('geojson2csv')

geojson2csv('/path/to/points.geojson', '/path/to/points.csv', function(err){
  if(err) throw err
})
```

**Test**

```bash
cd test
mocha .
```

## Command Line

Running from Command Line

1. absolute path:

	```
	$ ./node_modules/.bin/geojson2csv inputfile outputfile
	```

2. with npm  

    `pacakage.json:`
    ```
    "scripts": {
	    "geojson2csv" : "geojson2csv"
    }
    ```

    then in the command line

    ```
	$ npm run geojson2csv -- inputfile outputfile
	```
