import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryParamProvider, transformSearchStringJsonSafe } from "use-query-params";
import MapContainer from "./components/map/MapContainer";
import WordsearchContainer from "./components/wordsearch/Container";
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
          <Switch>
            <Route path="/map">
              <MapContainer />
            </Route>
            <Route path="/wordsearch">
              <WordsearchContainer />
            </Route>            
            <Route>
              <MapContainer />
            </Route>
          </Switch>          
        </QueryParamProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
