var _ = require('lodash');
module.exports = function componentsDataProcessor() {
    return {
        $runBefore: ['rendering-docs'],
        $runAfter: ['paths-computed'],
        $process: function (docs) {

            var navigation = [
                {
                    name: 'gettingStarted',
                    path: '/get-started',
                    items: []
                },
                {
                    name:'api',
                    path:'/api',
                    items:[]
                },
                {
                    name:'examples',
                    path:'/examples',
                    items:[]
                }
            ];

            var pages = _.filter(function (doc) {
                return doc.area;
            });

            var apiNav = _.filter(pages, function (page) {
                return page.area === 'api';
            });

            docs.push({
                template: 'index.template.html',
                outputPath: 'index.html',
                path: 'index.html'
            });

            docs.push({
                template: 'get-started.template.html',
                outputPath: 'partials/get-started.html',
                path: 'partials/get-started.html'
            });

            docs.push({
                template: 'nav.template.html',
                outputPath: 'partials/nav.html',
                path: 'partials/nav.html'
            });

            docs.push({
                name: 'NAVSERVICE',
                template: 'constants.template.js',
                outputPath: 'app/js/nav-service.js',
                path: 'app/js/nav-service.js',
                items: navigation
            });
        }
    }
};
