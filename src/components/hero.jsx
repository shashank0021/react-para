

function Hero({ quote, author }) {
    return (
      <div className="hero-container">
        <div className="hero-content">
          <h1>{quote}</h1>
          <p>{author}</p>
        </div>
      </div>
    );
  }
  
  export default Hero