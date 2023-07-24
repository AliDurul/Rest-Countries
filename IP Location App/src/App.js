import { AppRouter } from "./router/AppRouter";
import "./css/App.css";
import { IpProvider } from "./context/UserIpAddress";

function App() {
  return (
    <>
      <IpProvider>
        <AppRouter />
      </IpProvider>
    </>
  );
}

export default App;
