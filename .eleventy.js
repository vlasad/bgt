module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/assets/**/*");
  eleventyConfig.addPassthroughCopy("_redirects");

  return {
    markdownTemplateEngine: "false",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src"
    }
  };
};
