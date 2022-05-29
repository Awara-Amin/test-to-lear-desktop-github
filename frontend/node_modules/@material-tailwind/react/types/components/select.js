import PropTypes from "prop-types";
import { propTypesColors, propTypesOffsetType, propTypesDismissType, propTypesAnimation } from "../generic";
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
export var propTypesArrow = PropTypes.node;
export var propTypesValue = PropTypes.string;
export var propTypesOnChange = PropTypes.func;
export var propTypesSelected = PropTypes.func;
export var propTypesOffset = propTypesOffsetType;
export var propTypesDismiss = propTypesDismissType;
export var propTypesAnimate = propTypesAnimation;
export var propTypesAutoHeight = PropTypes.bool;
export var propTypesLockScroll = PropTypes.bool;
export var propTypesLabelProps = PropTypes.instanceOf(Object);
export var propTypesMenuProps = PropTypes.instanceOf(Object);
export var propTypesIndex = PropTypes.number;
export var propTypesDisabled = PropTypes.bool;
export var propTypesClassName = PropTypes.string;
export var propTypesChildren = PropTypes.node.isRequired;
export var propTypesContextValue = PropTypes.shape({
    selectedIndex: PropTypes.number.isRequired,
    setSelectedIndex: PropTypes.func.isRequired,
    activeIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.instanceOf(null)
    ]),
    setActiveIndex: PropTypes.func.isRequired,
    listRef: PropTypes.instanceOf(Object).isRequired,
    setOpen: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    getItemProps: PropTypes.func.isRequired,
    dataRef: PropTypes.instanceOf(Object).isRequired
}).isRequired;
