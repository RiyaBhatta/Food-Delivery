import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCate, setFoodCate] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async ()=>{
    let response = await fetch("http://localhost:5002/api/foodData",{
      method:"POST",
      headers: {
        'Content-Type':'application/json'
      }
    });

    response = await response.json();

    setFoodItem(response[0]);
    setFoodCate(response[1]);

    //console.log(response[0],response[1]);
  }

  useEffect(()=>{
    loadData()
  },[])

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
      <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{objectFit:"contain !important"}}
        >
          <div class="carousel-inner" id="carousel">
            <div class="carousel-caption" style={{zIndex:"10"}}>
              <div class="d-flex justify-content-center">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e)=>{setSearch(e.target.value)}}
                />
                
              </div>
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
      <div className="container">
        {
          foodCate !== []
          ? foodCate.map((data)=>{
              return( <div className="row mb-3">
              <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
              <hr/>
              {foodItem !== [] ? foodItem.filter((item)=> (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))).map(filterItems => {
                return(
                  <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                  <Card foodItem ={filterItems}
                    options={filterItems.options[0]}
                    />
                  </div>
                );
              }
            ):<div>No Such Data Found</div>}
              </div>
            )
              
          })
          : ""
        }
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
