import BaseApp from "./packages/baseApp/BaseApp";
import Button from "./packages/components/button/Button";

const App = () => {
  return (
    <BaseApp>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button />
      </div>
    </BaseApp>
  );
};

export default App;
