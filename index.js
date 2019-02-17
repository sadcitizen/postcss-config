module.exports = {
    /* eslint-disable global-require */
    plugins: [
        // Plugin to inline @import rules content
        require('postcss-import'),
        // Plugin to transform W3C CSS Custom Properties for cascading variables
        require('postcss-custom-properties')({
            preserve: false
        }),
        // PostCSS plugin enabling custom property sets references
        require('postcss-apply')({
            preserve: false
        }),
        // Plugin to reduce calc()
        require('postcss-calc'),
        // Plugin to unwrap nested rules like how Sass does it
        require('postcss-nested'),
        // Plugin to use Custom Media Queries in CSS, following the CSS Media Queries specification.
        require('postcss-custom-media'),
        // Plugin to transform W3C CSS Extensions (Custom Selectors) to more compatible CSS
        require('postcss-custom-selectors'),
        // Plugin to transform W3C CSS color function to more compatible CSS
        require('postcss-color-function'),
        // Plugin that adds `fix` and `fix-legacy` attributes to the `clear` property, for self-clearing of children
        require('postcss-clearfix'),
        // Plugin to replace easing name from easings.net to cubic-bezier()
        require('postcss-easings'),
        // Add vendor prefixes to CSS rules using values from caniuse.com
        require('autoprefixer')({
            browsers: ['last 2 versions']
        })
    ]
    /* eslint-enable global-require */
};
