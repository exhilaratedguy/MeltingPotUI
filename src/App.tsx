import BaseApp from "../packages/baseApp/BaseApp";

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
        Hello
      </div>
    </BaseApp>
  );
};

export default App;
