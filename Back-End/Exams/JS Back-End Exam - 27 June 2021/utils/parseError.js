module.exports = (err) => {
  if (err.name == "ValidationError") {
    return Object.values(err.errors).map((v) => v.message);
  } else if (Array.isArray(err)) {
    return err.map((x) => x.msg);
  } else {
    return err.message.split("\n");
  }
};
