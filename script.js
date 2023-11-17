function firstWord(s) {
  const first = s.trim().split(' ')[0];
  return(first);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
