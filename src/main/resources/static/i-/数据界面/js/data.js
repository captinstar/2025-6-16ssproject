/*各区域美食菜品挂牌数-开始*/
// 各区域美食数据中心
var DataCenter = [{
    name: "成都美食数据中心",
    num: "8,792"
}, {
    name: "广州美食数据中心",
    num: "10,203"
}, {
    name: "杭州美食数据中心",
    num: "8,015"
}, {
    name: "重庆美食数据中心",
    num: "6,901"
}];

/*各区域美食菜品挂牌数-结束*/
// 各地特色美食数量
var ChanNeng = [{
    name: "川菜特色美食数量",
    num: 125
}, {
    name: "粤菜特色美食数量",
    num: 105
}, {
    name: "浙菜特色美食数量",
    num: 88
}];
// 餐厅入驻实时动态滚动数据
var RZstatus = ["蜀香阁餐厅成功挂牌入驻美食平台", "粤品轩餐厅成功挂牌入驻美食平台", "杭味居餐厅成功挂牌入驻美食平台", "渝味坊餐厅成功挂牌入驻美食平台", "蜀香阁餐厅成功挂牌入驻美食平台", "粤品轩餐厅成功挂牌入驻美食平台", "杭味居餐厅成功挂牌入驻美食平台", "渝味坊餐厅成功挂牌入驻美食平台", "蜀香阁餐厅成功挂牌入驻美食平台", "粤品轩餐厅成功挂牌入驻美食平台", "杭味居餐厅成功挂牌入驻美食平台", "渝味坊餐厅成功挂牌入驻美食平台"];
var callMsg = ["蜀香阁餐厅的麻婆豆腐鲜香麻辣，口感绝佳",   "粤品轩餐厅的白切鸡皮黄肉白，肥嫩鲜美"];

// 美食介绍数据
var CJstatus = [
    // 中餐板块
    [{
        name: "麻婆豆腐",
        intro: "川菜经典菜品，以豆腐、肉末、辣椒等为主要食材，麻辣鲜香，口感丰富。"
    }, {
        name: "宫保鸡丁",
        intro: "川菜传统名菜，鸡肉鲜嫩，花生米香脆，味道酸甜微辣。"
    }, {
        name: "糖醋排骨",
        intro: "经典中式菜肴，排骨肉质鲜嫩，裹上酸甜的酱汁，味道可口。"
    }, {
        name: "鱼香肉丝",
        intro: "川菜特色菜品，以肉丝、木耳、胡萝卜等为原料，具有鱼香味。"
    }, {
        name: "回锅肉",
        intro: "川菜代表性菜品，猪肉肥而不腻，配菜多样，香气四溢。"
    }, {
        name: "东坡肉",
        intro: "浙菜经典，猪肉色泽红亮，肥而不腻，入口即化。"
    }, {
        name: "叫化鸡",
        intro: "苏菜传统名菜，鸡肉鲜嫩多汁，香气扑鼻。"
    }, {
        name: "佛跳墙",
        intro: "闽菜经典，多种珍贵食材熬制而成，味道浓郁醇厚。"
    }],
    // 西餐板块
    [{
        name: "牛排套餐",
        intro: "包含牛排、配菜和饮品，牛排鲜嫩多汁，配菜丰富多样。"
    }, {
        name: "披萨",
        intro: "意大利美食，面饼酥脆，搭配各种馅料，口味多样。"
    }, {
        name: "意大利面",
        intro: "经典西餐主食，面条劲道，酱汁浓郁。"
    }, {
        name: "汉堡套餐",
        intro: "常见快餐组合，汉堡搭配薯条和饮料，方便快捷。"
    }, {
        name: "寿司拼盘",
        intro: "日本料理，多种口味的寿司组合，新鲜美味。"
    }, {
        name: "提拉米苏",
        intro: "意大利经典甜品，口感细腻，咖啡香与奶香交织。"
    }, {
        name: "冰淇淋",
        intro: "消暑甜品，口味丰富，口感细腻。"
    }, {
        name: "红酒牛排套餐",
        intro: "高品质西餐套餐，牛排搭配红酒，享受优雅用餐体验。"
    }],
    // 快餐板块
    [{
        name: "炸鸡套餐",
        intro: "常见快餐选择，鸡肉外酥里嫩，搭配薯条和饮料。"
    }, {
        name: "薯条",
        intro: "经典快餐小吃，金黄酥脆，口感香甜。"
    }, {
        name: "热狗",
        intro: "美式快餐，面包夹着香肠，搭配酱料，美味可口。"
    }, {
        name: "鸡肉卷",
        intro: "方便快餐，鸡肉和蔬菜卷入饼皮，营养丰富。"
    }, {
        name: "汉堡",
        intro: "全球流行的快餐食品，面包夹着肉饼和蔬菜，口味多样。"
    }, {
        name: "蛋挞",
        intro: "港式甜品，蛋挞皮酥脆，内馅嫩滑，香甜可口。"
    }, {
        name: "可乐",
        intro: "常见碳酸饮料，口感清爽，气泡十足。"
    }, {
        name: "冰红茶",
        intro: "茶饮料，口感清爽，适合搭配美食。"
    }],
    // 甜品板块
    [{
        name: "蛋糕",
        intro: "常见甜品，口味多样，造型精美。"
    }, {
        name: "布丁",
        intro: "口感嫩滑的甜品，味道香甜，入口即化。"
    }, {
        name: "奶茶",
        intro: "受欢迎的饮品，茶与奶的完美结合，口感丰富。"
    }, {
        name: "水果捞",
        intro: "健康甜品，新鲜水果搭配酸奶或椰奶，清爽可口。"
    }, {
        name: "双皮奶",
        intro: "粤式甜品，奶皮醇厚，口感细腻，香甜不腻。"
    }, {
        name: "巧克力慕斯",
        intro: "浓郁巧克力口味的甜品，口感绵密，入口即化。"
    }, {
        name: "酸奶冰淇淋",
        intro: "健康甜品，酸奶与冰淇淋的结合，口感酸甜。"
    }, {
        name: "抹茶千层",
        intro: "日式甜品，抹茶味浓郁，千层皮细腻。"
    }]
];

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
//左边成交动态板块切换（默认显示中餐板块内容）
for (var i = 0; i < CJstatus[0].length; i++) {
    $(".liushuihaoul .moveul").html((index, html) => {
        return html += `<li>
                <span>${CJstatus[0][i].name}</span>
                <span>${CJstatus[0][i].intro}</span>
                </li>`
    })
}
siz2 = $(".liushuihaoul .moveul").find("li").length;
$(".liushuihaoul .moveul").css('height', $(".liushuihaoul .moveul").find("li").length * 50);
$(".liushuihaoul .moveul").html(function(index, value) {
    return value + value;
})
//左边成交动态切换板块时更新数据
$(".bodyRightTop .navbar").find("span").each(function(index, item) {
    $(this).click(function() {
        $(".bodyRightTop .navbar").find("span").removeClass("active");
        $(this).addClass("active");
        $(".liushuihaoul .moveul").html("")
        var Status = CJstatus[index];
        for (var i = 0; i < Status.length; i++) {
            $(".liushuihaoul .moveul").html((ind, html) => {
                return html += `<li>
                <span>${Status[i].name}</span>
                <span>${Status[i].intro}</span>
                </li>`
            })
        }
        siz2 = $(".liushuihaoul .moveul").find("li").length;
        $(".liushuihaoul .moveul").css('height', $(".liushuihaoul .moveul").find("li").length * 50);
        $(".liushuihaoul .moveul").html(function(index, value) {
            return value + value;
        })
    })
})

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
//各地特色美食数量分布
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
            text: '美食介绍分布'
        },
        tooltip: {},
        legend: {
            data: ['中餐', "西餐", "快餐", "甜品"],
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
            name: "美食类型",
            data: ["中餐", "西餐", "快餐", "甜品"],
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
            splitNumber: 4,
        },
        yAxis: {
            name: "美食数量",
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
            name: '中餐',
            type: 'bar',
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#3E3CB5'
            }, {
                offset: 1,
                color: '#D66BFD'
            }]),
            data: [CJstatus[0].length]
        }, {
            name: '西餐',
            type: 'bar',
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#0D52A1'
            }, {
                offset: 1,
                color: '#09F6FD'
            }]),
            data: [CJstatus[1].length]
        }, {
            name: '快餐',
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
            data: [CJstatus[2].length]
        }, {
            name: '甜品',
            type: 'bar',
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, //颜色线性渐变:Linear，（径向渐变：Radial）
                [{
                    offset: 0,
                    color: '#FFA500'
                }, {
                    offset: 1,
                    color: '#FF69B4'
                }]
            ),
            data: [CJstatus[3].length]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart.on('click',  function(param) {
        alert("欢迎您")
        setTimeout(function(){
            location.href = "https://gitee.com/iGaoWei/food-data-view";
        },20000);
    });
    // setInterval(function() {
    // 	myChart.refresh();
    // }, 2000)
};
//挂牌占比
function guapaizhanbi(obj, Index) {
    var echartdata = [CJstatus[0].length, CJstatus[1].length, CJstatus[2].length, CJstatus[3].length];
    // 这里可以继续完善挂牌占比的逻辑
}
    