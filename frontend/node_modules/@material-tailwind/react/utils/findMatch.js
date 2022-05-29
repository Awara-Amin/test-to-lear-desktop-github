export default function(data, find, defaultValue) {
    return data.findIndex(function(el) {
        return el === find;
    }) >= 0 ? find : defaultValue;
};
