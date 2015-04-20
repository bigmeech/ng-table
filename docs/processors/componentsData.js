module.exports = function componentsDataProcessor(){
    return{
        $runBefore:['rendering-docs'],
        $runAfter:['paths-computed'],
        $process:function(docs){
            console.log(docs);
        }
    }
};
