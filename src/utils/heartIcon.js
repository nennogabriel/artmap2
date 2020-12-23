import Leaflet from 'leaflet';
import heartImg from '../assets/heart.svg';

const heartIcon = Leaflet.icon({
  iconUrl: heartImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

export default heartIcon;
