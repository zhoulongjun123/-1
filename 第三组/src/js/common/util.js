
/**
 * 得到id
 * 1 获取location.search数据
 * 2 去除？符号
 * 3 切割字符串
 */
function getSearch(key){
	var dataStr = location.search.slice(1);
	var dataArr = dataStr.split('&');
	var tempArr;dataObj={};
	for(var i = 0;i<dataArr.length;i++){
		tempArr = dataArr[i].split('=');
		dataObj[tempArr[0]]=tempArr[1];
	}
	return key == null? dataObj:dataObj[key];
}

module.exports.getSearch = getSearch;