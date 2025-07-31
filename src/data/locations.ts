import { Locations } from "@/types/shops";

export const locations: Locations = {
  minsk: {
    name: "Минск",
    center: [53.9, 27.54],
    shops: [
      {
        id: 1,
        coordinates: [53.9, 27.54],
        name: "Магазин на в историческом районе Романоской Слободы",
      },
      {
        id: 2,
        coordinates: [53.87, 27.46],
        name: "Магазин на в историческом районе Романоской Слободы",
      },
      {
        id: 3,
        coordinates: [53.87, 27.6],
        name: "Магазин на в историческом районе Романоской Слободы",
      },
    ],
  },
  sluck: {
    name: "Слуцк",
    center: [53.0, 27.53],
    shops: [
      {
        id: 4,
        coordinates: [53.0, 27.53],
        name: "Магазин на октябрьской",
      },
    ],
  },
  soligorsk: {
    name: "Солигорск",
    center: [52.8, 27.54],
    shops: [
      {
        id: 5,
        coordinates: [52.8, 27.54],
        name: "Магазин на октябрьской",
      },
      {
        id: 6,
        coordinates: [52.76, 27.51],
        name: "Магазин на октябрьской",
      },
    ],
  },
};
