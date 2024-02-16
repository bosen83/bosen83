/** 按键监听 */
document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    // 输入框获取焦点
    if(index == -1) {
        document.getElementById("search-input").focus();
    }
    // ctrl + 回车 切换搜索引擎
    if(e.ctrlKey && e.keyCode == 13) {
        var engine = document.getElementById('engine').getElementsByTagName('li');
        helangSearch.searchIndex = 
            helangSearch.searchIndex == 
                helangSearch.hot.href.length - 1 ? 0 : helangSearch.searchIndex + 1;
        for(var i = 0; i < helangSearch.hot.href.length; i++) {
            if(i == helangSearch.searchIndex) {
                helangSearch.els.pickerBtn.html(engine[i].innerText);
            }
        }
    }
    // esc 隐藏导航列表
    if(e.keyCode == 27) {
        index = -1;
        helangSearch.els.hotList.hide();
    }
    // ↑ ↓ 显示导航列表/选择导航
    if(e.keyCode == 38 || e.keyCode == 40) {
        var as = document.getElementById("hot-list").getElementsByTagName("a");
        helangSearch.els.hotList.show();
        if(e.keyCode == 38) {
            index = index > -1 ? index - 1 : -1;
        } else {
            index = index < as.length - 1 ? index + 1 : as.length - 1; 
        }
        index == -1 ? document.getElementById("search-input").focus() : as[index].focus();
    }
}

/** 设置搜索导航列表 */
function setSearchList(helangSearch, serachList) {
    helangSearch.els.hotList.html(function () {
        var str='';
        $.each(serachList, function (index,item) {
            str +='<a href="' + item[2] + '">';
            str +='<div class="number" style="color: #6BB0EC">'+(index+1)+'</div>';
            str += item[2] != '' ? "<img onerror='imgerrorfun();' style='width: 18px; height: 18px; float: left; padding: 5px; border-radius: 100%' src=" 
            	+ getFavicon(item[2]) + ">" : '';
            str +='<div style="color: #6b6e74">' + item[1] + '</div>';
            str +='</a>';
        });
        return str;
    });
}

/** 图片无法正常显示使用默认图片 */
function imgerrorfun(){ 
    var img = event.srcElement; 
    img.src = "favicon.ico";
    img.onerror = null; 
} 

/** 获取两个字符串的相似度 */
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

/** 根据权值快排 */
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

/** 获取网页图标 */
function getFavicon(href) { 
    var reg = new RegExp(/(\w+):\/\/([^/:]+)(:\d*)?/)
    let matchObj = href.match(reg)
    if (matchObj) {
      return matchObj[0] + '/favicon.ico'
    } else {
      return null
    }
}

/** 特殊符号的处理 */
function dealSpecial(string) {
    return string.replace(/\%/g,'%25').replace(/\#/g,'%23').replace(/\+/g,'%2B').replace(/\"/g,'%22').replace(/\'/g, '%27').replace(/\//g,'%2F').replace(' ','+').replace(/\?/g,'%3F').replace(/\&/g,'%26').replace(/\=/g,'%3D');
}
