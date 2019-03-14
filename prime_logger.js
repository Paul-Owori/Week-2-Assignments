var n=50;
for (var nmbr = 2; nmbr <= n; nmbr++) {

  var notPrime = false;
  for (var x = 2; x <= nmbr; x++) {
      if (nmbr%x===0 && x!==nmbr) {
          notPrime = true;
      }
  }
  if (notPrime === false) {
    console.log(nmbr);
  }
}