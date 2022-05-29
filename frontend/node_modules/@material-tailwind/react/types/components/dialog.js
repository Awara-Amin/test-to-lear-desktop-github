import PropTypes from "prop-types";
import { propTypesDismissType, propTypesAnimation } from "../generic";
export var propTypesOpen = PropTypes.bool.isRequired;
export var propTypesHandler = PropTypes.func;
export var propTypesSize = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl"
];
export var propTypesDismiss = propTypesDismissType;
export var propTypesAnimate = propTypesAnimation;
export var propTypesDivider = PropTypes.bool;
export var propTypesClassName = PropTypes.string;
export var propTypesChildren = PropTypes.node.isRequired;
