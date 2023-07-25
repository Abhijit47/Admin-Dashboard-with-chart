'use strict';

const chart1Container = document.querySelector('.chart__1');
const chart2Container = document.querySelector('.chart__2');

const chart3Container = document.querySelector('.chart__3');

const chart4Container = document.querySelector('.chart__4');

const menuButton = document.querySelector('.menu');

const menuList = document.querySelector('.navbar__list');

const sidebarMenu = document.querySelector('.sidebar__section');

const sidebarButton = document.querySelector('.sidebar_btn_arrow');
// console.log(sidebarButton);

const showMenu = () => {
  menuList.classList.toggle('active');
};

const toggleSidebar = () => {
  sidebarMenu.classList.toggle('sidebar__show');
  setTimeout(() => {
    sidebarButton.classList.toggle('sidebar__btn_left');
  }, 80);
  sidebarButton.classList.toggle('fa-circle-chevron-left');
};

menuButton.addEventListener('click', showMenu);
sidebarButton.addEventListener('click', toggleSidebar);

const options1 = {
  chart: {
    type: 'line'
  },
  series: [{
    name: 'sales',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  }],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  }
};

const options2 = {
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      }
    }
  }
};

const options3 = {
  series: [
    {
      data: [
        {
          x: 'New Delhi',
          y: 218
        },
        {
          x: 'Kolkata',
          y: 149
        },
        {
          x: 'Mumbai',
          y: 184
        },
        {
          x: 'Ahmedabad',
          y: 55
        },
        {
          x: 'Bangaluru',
          y: 84
        },
        {
          x: 'Pune',
          y: 31
        },
        {
          x: 'Chennai',
          y: 70
        },
        {
          x: 'Jaipur',
          y: 30
        },
        {
          x: 'Surat',
          y: 44
        },
        {
          x: 'Hyderabad',
          y: 68
        },
        {
          x: 'Lucknow',
          y: 28
        },
        {
          x: 'Indore',
          y: 19
        },
        {
          x: 'Kanpur',
          y: 29
        }
      ]
    }
  ],
  legend: {
    show: false
  },
  chart: {
    height: 350,
    type: 'treemap'
  },
  title: {
    text: '(different color for each cell)',
    align: 'center'
  },
  colors: [
    '#3B93A5',
    '#F7B844',
    '#ADD8C7',
    '#EC3C65',
    '#CDD7B6',
    '#C1F666',
    '#D43F97',
    '#1E5D8C',
    '#421243',
    '#7F94B0',
    '#EF6537',
    '#C0ADDB'
  ],
  plotOptions: {
    treemap: {
      distributed: true,
      enableShades: false
    }
  }
};

function renderCharts() {

  setTimeout(() => {
    chart1Container.textContent = "";
    chart2Container.textContent = "";
    chart3Container.textContent = "";
    const chart1 = new ApexCharts(chart1Container, options1);
    chart1.render();

    const chart2 = new ApexCharts(chart2Container, options2);
    chart2.render();

    const chart3 = new ApexCharts(chart3Container, options3);
    chart3.render();
  }, 1350);
}



renderCharts();
