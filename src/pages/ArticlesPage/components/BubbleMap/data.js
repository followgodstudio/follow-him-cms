export const markers = {
  type: "FeatureCollection",
  features: [
    {
      coordinates: [-74, 40.7],
      text: "New York City",
      value: 3400,
    },
    {
      coordinates: [-118.24, 34.05],
      text: "Los Angeles",
      value: 8281,
    },
    {
      coordinates: [-96.808891, 32.77916],
      text: "Dallas",
      value: 12000,
    },
    {
      coordinates: [-87.623177, 41.881832],
      text: "Chicago",
      value: 6200,
    },
    {
      coordinates: [-123.116226, 49.246292],
      text: "Vancouver",
      value: 8900,
    },
    {
      coordinates: [-72.51667, 45.349998],
      text: "Waterloo",
      value: 8900,
    },
  ].map((data) => {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: data.coordinates,
      },
      properties: {
        text: data.text,
        value: data.value,
        tooltip: `<b>${data.text}</b>\n${data.value}K`,
      },
    };
  }),
};
