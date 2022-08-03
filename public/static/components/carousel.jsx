const { Carousel } = antd;

const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "400px",
  textAlign: "center",
  background: "#364d79",
};

const contentStyleList = [
  {
    height: "400px",
    color: "#fff",
    lineHeight: "400px",
    textAlign: "center",
    background: "#364d79",
  },
  {
    height: "400px",
    color: "#fff",
    lineHeight: "400px",
    textAlign: "center",
    background: "#f81d22",
  },
  {
    height: "400px",
    color: "#fff",
    lineHeight: "400px",
    textAlign: "center",
    background: "#008dff",
  },
  {
    height: "400px",
    color: "#fff",
    lineHeight: "400px",
    textAlign: "center",
    background: "#0b8235",
  },
];

const CarouselItems = contentStyleList.map((item,i) => (
  <div key={i}>
    <h3 style={item}>{i==0?"HTML":i==1?"CSS":i==2?"Javascript":"React"}</h3>
  </div>
));

ReactDOM.render(
  <Carousel autoplay>
    {CarouselItems}
  </Carousel>,
  document.getElementById("carousel")
);
