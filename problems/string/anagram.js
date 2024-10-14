function areAnagrams(str1, str2) {
  let freqencyCount = {}

  for (let ch of str1) {
    freqencyCount[ch] = (freqencyCount[ch] || 0) + 1
  }

  for (let ch of str2) {
    if (!freqencyCount[ch]) {
      return false
    }
    freqencyCount[ch] = freqencyCount[ch] - 1
    if (freqencyCount[ch] === 0) {
      delete freqencyCount[ch]
    }
  }

  return Object.keys(freqencyCount).length == 0
}

console.log(areAnagrams('listen', 'silent')) // true
console.log(areAnagrams('hello', 'world')) // false
