import PropTypes from "prop-types";
import { propTypesAnimation } from "../generic";
export var propTypesValue = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number, 
]).isRequired;
export var propTypesAnimate = propTypesAnimation;
export var propTypesDisabled = PropTypes.bool;
export var propTypesClassName = PropTypes.string;
export var propTypesIndicator = PropTypes.instanceOf(Object);
export var propTypesChildren = PropTypes.node.isRequired;
