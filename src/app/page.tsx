import Image from 'next/image'
import VehiclesMap from "@/components/VehiclesMap";
import { ArrowUturnLeftIcon, ArrowUturnRightIcon, SignalIcon, StopIcon } from "@heroicons/react/24/outline";
export default function Home() {
  const vehicles = [
    {
      id: 1,
      lat: 51.51,
      lng: -0.1,
      name: "Vehicle 1",
      moving: "Turned Left",
      speed: 12,
      status: "active"
    },
    {
      id: 2,
      lat: 51.52,
      lng: -0.11,
      name: "Vehicle 2",
      moving: "Stoped",
      speed: 77,
      status: "active"
    },
    {
      id: 3,
      lat: 51.53,
      lng: -0.12,
      name: "Vehicle 3",
      moving: "Turned Left",
      speed: 22,
      status: "inactive"
    },
    {
      id: 4,
      lat: 51.5,
      lng: -0.13,
      name: "Vehicle 4",
      moving: "Turned Right",
      speed: 12,
      status: "active"
    },
    {
      id: 5,
      lat: 51.53,
      lng: -0.14,
      name: "Vehicle 5",
      moving: "Turned Right",
      speed: 54,
      status: "active"
    },
    {
      id: 6,
      lat: 51.48,
      lng: -0.15,
      name: "Vehicle 6",
      moving: "Turned Left",
      speed: 33,
      status: "active"
    },
    {
      id: 7,
      lat: 51.52,
      lng: -0.16,
      name: "Vehicle 7",
      moving: "Stoped",
      speed: 12,
      status: "active"
    },
    {
      id: 8,
      lat: 51.54,
      lng: -0.17,
      name: "Vehicle 8",
      moving: "Turned Left",
      speed: 32,
      status: "active"
    },
    {
      id: 9,
      lat: 51.52,
      lng: -0.1,
      name: "Vehicle 9",
      moving: "Turned Right",
      speed: 107,
      status: "active"
    },
    {
      id: 10,
      lat: 51.49,
      lng: -0.11,
      name: "Vehicle 10",
      moving: "Turned Right",
      speed: 89,
      status: "inactive"
    }
    // Add more vehicle data here
  ];
  return (
    <main className="flex min-h-screen  ">
      <div className="w-1/2">
        <VehiclesMap vehicles={vehicles} />
      </div>
      <div className="w-1/2 flex max-h-[400px] bg-white overflow-y-auto min-h-screen">
        <div className="px-3 py-3">
          <div className="flex items-center my-5">
            <SignalIcon className="mr-2" height={24} />
            <h3>Live Status</h3>
          </div>
          <ul role="list" className="divide-y space-y-4  divide-white/5">
            {vehicles.map((vehicle) => (
              <li
                key={vehicle?.commit}
                className="py-3 px-3 flex items-center bg-gray-50 rounded-lg space-x-4">
                <div className="">
                  {vehicle.moving === "Turned Left" && (
                    <ArrowUturnLeftIcon width={18} />
                  )}
                  {vehicle.moving === "Turned Right" && (
                    <ArrowUturnRightIcon width={18} />
                  )}
                  {vehicle.moving === "Stoped" && <StopIcon width={18} />}
                </div>

                <div className="">
                  <p>{vehicle.name}</p>
                  <p>{vehicle.status}</p>
                </div>

                <div className="">
                  <p>{vehicle.moving}</p>
                  <p>{vehicle.speed} kph</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
