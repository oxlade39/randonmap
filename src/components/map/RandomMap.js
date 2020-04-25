import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { ComposableMap, Geographies } from "react-simple-maps";
import { geoUrl, svgId } from '../../constants';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Annotations from "./Annotations";
import SelectGeographies from "./SelectGeographies";

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

function RandomMap({countryCount = 10, selected, setSelected, mapId}) {
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
                  mapId={mapId}
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
