//function takes in a string and replaces every character with '#' besides the last four. if str <= 4, returns undisguised string.
function maskify(cc) {
    if (cc.length <= 4) {
      return cc
    } else {
      return '#'.repeat(cc.length-4) + cc.slice(-4)
    }
  }


console.log(maskify('dsfgadfkjhv4533')) // => ###########4533
console.log(maskify('when will we see mars')) // => #################mars
console.log(maskify('123456789101112')) // => ###########1112