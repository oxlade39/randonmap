import { makeStyles } from "@material-ui/core/styles";
import { geoCentroid } from "d3-geo";
import React, { useMemo } from "react";
import { Annotation, ComposableMap, Geographies } from "react-simple-maps";
import useWindowDimensions from "../hooks/useWindowDimensions";
import SelectGeographies from "./SelectGeographies";
import { geoUrl, svgId } from '../constants';

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

function RandomMap({countryCount = 10, selected, setSelected}) {
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
