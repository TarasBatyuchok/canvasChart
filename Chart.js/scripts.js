const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
    labels: labels,
    datasets: [{
            label: "First dataset",
            backgroundColor: "rgb(224, 31, 31)",
            borderColor: "rgb(249, 232, 99)",
            data: [0, 10, 5, 2, 20, 30, 45],
        },
        {
            label: "second dataset",
            backgroundColor: "rgb(224, 31, 31)",
            borderColor: "rgb(0, 191, 255)",
            data: [0, 3, 7, 120, 54, 70, 25],
        },
        {
            label: "third dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 42, 0)",
            data: [0, 6, 80, 10, 70, 90, 35],
        },
        {
            label: "fourth dataset",
            backgroundColor: "rgb(21, 19, 122)",
            borderColor: "rgb(0, 255, 17)",
            data: [10, 60, 65, 162, 162, 100, 45],
        },
    ],
};

const config = {
    type: 'line',
    data: data,
    options: {}
  };

const myChart = new Chart(document.getElementById("Chart"), config);