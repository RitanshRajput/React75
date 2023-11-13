import styled from "styled-components";
import Icon from "../public/Icon.png";
import { useState } from "react";
import { useEffect } from "react";
import SearchResult from "./components/searchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data🫠");
      }
    };

    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );

    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "BreakFast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src={Icon} alt="" />
          </div>

          <div className="search">
            <input
              onChange={searchFood}
              type="text"
              placeholder="Search Food..."
            />
          </div>
        </TopContainer>

        <FilterContainer>
          {filterBtns.map((value) => (
            <Button
              isSelected={selectedBtn === value.type}
              key={value.name}
              onClick={() => filterFood(value.type)}
            >
              {value.name}
            </Button>
          ))}
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
  /* background-color: green; */

  .logo {
    /* background-color: green; */
    border: 1px solid #b2456e;
    width: 200px;
    height: 50px;
    border-radius: 8px;

    img {
      /* background-color: orange; */
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }

  .search {
    input {
      background: transparent;
      border: 1px solid #b2456e;
      color: black;
      border-radius: 5px;
      height: 40px;
      width: 220px;
      padding: 0px 10px;
      font-size: 16px;
      outline: none;

      &::placeholder{
        color: black;
      }

      &:focus {
        border: 2px solid #b2456e;
      }
    }
  }

  @media (0 < width < 786px) {
    flex-direction: column;
    height: 100px;
  }
`;

const FilterContainer = styled.section`
  background: transparent;
  height: 70px;
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
`;

export const Button = styled.button`
  background: ${({ isSelected }) => (isSelected ? "black" : "#b2456e")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "aliceblue" : "black")};
  border-radius: 5px;
  padding: 12px 28px;
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
