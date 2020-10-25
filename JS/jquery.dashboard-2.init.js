options={
    chart:{height:340,type:"pie"},
    series:[7,16,20,12,24,13,8],
    labels:["Hosting","Front-end","Back-end","Team Size","Time","Management","Security"],
    colors:["#a3cae0","#232f5b","#f06a6c","#f1e299","#08aeb0", "#f8aeb0","#a32f5b"],
    legend:{
        show:!0,
        position:"bottom",
        horizontalAlign:"center",
        verticalAlign:"middle",
        floating:!1,
        offsetX:-30,
        offsetY:-5
    },
    responsive:[{breakpoint:600,options:{chart:{height:240},legend:{show:!1}}}]
};

(chart=new ApexCharts(document.querySelector("#apex_pie1"),options)).render();
            var options={
                chart:{height:350,type:"area"},
                dataLabels:{enabled:!1},
                colors:["#00bcd4","#7043c1"],
                stroke:{curve:"smooth"},
                markers:{
                    size:3,
                    opacity:.9,
                    colors:["#f93b7a"],
                    strokeColor:"#fff",
                    strokeWidth:2,
                    style:"inverted",
                    hover:{size:5}
                },
                series:[
                    {
                        name:"John Doe's Performance",
                        data:[3,5,4,2,3,5,6,4,5,6,7,5]
                    }
                ],
                xaxis:{
                    type:"month",
                    categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
                },
                tooltip:{
                    theme:"dark",
                    x:{format:"dd/MM/yy HH:mm"}
                }
            };
            (chart=new ApexCharts(document.querySelector("#d2_overview"),options)).render();
            
            options={
                chart:{type:"radialBar",height:300},
                plotOptions:{
                    radialBar:{
                        size:void 0,
                        inverseOrder:!0,
                        hollow:{
                            margin:5,
                            size:"50%",
                            background:"transparent"
                        },
                        track:{show:!1},
                        startAngle:-180,endAngle:180
                    }
                },
                colors:["#00bcd4","#fbb624","#7043c1"],
                stroke:{lineCap:"round"},
                series:[71,63,77],
                labels:["Employeeistic","Resto","Mazie"],
                legend:{
                    show:!0,
        position:"bottom",
        horizontalAlign:"center",
        verticalAlign:"middle",
        floating:!1,
        fontSize:"14px",
        offsetX:-30,
        offsetY:-10
                }
            };
            (chart=new ApexCharts(document.querySelector("#d2_performance"),options)).render();
            
            var options = {
                series: [
                    {name: 'Present',data: [45, 49, 43, 42, 46, 43, 41, 49, 45, 47, 46, 49]},
                    {name: 'On Leave',data: [5, 1, 7, 8, 4, 7, 9, 1, 5, 2, 4, 1]},
                ],
                chart: {type: 'bar',height: 350,stacked: true,stackType: '100%',toolbar: {
                    show: true
                  },
                  zoom: {
                    enabled: true
                  }},
                responsive: [{breakpoint: 480,options:{legend: {position: 'bottom',offsetX: -10,offsetY: 0}}}],
                xaxis: {
                    categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                },
                fill: {opacity: 1},
                legend: {position: 'right',offsetX: 0,offsetY: 50},
            };
            
            (chart=new ApexCharts(document.querySelector("#apex_column1"),options)).render();