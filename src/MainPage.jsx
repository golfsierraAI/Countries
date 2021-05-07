import Card from "./Card";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InitialReducer from "./actions/Initial";

var MainPage = () => {
  var disp = useDispatch();
  useEffect(() => {
    getInitialData();
  }, []);
  let state = useSelector((state) => {
    return state.InitialReducer.value;
  });
  var search = useSelector((state) => {
    return state.Search.value;
  });
  async function getInitialData() {
    try {
      const response = await axios.get("https://restcountries.eu/rest/v2/all");
      disp(InitialReducer(response.data));
    } catch (error) {
      console.error(error);
    }
  }
  if (search.length === 0) {
    return (
      <div className="cardCont">
        {state &&
          Object.keys(state).map((vals) => {
            var country = state[vals];

            return (
              <Card
                name={country["name"]}
                flag={country["flag"]}
                capital={country["capital"]}
                region={country["region"]}
                subRegion={country["subregion"]}
                population={country["population"]}
                area={country["area"]}
                borders={country["borders"]}
                nativeName={country["nativeName"]}
                languages={country["languages"]}
                regionalBlocks={country["regionalBlocs"]}
                callingCode={country["callingCodes"]}
              />
            );
          })}
      </div>
    );
  } else {
    return (
      <div className="cardCont">
        {search &&
          Object.keys(search).map((vals) => {
            var country = search[vals];

            return (
              <Card
                name={country["name"]}
                flag={country["flag"]}
                capital={country["capital"]}
                region={country["region"]}
                subRegion={country["subregion"]}
                population={country["population"]}
                area={country["area"]}
                borders={country["borders"]}
                nativeName={country["nativeName"]}
                languages={country["languages"]}
                regionalBlocks={country["regionalBlocs"]}
                callingCode={country["callingCodes"]}
              />
            );
          })}
      </div>
    );
  }
};
export default MainPage;
