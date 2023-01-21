class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, "");
  }

  static titleize(string) {
    const arr = string.split(" ");
    const fixedArr = string
      .split(" ")
      .map((e) => {
        if (arr.indexOf(e) == 0) {
          return Formatter.capitalize(e);
        } else if (
          e == "the" ||
          e == "a" ||
          e == "an" ||
          e == "but" ||
          e == "of" ||
          e == "and" ||
          e == "for" ||
          e == "at" ||
          e == "by" ||
          e == "from"
        ) {
          return e;
        } else {
          return Formatter.capitalize(e);
        }
      })
      .join(" ");
    return fixedArr;
  }
}