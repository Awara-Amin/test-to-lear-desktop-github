import PropTypes from "prop-types";
import { propTypesAnimation } from "../generic";
export var propTypesOpen = PropTypes.bool.isRequired;
export var propTypesIcon = PropTypes.node;
export var propTypesAnimate = propTypesAnimation;
export var propTypesDisabled = PropTypes.bool;
export var propTypesClassName = PropTypes.string;
export var propTypesValue = PropTypes.instanceOf(Object).isRequired;
export var propTypesChildren = PropTypes.node.isRequired;
