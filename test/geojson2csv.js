var geojson2csv = require('../index.js'),
    should = require('should')

describe('geojson2csv', function(){
  it('should take a geojson file and output a csv file', function(done){
    geojson2csv(__dirname+'/in.geojson', __dirname+'/out.csv', function(err){
      if(err) throw err
      done()
    })
  })
})