import React from "react";

import i1 from "../../assets/images/post-1-610x412.jpg";
import i2 from "../../assets/images/post-2-610x412.jpg";

class News extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-default">
        <div className="container">
          <h2>Latest news</h2>
          <div className="row row-50 row-narrow-50 row-xl">
            <div className="col-md-6 wow fadeInLeft">
              <div className="post-classic">
                <a className="post-classic__media" href="news-post.html">
                  <img src={i1} alt width={610} height={412} />
                </a>
                <div className="post-classic__label">28.10.2019</div>
                <div className="title">
                  <a href="news-post.html">
                    What does achieving ISO 14001 Standard mean in the world of
                    modern logistics?
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInRight">
              <div className="post-classic">
                <a className="post-classic__media" href="news-post.html">
                  <img src={i2} alt width={610} height={412} />
                </a>
                <div className="post-classic__label">28.10.2019</div>
                <div className="title">
                  <a href="news-post.html">
                    How we aim to have a positive impact on the environment and
                    what it means for the future of our logistics company
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
