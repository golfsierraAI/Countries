import { makeStyles } from "@material-ui/core/styles";
import { GitHub } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import Search from "./actions/Search";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    top: "0",
    backgroundColor: "#e4fbff",
    margin: 0,
    padding: "1rem 0.5rem",
  },
  logo: {
    position: "absolute",
    width: "2rem",
    height: "2rem",
    cursor: "pointer",
    paddingLeft: "1rem",
    top: "1rem",
    color: "#907fa4",
    "&:hover": {
      color: "#3d84b8",
    },
  },
  SearchCont: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },
  search: {
    border: "0.01rem solid black",
    outline: "none",
    padding: "0.5rem 10rem 0.5rem 0.5rem",
    backgroundColor: "transparent",
  },
}));
var Header = () => {
  var disp = useDispatch();
  var data = useSelector((state) => {
    return state.InitialReducer.value;
  });
  var search = useSelector((state) => {
    return state.Search.value;
  });
  function debounce(func, timeout = 1500) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  function searchInput() {
    var ip = document.getElementById("search");
    var cont = [];
    var input = ip.value.toLowerCase();
    console.log(typeof input);
    data.forEach((i) => {
      var str1 = i["name"].toLowerCase();

      if (input !== "" && str1.startsWith(input)) {
        cont.push(i);
      }
    });
    if (input === "") {
      cont = [];
    }
    disp(Search(cont));
  }
  const processChange = debounce(() => searchInput());
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <a href="https://github.com/golfsierraAI/Countries">
          <GitHub className={classes.logo} />
        </a>
      </div>
      <div className={classes.SearchCont}>
        <input
          id="search"
          onChange={processChange}
          className={classes.search}
          type="text"
          placeholder="Search"
        />
        {console.log(search)}
      </div>
    </div>
  );
};

export default Header;
