const { Card, Avatar, Rate, Button } = antd;
const { Meta } = Card;

const CardList = [4, 3, 2, 1];

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
ReactDOM.render(
  <div className="articles-container">
    <h1 class="h1-title">Featured Articles</h1>
    <div className="card-list">{ CardItem }</div>
    <div className="btn">
      <Button size="large" shape="round" type="primary">See all Articles</Button>
    </div>
  </div>, 
  document.getElementById("articles")
);
