import PropTypes from "prop-types";
export var propTypesColors = [
    "blue-grey",
    "grey",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red", 
];
export var propTypesAnimation = PropTypes.shape({
    mount: PropTypes.instanceOf(Object),
    unmount: PropTypes.instanceOf(Object)
});
export var propTypesDismissType = PropTypes.shape({
    enabled: PropTypes.bool,
    escapeKey: PropTypes.bool,
    referencePointerDown: PropTypes.bool,
    outsidePointerDown: PropTypes.bool,
    ancestorScroll: PropTypes.bool,
    bubbles: PropTypes.bool
});
export var propTypesOffsetType = PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
        mainAxis: PropTypes.number,
        crossAxis: PropTypes.number,
        alignmentAxis: PropTypes.number
    }), 
]);
export var propTypesPlacements = [
    "top-start",
    "top",
    "top-end",
    "right-start",
    "right",
    "right-end",
    "bottom-start",
    "bottom",
    "bottom-end",
    "left-start",
    "left",
    "left-end", 
];
