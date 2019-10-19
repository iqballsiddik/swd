import React from 'react';

const BannerSlider = () => {
  return (
    <div>
      <div
        className="jumbotron"
        style={{
          backgroundImage: "url('./assets/img/banner/banner.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'nerepeat'
        }}
      >
        <div className="container">
          <div className="pt-5">
            <h1 className="display-4 text-center">
              Hi ,Welcome to SWD Official
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
