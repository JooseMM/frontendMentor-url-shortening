import "./Whyus.css";
const Whyus = () => {
  return (
    <div className="whyus-container">
      <h2>Advanced Statistics</h2>
      <p>
        track how your links are performing across the web with our advanced
        statistics dashboard
      </p>
      <div className="whyus-reasons">
        <div className="box b1">
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="box b2">
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="box b3">
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links. supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
