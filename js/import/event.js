// 按键监听
document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
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
        setEngineList(helangSearch);
    }
    // esc 隐藏导航列表/获取焦点
    if(e.keyCode == 27) {
        index = -1;
        helangSearch.els.hotList.hide();
        document.getElementById("search-input").focus();
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
        index == -1 ? document.getElementById("search-input").focus() : as[index].focus({preventScroll:false});
    }
}