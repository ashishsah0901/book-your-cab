import tw from "tailwind-styled-components";
import mapboxGl from "!mapbox-gl";
import { useEffect } from "react";

const Map = (props) => {
  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxGl.Marker().setLngLat(coordinates).addTo(map);
  };
  useEffect(() => {
    mapboxGl.accessToken = process.env.NEXT_PUBLIC_MAP_BOX_TOKEN;
    const map = new mapboxGl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [82.0, 23.0],
      zoom: 3,
    });
    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }

    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.dropoffCoordinates, props.pickupCoordinates], {
        padding: 60,
      });
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);
  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`flex-1 h-/2`;
