//const { DateTime } = require9("luxon");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/md");
  eleventyConfig.addPassthroughCopy("src/media");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/main.js");
  // eleventyConfig.addFilter("postDate", (dateObj) => {
  //  return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  //});

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
