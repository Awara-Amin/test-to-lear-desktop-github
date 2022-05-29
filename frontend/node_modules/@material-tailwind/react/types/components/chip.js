import PropTypes from "prop-types";
import { propTypesColors, propTypesAnimation } from "../generic";
export var propTypesVariant = [
    "filled",
    "gradient"
];
export var propTypesColor = propTypesColors;
export var propTypesIcon = PropTypes.node;
export var propTypesShow = PropTypes.bool;
export var propTypesDismissible = PropTypes.shape({
    action: PropTypes.node,
    onClose: PropTypes.func.isRequired
});
export var propTypesAnimate = propTypesAnimation;
export var propTypesClassName = PropTypes.string;
export var propTypesValue = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, 
]).isRequired;
