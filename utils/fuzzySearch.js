import Fuse from "fuse.js";

export default (items, options, query) => {
  let fuze = new Fuse(items, options);

  if (query == "" || query == null) {
    return items;
  }
  let search = fuze.search(query);
  let result = search.map(item => {
    return { ...item.item };
  });
  return result;
};
