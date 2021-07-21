var myChart = echarts.init(document.getElementById('streamgraph'));
var option;
option = {
    title: {
        text: 'emotion streamgraph',
        
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
        data: ['China_P', 'Us_P', 'China_N', 'US_N']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
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
