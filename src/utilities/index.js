export const isEmptyArray = (array) => {
  if (!Array.isArray(array) || !array.length) {
    // array does not exist, is not an array, or is empty
    // ⇒ do not attempt to process array
    return true;
  }

  return false;
};

export const isEmptyObject = (obj) => {
  // for (var prop in obj) {
  //   if (!obj.hasOwnProperty(prop)) return true;
  // }

  if (Object.keys(obj).length === 0 && obj.constructor === Object) {
    return true;
  }

  return false;
};

export const isObjectPropertiesEmpty = (obj) => {
  /**
   * Loop through Object
   * Check Object[key]
   * -> If Object[key] !== null && Object[Key] !== "" -> continue
   * -> If Object[key] === null && Object[Key] === "" -> return true
   *
   * -> Default return true
   */
  for (var key in obj) {
    if (obj[key] !== null && obj[key] !== "") {
      continue;
    } else {
      return true;
    }

    // if (obj[key] !== null && obj[key] != "") return false;
  }
  return false;
};

export const isObjectPropertiesIncludeString = (obj, string) => {
  for (var key in obj) {
    if (obj[key].includes(string)) {
      return true;
    }
  }
  return false;
};

export const isStringIncludesWord = (string, word) => {
  if (string.includes(word)) return true;

  return false;
};

export const getSubString = (string, begin = 0, end = 10) => {
  const regex = /(<([^>]+)>)/gi;

  const result = string.replace(regex, "").substr(begin, end) + "...";

  return result;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const convertSlugToString = (slug) => {
  const regex = /[-_]/;

  return capitalizeFirstLetter(slug.toLowerCase().replace(regex, " "));
};
