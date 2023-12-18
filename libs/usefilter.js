const filterPosts = (searchText, postData) => {
  //https://www.w3schools.com/jsref/jsref_obj_regexp.asp
  const regex = new RegExp(searchText, "i");
  return postData.filter(
    (item) =>
      regex.test(item.subject_name) ||
      regex.test(item.course_name) ||
      regex.test(item.description) ||
      regex.test(item.file_name) ||
      regex.test(item.category) ||
      regex.test(item.title)
  );
};

const filterUrl = (url, postData) => {
  //https://www.w3schools.com/jsref/jsref_obj_regexp.asp
  const regex = new RegExp(url, "i");
  return postData.filter((item) => regex.test(item.id));
};
export { filterPosts, filterUrl };
