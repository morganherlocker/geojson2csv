var geojson2shape = require('../index.js'),
    should = require('should')

describe('geojson2shape', function(){
  it('should take a geojson file and output a csv file', function(done){
    geojson2shape(__dirname+'/in.geojson', __dirname+'/out.csv', function(err){
      if(err) throw err
      done()
    })
  })
})