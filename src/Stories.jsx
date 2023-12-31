import "./stories.scss";

function Stories() {
  return (
    <section className="stories">
      <div className="story-text">
        <h3
          style={{ fontSize: "2rem" }}
          className="heading margin-bottom-small"
        >
          Hope you are Doing Fine❤
        </h3>
        <p style={{ fontSize: "1.5rem" }}>
          Let yourself be silently drawn by the
        </p>
        <p style={{ fontSize: "1.5rem" }}>
          strange pull of what you really love
        </p>
      </div>
      <div className="bg-video">
        <video autoPlay muted loop className="bg-video-content">
          <source src="/birth.mp4" type="video/mp4"></source>
        </video>
      </div>
      {/* <div className="text-center">
        <h2 className="primary-heading mar-bottom-large">
          We make People genuinely happy
        </h2>
      </div>
      <div className="messages">
        <div className="message">
          <div className="fig">
            <img className="fig-shape" src="/nat-8.jpg" alt="img"></img>
          </div>

        <div className="message">
          <div className="fig">
            <img className="fig-shape" src="/nat-9.jpg" alt="img"></img>
          </div>
          <div className="story-text">
            <h3 className="heading margin-bottom-small">
              Wow my Life is completely differnt now
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              voluptatem illo esse fugiat ea quos. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Architecto, laboriosam.
            </p>
          </div>
        </div> */}
      {/* </div> */}
      {/* <div className="text-center margin-bottom-large">
        <a href="#5" className="btn-text">
          Read all Stories &rarr;
        </a>
      </div> */}
    </section>
  );
}

export default Stories;
