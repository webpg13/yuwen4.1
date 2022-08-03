const { Input, Space } = antd;
const { Search } = Input;
const onSearch = (value) => console.log(value);

ReactDOM.render(
  <div className="footer-container">
    <div className="footer-top">
      <div className="foot">
        <p className="tit">SIGN UP FOR OUR DAILY INSIDER</p>
        <div className="input-wrap">
          <Search
            placeholder="Enter you email"
            allowClear
            enterButton="Subscribe"
            size="large"
            onSearch={onSearch}
          />
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="copyright-uls">
        <div className="copyright-ul">
          <p className="copyright-title">Explore</p>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>
        <div className="copyright-ul">
          <p className="copyright-title">Support</p>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>
        <div className="copyright-ul">
          <p className="copyright-title">Stay connected</p>
        </div>
      </div>
      <div className="university">
        <p className="university-title">DEV@Deakin 2022</p>
        <div className="policy-term">
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Code of Conduct</p>
        </div>
      </div>
    </div>
  </div>,
  document.getElementById("footer")
);
