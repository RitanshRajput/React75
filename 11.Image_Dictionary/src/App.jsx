import React, { useEffect, useState } from "react";
import axios from "axios";

// remove before uploading
const apiKey = "put your flikcr api key here";

const App = () => {
  const [data, setData] = useState("");
  const [search, setSearch] = useState([]);

  useEffect(() => {}, []);

  const searchValue = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setData(response.data.photos.photo);
      })
      .catch((error) => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };

  return (
    <div className="bg-slate-600 h-[100vh] overflow-hidden">
      <div className="flex gap-4 flex-col justify-center items-center bg-slate-950 text-white min-w-[600px] h-[160px]">
        <h2 className="text-blue-400 h-12 w-[400px] text-[37px] flex items-center justify-center font-bold">
          Image Dictionary
        </h2>
        <div className="w-[400px] h-12 flex items-center justify-center">
          <form onSubmit={submitHandler}>
            <input
              onChange={searchValue}
              value={search}
              type="text"
              className="outline-none text-[20px] rounded-md text-black font-normal p-1 w-38 pl-2 mr-1"
            />
            <input
              type="submit"
              value="Search"
              className="bg-blue-600 text-[20px] rounded-md w-20 h-10 text-white cursor-pointer hover:bg-blue-500 ease-in-out duration-200"
            />
          </form>
        </div>
      </div>

      <div className="bg-slate-950 min-w-[600px] h-[calc(100vh-160px)] flex flex-wrap gap-5 p-4 items-center justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-950 ">
        {data.length >= 1 ? (
          <ImageCard data={data} />
        ) : (
          <h4 className="text-white text-2xl absolute mt-[-200px]">
            Search Something Different..😋
          </h4>
        )}
      </div>
    </div>
  );
};
export default App;

const ImageCard = ({ data }) => {
  return (
    <>
      {data.map((image) => (
        <div
          key={image.id}
          className="w-[300px] h-[300px] bg-slate-900 flex justify-center items-center backdrop-opacity-10 backdrop-invert bg-slate-500/8 rounded-2xl"
        >
          <img
            className="bg-green-300 w-[260px] h-[260px] object-fill rounded-md"
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
            alt="Image is Broken"
          />
        </div>
      ))}
    </>
  );
};
