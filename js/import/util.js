// 图片无法正常显示使用默认图片
function imgerrorfun(){ 
    var img = event.srcElement; 
    img.src = "favicon.ico";
    img.onerror = null; 
} 

// 获取两个字符串的相似度
function getSimilarity(s, t) {
  if (!s || !t) {
    return 0
  }
  s = s.toLowerCase();
  t = t.toLowerCase();
  if(s === t){
    return 100;
  }
  var l = s.length > t.length ? s.length : t.length
  var n = s.length
  var m = t.length
  var d = []
  var min = function (a, b, c) {
    return a < b ? (a < c ? a : c) : (b < c ? b : c)
  }
  var i, j, si, tj, cost
  if (n === 0) return m
  if (m === 0) return n
  for (i = 0; i <= n; i++) {
    d[i] = []
    d[i][0] = i
  }
  for (j = 0; j <= m; j++) {
    d[0][j] = j
  }
  for (i = 1; i <= n; i++) {
    si = s.charAt(i - 1)
    for (j = 1; j <= m; j++) {
      tj = t.charAt(j - 1)
      if (si === tj) {
        cost = 0
      } else {
        cost = 1
      }
      d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost)
    }
  }
  return (1 - d[n][m] / l) * 100
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

// 发送请求
function ajax(type, url, parmas, callback) {
    //创建ajax引擎对象
    let xhr = new XMLHttpRequest();
    //处理参数,定义一个空数组
    let arr = [];
    //遍历对象，拼接到数组中
    for (const key in parmas) {
        if (Object.hasOwnProperty.call(parmas, key)) {
            arr.push(key + "=" + parmas[key]);                   
        }
    }
    parmas = arr.join("&");

    if (type == "get") {
        //配置请求方式和请求地址
        xhr.open(type, url + "?"+ parmas);
        // 发送请求
        xhr.send();
    } else {
        //配置请求方式和请求地址
        xhr.open(type, url);
        //请求头
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // 发送请求
        xhr.send(parmas);
    }

    // 监听状态变化和接收数据
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // 处理数据
            return JSON.parse(xhr.responseText);
        }
    }

}
