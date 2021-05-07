import ReactLoading from "react-loading";
import MainPage from "./MainPage";
import "./App.css";
import store from "./store/store";
import { Provider } from "react-redux";
import Header from "./Header";
import { useState } from "react";
var App = () => {
  var [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 3000);
  return loading ? (
    <Provider store={store}>
      <Header />
      <MainPage />
    </Provider>
  ) : (
    <Provider store={store}>
      <div className="loader">
        <ReactLoading
          className="loadingAnim"
          type={"cubes"}
          color={"#00adb5"}
          height={100}
          width={100}
        />
      </div>
    </Provider>
  );
};
export default App;
