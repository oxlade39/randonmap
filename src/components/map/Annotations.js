import { Text } from '@vx/text';
import React from "react";


function Annotations({mercator, selectedSet}) {
  return mercator.features
    .filter(feature => {
      const { feature: f} = feature;
      const isSelected = selectedSet.has(f.properties.name) ? 1 : 0;
      return isSelected;
    })
    .map((feature, i) => {
      return (
        <Text 
          key={feature.feature.properties.name}
          verticalAnchor="start"
          x={feature.centroid[0]}
          y={feature.centroid[1]}          
        >
          {i + 1}
        </Text>
      )
    });
  }

  export default Annotations;