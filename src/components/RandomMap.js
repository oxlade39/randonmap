import React, { useMemo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import {
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";

import useWindowDimensions from "../hooks/useWindowDimensions";

const styles = makeStyles((theme) => ({
  svgContainer: {
    position: 'relative',
    height: 0,
    width: '100%', 
    padding: theme.spacing(4),
    // left: 0,
    // top: 0,
  },
  parentSvg: {
    position: 'absolute', 
    padding: theme.spacing(4),
    // height: '100%',
    // width: '100%',
    left: 0,
    top: 0,
  }
}))

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const select = (geographies, selectCount) => {
  // Shuffle array
  const shuffled = geographies.sort(() => 0.5 - Math.random());
  // Get sub-array of first n elements after shuffled
  return shuffled
    .slice(0, selectCount)
    .map((geo) => geo.properties["NAME"]);
}

function SelectGeographies({geographies, selectCount}) {
  const selected = useMemo(() => select(geographies, selectCount), [selectCount]);
  return geographies.map((geo) => {
    if (selected.includes(geo.properties["NAME"])) {
      return (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          style={{
            default: {
              fill: "#F53",
              outline: "none",
            },
          }}
        />
      );
    } else {
      return (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          style={{
            default: {
              fill: "none",
              outline: "none",
            },
          }}
        />
      );
    }
  });
}

function RandomMap({ countryCount = 10}) {
  const { height, width } = useWindowDimensions();

  const scale = 1;
  const svgHeight = height * scale;
  const svgWidth = width;

  const classes = styles();

  // console.log(`height: ${height}, width: ${width}`);

  return (
    <div 
      className={classes.svgContainer} 
      style={{
        maxWidth: width,
        maxHeight: height
      }}
      >
        <svg 
          className={classes.parentSvg}
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMinYMax meet">
          <ComposableMap preserveAspectRatio="xMinYMax">
            <Geographies geography={geoUrl}>
              {({geographies}) => 
                <SelectGeographies 
                  geographies={geographies} 
                  selectCount={countryCount} 
                />
              }
            </Geographies>
          </ComposableMap>
        </svg>      
    </div>
  );
}

export default RandomMap;
