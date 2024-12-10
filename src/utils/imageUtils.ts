const getImagePath = (type: string, name: string): string => {
  return `/assets/${type}/${name}.jpg`;
};

export default getImagePath;
