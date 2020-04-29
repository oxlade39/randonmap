import { Graticule, Mercator } from '@vx/geo';
import { ParentSize } from '@vx/responsive';
import { scaleQuantize } from '@vx/scale';
import React from "react";
import Annotations from './Annotations';
import {svgId} from '../../constants'

const bg = '#006994';

function RandomMap({world, selected}) {

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1,
      height: '100%'
    }}>    
      <ParentSize>
        {(parent) => {
          return (
            <svg 
              id={svgId}
              width="100%"
              height="100%"
              >
              <rect x={0} y={0} fill={bg} rx={14} width="100%" height="100%"/>
              {world && <Map data={world} selected={selected} width={parent.width} height={parent.height} />}
            </svg>
          )  
        }}
      </ParentSize>
    </div>
  );
}

function Map({data, width, height, selected}) {  
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = width / 630 * 75;
  const selectedSet = new Set(selected.map(item => item.properties.name))
  return (
      <Mercator 
        data={data.features} 
        scale={scale} 
        translate={[centerX, centerY + 50]}>
        {mercator => {
          return (
            <>
            <Countries mercator={mercator} selectedSet={selectedSet} />
            <Annotations mercator={mercator} selectedSet={selectedSet} />
            </>
          );
        }
      }
      </Mercator>
  );
}

function Countries({mercator, selectedSet}) {
  const color = scaleQuantize({
    domain: [
      0,
      1
    ],
    range: ['#ffb01d', '#f63a48']
  });
  return (
    <g>
      <Graticule graticule={g => mercator.path(g)} stroke={'rgba(33,33,33,0.05)'} />
      {mercator.features.map((feature, i) => {
        const { feature: f } = feature;
        const isSelected = selectedSet.has(f.properties.name) ? 1 : 0;
        return (
          <path
            key={`map-feature-${i}`}
            d={mercator.path(f)}
            fill={color(isSelected ? 1 : 0)}
            stroke={bg}
            strokeWidth={0.5}
            onClick={event => {
              console.log({f, mercator, center: feature.centroid});
            }}
          />                  
        );
      })}
    </g>
  )
}

export default RandomMap;
