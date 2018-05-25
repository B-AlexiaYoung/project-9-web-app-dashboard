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
const traffic=document.getElementById("trf").getContext("2d");
let wk=document.getElementById('wk');
let trafficLine = new Chart(traffic, {
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



// listeners on achor tags to change out charts
let dl = document.getElementById("dl");
dl.addEventListener('click', (event) => {
    console.log("dl");

    let trafficLine = new Chart(traffic, {
        type: 'line',
        
            data: {
             
               
                labels: ["M", "T", "W", "TH", "F","S","SU"],
                datasets: [{
                    data: [1500, 1200, 1100, 1300, 1500, 1600, 1200, 1100],
                    backgroundColor: '#43c6be',  // light green
                    borderColor: '#17706a', // dark green- line color
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


        
    
   

});
//const traffic=document.getElementById("trf").getContext("2d");
 wk=document.getElementById('wk');
wk.addEventListener('click',(event) => {
let trafficLine = new Chart(traffic, {
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
});


let hr = document.getElementById("hr");
hr.addEventListener('click', (event) => {

    let trafficLine = new Chart(traffic, {
        type: 'line',
        
            data: {
             
               
                labels: ["12-2", "2-4", "4-6", "8-10", "10-12","12-14","14-16", "16-18","18-20","20-22","22-24"],
                datasets: [{
                    data: [200, 500, 2500, 2300, 1900, 1500, 1800, 2000, 230, 2400, 1600, 1100],
                    backgroundColor: '#e5a370',  // light orange color under graph line
                    borderColor: '#8c450f', // dark orange - line color
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


        
    
   

});
let mt = document.getElementById("mt");
mt.addEventListener('click', (event) => {

    let trafficLine = new Chart(traffic, {
        type: 'line',
        
            data: {
             
               
                labels: ["Jan", "FEB", "MAR", "APR", "JUN","JUL","AUG", "SEP","OCT","NOV","DEC"],
                datasets: [{
                    data: [215000, 210000, 220000, 230000, 220000, 230000, 240000, 230000, 220000, 221000, 210000, 230000],
                    backgroundColor: '#e8a0b6',  // light pink color under graph line
                    borderColor: '#87475b', // dark pink - line color
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


        
    
   

});

let bell= document.getElementById('bell');
bell.addEventListener('click',(event) => {
    console.log("pop"); 
let popText=document.getElementById('popText');

if (popText.style.visibility="hidden"){
    popText.classList.add("popUpText");
    popText.innerHTML= "You have new messages, You have a new mention in chat";
    popText.style.visibility="visible";
} else if (popText.style.visibility="visible"){
    popText.classList.remove('popUpText');

    popText.style.visibility="hidden";
};
});

let noPop = document.getElementById('popText');
noPop.addEventListener('click', event =>{
    popText.classList.remove('popUpText');
    popText.style.visibility = "hidden";
});