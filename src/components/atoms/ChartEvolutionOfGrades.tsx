import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function ChartEvolutionOfGrades() {
  const options: ApexOptions = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#1E78E6"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 310,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "straight",
      width: [2],
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    markers: {
      size: 0,
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 6,
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      x: {
        format: "dd MMM yyyy", // mesmo padrão anterior
      },
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      min: 0,
      max: 10,
      labels: {
        style: {
          fontSize: "12px",
          colors: ["#6B7280"],
        },
      },
      title: {
        text: "Notas",
        style: {
          fontSize: "14px",
          fontFamily: "Space Grotesk",
        },
      },
    },
  };

  const series = [
    {
      name: "Nota",
      data: [6.5, 7.0, 8.0, 7.5, 8.5, 9.0],
    },
  ];

  return (
    <div className="max-w-full overflow-x-auto custom-scrollbar">  
      <div id="chartGrades" className="min-w-[600px]">
        <Chart options={options} series={series} type="area" height={310} />
      </div>
    </div>
  );
}