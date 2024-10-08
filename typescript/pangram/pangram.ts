export function isPangram(possiblePangram: string): boolean {
  const allLetters = new Set<string>();
  if (possiblePangram === undefined || possiblePangram.length === 0) {
    return false;
  }
  const onlySmallLetters = Array.from(possiblePangram.toLowerCase()).filter(c => /[a-z]/g.test(c));
  onlySmallLetters.forEach(letter => allLetters.add(letter))
  return allLetters.size === 26
}
