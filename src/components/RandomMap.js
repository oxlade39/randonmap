import { makeStyles, useTheme } from "@material-ui/core/styles";
import { geoCentroid } from "d3-geo";
import React, { useEffect, useMemo } from "react";
import { Annotation, ComposableMap, Geographies, Geography } from "react-simple-maps";
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
  return shuffled.slice(0, selectCount);
}

function SelectGeographies({geographies, selectCount, setSelected}) {  
  const theme = useTheme();
  const selected = useMemo(() => select(geographies, selectCount), [selectCount, geographies]);
  const selectedNames = selected.map(geo => geo.properties["NAME"]);

  useEffect(() => {
    setSelected(selected);
  }, [selected, setSelected]);

  return geographies.map((geo) => {
    if (selectedNames.includes(geo.properties["NAME"])) {
      return (
        <Geography          
          key={geo.rsmKey}
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

function Annotations({selected}) {
  return useMemo(() => selected.map((geo, index) => {
      const centroid = geoCentroid(geo);
      const postive = Math.random() < 0.5 ? -1 : 1;
      return (
        <Annotation
          key={geo.rsmKey}
          subject={centroid}
          dx={(10 + Math.random() * 20) * postive}
          dy={10 + Math.random() * 20}
        >
          <text x={4} fontSize={14} alignmentBaseline="middle">
            {index + 1}
          </text>
        </Annotation>
      )
    }), [selected]);
}

function RandomMap({svgId = "randomMap", countryCount = 10, selected, setSelected}) {
  const { height, width } = useWindowDimensions();
  const classes = styles();

  return (
    <div 
      className={classes.svgContainer} 
      style={{
        maxWidth: width,
        maxHeight: height
      }}
      >
        <svg 
          id={svgId}
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
            <Annotations selected={selected} />            
          </ComposableMap>
        </svg>      
    </div>
  );
}

export default RandomMap;
