const pluginNavigation = require('@11ty/eleventy-navigation');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.addPassthroughCopy('assets');

  return {
    templateFormats: ['liquid', 'md', 'html'],
    dir: {
      input: 'src',
      output: '_site',
      // the following are relative to `input` above
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
  };
};
