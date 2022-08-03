const { Card, Avatar, Rate } = antd;
const { Meta } = Card;

const CardList = [1, 2, 3, 4];

const CardItem = CardList.map((item, i) => (
  <Card
    key={i}
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[<Rate allowHalf defaultValue={item}></Rate>]}
  >
    <Meta
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }
      title="Card title"
      description="This is the description"
    />
  </Card>
));

ReactDOM.render(<div className="card-list">{ CardItem }</div>, document.getElementById("cards"));
