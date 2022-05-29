import PropTypes from "prop-types";
import { propTypesOffsetType, propTypesDismissType, propTypesAnimation, propTypesPlacements } from "../generic";
export var propTypesOpen = PropTypes.bool;
export var propTypesHandler = PropTypes.func;
export var propTypesPlacement = propTypesPlacements;
export var propTypesOffset = propTypesOffsetType;
export var propTypesDismiss = propTypesDismissType;
export var propTypesAnimate = propTypesAnimation;
export var propTypesContent = PropTypes.node;
export var propTypesInteractive = PropTypes.bool;
export var propTypesClassName = PropTypes.string;
export var propTypesChildren = PropTypes.node.isRequired;
export var propTypesContextValue = PropTypes.shape({
    open: PropTypes.bool.isRequired,
    strategy: PropTypes.oneOf([
        "fixed",
        "absolute"
    ]).isRequired,
    x: PropTypes.number,
    y: PropTypes.number,
    context: PropTypes.instanceOf(Object).isRequired,
    reference: PropTypes.func.isRequired,
    floating: PropTypes.func.isRequired,
    getReferenceProps: PropTypes.func.isRequired,
    getFloatingProps: PropTypes.func.isRequired,
    appliedAnimation: propTypesAnimate.isRequired,
    labelId: PropTypes.string.isRequired,
    descriptionId: PropTypes.string.isRequired
}).isRequired;
