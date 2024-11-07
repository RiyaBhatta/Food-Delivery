import React from "react";

export default function Carousal() {
  return (
    <>
      <div>
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{objectFit:"contain !important"}}
        >
          <div class="carousel-inner" id="carousel">
            <div class="carousel-caption" style={{zIndex:"10"}}>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success bg-blue-500" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div class="carousel-item active">
              <img
                src="https://th.bing.com/th/id/R.99a429149891b8331ab9a4d9dcdeca89?rik=ZFGjK2aI0XNcog&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFresh-hot-delicious-food-wallpaper.jpg&ehk=YcpVrjnOnSm%2fhnTl3VFd3ve98wBRCKiyDEZj%2fJ43ix8%3d&risl=&pid=ImgRaw&r=0"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://th.bing.com/th/id/OIP.eD7MpRmuCp5oKFlcdoKmuwHaE8?rs=1&pid=ImgDetMain"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://th.bing.com/th/id/OIP.NVXrSOrofUltgDT2Eq0C4QHaHa?rs=1&pid=ImgDetMain"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        
      </div>
    </>
  );
}
