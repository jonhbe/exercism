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

    let [tens, ones, numberOfTrailingZeroes] = colors.map(color => colorValues[color]);

    let result = [tens,ones,...Array<number>(numberOfTrailingZeroes).fill(0)]
    if (tens === 0) {
        result = result.slice(1)
        if (ones === 0) {
            result = [0]
        }
    }

    let suffix = ''
    let trailingZeros = result.slice(1).filter(n => n === 0).length
    if (trailingZeros >= 9) {
        result = result.slice(0, result.length - 9);
        suffix = 'gigaohms';
    } else if (trailingZeros >= 6) {
        result = result.slice(0, result.length - 6);
        suffix = 'megaohms';
    } else if (trailingZeros >= 3) {
        result = result.slice(0,result.length - 3);
        suffix = 'kiloohms';
    } else {
        suffix = 'ohms';
    }
    return result.join('').concat(' ', suffix)
}
