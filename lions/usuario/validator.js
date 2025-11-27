function isEmail (value) {
    return typeof value === "string" &&
     /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)
}

function isNonEmptyString(value) {
    return typeof value === "string" &&
     value.trim().lenght > 0;
}

function isPhoneList(value) {
    return Array.isArray(value) &&
     value.every(t => typeof t === "string" && t.trim().lenght > 0)
}

module.exports = {
    isEmail,
    isNonEmptyString,
    isPhoneList,
};
