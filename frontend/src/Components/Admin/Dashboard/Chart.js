import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "apexcharts";

function PieChart({userCount ,serviceProviderCount ,pendingRequestCount, serviceCount}) {
  const chartRef = useRef(null);
  const [data, setData] = useState({
    pendingRequestCount:'',
    serviceCount:'',
    serviceProviderCount:'',
    userCount:''
  });

  useEffect(()=>{
    setData({
      userCount:userCount,
      serviceProviderCount:serviceProviderCount,
      serviceCount:serviceCount,
      pendingRequestCount:pendingRequestCount
    })
  },[pendingRequestCount, serviceCount, serviceProviderCount, userCount])

  useEffect(() => {
    const chart = new ApexCharts(chartRef.current, {
      series: [
        data.userCount,
        data.serviceProviderCount,
        data.serviceCount,
        data.pendingRequestCount
      ],
      chart: {
        height: 350,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px"
            },
            value: {
              fontSize: "16px"
            },
            total: {
              show: true,
              label: "",
              formatter: function (w) {
                return ;
              }
            }
          }
        }
      },
      labels: ["users", "serviceProviders", "services", " pendingRequests"]
    });

    chart.render();

    return () => {
      chart.destroy();
    };
  }, [data]);

  return <div className="shadow-lg" ref={chartRef}></div>;
}

export default PieChart;
