const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const gainData = [10, 60, 76, 57, 58, 5, 60];
const lostData = [-5, -28, -24, -37, -2, -20, -47];

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Gain',
       data: gainData,    
      backgroundColor: 'rgba(255, 218, 128, 1)', 
      stack: 'stack1' 
    },
    {
      label: 'Lost',
      data: lostData,
      backgroundColor: 'rgba(255, 0, 0, 0.7)', 
      stack: 'stack2' 
    },
  ]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        min: -60,
        max: 80,
        title: {
          display: true,
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '        Instagram Subscribers',
        align: 'start' 
      },
    }
  }
};

const ctx = document.getElementById('subscribersChart').getContext('2d');
const subscribersChart = new Chart(ctx, config);

