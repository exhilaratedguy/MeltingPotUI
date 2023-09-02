import { DefaultTheme, styled } from "styled-components";
import BaseApp from "../src/packages/BaseApp/BaseApp";
import BaseButton from "../src/packages/Components/Button/BaseButton/BaseButton";
import PrimaryButton from "../src/packages/Components/Button/PrimaryButton/PrimaryButton";

const App = () => {
  return (
    <BaseApp theme={exampleTheme}>
      <StyledMain>
        <div>
          <PrimaryButton>Programming</PrimaryButton>
          <PrimaryButton disabled>Programming</PrimaryButton>
        </div>
        <div>
          <BaseButton>Programming</BaseButton>
          <BaseButton disabled>Programming</BaseButton>
        </div>
      </StyledMain>
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

const StyledMain = styled("div")({
  position: "absolute",
  top: "40%",
  left: "25%",

  "& > div": {
    marginBottom: 35,

    ...(true && {
      "& > button": {
        marginRight: 15,
      },
    }),
  },
});
