import {fromJS} from 'immutable';
import MAP_STYLE from '../map-style/map-style-basic-v8.json';
import {Blues} from 'colorbrewer';

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer = fromJS({
  id: 'data',
  source: 'dengueByState',
  type: 'fill',
  interactive: true,
  paint: {
    'fill-color': {
      property: 'percentile',
      stops: [
        [0, Blues[5][0]],
        [1, Blues[5][1]],
        [2, Blues[5][2]],
        [3, Blues[5][3]],
        [4, Blues[5][4]]
      ]
    },
    'fill-opacity': 0.8
  }
});

export const defaultMapStyle = fromJS(MAP_STYLE);
