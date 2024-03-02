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
    helangSearch.els.pickerList.hide();
    helangSearch.els.hotList.show();
    document.getElementById("search-input").focus();
}