describe('geojson2csv cli', function() {
  it('should take a geojson file and output a csv file', function(done) {
    var exec = require('child_process').exec;
    var cmd = __dirname+'/../bin/geojson2csv '+__dirname+'/in.geojson ' + __dirname+'/out.csv';
    exec(cmd, function(error, stdout, stderr) {
      if(error) throw error;
      done();
    });
  });
});
