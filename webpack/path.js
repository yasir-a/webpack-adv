const path = require("path");

module.exports = {
  // path to the source files
  src: path.resolve(__dirname, "../src"),
  //path to production
  build: path.resolve(__dirname, "../dist"),
  //Static files that get copied to build folder
  public: path.resolve(__dirname, "../public"),
};
