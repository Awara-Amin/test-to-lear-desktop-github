import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import merge from "deepmerge";
import theme from "../theme/index";
import combineMerge from "../utils/combineMerge";
var MaterialTailwindTheme = createContext(theme);
function ThemeProvider(param) {
    var value = param.value, children = param.children, mergedValue = merge(theme, value, {
        arrayMerge: combineMerge
    });
    return React.createElement(MaterialTailwindTheme.Provider, {
        value: mergedValue
    }, children);
}
MaterialTailwindTheme.displayName = "MaterialTailwindThemeProvider";
var useTheme = function() {
    return useContext(MaterialTailwindTheme);
};
ThemeProvider.defaultProps = {
    value: theme
}, ThemeProvider.propTypes = {
    value: PropTypes.instanceOf(Object),
    children: PropTypes.node.isRequired
};
export { MaterialTailwindTheme, ThemeProvider, useTheme };
