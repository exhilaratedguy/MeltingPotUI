import { DefaultTheme } from "react-jss";
import BaseApp from "../src/packages/BaseApp/BaseApp";
import Button from "../src/packages/Components/Button/Button/Button";
import PrimaryButton from "../src/packages/Components/Button/PrimaryButton/PrimaryButton";
import { createStyles } from "../src/packages/Styles/Theme";

const App = () => {
  const classes = styles();

  return (
    <BaseApp theme={exampleTheme}>
      <div className={classes.main}>
        <div>
          <PrimaryButton>Programming</PrimaryButton>
          <PrimaryButton disabled>Programming</PrimaryButton>
        </div>
        <div>
          <Button>Programming</Button>
          <Button disabled>Programming</Button>
        </div>
      </div>
    </BaseApp>
  );
};

export default App;

const exampleTheme: DefaultTheme = {
  palette: {
    primary: "#4FAD99",
    secondary: "#02404B",
    greys: {
      lightest: "#F5F5F5",
      lighter: "#E2E2E2",
      light: "#CBCBCB",
      medium: "#AAAAAA",
      dark: "#808080",
      darker: "#555555",
      darkest: "#1D1D1D",
    },
  },
  typography: {
    fontSize: "14px",
  },
  components: {
    button: {
      default: {},
    },
  },
};

const styles = createStyles({
  main: {
    position: "absolute",
    top: "40%",
    left: "25%",

    "& > div": {
      marginBottom: 35,

      "& > button": {
        marginRight: 15,
      },
    },
  },
});
