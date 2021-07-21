//business
(function(){
    var myChart = echarts.init(document.getElementById('bar1'));
    var option1;
    option1 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // Use axis to trigger tooltip
                type: 'none'        // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        // legend: {
        //     data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine']
        // },
      
        xAxis: {
            type: 'value',
            show:false
        },
        yAxis: {
            type: 'category',
            data: ['business'],
            show:false
        },
        series: [
            {
                name: 'positive',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: "#FF6B18"
                  },
                data: [29]
            },
            {
                name: 'negative',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: "#8B8B8B"
                  },
                data: [63]
            },
            {
                name: 'neutral',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: "#C4C4C4"
                  },
                data: [43]
            }
         
        ]
    };
    option1 && myChart.setOption(option1);
    
})();
//politics
(function(){
    var myChart = echarts.init(document.getElementById('bar2'));
    var option2;
    option2 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // Use axis to trigger tooltip
                type: 'none'        // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        // legend: {
        //     data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine']
        // },
      
        xAxis: {
            type: 'value',
            show:false
        },
        yAxis: {
            type: 'category',
            data: ['politics'],
            show:false
        },
        series: [
            {
                name: 'positive',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: "#FF6B18"
                  },
                data: [53]
            },
            {
                name: 'negative',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: "#8B8B8B"
                  },
                data: [211]
            },
            {
                name: 'neutral',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: "#C4C4C4"
                  },
                data: [66]
            }
         
        ]
    };
    option2 && myChart.setOption(option2);
    
})();
//covid-19
(function(){
    var myChart = echarts.init(document.getElementById('bar3'));
    var option3;
    option3 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // Use axis to trigger tooltip
                type: 'none'        // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        // legend: {
        //     data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine']
        // },
      
        xAxis: {
            type: 'value',
            show:false
        },
        yAxis: {
            type: 'category',
            data: ['covid-19'],
            show:false
        },
        series: [
            {
                name: 'positive',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: "#FF6B18"
                  },
                data: [44]
            },
            {
                name: 'negative',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: "#8B8B8B"
                  },
                data: [120]
            },
            {
                name: 'neutral',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: "#C4C4C4"
                  },
                data: [67]
            }
         
        ]
    };
    option3 && myChart.setOption(option3);
    
})();
//society
(function(){
    var myChart = echarts.init(document.getElementById('bar4'));
    var option4;
    option4 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // Use axis to trigger tooltip
                type: 'none'        // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        // legend: {
        //     data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine']
        // },
      
        xAxis: {
            type: 'value',
            show:false
        },
        yAxis: {
            type: 'category',
            data: ['business'],
            show:false
        },
        series: [
            {
                name: 'positive',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: "#FF6B18"
                  },
                data: [15]
            },
            {
                name: 'negative',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: "#8B8B8B"
                  },
                data: [48]
            },
            {
                name: 'neutral',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: "#C4C4C4"
                  },
                data: [32]
            }
         
        ]
    };
    option4 && myChart.setOption(option4);
    
})();
//tech
(function(){
    var myChart = echarts.init(document.getElementById('bar5'));
    var option5;
    option5 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // Use axis to trigger tooltip
                type: 'none'        // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        // legend: {
        //     data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine']
        // },
      
        xAxis: {
            type: 'value',
            show:false
        },
        yAxis: {
            type: 'category',
            data: ['business'],
            show:false
        },
        series: [
            {
                name: 'positive',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: "#FF6B18"
                  },
                data: [12]
            },
            {
                name: 'negative',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: "#8B8B8B"
                  },
                data: [22]
            },
            {
                name: 'neutral',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: "#C4C4C4"
                  },
                  itemStyle: {
                    color: "#C4C4C4"
                  },
                data: [9]
            }
         
        ]
    };
    option5 && myChart.setOption(option5);
    
})();

(function(){
    var myChart = echarts.init(document.getElementById('streamgraph'));
    var option;
    option = {
        title: {
            text: 'emotion streamgraph',
            textStyle: {
                fontSize: 15,
                fontStyle: "normal",
                fontFamily: "Courier New"
              },
            
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
     
        legend: {
            data: ['China_P', 'Us_P', 'China_N', 'US_N'],
            top: "12%",
            itemGap: 5
        },
     
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisTick: {
                    show: false
                },
                
                data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12']
            },
        ],
        yAxis: [
            {
                type: 'value',
                show:false,
            }
        ],
        series: [
            {
                name: 'China_P',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                itemStyle:{
                    color:'#ee2746'
                },
                   symbol: "none",
                data: [2, 1, 5,8, 7, 2, 11,8,3,2,1,6]
            },
            {
                name: 'Us_P',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                 itemStyle:{
                    color:'#2b73af'
                },
                   symbol: "none",
                data: [13,8,10,10,5,7,8,8,19,34,11,11]
            },
            {
                name: 'China_N',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                   itemStyle:{
                    color:'#ee2746'
                },
                   symbol: "none",
                data: [-7, -4, -11, -12, -11, -14, -30,-27,-12,-16,-14,-14]
            },
            {
                name: 'US_N',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                   itemStyle:{
                    color:'#2b73af'
                },
                   symbol: "none",
                data: [-38, -47, -22, -19, -30, -33, -44,-17,-23,-34,-5,-9]
            },
            
        ]
    };
    option && myChart.setOption(option);
})();

