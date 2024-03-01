var engine = getEngineList()[0];
var index = 0;
var helangSearch = { 
    els:{},
    searchIndex:0,
    hot:{
        // 导航列表
        list: engine.list,
        // 搜索引擎
        href: getEngineList(),
    },
    /* 初始化 */
    init:function(){
        // 聚焦input
        document.getElementById("search-input").focus();
        // 搜索框上的logo
        var logo = document.getElementById("logo");
        logo.style.backgroundImage = "url(img/logo" + Math.floor(Math.random()*10) + ".gif)";
        var _this = this;
        this.els={
            pickerBtn:$(".picker"),
            pickerList:$(".picker-list"),
            logo:$(".logo"),
            hotList:$(".hot-list"),
            input:$("#search-input"),
            button:$(".search")
        };

        // 设置热门搜索列表
        setEngineList();

        // 注册事件
        // 搜索类别选择按钮
        this.els.pickerBtn.click(function () {
            if(_this.els.pickerList.is(':hidden')) {
                setTimeout(function () {
                    _this.els.pickerList.show();
                },100);
            }
        });

        // 搜索类别选择列表
        this.els.pickerList.on("click",">li",function () {
            _this.els.logo.css("background-image",('url(img/'+$(this).data("logo")+')'));
            _this.searchIndex=$(this).index();
            _this.els.pickerBtn.html($(this).html())
            setEngineList();
        });

        // 搜索 输入框 点击*/
        this.els.input.click(function () {
            setTimeout(function () {
                _this.els.hotList.show();
            },100);
        });

        // 搜索 输入框 输入
        this.els.input.on("input",function () {
            _this.els.hotList.show();
            index = -1;
            if($(this).val()){
                if(_this.searchIndex === 1) {
                    // 翻译不走快排
                    setEngineList();
                } else {
                    var engine = getEngineList()[_this.searchIndex];
                    // 搜索预览
                    var hotList = engine.list;
                    var serachList = new Array();
                    for(var i = 0; i < hotList.length; i++) {
                        var flag = getSimilarity($(this).val(), hotList[i][1]);
                        if(flag && hotList[i][0] != -1) {
                            // 设置匹配度排序权值
                            hotList[i][0] = flag; 
                            serachList.push(hotList[i]);
                        }
                    }
                    // 根据权值快排
                    serachList = quickSort(serachList);
                    if (!serachList.length) {
                        _this.els.hotList.hide();
                    }

                    setSearchList(serachList);
                }
            } else {
                setEngineList();
            }
        });

        // 文档
        $(document).click(function () {
            if(_this.searchIndex !== 1) {
                _this.els.pickerList.hide();
                _this.els.hotList.hide();
            }
        });

        // 搜索按钮
        this.els.button.click(function () {
            window.location.href = engine.engine + dealSpecial(_this.els.input.val());
        });
        $('#search-input').bind('keypress', function (event) {
            if(event.keyCode == 13) {
            window.location.href = engine.engine + dealSpecial(_this.els.input.val());            }
        });
    }
};