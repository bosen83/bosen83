// 搜索引擎
function getEngineList() {
    return [
        {
            // 必应
            'engine': 'https://www.bing.com/search?q=',
            'list': getDefaultList() 
        },
        {
            // 有道
            'engine': 'https://fanyi.youdao.com/index.html#/#',
            'list': getFanyiList()
        },
        {
            // Linux 命令列表
            'engine': 'https://linux.cmsblogs.cn/list.html#!kw=',
            'list': getLinuxList()
        },
    ];
}

// 设置引擎
function setEngineList() {
    engine = getEngineList()[helangSearch.searchIndex];
    setSearchList(engine.list);
    helangSearch.els.hotList.show();
    document.getElementById("search-input").focus();
}

// 引擎扩展
function engineExtend(search, extend) {
    setSearchList(search, search.hot.list);
    if(search.searchIndex != 0) {
        setSearchList(search, extend);
    }
}