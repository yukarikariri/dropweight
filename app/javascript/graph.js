function weightGraph (){
    var ctx1 = document.getElementById('weightGraph');
    var weightGraph = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: JSON.parse(ctx1.dataset.labels),
            datasets: [
            {
                type: 'line',
                label: '体重の推移',
                data: JSON.parse(ctx1.dataset.data),
                fill: false,
                borderColor : "rgba(4,10,250,0.3)",
                tension: 0
            },
            {
                type: 'line',
                label: '目標',
                data: JSON.parse(ctx1.dataset.goal),
                fill: false,
                borderColor : 'rgba(254,97,132,0.8)',
                tension: 0
            }
            ]
        },
        options: {
            scales: {
                yAxes:[{
                    ticks: {
                        suggestedMin: Math.min.apply(null, JSON.parse(ctx1.dataset.goal)) - 10,
                        suggestedMax: Math.max.apply(null, JSON.parse(ctx1.dataset.data)) + 10
                    }
                }]
            }
        }
    })
}


//######OK############# 目標線ありパターン
// function weightGraph (){
//     var ctx1 = document.getElementById('weightGraph');
//     var weightGraph = new Chart(ctx1, {
//         type: 'bar',
//         data: {
//             labels: JSON.parse(ctx1.dataset.labels),
//             datasets: [
//             {
//                 type: 'line',
//                 label: '体重の推移',
//                 data: JSON.parse(ctx1.dataset.data),
//                 fill: false,
//                 borderColor : "rgba(4,10,250,0.3)",
//                 tension: 0
//             },
//             {
//                 type: 'line',
//                 label: '目標',
//                 data: JSON.parse(ctx1.dataset.goal),
//                 borderColor : 'rgba(254,97,132,0.8)',
//                 tension: 0
//             }
//             ],
//             }
//         })
// }
//######OK#############

//######OK#############
// function weightGraph (){
//     var ctx1 = document.getElementById('weightGraph');
//     var weightGraph = new Chart(ctx1, {
//         type: 'line',
//         data: {
//             labels: JSON.parse(ctx1.dataset.labels),
//             datasets: [{
//                 label: '体重の推移',
//                 data: JSON.parse(ctx1.dataset.data),
//                 fill: false,
//                 borderColor : "rgba(4,10,250,0.3)",
//                 tension: 0
//                 }],
//             },
//         })
// }
//######OK#############

function waterGraph (){
  var ctx2 = document.getElementById('waterGraph').getContext('2d');
  var waterGraph = new Chart(ctx2, {
      type: 'bar',
          data: {
              labels: ["Red", "Blue", "Yellow", "Green", "Purple",  "Orange"],
              datasets: [{
                  label: 'お水の摂取量',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }
  })
} 

window.addEventListener('load', weightGraph)
window.addEventListener('load', waterGraph)