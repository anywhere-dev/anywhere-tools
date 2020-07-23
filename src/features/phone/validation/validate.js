const validate = (phone) => {
  const regex = new RegExp(
    /\(?\b([0-9]{2}|0((x|[0-9]){2,3}[0-9]{2}))\)?\s*[0-9]{4,5}[- ]*[0-9]{4}\b/
  );
  return regex.test(phone);
};

export default validate;
