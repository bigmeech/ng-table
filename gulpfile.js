var gulp = require('gulp');
var Dgeni = require('dgeni');
var dgeni_config = require('./docs/config');

gulp.task('default', function(){
    var dgeni = new Dgeni([dgeni_config]);
    return dgeni.generate().then(function(docs){
        console.log(docs.length, 'docs generated');
    })
});
