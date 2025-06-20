var siz2;
/*数据初始化-开始*/
$("#map1").html(beihai)
//中间板块切换（默认显示中国地图）
$(".bodyMiddle .navbar").find("span").each(function(index, item) {
	$(this).click(function() {
		$(".bodyMiddle .navbar").find("span").removeClass("active");
		$(".mapmain").find(".map").hide();
		$(this).addClass("active");
		$(".mapmain").find(".map").eq(index).fadeIn();
	})
})
//左边成交动态板块切换（默认显示猪板块内容）
for (var i = 0; i < CJstatus[1].length; i++) {
	$(".liushuihaoul .moveul").html((index, html) => {
		return html += `<li>
				<span>${CJstatus[1][i].num}</span>
				<span>${CJstatus[1][i].name}</span>
				<span>${CJstatus[1][i].cont}</span>
				<span>${CJstatus[1][i].weight}</span>
				<span>${CJstatus[1][i].time}</span>
				<span>${CJstatus[1][i].state}</span>
				</li>`
	})
}
siz2 = $(".liushuihaoul .moveul").find("li").length;
$(".liushuihaoul .moveul").css('height', $(".liushuihaoul .moveul").find("li").length * 50);
$(".liushuihaoul .moveul").html(function(index, value) {
	return value + value;
})
// 初始化 default 部分内容
$(document).ready(function () {
    const defaultStatus = CJstatus[0][0]; // 默认加载中餐板块的第一个美食
    $(".bodyRightTop .default .name").text(defaultStatus.name || "美食名称");
    $(".bodyRightTop .default .intro").text(defaultStatus.intro || "美食介绍");
});

// 导航栏切换事件
$(document).ready(function () {
    // 初始化 default 部分内容为西餐板块的第一个美食
    const defaultStatus = CJstatus[1][0]; // 默认加载西餐板块的第一个美食
    $(".bodyRightTop .default .name").text(defaultStatus.name || "美食名称");
    $(".bodyRightTop .default .intro").text(defaultStatus.intro || "美食介绍");

    // 渲染导航栏对应的流水号列表
    const renderList = (index) => {
        const Status = CJstatus[index];
        const $moveul = $(".bodyRight .bodyRightTopBG .liushuihaoul .moveul");
        $moveul.html(""); // 清空列表

        // 动态生成列表项
        Status.forEach((item) => {
            $moveul.append(`
                <li>
                    <span>${item.name || "未知名称"}</span>
                    <span>${item.intro || "暂无介绍"}</span>
                </li>
            `);
        });

        // 确保滚动区域高度自适应内容
        const listHeight = $moveul.outerHeight();
        $(".bodyRight .bodyRightTopBG .liushuihaoul").css("height", listHeight > 300 ? 300 : listHeight); // 最大高度限制为 300px

        // 添加循环滚动功能
        const $items = $moveul.find("li");
        if ($items.length > 0) {
            const itemHeight = $items.outerHeight();
            setInterval(() => {
                $moveul.animate(
                    { top: `-=${itemHeight}px` },
                    500,
                    function () {
                        const $firstItem = $moveul.find("li").first();
                        $moveul.append($firstItem); // 将第一个元素移到最后
                        $moveul.css("top", 0); // 重置位置
                    }
                );
            }, 3000); // 每3秒滚动一次
        }
    };

    // 默认加载西餐板块
    renderList(1);

    // 导航栏点击事件
    $(".bodyRightTop .navbar").find("span").each(function (index) {
        $(this).click(function () {
            $(".bodyRightTop .navbar").find("span").removeClass("active");
            $(this).addClass("active");

            // 更新 default 部分内容
            const Status = CJstatus[index];
            if (Status.length > 0) {
                $(".bodyRightTop .default .name").text(Status[0].name || "美食名称");
                $(".bodyRightTop .default .intro").text(Status[0].intro || "美食介绍");
            }

            // 渲染对应的流水号列表
            renderList(index);
        });
    });
});

//北海地图hove样式
var path = document.getElementsByTagName("path");
for (let i = 0; i < path.length; i++) {
	path[i].onmouseenter = function() {
		path[i].style.fill = "#6AE5E5";
		path[i].style.stroke = "#3246FB";
		path[i].style.strokeWidth = "2.5";

	}
	path[i].onmouseleave = function() {
		path[i].style.fill = "";
		path[i].style.strokeWidth = "2";
		path[i].style.stroke = "";
	}
}
//牧草产能区域分布
for (var i = 0; i < ChanNeng.length; i++) {
	$("#list").html(function(index, html) {
		return html += `<li><p>${ChanNeng[i].name}</p><span>${ChanNeng[i].num}</span></li>`
	})
};
//数据中心
for (var i = 0; i < DataCenter.length; i++) {
	$(".Data").html(function(index, html) {
		return html += `<li><span>${DataCenter[i].num}</span><p>${DataCenter[i].name}</p><i></i></li>`
	})
};
//占比小方块
for (var i = 0; i < 10; i++) {
	$(".GPZB").find("ul").html(function(index, html) {
		return html += `<li></li>`
	})
};
//六个竖直小方块组
for (var i = 0; i < 13; i++) {
	$(".fangkuai").html(function(index, html) {
		return html += `<li></li>`
	})
};
//时间刻度
for (var i = 0; i < 13; i++) {
	$(".kedu").find("ul").html(function(index, html) {
		return html += `<li></li>`
	})
};

var show = true;
/*数据初始化-开始*/
function rdm(min, max) {
	return parseInt(Math.random() * (max - min) + min);
}

function Show(obj, parent, scale, state) {
	if (show) {
		$(".mask").fadeIn(0);
		$("#animations").prependTo($(".mask"))
		$(obj).parent().appendTo($(".maskContent")).css("transform", "scale(" + scale + ")");
		$(obj).text("-").addClass("cancle")

		if (parent == 'footparent1') {
			console.log($("#jiage").find("canvas"))
			$("#jiage").find("canvas").css("z-index", "-1")
		}
		if (parent == 'footparent2') {
			$("#CJpie").find("canvas").css("z-index", "-1")
		}

	} else {
		if (state == "before") {
			$(obj).parent().prependTo($('.' + parent));
		} else if (state == "after") {
			$(obj).parent().appendTo($('.' + parent));
		}
		$(".mask").fadeOut(300)
		$("#animations").prependTo($(".content"));
		$(obj).parent().css("transform", "");
		$(obj).text("+").removeClass("cancle")

		if (parent == 'footparent1') {
			console.log($("#jiage").find("canvas"))
			$("#jiage").find("canvas").css("z-index", "0")
		}
		if (parent == 'footparent2') {
			$("#CJpie").find("canvas").css("z-index", "0")
		}
	}
	show = !show;
}

// ad()
guapai($(".guapai")[0]);
guapaizhanbi($(".left-top-right-circle")[0]);

//时间
(function() {
	let adata = new Date();
	let weekarr = ["日", "一", "二", "三", "四", "五", "六"];
	let time = adata.getHours() + ":" + Fill(adata.getMinutes()) + ":" + Fill(adata.getSeconds());
	let year = adata.getFullYear() + "年" + (adata.getMonth() + 1) + "月" + adata.getDate() + "日";
	let week = adata.getDay();

	function Fill(data) { //分钟秒钟空位补0
		if (data < 10) {
			return "0" + data;
		} else {
			return data;
		}
	}
	$("#time").text(time);
	$("#year").text(year);
	$("#week").text("星期" + weekarr[week]);
	setInterval(function() {
		adata = new Date();
		weekarr = ["日", "一", "二", "三", "四", "五", "六"];
		time = adata.getHours() + ":" + Fill(adata.getMinutes()) + ":" + Fill(adata.getSeconds());
		year = adata.getFullYear() + "年" + (adata.getMonth() + 1) + "月" + adata.getDate() + "日";
		week = adata.getDay();
		$("#time").text(time);
		$("#year").text(year);
		$("#week").text("星期" + weekarr[week]);
	}, 1000)
	//天气接口
	let wetherarr = ["多云转阵雨", "32~28℃", "优"];
	$("#sky").text(wetherarr[0])
	$("#temperatur").text(wetherarr[1])
	$("#state").text(wetherarr[2])
}());
//挂牌
function guapai(obj) {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(obj);
	// 指定图表的配置项和数据
	var option = {
		title: {
			text: ''
		},
		tooltip: {},
		legend: {
			data: ['男性喜爱菜品', "女性喜爱菜品", "共同喜爱菜品"],
			bottom: 30,
			textStyle: { //字体样式
				color: "#fff",
				fontSize: 14,
				fontWeight: "lighter"
			},
			itemGap: 56, //图块间隙
			itemWidth: 44, //图块宽
			itemHeight: 18 //图块高
		},
		grid: {
			top: "10%",
			left: '1%', //折线框左边距
			right: '10%', //折线框右边距
			bottom: '20%', //折线框下边距
			containLabel: true
		},
		xAxis: {
			type: 'category',
			name: "菜品",
			data: ["川菜", "粤菜", "湘菜", "鲁菜", "徽菜", "闽菜", "浙菜"],
			nameTextStyle: { //坐标轴名称样式
				color: "#fff",
				fontSize: "14",
				backgroundColor: "" //文字块背景色
			},
			nameGap: 20, //坐标名称与轴线的距离
			axisTick: { //坐标刻度线样式
				lineStyle: {
					color: "#fff"
				}
			},
			axisLabel: { //坐标轴刻度标签名样式
				color: "#fff",
				fontSize: "12",
				rotate: 0, //文字倾斜(当刻度标签名过长时使用)
				interval: 0 //显示全部                
			},
			axisLine: { //坐标轴线设置
				show: true,
				lineStyle: {
					color: "#fff",
					width: "2"
				},
				symbol: ["none", "arrow"], //坐标轴末端箭头
				symbolSize: [8, 20], //箭头高度和宽度
				symbolOffset: [0, 16] //箭头与轴线端点的距离
			},
			splitNumber: 7,
		},
		yAxis: {
			name: "数量",
			splitNumber: 8,
			nameTextStyle: { //坐标轴名称样式
				color: "#fff",
				fontSize: "14",
				backgroundColor: "" //文字块背景色
			},
			nameGap: 20, //坐标名称与轴线的距离
			axisLine: { //坐标轴线设置
				show: true,
				lineStyle: {
					color: "#fff",
					width: "2"
				},
				symbol: ["none", "arrow"], //坐标轴末端箭头
				symbolSize: [8, 20], //箭头高度和宽度
				symbolOffset: [0, 16] //箭头与轴线端点的距离
			},
			axisTick: { //坐标刻度线样式
				lineStyle: {
					color: "#fff"
				}
			},
			axisLabel: { //坐标轴刻度标签名样式
				color: "#fff",
				fontSize: "12"
			},
			splitLine: { //垂直分割线
				show: true,
				lineStyle: {
					color: "#02416D",
					width: "1"
				}
			},
		},
		series: [{
			name: '男性喜爱菜品',
			type: 'bar',
			color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
				offset: 0,
				color: '#3E3CB5'
			}, {
				offset: 1,
				color: '#D66BFD'
			}]),
			data: [200, 330, 440, 550, 660, 770, 880]
		}, {
			name: '女性喜爱菜品',
			type: 'bar',
			color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
				offset: 0,
				color: '#0D52A1'
			}, {
				offset: 1,
				color: '#09F6FD'
			}]),
			data: [880, 770, 660, 550, 440, 330, 220]
		}, {
			name: '共同喜爱菜品',
			type: 'bar',
			color: new echarts.graphic.LinearGradient(0, 0, 1, 0, //颜色线性渐变:Linear，（径向渐变：Radial）
				[{
					offset: 0,
					color: '#025B71'
				}, {
					offset: 1,
					color: '#3BFE91'
				}]
			),
			//barGap:0,                                           //条形组中各条形图之间的距离
			//barCategoryGap:100,                                   //条形组之间的距离
			data: [550, 420, 360, 750, 460, 660, 290],
			//barWidth:30,
			// barMaxWidth:30
		}]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	myChart.on('click',  function(param) {
		alert("欢迎您")
		setTimeout(function(){
			location.href = "https://gitee.com/iGaoWei/big-data-view";
		},20000);
	});
	// setInterval(function() {
	// 	myChart.refresh();
	// }, 2000)
};
//挂牌占比
function guapaizhanbi(obj, Index) {
	var echartdata = [515, 200, 100];
	var rich = {
		yellow: {
			color: "#ffc72b",
			fontSize: 18,
			padding: [2, 4],
			align: 'center'
		},
		total: {
			color: "#ffc72b",
			fontSize: 20,
			align: 'center'
		},
		white: {
			color: "#fff",
			align: 'center',
			fontSize: 16,
			padding: [10, 0]
		},
		blue: {
			color: '#49dff0',
			fontSize: 16,
			align: 'center'
		},
		hr: {
			borderColor: 'auto',
			width: '100%',
			borderWidth: 1,
			height: 0,
		}
	};
	var myChart = echarts.init(obj);
	var option = {
		tooltip: {
			trigger: 'item',
			formatter: "{b}: {c} ({d}%)"
		},
		series: [{
			type: 'pie',
			label: {
				fontSize: 24,
				normal: {
					color: "#fff",
					//formatter: '{b|{b}\n     {d}%}',
					formatter: function(params, ticket, callback) {
						var total = 0; //总数量
						var percent = 0; //占比
						echartdata.forEach(function(value, index) {
							total += value;
						});
						percent = ((params.value / total) * 100).toFixed(1);
						return '{white|' + params.name + '}\n\n{yellow|' + params.value + '}\n{blue|' + percent + '%}';
					},
					// borderWidth: 0,
					// borderRadius: 4,
					// shadowBlur:3,
					// shadowOffsetX: 2,
					// shadowOffsetY: 2,
					// shadowColor: '#999',
					padding: [0, -50],
					rich: rich
				}
			},
			labelLine: {
				lineStyle: {
					//color: auto
					width: 2
				},
				length: 20,
				length2: 50
			},
			radius: ['40%', '60%'],
			data: [{
				value: echartdata[0],
				itemStyle: {
					color: "#1D3EF9"
				},
				name: '川菜'
			}, {
				value: echartdata[1],
				itemStyle: {
					color: "#FBED14"
				},
				name: '湘菜'
			}, {
				value: echartdata[2],
				itemStyle: {
					color: "#3BF88F",
				},
				name: '粤菜'
			}]
		}, ]
	};
	myChart.setOption(option);
	var Oitem = $(".bodyLeftTopGPZB");
	var total = 650;
	var n = 0;
	run();

	function run() {
		for (var i = 0; i < echartdata.length; i++) {
			n = echartdata[i] / 100; //每个格子数值100,10个格子1000
			Oitem.each((index, item) => {
				$(item).find(".GPZB").eq(i).find("span").text(echartdata[i]);
				$(item).find(".GPZB").eq(i).find("li").each(function(ind, it) {
					if (ind <= n) {
						$(it).css("background", "#00A0E9")
					} else {
						$(it).css("background", "#1D2088")
					}
				})
			})
		}
	}
	//方块格子动画高亮特效
	Oitem.each((index, item) => {
		$(item).find(".GPZB").each(function(ind, it) {
			var _this = $(this);
			let t = 0;
			setInterval(function() {
				n = echartdata[ind] / 100; //每个格子数值100,10个格子1000
				$(it).find("li").each(function(inde, ite) {
					if (inde <= n) {
						$(ite).css("background", "#00A0E9");
						$(it).find("li").eq(t).css("background", "#FBED14");
					} else {
						$(ite).css("background", "#1D2088");
					}
				})
				t++;
				if (t > n + 1) t = 0;
			}, 300)
		})
	})
	setInterval(function() {
		echartdata[0] = Math.floor(Math.random() * 1000);
		echartdata[1] = Math.floor(Math.random() * 1000);
		echartdata[2] = Math.floor(Math.random() * 1000);
		option.series[0].data[0].value = echartdata[0];
		option.series[0].data[1].value = echartdata[1];
		option.series[0].data[2].value = echartdata[2];
		run()
		myChart.setOption(option);
	}, 5000)
}
//中国地图
(function() {
	var myChart = echarts.init($("#map")[0]);
	var option = {
		tooltip: { //鼠标hover是提示信息
			show: true, //不显示提示标签
			formatter: '{b}', //提示标签格式
			backgroundColor: "#ff7f50", //提示标签背景颜色
			textStyle: {
				color: "#fff",
				fontSize: "20"
			} //提示标签字体颜色
		},
		visualMap: { //视觉映射组件()
			type: "continuous", //连续型
			min: 0,
			max: 150,
			left: 990,
			top: 800,
			text: ['150', '0'], // 文本，默认为数值文本
			textGap: 10, //文本与图形之间的距离
			itemWidth: 40, //图形的宽
			itemHeight: 200, //突刺是哪个的高
			calculable: true, //是否显示拖动手柄
			textStyle: {
				color: "#fff",
				fontSize: 25,


			}, //省份标签字体颜色
			//align:"left",
			//inverse: true, //反向
			inRange: { //地图颜色变化
				color: ['#3246FB', '#24DD57', '#FDD52C']
			}
			// outOfRange:{
			// 	symbolSize: [100, 100]
			// }
		},
		series: [{
			type: 'map',
			color: "red",
			mapType: 'china',
			roam: "false", //是否开启缩放平移
			label: { //标签字体样式
				position: "inside",
				normal: { //正常情况下显示效果
					show: true, //显示省份标签
					textStyle: {
						color: "#fff",
						fontSize: 20
					} //省份标签字体颜色
				},
				emphasis: { //对应的鼠标悬浮效果
					show: true,
					textStyle: {
						color: "#800080"
					}
				}
			},
			itemStyle: {
				normal: {
					borderWidth: 2, //区域边框宽度
					borderColor: '#fff', //区域边框颜色
					//areaColor: "#ffefd5", //区域颜色
					fontSize: "30"
				},
				emphasis: {
					borderWidth: 2,
					borderColor: '#3246FB',
					//areaColor: "red",
				},
			},
			data: [{
				name: '北京烤鸭',
				value: 2500,
			}, {
				name: '狗不理包子',
				value: Math.round(Math.random() * 100)
			}, {
				name: '八宝鸭',
				value: Math.round(Math.random() * 100)
			}, {
				name: '毛血旺',
				value: Math.round(Math.random() * 100)
			}, {
				name: '金毛狮子鱼',
				value: Math.round(Math.random() * 100)
			}, {
				name: '牡丹燕菜',
				value: Math.round(Math.random() * 100)
			}, {
				name: '过桥米线',
				value: Math.round(Math.random() * 100)
			}, {
				name: '葱烧辽参',
				value: Math.round(Math.random() * 100)
			}, {
				name: '锅包肉',
				value: Math.round(Math.random() * 100)
			}, {
				name: '剁椒鱼头',
				value: Math.round(Math.random() * 100)
			}, {
				name: '臭鳜鱼',
				value: Math.round(Math.random() * 100)
			}, {
				name: '九转大肠',
				value: Math.round(Math.random() * 100)
			}, {
				name: '大盘鸡',
				value: Math.round(Math.random() * 100)
			}, {
				name: '松鼠鳜鱼',
				value: Math.round(Math.random() * 100)
			}, {
				name: '西湖醋鱼',
				value: Math.round(Math.random() * 100)
			}, {
				name: '粉蒸肉',
				value: Math.round(Math.random() * 100)
			}, {
				name: '清蒸武昌鱼',
				value: Math.round(Math.random() * 100)
			}, {
				name: '柠檬鸡',
				value: Math.round(Math.random() * 100)
			}, {
				name: '黄河大鲤鱼',
				value: Math.round(Math.random() * 100)
			}, {
				name: '过油肉',
				value: Math.round(Math.random() * 100)
			}, {
				name: '烤全羊',
				value: Math.round(Math.random() * 100)
			}, {
				name: '葫芦鸡',
				value: Math.round(Math.random() * 100)
			}, {
				name: '清蒸白鱼',
				value: Math.round(Math.random() * 100)
			}, {
				name: '佛跳墙',
				value: Math.round(Math.random() * 100)
			}, {
				name: '酸汤鱼',
				value: Math.round(Math.random() * 100)
			}, {
				name: '白切鸡',
				value: Math.round(Math.random() * 100)
			}, {
				name: '青海三烧',
				value: Math.round(Math.random() * 100)
			}, {
				name: '石锅鸡',
				value: Math.round(Math.random() * 100)
			}, {
				name: '麻婆豆腐',
				value: Math.round(Math.random() * 100)
			}, {
				name: '手抓羊肉',
				value: Math.round(Math.random() * 100)
			}, {
				name: '文昌鸡',
				value: Math.round(Math.random() * 100)
			}, {
				name: '三杯鸡',
				value: Math.round(Math.random() * 100)
			}, {
				name: '避风塘炒蟹',
				value: Math.round(Math.random() * 100)
			}, {
				name: '葡国鸡',
				value: Math.round(Math.random() * 100)
			}]
		}],
	};
	myChart.setOption(option);
	myChart.on('mouseover', function(params) {
		var dataIndex = params.dataIndex;
		console.log(params);
	});
	myChart.on('click',  function(param) {
		alert("  ")
		setTimeout(function(){
			location.href = " ";
		},20000);
	});
}());
//大盘走势
(function() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init($("#map2")[0]);
	// 指定图表的配置项和数据
	var option = {
		textStyle: { //全局字体样式设置
			color: "#000",
			fontSize: 30,
			fontWeight: "lighter"
		},
		nameTextStyle: { //轴名称字体样式
			color: "#0BA4E8",
			fontWeight: "normal"
		},
		tooltip: { //鼠标hover显示提示信息
			trigger: 'axis'
		},
		legend: {
			data: ['健康美食', '养生美食', '滋补美食', "重口味美食"],
			//width: 40,
			//height: 40,
			//right: 50,
			top: 130,
			//orient: "vertical", //纵向排列
			itemGap: 25,
			textStyle: {
				color: "#fff",
				fontSize: "24"
			}
		},
		grid: {
			top: "20%",
			left: '1%', //折线框左边距
			right: '11%', //折线框右边距
			bottom: '8%', //折线框下边距
			containLabel: true
		},
		color: ['#46B05D', '#AF4B87', '#03A2E9', "#F5D52E"],
		xAxis: {
			type: 'category',
			name: "2018年",
			nameGap: 24,
			nameTextStyle: { //坐标轴名称样式
				color: "#fff",
				fontSize: "24",
				backgroundColor: "" //文字块背景色
			},
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', ],
			splitLine: { //垂直分割线
				show: false,
				lineStyle: {
					color: "#ccc",
					width: "0.5"
				}
			},
			splitArea: {
				show: ''
			},
			axisLine: { //坐标轴线设置
				show: true,
				lineStyle: {
					color: "#fff",
					width: "2"
				},
				symbol: ["none", "arrow"], //坐标轴末端箭头
				symbolSize: [8, 20], //箭头高度和宽度
				symbolOffset: [0, 16] //箭头与轴线端点的距离
			},
			axisTick: { //坐标刻度线样式
				lineStyle: {
					color: "#fff",
					width: "2"
				}
			},
			axisLabel: { //刻度线
				textStyle: {
					color: "#fff",
					fontSize: 24,
					fontWeight: "normal",
					interval: 0 //显示全部  					
				}
			},
			// axisLabel: { //坐标轴刻度标签名样式
			// 	color: "#fff",
			// 	fontSize: "14",
			// 	rotate: 0, //文字倾斜(当刻度标签名过长时使用)
			// 	interval: 0 //显示全部                
			// },
		},
		yAxis: {
			type: 'value',
			//splitNumber: 5 ,				//轴分割段数
			min: 0, //轴坐标最小值
			//max:1300,						//轴坐标最大值
			interval: 260, //强制每段260分割
			boundaryGap: false,
			name: "人次/热度",
			nameGap: 30,
			nameTextStyle: { //坐标轴名称样式
				color: "#fff",
				fontSize: "24",
				//backgroundColor: "" //文字块背景色

			},

			axisLine: { //坐标轴线设置
				show: true,
				lineStyle: {
					color: "#fff",
					width: "2"
				},
				symbol: ["none", "arrow"], //坐标轴末端箭头
				symbolSize: [8, 20], //箭头高度和宽度
				symbolOffset: [0, 16] //箭头与轴线端点的距离			
			},
			splitLine: { //水平垂直分割线样式
				show: true,
				lineStyle: {
					color: "#02416D",
					width: "0.5"
				}
			},
			axisTick: { //坐标刻度线样式
				lineStyle: {
					color: "#fff",
					width: "2"
				}
			},
			axisLabel: { //轴刻度字体样式设置
				textStyle: {
					color: "#fff",
					fontSize: 24,
					fontWeight: "normal",
					interval: 0 //显示全部  
				}
			}
		},
		series: [{
			name: '健康美食',
			type: 'line',
			//symbol:"circle", 				//标记图像样式（折线上的点的样式，默认为圆形）
			symbolSize: "6",
			itemStyle: { //折线观点的样式
				//color: "red",
				//borderColor: "green"
			},
			areaStyle: { //区域填充样式
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(62,155,93,.1)'
				}, {
					offset: 1,
					color: 'rgba(62,155,93,.3)'
				}]),
			},
			smooth: false, //折线是否平滑
			data: [1300, 1300, 1300, 1300, 1190, 800, 900, 1000, 1200, 1000, 900, 850]
		}, {
			name: '养生美食',
			type: 'line',
			smooth: false,
			areaStyle: { //区域填充样式
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(173,75,135,.1)'
				}, {
					offset: 1,
					color: 'rgba(173,75,135,.3)'
				}]),
			},
			data: [1220, 1220, 1220, 1220, 1100, 720, 820, 920, 1000, 1200, 1500, 1300]
		}, {
			name: '滋补美食',
			type: 'line',
			smooth: false,
			areaStyle: { //区域填充样式
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(3,160,230,.1)'
				}, {
					offset: 1,
					color: 'rgba(3,160,230,.3)'
				}]),
			},
			data: [1000, 900, 800, 620, 680, 680, 720, 840, 1230, 1000, 900, 1100, ]
		}, {
			name: '重口味美食',
			type: 'line',
			smooth: false,
			areaStyle: { //区域填充样式
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(230,206,52,.1)'
				}, {
					offset: 1,
					color: 'rgba(230,206,52,.3)'
				}]),
			},
			data: [1200, 970, 1000, 720, 780, 880, 920, 740, 900, 1000, 800, 1200]
		}]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}());

//价格走势
(function() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init($("#jiagezoushi")[0]);
	// 指定图表的配置项和数据
	var option = {
		textStyle: { //全局字体样式设置
			color: "#000",
			fontSize: 30,
			fontWeight: "lighter"
		},
		nameTextStyle: { //轴名称字体样式
			color: "#0BA4E8",
			fontWeight: "normal"
		},
		tooltip: { //鼠标hover显示提示信息
			trigger: 'axis'
		},
		legend: {
			data: ['健康美食', '养生美食', '滋补美食', "重口味美食"],
			right: 100,
			top: 40,
			textStyle: {
				color: "#fff",
				fontSize: "22"
			}
		},
		grid: {
			top: "25%",
			left: '1%', //折线框左边距
			right: '9%', //折线框右边距
			bottom: '6%', //折线框下边距
			containLabel: true
		},
		color: ['#46B05D', '#AF4B87', '#03A2E9'],
		xAxis: {
			type: 'category',
			name: "2018年",
			nameTextStyle: { //坐标轴名称样式
				color: "#fff",
				fontSize: "24",
				backgroundColor: "" //文字块背景色
			},
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', ],
			splitLine: { //垂直分割线
				show: true,
				lineStyle: {
					color: "#02416D",
					width: "0.5"
				}
			},
			splitArea: {
				show: ''
			},
			axisLine: { //坐标轴线设置
				show: true,
				lineStyle: {
					color: "#fff",
					width: "2"
				},
				symbol: ["none", "arrow"], //坐标轴末端箭头
				symbolSize: [8, 20], //箭头高度和宽度
				symbolOffset: [0, 16] //箭头与轴线端点的距离
			},
			axisTick: { //坐标刻度线样式
				lineStyle: {
					color: "#fff",
					width: "2"
				}
			},
			axisLabel: { //刻度线
				textStyle: {
					color: "#fff",
					fontSize: 30,
					fontWeight: "normal"
				}
			},
		},
		yAxis: {
			type: 'value',
			//splitNumber: 5 ,				//轴分割段数
			min: 0, //轴坐标最小值
			//max:1300,						//轴坐标最大值
			interval: 260, //强制每段260分割
			boundaryGap: false,
			name: "人次/热度",
			nameTextStyle: { //坐标轴名称样式
				color: "#fff",
				fontSize: "24",
			},
			axisLine: { //坐标轴线设置
				show: true,
				lineStyle: {
					color: "#fff",
					width: "2"
				},
				symbol: ["none", "arrow"], //坐标轴末端箭头
				symbolSize: [8, 20], //箭头高度和宽度
				symbolOffset: [0, 16] //箭头与轴线端点的距离			
			},
			splitLine: { //垂直分割线
				show: true,
				lineStyle: {
					color: "#02416D",
					width: "0.5"
				}
			},
			splitLine: { //垂直分割线
				show: true,
				lineStyle: {
					color: "#02416D",
					width: "0.5"
				}
			},
			axisTick: { //坐标刻度线样式
				lineStyle: {
					color: "#fff",
					width: "2"
				}
			},
			axisLabel: { //轴刻度字体样式设置
				textStyle: {
					color: "#fff",
					fontSize: 20,
					fontWeight: "normal"
				}
			}
		},
		series: [{
			name: '健康美食',
			type: 'line',
			//symbol:"circle", 				//标记图像样式（折线上的点的样式，默认为圆形）
			symbolSize: "6",
			itemStyle: { //折线观点的样式
				//color:"#111947",
				//borderColor:"green"
			},
			smooth: true, //折线是否平滑
			data: [1300, 1300, 1300, 1300, 1190, 800, 900, 1000, 1200, 1000, 900, 850]
		}, {
			name: '养生美食',
			type: 'line',
			smooth: true,
			data: [1220, 1220, 1220, 1220, 1100, 720, 820, 920, 1000, 1200, 1500, 1300]
		}, {
			name: '滋补美食',
			type: 'line',
			smooth: true,
			data: [1000, 900, 800, 620, 680, 680, 720, 840, 1230, 1000, 900, 1100, ]
		}, {
			name: '重口味美食',
			type: 'line',
			smooth: true,
			data: [1200, 970, 1000, 720, 780, 880, 920, 740, 900, 1000, 800, 1200]
		}]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}());
// 当前成交总数和月成交总数
(function() {
	var echartdata = [515, 200, 100, 150];
	var rich = {
		yellow: {
			color: "#ffc72b",
			fontSize: 18,
			padding: [2, 4],
			align: 'center'
		},
		total: {
			color: "#ffc72b",
			fontSize: 20,
			align: 'center'
		},
		white: {
			color: "#fff",
			align: 'center',
			fontSize: 16,
			padding: [10, 0]
		},
		blue: {
			color: '#49dff0',
			fontSize: 16,
			align: 'center'
		},
		hr: {
			borderColor: 'auto',
			width: '100%',
			borderWidth: 1,
			height: 0,
		}
	};
	var myChart = echarts.init($("#left-bottom")[0]);

	var option = {
		tooltip: {
			trigger: 'item',
			formatter: "{b}: {c} ({d}%)"
		},
		legend: {
			data: ['川菜', "粤菜", "鲁菜", "湘菜"],

			bottom: 100,
			left: "right",
			right: 0,
			align: "left",
			textStyle: { //字体样式
				color: "#fff",
				fontSize: 14,
				fontWeight: "lighter"
			},
			itemGap: 56, //图块间隙
			itemWidth: 44, //图块宽
			itemHeight: 18, //图块高
			orient: "vertical"
		},
		grid: {
			top: "10%",
			// left: '1%', //折线框左边距
			right: '1%', //折线框右边距
			// bottom: '20%', //折线框下边距
			containLabel: true
		},
		series: [{
			type: 'pie',
			label: {
				fontSize: 24,
				normal: {
					color: "#fff",
					//formatter: '{b|{b}\n     {d}%}',
					formatter: function(params, ticket, callback) {
						var total = 0; //总数量
						var percent = 0; //占比
						echartdata.forEach(function(value, index) {
							total += value;
						});
						percent = ((params.value / total) * 100).toFixed(1);
						return '{white|' + params.name + '}\n\n{yellow|' + params.value + '}\n{blue|' + percent + '%}';
					},
					padding: [0, -50],
					rich: rich
				}
			},
			labelLine: {
				lineStyle: {
					//color: auto
					width: 2
				},
				length: 20,
				length2: 50
			},
			radius: ['40%', '60%'],
			data: [{
				value: echartdata[0],
				itemStyle: {
					color: "#E6C146"
				},
				name: '川菜'
			}, {
				value: echartdata[1],
				itemStyle: {
					color: "#46F0FF"
				},
				name: '粤菜'
			}, {
				value: echartdata[2],
				itemStyle: {
					color: "#D591FE",
				},
				name: '鲁菜'
			}, {
				value: echartdata[2],
				itemStyle: {
					color: "#7689FF",
				},
				name: '湘菜'
			}]
		}, ]
	};
	myChart.setOption(option);
	setInterval(function() {
		echartdata[0] = Math.floor(Math.random() * 1000);
		echartdata[1] = Math.floor(Math.random() * 1000);
		echartdata[2] = Math.floor(Math.random() * 1000);
		option.series[0].data[0].value = echartdata[0];
		option.series[0].data[1].value = echartdata[1];
		option.series[0].data[2].value = echartdata[2];
		myChart.setOption(option);
	}, 5000)

	// 1-4月份办理总数
	let mothnumber = [4536, 2030, 4872, 4931, 4980, 4500]; //每月办理数数据接口
	for (let i = 0; i < mothnumber.length; i++) {
		$("#cp").find("p").eq(i).width(450 * (mothnumber[i] / 5000));
		$("#cp").find("p").eq(i).find("span").text(mothnumber[i]);
	}
	// 五月份办理总数
	let six = mothnumber[5];
	//自动播放效果展示，数据实时对接后删除
	setInterval(function() {
		six += 1;
		$("#cp").find("p").eq(5).width(450 * (4500 / 5000));
		$("#cp").find("p").eq(5).find("span").text(six);
	}, 20000)
}());
//入驻动态滚动
(function() {
	for (var i = 0; i < RZstatus.length; i++) {
		$(".huiYuanLst .moveul").html((index, html) => {
			return html += `<li><i></i><span>${RZstatus[i]}</span></li>`
		})
	}
	//获取实时数据后循环创建流水号滚动列表
	var siz1 = $(".huiYuanLst .moveul").find("li").length;
	$(".huiYuanLst .moveul").css('height', $(".huiYuanLst .moveul").find("li")[0].offsetHeight * 35);
	$(".huiYuanLst .moveul").html(function(index, value) {
		return value + value;
	})
	setInterval(function() {
		$(".huiYuanLst .moveul").animate({
			top: "-=35"
		}, 'slow', function() {
			if ($(".huiYuanLst .moveul")[0].offsetTop <= -siz1 * 35) {
				$(".huiYuanLst .moveul").css('top', 0);
			}
		})
	}, 5300)
}());
// 成交动态滚动
(function() {
	setInterval(function() {
		$(".liushuihaoul .moveul").animate({
			top: "-=50"
		}, 'slow', function() {
			if ($(".liushuihaoul .moveul")[0].offsetTop <= -siz2 * 50 + 10) {
				$(".liushuihaoul .moveul").css('top', 0);
			}
		})
	}, 5000)
}());
//消息动态滚动
(function() {
	//消息滚动
	for (var i = 0; i < callMsg.length; i++) {
		$(".call .moveul").html((index, html) => {
			return html += `<li><i></i><span>${callMsg[i]}</span></li>`
		})
	}
	var siz3 = Math.ceil($(".call .moveul").find("li").length / 3);
	$(".call .moveul").css('height', $(".call .moveul").find("li").length * 78);
	$(".call .moveul").html(function(index, value) {
		return value + value;
	})
	setInterval(function() {
		$(".call .moveul").animate({
			top: "-=78"
		}, 'slow', function() {
			if ($(".call .moveul")[0].offsetTop <= -siz3 * 78) {
				$(".call .moveul").css('top', 0);
			}
		})
	}, 8000)
}());
//挂牌会员实时监控--仪表盘
(function() {
	var myChart1, myChart2, myChart3, option1 = {},
		option2 = {},
		option3 = {};
	var data = [268, 5, 20]; //入驻，通过，申请三项数量
	function YB(id, names, datas) {
		var total = 325; //仪表盘总量
		names = echarts.init($("#" + id)[0]);
		option = {
			tooltip: {
				formatter: "{a} <br/>{b} : {c}%"
			},
			series: [{
				name: '健康美食需求数量',
				type: 'gauge',
				min: 0,
				max: 325,
				splitNumber: 13,
				radius: '100%',
				//center: ["15%", "50%"],
				detail: {
					formatter: '{value}%'
				},
				axisLine: { // 坐标轴线  
					lineStyle: { // 属性lineStyle控制线条样式  
						color: [
							[0.2, '#83B15A'],
							[0.4, '#DE9B32'],
							[0.6, '#50CDF6'],
							[0.8, '#1D9FF2'],
							[1, '#BF4746']
						],
						width: 10, //圆环宽度（坐标轴宽度）
					}
				},
				axisTick: { // 坐标轴小标记
					length: 15, // 属性length控制线长
					lineStyle: { // 属性lineStyle控制线条样式
						color: 'auto'
					}
				},
				splitLine: { // 分隔线
					length: 20, // 属性length控制线长
					lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
						color: 'auto'
					}
				},
				axisLabel: {
					//backgroundColor: 'auto', //字块背景色
					//borderRadius: 20, //字块圆角
					color: 'auto', //文字颜色
					fontSize: 12,
					padding: 0,
					textShadowBlur: 20,
					textShadowOffsetX: 1,
					textShadowOffsetY: 1,
					textShadowColor: '#fff'
				},
				title: {
					// 其余属性默认使用全局文本样式，详见TEXTSTYLE
					fontWeight: 'bolder',
					fontSize: 16,
					fontStyle: 'italic',
					color: "#fff"
				},
				detail: {
					//其余属性默认使用全局文本样式，详见TEXTSTYLE
					formatter: function(value) {
						var num = (value / 325) * 100;
						return value + "\n\n占比 " + num.toFixed(2) + "%";
					},
					fontWeight: 'bolder',
					borderRadius: 3, //圆角
					backgroundColor: '#1D2088', //背景
					borderColor: '#00A0E9', //边框
					shadowBlur: 5,
					shadowColor: '#00A0E9',
					shadowOffsetX: 0,
					shadowOffsetY: 1,
					borderWidth: 2,
					//textBorderColor: '#62D4FB',
					textBorderWidth: 2,
					textShadowBlur: 2,
					textShadowColor: '#62D4FB',
					textShadowOffsetX: 0,
					textShadowOffsetY: 1,
					fontFamily: 'Arial',
					fontSize: 16,
					width: 30,
					height: 12,
					color: '#62D4FB',
					rich: {},
				},
				data: [{
					value: datas,
					name: '今日热度'
				}]
			}]
		};
		names.setOption(option, true);
	}
	YB("yibiao1", myChart1, 268);
	YB("yibiao2", myChart2, 5);
	YB("yibiao3", myChart3, 20);
	console.log(option1)
	var n = 0;
	run();

	//仪表盘动态数据设定
	setInterval(function() {
		data[0] = Math.floor(Math.random() * 325)
		data[1] = Math.floor(Math.random() * 325)
		data[2] = Math.floor(Math.random() * 325)
		run();
		YB("yibiao1", myChart1, data[0]);
		YB("yibiao2", myChart2, data[1]);
		YB("yibiao3", myChart3, data[2]);
	}, 5000);
	//方块格子动画高亮特效
	$(".huiyuan").each(function(index) {
		var _this = $(this);
		let t = 0;
		setInterval(function() {
			n = Math.round(data[index] / 25); //每个方块数值25,13个方块总共325
			_this.find("li").each(function(i) {
				if (i <= n) {
					$(this).css("background", "#00A0E9");
					_this.find("li").eq(t).css("background", "#FBED14");
				} else {
					$(this).css("background", "#1D2088");
				}
			})
			t++;
			if (t > n + 1) t = 0;
		}, 300)
	})

	function run() {
		for (var i = 0; i < data.length; i++) {
			n = data[i] / 25; //每个方块数值25,13个方块总共325
			$(".huiyuan").eq(i).find("span").text(data[i])
			$(".huiyuan").eq(i).find("li").each(function(index) {
				if (index <= Math.floor(n)) {
					$(this).css("background", "#00A0E9")
				} else {
					$(this).css("background", "#1D2088")
				}
			})
		}
	}
}());
//北海市猪链网动态--价格波动
(function() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init($("#jiage")[0]);
	// 指定图表的配置项和数据
	var option = {
		textStyle: { //全局字体样式设置
			color: "#000",
			fontSize: 30,
			fontWeight: "lighter"
		},
		nameTextStyle: { //轴名称字体样式
			color: "#0BA4E8",
			fontWeight: "normal"
		},
		tooltip: { //鼠标hover显示提示信息
			trigger: 'axis'
		},
		legend: {
			data: ['健康美食', '养生美食', '滋补美食', "重口味美食"],
			//width: 40,
			//height: 40,
			//right: 50,
			top: 20,
			//orient: "vertical", //纵向排列
			itemGap: 25,
			textStyle: {
				color: "#fff",
				fontSize: "18"
			}
		},
		grid: {
			top: "10%",
			left: '1%', //折线框左边距
			right: '9%', //折线框右边距
			bottom: '6%', //折线框下边距
			containLabel: true
		},
		color: ['#46B05D', '#AF4B87', '#03A2E9', "#F5D52E"],
		xAxis: {
			type: 'category',
			name: "2022年",
			nameGap: 20,
			nameTextStyle: { //坐标轴名称样式
				color: "#fff",
				fontSize: "16",
				backgroundColor: "" //文字块背景色
			},
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', ],
			splitLine: { //垂直分割线
				show: false,
				lineStyle: {
					color: "#ccc",
					width: "0.5"
				}
			},
			splitArea: {
				show: ''
			},
			axisLine: { //坐标轴线设置
				show: true,
				lineStyle: {
					color: "#fff",
					width: "2"
				},
				symbol: ["none", "arrow"], //坐标轴末端箭头
				symbolSize: [8, 20], //箭头高度和宽度
				symbolOffset: [0, 16] //箭头与轴线端点的距离
			},
			axisTick: { //坐标刻度线样式
				lineStyle: {
					color: "#fff",
					width: "2"
				}
			},
			axisLabel: { //刻度线
				textStyle: {
					color: "#fff",
					fontSize: 20,
					fontWeight: "normal",
					interval: 0 //显示全部  					
				}
			},
			// axisLabel: { //坐标轴刻度标签名样式
			// 	color: "#fff",
			// 	fontSize: "14",
			// 	rotate: 0, //文字倾斜(当刻度标签名过长时使用)
			// 	interval: 0 //显示全部                
			// },
		},
		yAxis: {
			type: 'value',
			//splitNumber: 5 ,				//轴分割段数
			min: 0, //轴坐标最小值
			//max:1300,						//轴坐标最大值
			interval: 260, //强制每段260分割
			boundaryGap: false,
			name: "人次/热度",
			nameGap: 30,
			nameTextStyle: { //坐标轴名称样式
				color: "#fff",
				fontSize: "16",
				//backgroundColor: "" //文字块背景色

			},

			axisLine: { //坐标轴线设置
				show: true,
				lineStyle: {
					color: "#fff",
					width: "2"
				},
				symbol: ["none", "arrow"], //坐标轴末端箭头
				symbolSize: [8, 20], //箭头高度和宽度
				symbolOffset: [0, 16] //箭头与轴线端点的距离			
			},
			splitLine: { //水平垂直分割线样式
				show: true,
				lineStyle: {
					color: "#02416D",
					width: "0.5"
				}
			},
			axisTick: { //坐标刻度线样式
				lineStyle: {
					color: "#fff",
					width: "2"
				}
			},
			axisLabel: { //轴刻度字体样式设置
				textStyle: {
					color: "#fff",
					fontSize: 14,
					fontWeight: "normal",
					interval: 0 //显示全部  
				}
			}
		},
		series: [{
			name: '健康美食',
			type: 'line',
			//symbol:"circle", 				//标记图像样式（折线上的点的样式，默认为圆形）
			symbolSize: "6",
			itemStyle: { //折线观点的样式
				//color: "red",
				//borderColor: "green"
			},
			areaStyle: { //区域填充样式
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(62,155,93,.1)'
				}, {
					offset: 1,
					color: 'rgba(62,155,93,.3)'
				}]),
			},
			smooth: false, //折线是否平滑
			data: [1300, 1300, 1300, 1300, 1190, 800, 900, 1000, 1200, 1000, 900, 850]
		}, {
			name: '养生美食',
			type: 'line',
			smooth: false,
			areaStyle: { //区域填充样式
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(173,75,135,.1)'
				}, {
					offset: 1,
					color: 'rgba(173,75,135,.3)'
				}]),
			},
			data: [1220, 1220, 1220, 1220, 1100, 720, 820, 920, 1000, 1200, 1500, 1300]
		}, {
			name: '滋补美食',
			type: 'line',
			smooth: false,
			areaStyle: { //区域填充样式
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(3,160,230,.1)'
				}, {
					offset: 1,
					color: 'rgba(3,160,230,.3)'
				}]),
			},
			data: [1000, 900, 800, 620, 680, 680, 720, 840, 1230, 1000, 900, 1100, ]
		}, {
			name: '重口味美食',
			type: 'line',
			smooth: false,
			areaStyle: { //区域填充样式
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgba(230,206,52,.1)'
				}, {
					offset: 1,
					color: 'rgba(230,206,52,.3)'
				}]),
			},
			data: [1200, 970, 1000, 720, 780, 880, 920, 740, 900, 1000, 800, 1200]
		}]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}());
//交易大厅实时监控--成交量饼图
(function() {
	var echartdata = [515, 433, 472, 383];
	var rich = {
		yellow: {
			color: "#ffc72b",
			fontSize: 18,
			padding: [2, 4],
			align: 'center'
		},
		total: {
			color: "#ffc72b",
			fontSize: 20,
			align: 'center'
		},
		white: {
			color: "#fff",
			align: 'center',
			fontSize: 16,
			padding: [10, 0]
		},
		blue: {
			color: '#49dff0',
			fontSize: 16,
			align: 'center'
		},
		hr: {
			borderColor: 'auto',
			width: '100%',
			borderWidth: 1,
			height: 0,
		}
	};
	var myChart = echarts.init($("#CJpie")[0]);
	var option = {
		tooltip: {
			trigger: 'item',
			formatter: "{b}: {c} ({d}%)"
		},
		series: [{
			type: 'pie',
			label: {
				fontSize: 24,
				normal: {
					color: "#fff",
					//formatter: '{b|{b}\n     {d}%}',
					formatter: function(params, ticket, callback) {
						var total = 0; //总数量
						var percent = 0; //占比
						echartdata.forEach(function(value, index) {
							total += value;
						});
						percent = ((params.value / total) * 100).toFixed(1);
						return '{white|' + params.name + '}\n\n{yellow|' + params.value + '}\n{blue|' + percent + '%}';
					},
					padding: [0, -50],
					rich: rich
				}
			},
			labelLine: {
				lineStyle: {
					width: 2
				},
				length: 20,
				length2: 50
			},
			radius: ['40%', '60%'],
			data: [{
				value: echartdata[0],
				itemStyle: {
					color: new echarts.graphic.RadialGradient(.5, .5, 1, [{
						offset: 0,
						color: '#D068F8'
					}, {
						offset: 1,
						color: '#403CB6'
					}]),
				},
				name: '中餐'
			}, {
				value: echartdata[1],
				itemStyle: {
					color: new echarts.graphic.RadialGradient(.5, .5, 2, [{
						offset: 0,
						color: '#08C6D8'
					}, {
						offset: 1,
						color: '#0D55A2'
					}]),
				},
				name: '西餐'
			}, {
				value: echartdata[2],
				itemStyle: {
					color: new echarts.graphic.RadialGradient(0.5, 0.5, 2, [{
						offset: 0,
						color: '#3AF990'
					}, {
						offset: 1,
						color: '#036172'
					}]),
				},
				name: '快餐'
			}, {
				value: echartdata[3],
				itemStyle: {
					color: new echarts.graphic.RadialGradient(0.5, 0.5, 2, [{
						offset: 0,
						color: '#FFF8A4'
					}, {
						offset: 1,
						color: '#FFEA02'
					}]),
				},
				name: '甜品'
			}]
		}, ]
	};
	myChart.setOption(option);
	var total = 650;
	var n = 0;
	run();

	function run() {
		for (var i = 0; i < echartdata.length; i++) {
			n = echartdata[i] / 50; //每个格子数值50,13个格子650
			$(".CJL").eq(i).find("p").text(echartdata[i])
			$(".CJL").eq(i).find("li").each(function(index) {
				if (index >= (12 - n)) {
					$(this).css("background", "#00A0E9")
				} else {
					$(this).css("background", "#1D2088")
				}
			})
		}
	}
	setInterval(function() {
		echartdata[0] = Math.floor(Math.random() * 650);
		echartdata[1] = Math.floor(Math.random() * 650);
		echartdata[2] = Math.floor(Math.random() * 650);
		echartdata[3] = Math.floor(Math.random() * 650);
		option.series[0].data[0].value = echartdata[0];
		option.series[0].data[1].value = echartdata[1];
		option.series[0].data[2].value = echartdata[2];
		option.series[0].data[3].value = echartdata[3];
		run()
		myChart.setOption(option);
	}, 5000)
	$(".CJL").each(function(index) {
		var t = 12;
		var _this = $(this);
		setInterval(function() {
			n = Math.round(echartdata[index] / 50);
			if (t < 13 - n) {
				t = 13
			}
			if (n == 0) {
				_this.find("li").eq(12).css("background", "#FBED14")
			} else {
				_this.find("li").each(function(i) {
					if (i >= (13 - n)) {
						$(this).css("background", "#00A0E9")
						_this.find("li").eq(t).css("background", "#FBED14")
					} else {
						$(this).css("background", "#1D2088")
					}
				})
			}
			t--;
		}, 300)
	})
}());
//城销量实时监控--菜系成交量条形图
(function() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init($("#cjliang")[0]);
	// 指定图表的配置项和数据
	var option = {
		title: {
			text: ''
		},
		grid: {
			bottom: "15%",
			//left: 100,
		},
		xAxis: {
			type: 'category',
			name: "菜系",
			data: ["川菜", "粤菜", "湘菜", "鲁菜", "徽菜", "闽菜", "浙菜"],
			nameTextStyle: { //坐标轴名称样式
				color: "#fff",
				fontSize: "18",
				backgroundColor: "" //文字块背景色
			},
			nameGap: 25, //坐标名称与轴线的距离
			axisTick: { //坐标刻度线样式
				lineStyle: {
					color: "#fff"
				}
			},
			axisLabel: { //坐标轴刻度标签名样式
				color: "#fff",
				fontSize: "16",
				rotate: 0, //文字倾斜(当刻度标签名过长时使用)
				interval: 0 //显示全部                
			},
			axisLine: { //坐标轴线设置
				show: true,
				lineStyle: {
					color: "#fff",
					width: "2"
				},
				symbol: ["none", "arrow"], //坐标轴末端箭头
				symbolSize: [8, 20], //箭头高度和宽度
				symbolOffset: [0, 16] //箭头与轴线端点的距离
			},
			splitNumber: 7,
		},
		yAxis: {
			name: "（美食数量）",
			splitNumber: 8,
			nameTextStyle: { //坐标轴名称样式
				color: "#fff",
				fontSize: "18",
				backgroundColor: "" //文字块背景色
			},
			nameGap: 25, //坐标名称与轴线的距离
			axisLine: { //坐标轴线设置
				show: true,
				lineStyle: {
					color: "#fff",
					width: "2"
				},
				symbol: ["none", "arrow"], //坐标轴末端箭头
				symbolSize: [8, 20], //箭头高度和宽度
				symbolOffset: [0, 16] //箭头与轴线端点的距离
			},
			axisTick: { //坐标刻度线样式
				lineStyle: {
					color: "#fff"
				}
			},
			axisLabel: { //坐标轴刻度标签名样式
				color: "#fff",
				fontSize: "18"
			},
			splitLine: { //垂直分割线
				show: true,
				lineStyle: {
					color: "#02416D",
					width: "0.5"
				}
			},
		},
		series: [{
			name: '类目1',
			type: 'bar',
			barWidth: 50,
			label: {
				show: true,
				color: "#fff",
				fontSize: 18,
				position: "top"
			},
			color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
				offset: 0,
				color: '#3E3CB5'
			}, {
				offset: 1,
				color: '#D66BFD'
			}]),
			data: [200, 330, 440, 550, 660, 770, 880]
		}]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	var W = 0;
	var H = 0;
	$(".kedu").find("li").each(function(i) {
		$(this).css("left", i * 13)
	})
	setInterval(function() {
		option.series[0].data[0] = Math.round(Math.random() * 1000)
		option.series[0].data[1] = Math.round(Math.random() * 1000)
		option.series[0].data[2] = Math.round(Math.random() * 1000)
		option.series[0].data[3] = Math.round(Math.random() * 1000)
		option.series[0].data[4] = Math.round(Math.random() * 1000)
		option.series[0].data[5] = Math.round(Math.random() * 1000)
		option.series[0].data[6] = Math.round(Math.random() * 1000)
		W = Math.round(Math.random() * 10) * 78;
		H = W / 13;
		if (H < 8) {
			$("#pjtime").css({
				"left": W,
				"margin-left": -50
			})
		} else if (H > 52) {
			$("#pjtime").css({
				"left": W,
				"margin-left": -250
			})
		} else {
			$("#pjtime").css({
				"left": W,
				"margin-left": -150
			})
		}
		$("#pjtime").text("每个菜系美食的热度：" + (H * 10) + "人次")
		$(".tianchong").eq(0).width(W)
		$(".kedu").find("li").css("height", 6)
		$(".kedu").find("li").eq(H).css("height", 12)
		console.log(H / 10)
		myChart.setOption(option);
	}, 3000)
}());