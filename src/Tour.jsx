import "./tours.scss";

function Tour() {
  return (
    <section className="section-tours" id="section-tours">
      <div className="text-center">
        <h2 className="primary-heading mar-bottom-large">Froggy🐸🐸</h2>
      </div>
      <div className="box">
        <div className="card">
          <div className="card-side card-side--front">
            <div className="card-picture card-picture-1"> &nbsp;</div>
          </div>
          <div className="card-side card-side--back card-side--back1">
            <div className="card-cta">
              <div className="card-cta-price-box">
                <p className="card-cta-price-only">I</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-side card-side--front">
            <div className="card-picture card-picture-2"> &nbsp;</div>
          </div>
          <div className="card-side card-side--back card-side--back2">
            <div className="card-cta">
              <div className="card-cta-price-box">
                <p className="card-cta-price-only">Miss</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-side card-side--front">
            <div className="card-picture card-picture-3"> &nbsp;</div>
          </div>
          <div className="card-side card-side--back card-side--back3">
            <div className="card-cta">
              {
                <div className="card-cta-price-box">
                  <p className="card-cta-price-only">You</p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tour;
