const getImagesPuth = () => {
  const defaultPuth = (n, frmt = "png") => `./component/images/${n}.${frmt}`;
  const defImgsPng = ["fish", "landsafts", "mans", "monsters"];
  const imagesPuth = {};
  const tileSize = 16;
  const SCALE = 2;

  defImgsPng.forEach((img) => (imagesPuth[img] = defaultPuth(img)));
  imagesPuth.mapJSON = "./component/utils/jsons/map.json";

  return imagesPuth;
};
