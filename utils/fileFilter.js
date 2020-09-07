export default (context, inject) => {
  const fileFilter = fileObject => {
    if (fileObject && fileObject.provider == "local") {
      return {
        name: fileObject.name,
        url: process.env.BASE_URL + fileObject.url
      };
    } else {
      return {
        name: fileObject.name,
        url: fileObject.url
      };
    }
  };
  inject("fileFilter", fileFilter);
  context.$fileFilter = fileFilter;
};
