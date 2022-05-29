import merge from "deepmerge";
export default function combineMerge(target, source, options) {
    var destination = target.slice();
    return source.forEach(function(item, index) {
        void 0 === destination[index] ? destination[index] = options.cloneUnlessOtherwiseSpecified(item, options) : options.isMergeableObject(item) ? destination[index] = merge(target[index], item, options) : -1 === target.indexOf(item) && destination.push(item);
    }), destination;
};
