// 导航列表
function getDefaultList() {
	return [
		[-1, '🎈网站类🎈', ''],
	    [0, 'Leetcode - 算法练习平台', 'https://leetcode.cn/problemset/all/'],
	    [0, '大米星球 - 影视网站', 'https://www.dmdy1.vip/'],
	    [0, 'Runoob - 菜鸟教程', 'https://www.runoob.com/'],
	    [0, 'W3school - Web技术教程', 'https://www.w3school.com.cn/'],
	    [0, 'Gitee - 基于Git的代码托管研发平台', 'https://gitee.com/'],
	    [0, 'Github - Where the world builds software', 'https://github.com/'],
	    [-1, '🛠️工具类🛠️', ''],
	    [0, 'Photopea - 在线PS', 'https://www.gaituya.com/ps/'],
	    [0, 'ProcessOn - 免费在线作图', 'https://www.processon.com/diagrams'],
	    [0, 'MD5 - 加密工具', 'https://www.toolhelper.cn/DigestAlgorithm/MD5'],
	    [0, 'Json - 格式化', 'https://www.toolhelper.cn/JSON/JSONFormat'],
	    [0, 'Sql - 格式化', 'https://www.toolhelper.cn/Format/SqlFormat'],
	    [0, 'Cron - 表达式生成器', 'https://www.toolscat.com/dev/cron'],
	    [0, 'Hex - 进制转换', 'https://tool.lu/hexconvert'],
	    [0, 'Timestamp - 时间戳', 'https://tool.lu/timestamp/'],
	    [0, 'Regex - 正则表达式工具', 'https://c.runoob.com/front-end/854/'],
	    [0, 'QrCOde - 草料二维码生成器', 'https://cli.im/'],
	    [0, 'RGB - 颜色代码生成器', 'https://htmlcolorcodes.com/color-picker/'],
	    [0, 'RunCode - 在线编辑工具', 'https://www.json.cn/runcode/'],
	    [0, 'WebSocket - 在线测试', 'http://wstool.jackxiang.com/'],
	    [0, 'jQuery - 插件库', 'https://www.jq22.com/'],
	    [0, 'ECharts - 开源可视化图表库', 'https://echarts.apache.org/examples/zh/index.html'],
	    [0, 'QQ - 邮箱', 'http://mail.qq.com/'],
	    [0, '163 - 邮箱', 'http://mail.163.com/'],
	    [0, '阿里云 - Maven 仓库', 'https://developer.aliyun.com/mvn/guide'],
	    [0, '网易云 - Docker 镜像中心', 'https://c.163yun.com/hub#/home'],
	    [0, 'Docker - 官方镜像中心', 'https://hub.docker.com/'],
	    [0, 'Iconfont - 阿里巴巴矢量图标库', 'https://www.iconfont.cn/'],
	    [0, 'Data Structure Visualizations', 'https://www.cs.usfca.edu/~galles/visualization/Algorithms.html'],
	    [-1, '📖文档类📖', ''],
	    [0, 'ThinkPHP - 开发手册', 'https://www.kancloud.cn/manual/thinkphp5/118003'],
	    [0, '微信 - 官方文档', 'https://developers.weixin.qq.com/doc/'],
	    [0, '支付宝 - 开发文档', 'https://open.alipay.com/developmentDocument.htm'],
	    [0, 'Vue3 中文文档', 'https://www.javascriptc.com/vue3js/'],
	    [0, 'Node.js - 菜鸟教程', 'https://www.runoob.com/nodejs/nodejs-tutorial.html'],
	    [0, 'ElementUI - 文档', 'https://element-plus.org/zh-CN/#/zh-CN'],
	    [0, '码上登录 - API 文档', 'http://login.vicy.cn/apiWord.html'],
	    [0, 'Redis - 命令手册', 'https://www.redis.net.cn/order/'],
	    [0, 'HTTP - 状态码详解', 'https://www.toolscat.com/wiki/http'],
	    [0, 'Keycode - 键码对照表', 'https://tool.ip138.com/keycode/'],
	    [0, 'ASCII - 对照表', 'https://www.toolscat.com/wiki/ascii'],
	    [0, 'HTML - 特殊转义字符对照表', 'https://www.toolscat.com/wiki/html'],
	    [0, 'Content-Type - 参照表', 'https://www.toolscat.com/wiki/http-content-type'],
	    [0, 'Git - 提交规范', 'https://zhuanlan.zhihu.com/p/67804026'],
	    [0, '代码随想录', 'https://programmercarl.com/'],
	    [0, '开源 API 大全', 'https://api.aa1.cn/'],
	    [0, 'Java - 面试题十万字总结', 'https://www.aliyundrive.com/s/Sgy5cydiDsH'],
	    [0, 'Learning Git Branching', 'https://learngitbranching.js.org/'],
	    [-1, '🍔软件类🍔', ''],
	    [0, 'IDEA - Java 编辑器', 'https://www.jetbrains.com/idea/'],
	    [0, 'PhpStorm - PHP 编辑器', 'https://www.jetbrains.com/phpstorm/'],
	    [0, 'DataGrip - 数据库管理工具', 'https://www.jetbrains.com/zh-cn/datagrip/'],
	    [0, 'Navicat - 数据库管理工具', 'https://www.navicat.com.cn/download/navicat-premium'],
	    [0, 'Sublime - 超轻量级文本编辑器', 'https://www.sublimetext.com/'],
	    [0, 'NxShell - 跨平台 SSH 终端工具', 'https://github.com/nxshell/nxshell/releases'],
	    [0, 'Windows - 终端工具', 'https://github.com/microsoft/terminal/releases'],
	    [0, 'Git - 版本管理工具', 'https://git-scm.com/download'],
	    [0, 'Sourcetree - Git 可视化工具', 'https://www.sourcetreeapp.com/'],
	    [0, 'Postman - API 接口测试神器', 'https://www.postman.com/downloads/'],
	    [0, 'Xmind - 思维导图', 'https://xmind.cn/'],
	    [0, 'Another - Redis 可视化工具', 'https://github.com/qishibo/AnotherRedisDesktopManager/releases'],
	    [0, 'WPS Office - 个人版', 'https://www.wps.cn/product/wps2016/'],
	    [0, 'Typora - Markdown 编辑器', 'http://www.itmind.net/13398.html'],            
	    [0, '向日葵 - 远程控制软件', 'https://sunlogin.oray.com/'], 
	    [0, '7-Zip - 压缩包解压工具', 'https://7-zip.org/'],
	    [0, 'Geek - 软件卸载工具', 'https://geekuninstaller.com/'],              
	    [0, 'Everything - 文件查找工具', 'https://www.voidtools.com/zh-cn/'],   
	    [0, 'Visual-NMP - 集成环境', 'https://visual-nmp.en.softonic.com/'],
	    [0, 'AD - 钙奶', 'https://gainai.adgn.top/'],
	    [0, 'Byrut 二号宝藏网站', 'https://byrut.org/'],
	    [0, 'Windows - 激活工具', 'https://pan.baidu.com/s/1G9XTl2ngAPo8WlHhs8dkiQ?pwd=9j23'],
	    [0, 'Navicat - 激活工具', 'https://pan.baidu.com/s/1707DPwqkXQ0SqzAvXRmtXA?pwd=7jxc'],
	    [0, 'IntelliJ - 激活工具', 'https://pan.baidu.com/s/1-VYOPcC9QNT-1_41gMxP5A?pwd=rzqa'],
	];
}

// 设置搜索导航列表
function setSearchList(serachList) {
    helangSearch.els.hotList.html(function () {
    	var flag = '&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;';
        var str = '';
        var num = 0;
        var arr = [-1, 1, 2];
        $.each(serachList, function (index, item) {
        	if(arr.indexOf(item[0]) !== -1) {
        		if(item[0] == -1) {
        			item[1] = flag + '<strong><i>' +item[1] + '</i></strong>';
        		}
        		str +='<a style="padding: 10px">';
        	} else {
        		str +='<a href="' + item[2] + '">';
        	}
        	if(item[0] !== -1) {
        		str +='<div class="list-num number">'+(++num)+'</div>';
        	}
            str += item[2] != '' ? "<img class='list-img' onerror='imgerrorfun();' src=" 
                + getFavicon(item[2]) + ">" : '';
            str +='<div class="list-url">' + item[1] + '</div>';
            str +='</a>';
        });
        return str;
    });
}

// 翻译
function getFanyiList() {
	var fanyi = '<span style="user-select:none">👻翻译结果：</span>';
	var list = [
		[1, fanyi + '<strong><i>🐼请在上方输入文本🐼</i></strong>', '']
	];
	if(!helangSearch) {
		return list;
	}
	if(helangSearch.searchIndex === 1) {
		$.ajax({
			url:"https://tools.mgtv100.com/external/v1/baidu_translate",
			type: "post",
			data: {
				text: helangSearch.els.input.val()
			},
			dataType: "json",
			success:function(res){
				if(res.data.trans_result == '') {
					return list;
				}
				list[0][1] = fanyi + '<strong><i>' + res.data.trans_result + '</i></strong>';
				setSearchList(list);
			}
		});
	}
	return list;
}

// AI
var myName = '<strong style="color:#66DDE2">🧙 ME </strong>';
var aiName = '<strong style="color:#66E2BA">🌏 AI </strong>';
var aiList = [];
function getAiList() {
	if(aiList.length === 0) {
		aiList.unshift([2, aiName + '：请输入内容后回车发送', '']);
	}
	return aiList;
}
function setAiList() {
	aiList.unshift([2, myName + '：' + helangSearch.els.input.val(), '']);
	aiList.unshift([2, aiName + '：' + '正在思考中，请稍后 ~', '']);
	marked.setOptions({
	  highlight: function (code) {
	    return hljs.highlightAuto(code).value;
	  }
	});
	$.ajax({
		url: 'https://api.lolimi.cn/API/AI/gemini.php?msg=' + helangSearch.els.input.val(),
		type: 'get',
		success:function(res){
			aiList[0] = [2, aiName + '：' + marked(res.data.output), ''];
			setEngineList();
		}
	});
	setEngineList();
	document.getElementById("search-input").value = '';
}