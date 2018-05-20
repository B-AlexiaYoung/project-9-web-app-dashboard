/*   Variables      */
$burger= document.getElementById("burger");
$close= document.getElementById('close');
$nav = document.getElementById("sdNav");


function slideOutNav(){
    console.log('burger listener')
    document.getElementById("sdNav").style.height = "60px";


};
// listeners

//listener on burger
function hideNav() {
    document.getElementById("sdNav").style.height = "0px";
    
}

$burger.addEventListener('click', (event) => {
    if ($nav.style.height==="60px"){
        hideNav();  
    } else{
        slideOutNav();
    }   
});

// listener on close icon
$close.addEventListener('click', (event) => {

    hideNav();
    $burger.style.visibility="visible";
    $burger.style.height="20px";
});

//charts
//weekly traffic chart
const wkTraffic=document.getElementById("trf").getContext("2d");
let wkTrfcLine = new Chart(wkTraffic, {
    type: 'line',
    
        data: {
         
           
            labels: ["16-22", "23-29", "30-5", "6-12", "13-19","20-26","27-3", "4-10","11-17","18-24","25-31"],
            datasets: [{
                data: [700, 1200, 1000, 1500, 1900, 1500, 1800, 1300, 1650, 2300, 1600, 2300],
                backgroundColor: 'rgb(194, 182, 198)',  // light purple color under graph line
                borderColor: 'rgb(68, 56, 73)', // dark purple - line color
                lineTension: 0,  // draw straight lines
                pointBackgroundColor: 'rgb(242, 230, 247)', //set plot points color, border color and width
                pointBorderColor: ['rgb(68, 56, 73)'],
                pointBorderWidth: 6,
            }],
        
            options: {
                legend:{
                    display: false,
                },
            },
        },
});     

const dailyTrf = document.getElementById("dailyTrf");
let barMble = new Chart(dailyTrf, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "Th", "F" ,"S"],
        datasets: [{
        
            data: [75, 100, 175, 125, 225, 200,100],
            backgroundColor: 'rgb(194, 182, 198)',   
                        
        }],
    },
    options: {
        legend:{
            display: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});  
const mobile= document.getElementById("mbl");
let DonutMbl = new Chart(mobile, {
    type: 'doughnut',
    data:{
    labels:["phones", "tablet", "desktop"],

    
    datasets:[{
        data:[35,15,50],
       
        backgroundColor:[
        'rgb(109, 165, 170)',
        'rgb(123, 196, 146)',
        'rgb(109, 82, 142)'
        ],
    }],
},
options: {
    cutoutPercentage: 50,
    legend:{
        position: 'right',
    labels:{
        boxWidth:10,
    },
    },
    
}
});