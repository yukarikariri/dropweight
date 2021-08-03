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
                label: '目標体重',
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
  var ctx2 = document.getElementById('waterGraph');
  var waterGraph = new Chart(ctx2, {
      type: 'bar',
          data: {
              labels: JSON.parse(ctx2.dataset.labels),
              datasets: [
              {
                type: 'bar',
                label: 'お水の摂取量',
                data: JSON.parse(ctx2.dataset.data),
                backgroundColor: "rgba(4,10,250,0.3)",
                borderColor: "rgba(4,10,250,0.3)",
                borderWidth: 1
              },
              {
                type: 'line',
                label: '目標摂取量',
                data: JSON.parse(ctx2.dataset.goal),
                fill: false,
                borderColor: 'rgba(254,97,132,0.8)',
                borderWidth: 1
            }
            ]
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