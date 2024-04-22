// 搜索引擎
function getEngineList() {
    return [
        {
            // 必应
            'engine': 'https://www.bing.com/search?q=',
            'list': getDefaultList() 
        },
        {
            // 翻译
            'engine': 'https://fanyi.baidu.com/#en/zh/',
            'list': getFanyiList()
        },
        {
            // AI
            'engine': '#',
            'list': getAiList()
        },
    ];
}

// 设置引擎
function setEngineList() {
    engine = getEngineList()[helangSearch.searchIndex];
    setSearchList(engine.list);
    helangSearch.els.pickerList.hide();
    helangSearch.els.hotList.show();
    document.getElementById("search-input").focus();
}