import "./home.scss";

function Home() {
  return (
    <section className="section-about">
      <div className="text-center">
        <h2 className="primary-heading mar-bottom-large">
          These are the moments I always Relive
        </h2>
      </div>
      <div className="content">
        <div className="text-content">
          <div className="text">
            <h3 className="main mar-bottom-small">
              You are going to fall in love with nature
            </h3>
            <p className="para">
              `Wishing you a very, very happy birthday today...
            </p>
            <p className="para">
              I don&apos;t know how to thank you for being a part of my life. It
              all started from a library and will continue for as long as the
              cosmos exists. I always pray to Krishna to make your purest dreams
              come true and for the purity of your purpose and your thoughts to
              remain eternal. I am glad that I have experienced your pure
              radiance, and I thank you for making a change that I never
              expected to happen.`
            </p>
            {/* <h3 className="main  mar-bottom-small">
              You are going to fall in love with nature
            </h3>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              necessitatibus accusamus, quo fugiat impedit porro id temporibus
              nesciunt quas inventore.
            </p> */}
          </div>
        </div>
        <div className="imgs">
          <img
            src="/three1.jpeg"
            alt="Photo"
            className="composition_photo composition_photo_p1"
          />
          <img
            src="/three3.jpeg"
            alt="Photo"
            className="composition_photo composition_photo_p2"
          />
          <img
            src="/three4.jpeg"
            alt="Photo"
            className="composition_photo composition_photo_p3"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
