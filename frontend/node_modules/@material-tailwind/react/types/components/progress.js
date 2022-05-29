import PropTypes from "prop-types";
import { propTypesColors } from "../generic";
export var propTypesVariant = [
    "filled",
    "gradient"
];
export var propTypesColor = propTypesColors;
export var propTypesValue = PropTypes.number;
export var propTypesLabel = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
]);
export var propTypesBarProps = PropTypes.instanceOf(Object);
export var propTypesClassName = PropTypes.string;
