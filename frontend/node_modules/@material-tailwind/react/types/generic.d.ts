/// <reference types="react" />
import PropTypes from "prop-types";
import type { AnimatePresenceProps } from "framer-motion";
export declare type colors = "blue-grey" | "grey" | "brown" | "deep-orange" | "orange" | "amber" | "yellow" | "lime" | "light-green" | "green" | "teal" | "cyan" | "light-blue" | "blue" | "indigo" | "deep-purple" | "purple" | "pink" | "red";
export declare type animation = {
    mount?: Object;
    unmount?: Object;
};
export declare type dismissType = {
    enabled?: boolean;
    escapeKey?: boolean;
    referencePointerDown?: boolean;
    outsidePointerDown?: boolean;
    ancestorScroll?: boolean;
    bubbles?: boolean;
};
export declare type offsetType = number | {
    mainAxis?: number;
    crossAxis?: number;
    alignmentAxis?: number | null;
};
export interface NewAnimatePresenceProps extends Omit<AnimatePresenceProps, "children"> {
    children: React.ReactNode;
}
export declare const propTypesColors: string[];
export declare const propTypesAnimation: PropTypes.Requireable<PropTypes.InferProps<{
    mount: PropTypes.Requireable<Object>;
    unmount: PropTypes.Requireable<Object>;
}>>;
export declare const propTypesDismissType: PropTypes.Requireable<PropTypes.InferProps<{
    enabled: PropTypes.Requireable<boolean>;
    escapeKey: PropTypes.Requireable<boolean>;
    referencePointerDown: PropTypes.Requireable<boolean>;
    outsidePointerDown: PropTypes.Requireable<boolean>;
    ancestorScroll: PropTypes.Requireable<boolean>;
    bubbles: PropTypes.Requireable<boolean>;
}>>;
export declare const propTypesOffsetType: PropTypes.Requireable<number | PropTypes.InferProps<{
    mainAxis: PropTypes.Requireable<number>;
    crossAxis: PropTypes.Requireable<number>;
    alignmentAxis: PropTypes.Requireable<number>;
}>>;
export declare const propTypesPlacements: string[];
//# sourceMappingURL=generic.d.ts.map