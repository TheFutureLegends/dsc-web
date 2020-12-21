// function that returns true if value is email, false otherwise
export const verifyEmail = (value) => {
  var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRex.test(value)) {
    return true;
  }
  return false;
};

// function that verifies if a string has a given length or not
export const verifyLength = (value, length) => {
  if (value.length >= length) {
    return true;
  }
  return false;
};

// function that verifies if two strings are equal
export const compare = (string1, string2) => {
  if (string1 === string2) {
    return true;
  }
  return false;
};

// function that verifies if value contains only numbers
export const verifyNumber = (value) => {
  var numberRex = new RegExp("^[0-9]+$");
  if (numberRex.test(value)) {
    return true;
  }
  return false;
};

// function that verifies if value is a valid URL
export const verifyUrl = (value) => {
  try {
    new URL(value);
    return true;
  } catch (_) {
    return false;
  }
};

// function that verifies if value is a valid URL Image
export const verifyUrlImageMime = (value) => {
  const imageRegExp = /.png|.jpg|.jpeg/;

  return imageRegExp.test(value);
};

// function that verifies if content of rich text editor has a given length or not
export const verifyEditorContentLength = (value, length) => {
  const regex = /(<([^>]+)>)/gi;

  const result = value.replace(regex, "");

  if (verifyLength(result, length)) {
    return true;
  }

  return false;
};
