// const { UserOutlined } = '@ant-design/icons';
const { Input,Button } = antd;



ReactDOM.render(
  <div className="header-container">
    <p className="title">DEV@Deakin</p>
    <Input size="default" placeholder="Search..." />
    <div className="btns">
      <Button size="default">Post</Button>
      <Button size="default" type="primary">Login</Button>
    </div>
  </div>,
  document.getElementById("header")
);