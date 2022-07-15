// Code your solution here
function findMatching(drivers, string) {
    const matchingDrivers = drivers.filter(drivers => drivers.toLowerCase() === string.toLowerCase())
    return matchingDrivers;
}

function fuzzyMatch(drivers, string) {
    const fuzzyLetters = drivers.filter(drivers => drivers.toLowerCase().startsWith(string.toLowerCase()))
    console.log(fuzzyLetters);
    return fuzzyLetters;
}

function matchName(driver, string) {
    const matches = driver.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
    return matches;
}