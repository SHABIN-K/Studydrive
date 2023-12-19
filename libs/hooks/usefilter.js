//https://www.w3schools.com/jsref/jsref_obj_regexp.asp

const filterPosts = (searchText, postData) => {
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

const filterUrl = (params, postData) => {
  if (params && params.post && params.post.length === 2) {
    const [postId, postTitle] = params.post;
    const regexId = new RegExp(postId, "i");
    const regexTitle = new RegExp(postTitle, "i");
    return postData.filter(
      (item) =>
        regexId.test(item.id) &&
        regexTitle.test(item.title.replace(/\s+/g, "-"))
    );
  }
  return [];
};

const filterSyllabus = (syllabus, postData) => {
  if (syllabus && syllabus.length === 2) {
    const [course, category] = syllabus;
    const regexcourse = new RegExp(course, "i");
    const regexCategory = new RegExp(category, "i");
    return postData.filter(
      (item) =>
        regexcourse.test(item.course_name) && regexCategory.test(item.category)
    );
  }
  return [];
};

export { filterPosts, filterUrl, filterSyllabus };
