import ThemeProvider from "@shared/styles/themeProvider";
import Router from "@shared/routes/router";
import { BrowserRouter } from "react-router-dom";
import { rootStyle } from "@shared/styles";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className={rootStyle}>
          <Router />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
