export default (context, inject) => {
  const imageFilter = imageObject => {
    if (imageObject && imageObject.provider == "local") {
      return {
        image: process.env.BASE_URL + imageObject.url,
        thumbnail: process.env.BASE_URL + imageObject.formats.thumbnail.url
      };
    } else {
      return {
        image: imageObject.url,
        thumbnail: imageObject.url
      };
    }
  };
  inject("imageFilter", imageFilter);
  context.$imageFilter = imageFilter;
};
