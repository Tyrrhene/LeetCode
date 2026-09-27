function findTheDifference(s: string, t: string): string {
  const sSorted = s.split("").sort();
  const tSorted = t.split("").sort();

  for (let i = 0; i < sSorted.length; i++) {
    if (sSorted[i] !== tSorted[i]) return tSorted[i];
  }
  return tSorted[tSorted.length - 1];
}