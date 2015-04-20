var Package = require('dgeni').Package;
var path = require('canonical-path');
var _ = require('lodash');
var projectPath = path.resolve(__dirname, '../');
var packagePath = __dirname;

module.exports = new Package('ng-table', [
    require('dgeni-packages/ngdoc'),
    require('dgeni-packages/nunjucks')
])

    .processor(require('./processors/indexPage'))
    .processor(require('./processors/componentsData'))

    .config(function (log, templateEngine, templateFinder) {
        templateEngine.config.tags = {
            variableStart: '{$',
            variableEnd: '$}'
        };

        templateFinder.templateFolders = [
            path.resolve(packagePath, 'template'),
            path.resolve(packagePath, 'template/ngdoc')
        ]
    })
    .config(function(readFilesProcessor, writeFilesProcessor){
        readFilesProcessor.basePath = projectPath;
        readFilesProcessor.sourceFiles = [
            { include:'dist/ng-table.js', basePath:'dist' }
        ];
        writeFilesProcessor.outputFolder = 'dist/docs'
    })
    .config(function(generateComponentGroupsProcessor){
        generateComponentGroupsProcessor.$enabled = false;
    });

