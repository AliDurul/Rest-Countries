import { useState } from "react";
const Card = ({ data }) => {
  /* useState and onClick function */
  const [activeCards, setActiveCards] = useState([]); // active durumunu tutacak dizi
  const [query, setQuery] = useState('')

  const handleClick = (index) => {
    setActiveCards((prevState) => {
      // index'e göre active durumunu güncelle
      const updatedState = [...prevState];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };


  let filteredArr = []

filteredArr = data.filter((item)=>item.name.toLowerCase().includes(query.toLowerCase()))

console.log(filteredArr);
  const handleSearch = (e) => {
    setQuery(e.target.value);

  }


  /* fetching data */
  // console.log(data);
  return (

    <div>
      <input className="form-control mb-4 w-50 m-auto" type="text" placeholder="Search Player.." onChange={handleSearch} />
      <div className="bg p-4 d-flex flex-wrap gap-5 container justify-content-center ">


        {filteredArr.map((item, index) => {
          return (
            <div
              key={index}
              className="card card_container"
              style={{ width: '200px' }}
            >
              <div className="card-header border-top">
                <p className="card-text">{item.name}</p>
              </div>
              <div
                className={`card_content ${activeCards[index] ? "flipCard" : ""}`}
                onClick={() => handleClick(index)}
              >
                <div className="front_card">
                  <div className="img_div">
                    <img src={item.img} className="card-img-top" alt={item.name} />
                  </div>
                </div>
                <div className="back_card text-center">
                  <ul className="text-start">
                    <li>🏀 {item.statistics[0]}</li>
                    <li>🏀 {item.statistics[1]}</li>
                    <li>🏀 {item.statistics[2]}</li>
                    <li>🏀 {item.statistics[3]}</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Card;