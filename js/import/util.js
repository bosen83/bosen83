// 图片无法正常显示使用默认图片
function imgerrorfun(){ 
    var img = event.srcElement; 
    img.src = "favicon.ico";
    img.onerror = null; 
} 

// 获取两个字符串的相似度
function getSimilarity(str1, str2) {
    let sameNum = 0;
    for (let i = 0; i < str1.length; i++) {
        for(let j = 0; j < str2.length; j++){
            if(str1[i].toLowerCase() === str2[j].toLowerCase()) {
                sameNum++;
                break
            }
        }
    }
    let length = str1.length > str2.length ? str1.length : str2.length;
    return (sameNum/length) * 100 || 0;
}

// 根据权值快排
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] >= pivot[0]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};

// 获取网页图标
function getFavicon(href) { 
    var reg = new RegExp(/(\w+):\/\/([^/:]+)(:\d*)?/)
    let matchObj = href.match(reg)
    if (matchObj) {
      return matchObj[0] + '/favicon.ico'
    } else {
      return null
    }
}

// 输入框特殊符号处理
function dealSpecial(string) {
    return string.replace(/\%/g,'%25').replace(/\#/g,'%23').replace(/\+/g,'%2B').replace(/\"/g,'%22').replace(/\'/g, '%27').replace(/\//g,'%2F').replace(' ','+').replace(/\?/g,'%3F').replace(/\&/g,'%26').replace(/\=/g,'%3D');
}
