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
// alerts
let bell= document.getElementById('bell');
bell.addEventListener('click',(event) => {
    console.log("pop"); 
let popText=document.getElementById('popText');

if (popText.innerHTML == ""){
    popText.classList.add("popUpText");
    popText.innerHTML= "You have new messages. You have a new mention in chat.";
    popText.style.visibility="visible";
} else {
    popText.classList.remove('popUpText');

    popText.style.visibility="hidden";
};
});

let noPop = document.getElementById('popText');
noPop.addEventListener('click', event =>{
    popText.classList.remove('popUpText');
    popText.style.visibility = "hidden";
});


// Autocomplete search

//Keycodes 13 = enter, 38 =  up arrow, 40 =  down arrow
//let searchTerm = document.getElementById('search').innerText;
let search = document.getElementById("search");
let results = document.getElementById("results");
let members =['Alex Young','Vitoria Chambers','Dan Oliver', 'Dawn Wood','Dale Byrd','Dave Lister','Spider Man', 'Luke Skywalker','James Bond', 'Col Mustard']
match = [];
let rsltsCursor= 0;
//add listener on search box



let searchBox= document.getElementById("search");


searchBox.addEventListener('keyup', event => {
    
    console.log ("listener")
    results.innerHTML="";  // reset results
       hideShow('hide'); 
       if (searchBox.value.length > 0){
         match = foundMatch(searchBox.value);   
         if (match.length > 0) {
            showMatch(match);
         }
        }
        
        
         }); // end searchBox listener
results.addEventListener('click', (event) => {
searchBox.value = event.target.innerHTML;
});

// hide or show results
 function hideShow(action) {
     if(action == 'show'){
         results.classList.add('show')
     } else if (action == 'hide'){
         results.classList.remove('show')
     }

 };

 //find matched result
 function foundMatch(searchTerm){
    let list=[];
    //let searchTerm = document.getElementById('search').innerText;
    for (let i=0; i< members.length; i++){
        if (members[i].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ){
        list.push(members[i]);
      }
    }
      return list;
 };

 

// show match results to user
function showMatch(list){
let counter = 0;

while (counter < list.length){
    results.innerHTML += '<li>' + list[counter] + '</li>';
    counter ++;
}
hideShow('show');
};


// send message listener
let send =document.getElementById("send");
send.addEventListener('click', (event) =>{
    //user.setAttribute("placeholder", "Search for user");

    //messageUser.setAttribute("placeholder", "Message Sent");

    console.log("listner");
    //event.preventDefault();
    let user=document.getElementById('user');
    let messageUser=document.getElementById('messageUser');
    console.log(user.value);

if (user.value == ""){
    console.log("none");
     //user.setAttribute("placeholder", "Enter Name of recipient");
    user.setAttribute("placeholder", "Enter Name of recipient");
     user.style.border = "1px solid red";
} else if( messageUser.value == ""){
    console.log("none2");
    //messageUser.setAttribute("placeholder", "Enter your message");

    messageUser.setAttribute("placeholder", "Type your message here");
    messageUser.style.border = "1px solid red";

} else {

messageUser.setAttribute("placeholder", "Message Sent");
    
    event.preventDefault();
    //user.setAttribute("placeholder", "Search for user");

    //messageUser.setAttribute("placeholder", "Message for user");
};
});




// close Alert listener
$closeAlert=document.getElementById("closeAlert");
closeAlert.addEventListener ('click', (event) => {
$notice=document.getElementById("notice");
closeAlert.style.visibility="hidden";
console.log(notice);
notice.innerHTML="";
});


//listener for local storage
let savebtn= document.getElementById("savebtn");
savebtn.addEventListener('click', (event) => {
    checkEmail=document.getElementById("checkEmail");
console.log(checkEmail.checked);
let checkPub=document.getElementById("checkPub");
let setTZone=document.getElementById("setTZone");

console.log(setTZone.selectedOptions[0].text);
localStorage.setItem('email', checkEmail.checked );
localStorage.setItem('public', checkPub.checked );
localStorage.setItem('tZone', setTZone.selectedOptions[0].value );

});
window.onload= () =>{
if (localStorageExists()){
let localEmail =localStorage.getItem('email');
let localPub =localStorage.getItem('public');
let localTZone =localStorage.getItem('tZone');

console.log(localEmail);
console.log(localPub);
console.log(localTZone);
    if (localEmail !== null){
     let   checkEmail=document.getElementById("checkEmail");
        checkEmail.checked = (localEmail==='true');
    };
    if (localPub !== null){
    let    checkPub=document.getElementById("checkPub");
        checkPub.checked = (localPub==='true');
    }
    if (localTZone !== null){
     let   tZone=document.getElementById("setTZone");
        tZone.value = localTZone;
    }

}
}

//check if local storage is available
function localStorageExists(){
    try{
    return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

// reset settings
let cancelBtn=document.getElementById("cancelbtn");
    cancelBtn.addEventListener("click", (event) =>{
        let   checkEmail=document.getElementById("checkEmail");
        let  checkPub=document.getElementById("checkPub");
        let   tZone=document.getElementById("setTZone");
        checkEmail.checked = false;
        checkPub.checked = false;
        tZone.value = '';

})