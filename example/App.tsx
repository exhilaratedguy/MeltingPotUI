import { DefaultTheme } from "react-jss";
import BaseApp from "../src/packages/baseApp/BaseApp";
import Button from "../src/packages/components/button/Button";
import { createStyles } from "../src/packages/styles/Theme";

const App = () => {
  const classes = styles();

  return (
    <BaseApp theme={theme}>
      <div className={classes.main}>
        <Button>Programming</Button>
        <Button disabled>Programming</Button>
      </div>
    </BaseApp>
  );
};

export default App;

const theme: DefaultTheme = {
  palette: {
    primary: "#4FAD99",
    secondary: "#02404B",
  },
  typography: {
    fontSize: "14px",
  },
};

const styles = createStyles({
  main: {
    position: "absolute",
    top: "40%",
    left: "25%",

    "& > *": {
      marginRight: 15,
    },
  },
});
