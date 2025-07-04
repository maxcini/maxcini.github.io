document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('sankeyCanvas');
  if (ctx) {
    new Chart(ctx, {
      type: 'sankey',
      data: {
        datasets: [{
          label: 'Sankey Demo',
          data: [
            { from: 'A', to: 'B', flow: 5 },
            { from: 'A', to: 'C', flow: 3 },
            { from: 'B', to: 'D', flow: 2 },
            { from: 'C', to: 'D', flow: 6 }
          ]
        }]
      }
    });
  }
});
