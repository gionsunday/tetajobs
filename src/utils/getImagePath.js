const importAll = (r) => {
  let images = {};
  r.keys().forEach((key) => {
    const fileName = key.replace('./', '');
    images[fileName] = r(key);
  });
  return images;
};

const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

export const getImagePath = (name) => images[name];
