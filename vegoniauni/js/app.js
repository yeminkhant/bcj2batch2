//Start JQuery Area

$(document).ready(function(){

    //Start Header

    //Start Nav Bar
    $(".navbuttons").click(function(){
        $(this).toggleClass('crossxs');
    });
    //End Nav Bar

    //End Header

    // Start Login Box 
    $("#open-btn").click(function(){
      // console.log("heyy");
      document.getElementById("form-popup").style.display = "block";
    });

    $("#formclose-btn").click(function(){
      document.getElementById("form-popup").style.display = "none";
    })
    // End Login Box 

});

// End JQuery Area

// Start Javascript Area

// Start Students Counter Section
var getcountervalues = document.querySelectorAll('.countervalues');
// console.log(getcountervalues);

getcountervalues.forEach(function(getcountervalue){
    // console.log(getcountervalue);
    getcountervalue.textContent = 0;
    const updatecounter = function(){
        const getcttarget = +getcountervalue.getAttribute('data-target');
        // console.log(getcttarget,typeof getcttarget);

        const getctcontent = +getcountervalue.innerText;
        const incnumber = getcttarget/100; //950
        // console.log(typeof getctcontent,typeof incnumber);
        if(getctcontent < getcttarget){
            getcountervalue.textContent = getctcontent+incnumber;
            setTimeout(updatecounter,100);
        }
    }
updatecounter();
    
})
// End Students Counter Section

// Start Rating Section

// Start Google code for api
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Myanmar',     8],
    ['Thailand',      2],
    ['Singapore',  4],
    ['Indonesia', 2],
    ['Srilanka',    8]
  ]);

  var options = {
    title: 'International Students',
    // is3D:true
    // pieHole:0.4,
    width:550,
    height:400
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}
// End Google code for api

// End Rating Section

const getyear = document.getElementById("getyear");
const getfullyear = new Date().getUTCFullYear();
getyear.textContent = getfullyear;

// End Javascript Area