export function decodedResistorValue(colors: string[]) {
    const colorValues: Record<string, number> = {
        black: 0,
        brown: 1,
        red: 2,
        orange: 3,
        yellow: 4,
        green: 5,
        blue: 6,
        violet: 7,
        grey: 8,
        white: 9
    }

    const decoded = colors.map(color => colorValues[color]);
    const values = decoded.slice(0,2).filter(value => value > 0) ?? 0;
    let numberOfTrailingZeroes = decoded[1] === 0 ? decoded[2] + 1 : decoded[2]
    let suffix = ''
    if (numberOfTrailingZeroes >= 9) {
        numberOfTrailingZeroes -= 9;
        suffix = 'gigaohms';
    } else if (numberOfTrailingZeroes >= 6) {
        numberOfTrailingZeroes -= 6;
        suffix = 'megaohms';
    } else if (numberOfTrailingZeroes >= 3) {
        numberOfTrailingZeroes -= 3;
        suffix = 'kiloohms';
    } else  {
        suffix = 'ohms';
    }
    let zeros = [];
    for (let i = 0; i < numberOfTrailingZeroes; i++) {
        zeros.push(0)
    }
    return [...values, ...zeros].join('').concat(' ', suffix)
}
