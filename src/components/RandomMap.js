import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useMemo } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import useWindowDimensions from "../hooks/useWindowDimensions";


const styles = makeStyles((theme) => ({
  svgContainer: {
    position: 'relative',
    height: 0,
    width: '100%', 
    padding: theme.spacing(4),    
    verticalAlign: 'text-top'
    
  },
  parentSvg: {
    position: 'absolute', 
    padding: theme.spacing(4),
    verticalAlign: 'text-top'
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

function SelectGeographies({geographies, selectCount, setSelected}) {  
  const theme = useTheme();
  const selected = useMemo(() => select(geographies, selectCount), [selectCount]);
  setSelected(selected);
  let count = 0;
  return geographies.map((geo) => {
    if (selected.includes(geo.properties["NAME"])) {
      console.log('selected', geo);
      return (
        <Geography          
          geography={geo}
          style={{
            default: {
              fill: theme.palette.primary.main,
              stroke: theme.palette.secondary.main,
              strokeWidth: 1
            },
          }}
        />        
      );
    } else {
      return (
        <Geography
          key={geo.rsmKey}
          geography={geo}
          label={count++}
          style={{
            default: {
              fill: theme.palette.secondary.main,
            },
          }}
        />
      );
    }
  });
}

function RandomMap({ countryCount = 10}) {
  const { height, width } = useWindowDimensions();
  const classes = styles();
  const [selected, setSelected] = React.useState([]);

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
          <ComposableMap preserveAspectRatio="xMinYMin">
            <Geographies geography={geoUrl}>
              {({geographies}) => 
                <SelectGeographies 
                  geographies={geographies} 
                  selectCount={countryCount} 
                  setSelected={setSelected}
                />
              }
            </Geographies>
          </ComposableMap>
        </svg>      
    </div>
  );
}

export default RandomMap;
