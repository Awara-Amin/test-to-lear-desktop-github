function _extends() {
    return (_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }).apply(this, arguments);
}
var merge = require("deepmerge"), colors = require("../theme/base/colors"), typography = require("../theme/base/typography"), shadows = require("../theme/base/shadows"), breakpoints = require("../theme/base/breakpoints"), materialTailwindConfig = {
    darkMode: "class",
    content: [
        "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}", 
    ],
    theme: {
        colors: colors,
        fontFamily: typography,
        boxShadow: shadows,
        screens: breakpoints
    },
    plugins: []
};
module.exports = function(tailwindConfig) {
    var themeFont = materialTailwindConfig.theme.fontFamily;
    if (tailwindConfig.theme.fontFamily) {
        var _fontFamily = tailwindConfig.theme.fontFamily, sans = _fontFamily.sans, serif = _fontFamily.serif, body = _fontFamily.body;
        themeFont.sans = sans || themeFont.sans, themeFont.serif = serif || themeFont.serif, themeFont.body = body || themeFont.body;
    }
    return merge(materialTailwindConfig, _extends({}, tailwindConfig));
};
