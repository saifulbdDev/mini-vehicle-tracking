 "use client"; // This is a client component
 import React from "react";
  import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

  const containerStyle = {
   
    height: "100vh"
  };

  const center = {
    lat: 51.505, lng: -0.09
  };
    

  function VehiclesMap({ vehicles = [] }) {
    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "AIzaSyAg-bn7M23gtFTkO_PaC_RNAb2OYd2r3hk"
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(
      map: React.SetStateAction<null>
    ) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);

      setMap(map);
    },
    []);

    const onUnmount = React.useCallback(function callback(map: any) {
      console.log(map, "ddjd");
      setMap(null);
    }, []);

    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={20}
        onLoad={onLoad}
        onUnmount={onUnmount}>
        {/* Child components, such as markers, info windows, etc. */}
        {vehicles?.length &&
          vehicles.map((vehicle) => (
            <Marker
              key={vehicle.id}
              position={{ lat: vehicle.lat, lng: vehicle.lng }}
              title={vehicle.name}
              icon={{
                url: "https://res.cloudinary.com/drbvugloj/image/upload/v1695020945/upload/tracking_1_mghnlt.png", // Change the marker color
                scaledSize: new window.google.maps.Size(35, 35) // Adjust the marker size if needed
              }}
            />
          ))}
      </GoogleMap>
    ) : (
      <></>
    );
  }

  export default React.memo(VehiclesMap);