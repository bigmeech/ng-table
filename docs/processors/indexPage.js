module.exports = function indexPageProcessor(){
    return{
        $runBefore:['rendering-docs'],
        $runAfter:['componentsDataProcessor'],
        $process:function(docs){
        }
    }
};
