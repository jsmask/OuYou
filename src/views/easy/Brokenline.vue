<template>
  <div class="main">
    <svg id="chart" viewBox="0 0 200 100" ref="chart" :class="{'animate':isActive}">
      <g transform="translate(0,100) scale(1,-1)" ref="container">
        <path id="line" ref="line" />
      </g>
      <text
        text-anchor="middle"
        alignment-baseline="middle"
        x="100"
        y="50"
        class="loading"
      >Loading...</text>
    </svg>
  </div>
</template>

<script>
const jsonData = {
  stock_name: "Apple Inc. (AAPL)",
  data: [
    {
      date: "Apr 01",
      index: 240.91,
      normalized: 27.08
    },
    {
      date: "Apr 02",
      index: 244.93,
      normalized: 36.11
    },
    {
      date: "Apr 03",
      index: 241.41,
      normalized: 28.2
    },
    {
      date: "Apr 06",
      index: 262.47,
      normalized: 75.54
    },
    {
      date: "Apr 07",
      index: 259.43,
      normalized: 68.71
    },
    {
      date: "Apr 08",
      index: 266.07,
      normalized: 83.64
    },
    {
      date: "Apr 09",
      index: 267.99,
      normalized: 87.95
    }
  ]
};

export default {
  name: "broken-line",
  data() {
    return {
      isActive:false,
      chartData: null
    };
  },
  created() {
    this.chartData = jsonData;
  },
  mounted() {
    this.line = this.$refs.line;
    this.chart = this.$refs.chart;
    this.container = this.$refs.container;
    this.drawChart(this.chartData);
  },
  methods: {
    drawChart(data) {
      let svg_width = this.chart.viewBox.baseVal.width;
      let padding = 15;
      let start_x = padding;
      let svg_tag = "data-none";
      for (let key in this.chart.dataset) {
        if (key.includes("v-")) {
          svg_tag = `data-${key}`;
        }
      }
      let name = document.createElementNS("http://www.w3.org/2000/svg", "text");
      name.setAttribute("text-anchor", "middle");
      name.setAttribute("alignment-baseline", "middle");
      name.setAttribute("x", svg_width / 2);
      name.setAttribute("y", 6);
      name.setAttribute(svg_tag, "");
      name.classList.add("name");
      name.appendChild(document.createTextNode(data["stock_name"]));
      this.chart.appendChild(name);

      let stock_data = this.chartData["data"];
      let path_data = [];

      for (let i in stock_data) {
        path_data.push(`${start_x}, ${stock_data[i]["normalized"]}`);

        let caption = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "text"
        );
        caption.setAttribute("text-anchor", "middle");
        caption.setAttribute("alignment-baseline", "middle");
        caption.setAttribute("x", start_x);
        caption.setAttribute("y", 94);
        caption.setAttribute(svg_tag, "");
        caption.classList.add("caption");
        caption.appendChild(document.createTextNode(stock_data[i]["date"]));
        this.chart.appendChild(caption);

        let circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        circle.setAttribute("cx", start_x);
        circle.setAttribute("cy", stock_data[i]["normalized"]);
        circle.setAttribute("r", 2);
        circle.setAttribute("stroke", "#9F3AF0");
        circle.setAttribute("stroke-width", 1);
        circle.setAttribute("fill", "white");
        circle.setAttribute(
          "transform-origin",
          `${start_x} ${stock_data[i]["normalized"]}`
        );
        circle.style.setProperty(
          "--delay",
          `${(3.5 * parseInt(i)) / stock_data.length}s`
        );
        circle.setAttribute(svg_tag, "");
        circle.classList.add("point");
        this.container.appendChild(circle);

        let value = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "text"
        );
        value.setAttribute("text-anchor", "middle");
        value.setAttribute("alignment-baseline", "middle");
        value.setAttribute("x", start_x);
        value.setAttribute("y", stock_data[i]["normalized"]);
        value.setAttribute(
          "transform",
          `translate(0, ${stock_data[i]["normalized"] * 2 - 8/2}) scale(1, -1)`
        );
        value.style.setProperty(
          "--delay",
          `${(3 * parseInt(i)) / stock_data.length}s`
        );
        value.setAttribute(svg_tag, "");
        value.classList.add("values");
        value.appendChild(document.createTextNode(stock_data[i]["index"]));
        this.container.appendChild(value);

        start_x += (svg_width - padding * 2) / (stock_data.length - 1);
      }

      this.line.setAttribute("d", `M${path_data.join(" ")}`);
      let strokeLength = Math.ceil(this.line.getTotalLength());
      this.chart.style.setProperty("--stroke-length", strokeLength);

      this.isActive = true;
    }
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  min-height: 100%;
  padding: 0 0;
  text-align: center;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: repeating-linear-gradient(
    45deg,
    rgba(255, 216, 168, 1) 0 2px,
    rgba(255, 189, 189, 1) 0 7px
  );
}
#chart {
  width: 100%;
  max-width: 1000px;
  background: rgba(237, 237, 239, 0.5);
  --stroke-length: 0;
}

#line {
  stroke: rgb(159, 58, 240);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
  fill: none;
  stroke-dasharray: var(--stroke-length);
  stroke-dashoffset: var(--stroke-length);
}

.name,
.caption {
  font-family: Helvetica;
  font-size: 4px;
  font-weight: bold;
  fill: rgb(159, 58, 240,.6);
  animation: 0.5s fade-in ease-in-out;
  animation-fill-mode: forwards;
}

.name{
    font-size: 6px;
}

.values {
  font-family: Helvetica;
  font-size: 3px;
}

@keyframes animate-line {
  from {
    stroke-dashoffset: var(--stroke-length);
  }
  to {
    stroke-dashoffset: 0;
  }
}

#chart.animate #line {
  animation: 3s animate-line linear;
  animation-fill-mode: forwards;
  animation-delay: 0.3s;
}

@keyframes zoom-in {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#chart .point {
  opacity: 0;
}

#chart.animate .point {
  animation: 0.5s fade-in ease-in-out, 0.5s zoom-in ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: var(--delay);
}

#chart .values {
  opacity: 0;
}

#chart.animate .values {
  animation: 0.5s fade-in ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: var(--delay);
}

.loading {
  font-family: Helvetica;
  font-size: 5px;
  fill: #999;

  transition: 0.25s opacity ease-in-out;
}

#chart.animate .loading {
  opacity: 0;
}
</style>