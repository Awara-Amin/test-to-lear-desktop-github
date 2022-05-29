import PropTypes from "prop-types";
import { propTypesOffsetType, propTypesDismissType, propTypesAnimation, propTypesPlacements } from "../generic";
export var propTypesOpen = PropTypes.bool;
export var propTypesHandler = PropTypes.func;
export var propTypesPlacement = propTypesPlacements;
export var propTypesOffset = propTypesOffsetType;
export var propTypesDismiss = propTypesDismissType;
export var propTypesAnimate = propTypesAnimation;
export var propTypesLockScroll = PropTypes.bool;
export var propTypesDisabled = PropTypes.bool;
export var propTypesClassName = PropTypes.string;
export var propTypesChildren = PropTypes.node.isRequired;
export var propTypesContextValue = PropTypes.shape({
    open: PropTypes.bool.isRequired,
    handler: PropTypes.func.isRequired,
    setInternalOpen: PropTypes.func.isRequired,
    strategy: PropTypes.oneOf([
        "fixed",
        "absolute"
    ]).isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    reference: PropTypes.func.isRequired,
    floating: PropTypes.func.isRequired,
    listItemsRef: PropTypes.instanceOf(Object).isRequired,
    getReferenceProps: PropTypes.func.isRequired,
    getFloatingProps: PropTypes.func.isRequired,
    getItemProps: PropTypes.func.isRequired,
    appliedAnimation: propTypesAnimate.isRequired,
    lockScroll: PropTypes.bool.isRequired,
    context: PropTypes.instanceOf(Object).isRequired
});
