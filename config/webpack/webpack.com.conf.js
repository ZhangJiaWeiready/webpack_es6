let titleFun = function(chunkName,title){
    let titleDef = '一个励志减肥的胖子';
    if(chunkName.indexOf('index') !==-1){
        return titleDef;
    }else{
        return title + '_' + titleDef;
    }
};
module.exports = {
    titleFun:titleFun
};