import PropTypes from "prop-types";
import { propTypesColors } from "../generic";
export var propTypesVariant = [
    "standard",
    "outlined",
    "static"
];
export var propTypesSize = [
    "md",
    "lg"
];
export var propTypesColor = propTypesColors;
export var propTypesLabel = PropTypes.string;
export var propTypesError = PropTypes.bool;
export var propTypesSuccess = PropTypes.bool;
export var propTypesIcon = PropTypes.node;
export var propTypesResize = PropTypes.bool;
export var propTypesLabelProps = PropTypes.instanceOf(Object);
export var propTypesClassName = PropTypes.string;
