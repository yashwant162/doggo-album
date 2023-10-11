/* eslint-disable no-unused-vars */
import Map, { Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useBreed } from "../../context/useBreed";
import {
  MAPBOX_AUTH_TOKEN as TOKEN,
  MAPBOX_MAP_STYLE as MAP_STYLE,
} from "../../constants/constants";
import { useLocationPage } from "./useLocationPage";
export default function LocationPage() {
  const { breed } = useBreed();
  const { markers, popupInfo, setPopupInfo } = useLocationPage(breed);

  return (
    <div className="h-[72.5vh] max-w-[100vw] border-8 border-slate-400 mt-2 rounded-md">
      <Map
        initialViewState={{ longitude: 80.63, latitude: 20.968, zoom: 3.8 }}
        mapStyle={MAP_STYLE}
        mapboxAccessToken={TOKEN}
      >
        {markers}
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
            closeOnClick={false}
            style={{}}
          >
            <div className="flex-row">
              <div>
                <span className="font-bold">Breed:</span>
                {breed}
              </div>
              <div>
                <span className="font-bold">Latitude:</span>{" "}
                {popupInfo.latitude}
                <br />
              </div>
              <div>
                <span className="font-bold">Longitude:</span>{" "}
                {popupInfo.longitude}
              </div>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
