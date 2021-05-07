import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(() => ({
  root: {
    flexBasis: "33%",
    boxShadow: "none",
    marginBottom: "2rem",
    background: "transparent",
  },
  header: {
    textAlign: "center",
  },
  heading: {
    color: "#02475e",
    fontFamily: "'Krona One', sans-serif !important",
  },
  info: {
    fontFamily: "'Mandali', sans-serif",
    fontSize: "1rem",
    color: "#440a67",
    fontWeight: "600",
  },
  media: {
    height: "12rem",
    width: "20rem",
    marginBottom: "2rem",
    ["@media (max-width:800px)"]: {
      margin: "auto",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    ["@media (max-width:900px)"]: {
      paddingLeft: "10rem",
      width: "100%",
    },
  },
  aligner: {
    width: "20rem",
    margin: "auto",
  },

  league: {
    textAlign: "center",
    paddingTop: "1rem",
  },
}));
var Cards = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader className={classes.header} title={props.name} />
      <div className={classes.aligner}>
        <CardMedia image={props.flag} className={classes.media} />

        <CardContent className={classes.content}>
          <Typography variant="body2">
            <span className={classes.heading}>Capital: </span>
            <span className={classes.info}>{props.capital}</span>
          </Typography>

          <Typography variant="body2">
            <span className={classes.heading}>Region: </span>
            <span className={classes.info}>{props.region}</span>
          </Typography>

          <Typography variant="body2">
            <span className={classes.heading}>Sub Region: </span>
            <span className={classes.info}>{props.subRegion}</span>
          </Typography>

          <Typography variant="body2">
            <span className={classes.heading}>Population: </span>
            <span className={classes.info}>{props.population}</span>
          </Typography>

          <Typography variant="body2">
            <span className={classes.heading}>Area: </span>
            <span className={classes.info}>
              {props.area}
              <span dangerouslySetInnerHTML={{ __html: "&#x33A2" }} />
            </span>
          </Typography>

          <Typography variant="body2">
            <span className={classes.heading}>Borders: </span>
            <span className={classes.info}>
              {props.borders.map((i) => {
                return <span> {i},</span>;
              })}
            </span>
          </Typography>

          <Typography variant="body2">
            <span className={classes.heading}>Native name: </span>
            <span className={classes.info}>{props.nativeName}</span>
          </Typography>

          <Typography variant="body2">
            <span className={classes.heading}>Languages:</span>
            <span className={classes.info}>
              {props.languages.map((i) => {
                return <span> {i.name},</span>;
              })}
            </span>
          </Typography>

          <Typography variant="body2">
            <span className={classes.heading}>Calling Codes: </span>
            <span className={classes.info}>
              {props.callingCode.map((i) => {
                return <span> {i},</span>;
              })}
            </span>
          </Typography>

          <Typography variant="body2">
            <span className={classes.heading}>Regional Blocks: </span>
            <span className={classes.info}>
              {props.regionalBlocks.map((i) => {
                return <span> {i.name},</span>;
              })}
            </span>
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};
export default Cards;
