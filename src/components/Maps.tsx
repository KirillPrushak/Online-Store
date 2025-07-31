"use client";

import { Map, YMaps, Placemark } from "@pbe/react-yandex-maps";
import { useState } from "react";
import { locations } from "@/data/locations";

function Maps() {
  const [currentLocation, setCurrentLocation] = useState("minsk");
  const currentLocationData = locations[currentLocation];

  return (
    <YMaps
      query={{
        lang: "ru_RU",
        apikey: "548b2eaa-2103-4496-b597-3ca422f149d5",
        load: "package.full",
      }}
    >
      <section>
        <div className="flex flex-col justify-center xl:max-w-[1208px]">
          <h2 className="mb-4 md:mb-8 xl:mb-10 text-2xl xl:text-4xl text-left font-bold">
            Наши магазины
          </h2>
          <div className="flex flex-wrap gap-x-2 gap-y-3 mb-5">
            {Object.keys(locations).map((key) => {
              const isActive = currentLocation === key;
              return (
                <button
                  className={`p-2 text-xs justify-center items-center active:shadow-
                  (--shadow-button-active) border-none rounded cursor-pointer
                  transition-colors duration-300 ${
                    isActive
                      ? "bg-(--color-primary) text-white hover: shadow-(--shadow-button-default)"
                      : "bg-[#f3f2f1] hover:shadow-(shadow-button-secondary)"
                  }`}
                  key={key}
                  onClick={() => setCurrentLocation(key)}
                >
                  {locations[key].name}
                </button>
              );
            })}
          </div>
          <Map
            options={{ suppressMapOpenBlock: true }}
            defaultState={{ center: currentLocationData.center, zoom: 11 }}
            state={{ center: currentLocationData.center, zoom: 11 }}
            className="no-ymaps-coporight w-full h-[354px]"
          >
            {locations[currentLocation].shops.map((shop) => (
              <Placemark
                key={shop.id}
                geometry={shop.coordinates}
                properties={{
                  hintContent: shop.name,
                }}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: "/icons-map/icon-location.svg",
                  iconImageSize: [32, 32],
                  iconImageOffset: [-16, -16],
                }}
              />
            ))}
          </Map>
        </div>
      </section>
    </YMaps>
  );
}

export default Maps;
