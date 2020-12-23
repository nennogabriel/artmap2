import Leaflet from 'leaflet';
import houseImg from '../assets/house.svg';

const houseIcon = Leaflet.icon({
  iconUrl: houseImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

export default houseIcon;
