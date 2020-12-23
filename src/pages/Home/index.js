import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import heartIcon from '../../utils/heartIcon';
import houseIcon from '../../utils/houseIcon';

import heart from '../../assets/heart.svg';
import house from '../../assets/house.svg';

import {
  Container,
  Aside,
  MapWrapper,
  Flex,
  BoardOut,
  BoardIn,
  TextContainer,
} from './styles';

const apiKey =
  'pk.eyJ1IjoibmVubm9nYWJyaWVsIiwiYSI6ImNrZzZ0MzFmczAwbXIycm81ZDQyYzJvbTYifQ.hcHlx_YQxYmmYLV3rjNWnA';

const Home = () => {
  const [latlong, setLatlong] = useState('-20.648990, -40.481751');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [icon, setIcon] = useState('heart');

  const [line1, setLine1] = useState('Text Line 1');
  const [line2, setLine2] = useState('Text Line 2');
  const [line3, setLine3] = useState('Text Line 3');

  const [font1, setFont1] = useState('MissLeGatees Pro');
  const [font2, setFont2] = useState('Farmhand Sans');
  const [font3, setFont3] = useState('Barlow');

  function handleChangeLatitudeLongitude() {
    const [lat, long] = latlong.split(',').map((i) => Number(i));
    if (lat !== latitude && long !== longitude) {
      setLatitude(0);
      setTimeout(() => {
        setLatitude(lat);
        setLongitude(long);
        setTimeout(() => {
          setLatitude(0);
        }, 100);
        setTimeout(() => {
          setLatitude(lat);
          setLongitude(long);
        }, 100);
      }, 100);
    }
  }

  return (
    <Container>
      <Aside>
        <input
          name="latlong"
          type="text"
          value={latlong}
          onChange={(event) => setLatlong(event.target.value)}
        />
        <div>
          <p>latitude: {latitude}</p>
          <p>longitude: {longitude}</p>
        </div>

        <button type="button" onClick={handleChangeLatitudeLongitude}>
          change on map
        </button>

        <input
          name="line1"
          type="text"
          value={line1}
          onChange={(event) => setLine1(event.target.value)}
        />

        <input
          name="line2"
          type="text"
          value={line2}
          onChange={(event) => setLine2(event.target.value)}
        />
        <input
          name="line3"
          type="text"
          value={line3}
          onChange={(event) => setLine3(event.target.value)}
        />

        <Flex>
          <button type="button" onClick={() => setIcon('heart')}>
            <img src={heart} height="auto" width="50px" alt="heart icon" />
          </button>
          <button type="button" onClick={() => setIcon('house')}>
            <img src={house} height="auto" width="50px" alt="house icon" />
          </button>
        </Flex>

        <input
          name="font1"
          type="text"
          value={font1}
          onChange={(event) => setFont1(event.target.value)}
        />
        <input
          name="font2"
          type="text"
          value={font2}
          onChange={(event) => setFont2(event.target.value)}
        />
        <input
          name="font3"
          type="text"
          value={font3}
          onChange={(event) => setFont3(event.target.value)}
        />
      </Aside>
      <MapWrapper>
        <BoardOut>
          <BoardIn>
            <div>
              {latitude !== 0 && (
                <MapContainer
                  center={[latitude, longitude]}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{
                    width: 'calc(100% + 200px)',
                    height: 'calc(100% + 200px)',
                    margin: '-100px',
                  }}
                >
                  <TileLayer
                    url={`https://api.mapbox.com/styles/v1/nennogabriel/ckixugzdw1yx819odgzvhmhd7/tiles/256/{z}/{x}/{y}@2x?access_token=${apiKey}`}
                  />
                  {icon === 'heart' ? (
                    <Marker
                      position={[latitude, longitude]}
                      icon={heartIcon}
                    ></Marker>
                  ) : (
                    <Marker
                      position={[latitude, longitude]}
                      icon={houseIcon}
                    ></Marker>
                  )}
                </MapContainer>
              )}
              <TextContainer
                fontHeader={font1}
                fontMain={font2}
                fontFooter={font3}
              >
                <header>{line1}</header>
                <main>{line2}</main>
                <footer>{line3}</footer>
              </TextContainer>
            </div>
          </BoardIn>
        </BoardOut>
      </MapWrapper>
    </Container>
  );
};

export default Home;
