import PropTypes from "prop-types";
import { propTypesColors } from "../generic";
export var propTypesVariant = [
    "filled",
    "outlined",
    "gradient",
    "text"
];
export var propTypesSize = [
    "sm",
    "md",
    "lg"
];
export var propTypesColor = propTypesColors;
export var propTypesFullWidth = PropTypes.bool;
export var propTypesRipple = PropTypes.bool;
export var propTypesClassName = PropTypes.string;
export var propTypesChildren = PropTypes.node.isRequired;
