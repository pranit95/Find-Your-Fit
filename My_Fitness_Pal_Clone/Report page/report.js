var ctx = document.getElementById("line_chart")

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {

        labels: ["22/12", "23/12", "24/12", "25/12", "26/12", "27/12", "28/12", "29/12", "30/12", "31/12", "01/01","02/01"],

        datasets: [

            {

                label: "WEIGHT",

                fill: false,

                lineTension: 0.1,

                backgroundColor: "rgba(75, 192, 192, 0.4)",

                borderColor: "orange",

                borderCapStyle: 'butt',

                borderDash: [],

                borderDashOffset: 0.0,

                borderJoinStyle: 'miter',

                pointBorderColor: "rgba(75,192,192,1)",

                pointBackgroundColor: "#fff",

                pointBorderWidth: 1,

                pointHoverRadius: 5,

                pointHitRadius: 10,

                data: [0,0,0,0,0,52,52,52,52,53,54,55],

            }

        ]}
});


window.addEventListener('load' , () => {
    var user_info = JSON.parse(localStorage.getItem("user_info"))||[];
    console.log(user_info)
    document.getElementById("user_name").innerHTML = user_info[user_info.length - 1].name
  
  })