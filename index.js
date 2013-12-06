var _ = require('lodash')
    fs = require('fs')

module.exports = function(inPath, outPath, done){
  fs.readFile(inPath, function(err, content){
    var geojson = JSON.parse(content)
    var csv = ''

    // add headers
    _.each(Object.keys(geojson.features[0].properties), function(property){
      csv += property +','
    })
    csv += 'lat,lon'
    csv += '\n'
    
    // add data
    _.each(geojson.features, function(feature){
      _.each(Object.keys(geojson.features[0].properties), function(key, i){
        csv += '"'+feature.properties[key] + '",'
      })
      csv += feature.geometry.coordinates[0] + ','
      csv += feature.geometry.coordinates[1] + '\n'
    })

    // output csv file
    fs.writeFile(outPath, csv, function(err){
      done(err, csv)
    })
  })
}