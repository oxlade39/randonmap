import { geoCentroid } from "d3-geo";
import React, { useMemo } from "react";
import { Annotation } from "react-simple-maps";
import {useTheme} from "@material-ui/core"

function Annotations({selected}) {
    const theme = useTheme();    
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
            <text 
                x={postive === 1 ? 5 : -10} y={5} 
                fontSize={theme.typography.fontSize * 2} 
                alignmentBaseline="below">
              {index + 1}
            </text>
          </Annotation>
        )
      }), [selected, theme.typography.fontSize]);
  }

  export default Annotations;