import { DefaultTheme } from "react-jss";
import BaseApp from "../src/packages/baseApp/BaseApp";
import Button from "../src/packages/components/button/Button";

const App = () => {
  return (
    <BaseApp theme={baseTheme}>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button>Programming</Button>
        <Button disabled>Programming</Button>
      </div>
    </BaseApp>
  );
};

export default App;

const baseTheme: DefaultTheme = {
  palette: {
    primary: "#4FAD99",
    secondary: "#02404B",
  },
  typography: {
    fontSize: "14px",
  },
  components: {
    button: {
      root: {
        backgroundColor: "red",
      },
      label: {
        color: "black",
      },
    },
  },
};
