var _ = require('lodash');
module.exports = function componentsDataProcessor(){
    return{
        $runBefore:['rendering-docs'],
        $runAfter:['paths-computed'],
        $process:function(docs){
            var nav = {
                getStarted:'GetStarted',
                api:'API Documentation',
                demo:'Demo'
            };

            var pages = _.filter(function(doc){
                return doc.area;
            });

            var apiNav = _.filter(pages, function(page){
                return page.area === 'api';
            });

            var startNav = [{
                name:'gettingStarted'
            }]

            docs.push({
                template:'index.template.html',
                outputPath:'index.html',
                path:'index.html'
            });

            docs.push({
                template:'get-started.template.html',
                outputPath:'get-started.html',
                path:'get-started.html'
            });

            docs.push({
                template:'nav.template.html',
                outputPath:'nav.html',
                path:'nav.html'
            });

            docs.push({
                template:'nav-service.js',
                ouputPath:'js/NAVSERVICE.js',
                path:'js/NAVSERVICE.js'
            });
        }
    }
};
