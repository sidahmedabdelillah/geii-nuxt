export default (context, inject) => {
  const imageFilter = imageObject => {
    let image;
    if (imageObject && imageObject.provider == "local") {
      console.log(process.env.BASE_URL);
      try {
        image = {
          image: process.env.BASE_URL + imageObject.url,
          thumbnail: process.env.BASE_URL + imageObject.formats.thumbnail.url
        };
      } catch {
        image = {
          image: process.env.BASE_URL + imageObject.url,
          thumbnail: process.env.BASE_URL + imageObject.url
        };
      }
      return image;
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
