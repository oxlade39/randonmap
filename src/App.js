import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { QueryParamProvider, transformSearchStringJsonSafe } from "use-query-params";
import Container from "./components/Container";
import theme from "./theme";

const queryStringifyOptions = {
  transformSearchString: transformSearchStringJsonSafe,
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <QueryParamProvider
          ReactRouterRoute={Route}
          stringifyOptions={queryStringifyOptions}
        >
          <Container />
        </QueryParamProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
