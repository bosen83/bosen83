// 搜索引擎
function getEngine() {
	return [
		// 必应
        'https://www.bing.com/search?q=',
        // 百度翻译
        'https://fanyi.baidu.com/translate?query=&keyfrom=baidu&smartresult=dict&lang=auto/#en/zh/',
        // linux命令
        'https://linux.cmsblogs.cn/list.html#!kw=',
    ];
}

// 引擎扩展
function engineExtend(search, extend) {
    setSearchList(search, search.hot.list);
    if(search.searchIndex != 0) {
        setSearchList(search, extend);
    }
}