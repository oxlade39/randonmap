import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function App() {

  const countryCount = 10;

  return (
    <div>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) => {
            // Shuffle array
            const shuffled = geographies.sort(() => 0.5 - Math.random());
            // Get sub-array of first n elements after shuffled
            const selected = shuffled.slice(0, countryCount).map(geo => geo.properties['NAME']);
            console.log('selected', selected);
            return geographies.map(geo => {
              if (selected.includes(geo.properties['NAME'])) {
                return <Geography 
                  key={geo.rsmKey} 
                  geography={geo}
                  style={{
                    default: {
                      fill: "#F53",
                      outline: "none"
                    }
                  }}
                   />
              } else {
                return <Geography 
                          key={geo.rsmKey} 
                          geography={geo} 
                          style={{
                            default: {
                              fill: "none",
                              outline: "none"
                            }
                          }}
                        />
              }              
            })
          }
        }
        </Geographies>
      </ComposableMap>
    </div>

  );
}

export default App;
