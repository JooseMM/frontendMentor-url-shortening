import { useState, useEffect } from "react";

const useData = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  let dataFromLocalStorage;

  useEffect(() => {
    //useEffect hook to get the data from the LocalStorage when the page is reloaded
    try {
      // eslint-disable-next-line
      dataFromLocalStorage = JSON.parse(localStorage.getItem("pastLinks"));
      if (dataFromLocalStorage != null) {
        setData(dataFromLocalStorage);
      } else {
      }
    } catch (error) {}
  }, []);

  const fetchFunction = async () => {
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${input}`
      );

      const jsonData = await response.json();
      if (jsonData.result !== undefined) {
        //updates the array with the fetch data
        const newArray = [...data];
        if (data[2] != null) {
          newArray.shift();
        }
        newArray.push({
          short: `https://${jsonData.result.short_link}`,
          long: jsonData.result.original_link,
        });

        setData(newArray);

        //Here it sends the data we fetch to the browser local storage as an array
        try {
          localStorage.setItem("pastLinks", JSON.stringify(newArray));
        } catch (error) {
          console.error("Error description: " + error);
          alert(error);
        }
        setInput("");
      } else {
        alert(jsonData.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { input, data, setData, setInput, fetchFunction };
};

export default useData;
