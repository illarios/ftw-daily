import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-Ionian',
    predictionPlace: {
      address: 'Ionian Islands, Ionian Sea',
      bounds: new LatLngBounds(new LatLng(40.87942188, 22.29266022), new LatLng(37.13801836, 18.93865734)),
    },
  },
  {
    id: 'default-Kiklades',
    predictionPlace: {
      address: 'Cyclades, Aegean Sea',
      bounds: new LatLngBounds(new LatLng(39.31508995, 26.67711177), new LatLng(35.49018258, 23.32310889)),
    },
  },
  {
    id: 'default-Sporades',
    predictionPlace: {
      address: 'Sporades Islands, Aegean Sea',
      bounds: new LatLngBounds(new LatLng(40.37552203, 24.76506212), new LatLng(38.5158592, 23.08806068)),
    },
  },
  {
    id: 'default-NAegean',
    predictionPlace: {
      address: 'North Aegean, Aegean Sea',
      bounds: new LatLngBounds(new LatLng(41.21787194, 27.9793328), new LatLng(37.48890609, 24.62003954)),
    },
  },
  {
    id: 'default-Dodecanese',
    predictionPlace: {
      address: 'Dodecanese, Aegean Sea',
      bounds: new LatLngBounds(new LatLng(37.25858612, 28.34403317), new LatLng(35.31435947, 26.66438654)),
    },
  },
];
export default defaultLocations;
