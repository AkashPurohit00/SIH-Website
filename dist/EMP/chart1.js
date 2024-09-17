const ctx1 = document.getElementById('barChart');

  const barchart = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Truck1', 'Truck2', 'Truck3', 'Truck4', 'Truck5', 'Truck6'],
      datasets: [{
        label: 'Truck productivity ratio',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: 'rgba(190, 30, 45, 1)',
        
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });