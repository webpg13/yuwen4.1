const { BackTop } = antd;

const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

ReactDOM.render(
  <BackTop visibilityHeight={100}>
    <div style={style}>Top</div>
  </BackTop>,
  document.getElementById("backtop")
);
