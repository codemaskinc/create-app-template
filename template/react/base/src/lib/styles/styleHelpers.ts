export const stylesHelpers = {
    customWhiteTransparent: (opacity: number) => `rgba(255, 255, 255, ${opacity})`,
    customBlackTransparent: (opacity: number) => `rgba(0, 0, 0, ${opacity})`,
    hexToRGBA: (hex: string, opacity: number) => hex
        .replace('#', '')
        .split(/(?=(?:..)*$)/)
        .map(x => parseInt(x, 16))
        .filter(num => !isNaN(num))
        .reduce((acc, color) => `${acc}${color},`, 'rgba(')
        .concat(`${opacity})`),
    lightenDarkenColor: (color: string, amt: number) => {
        const [ firstLetter ] = color
        const usePound = firstLetter === '#'
        const colorToUse = usePound
            ? color.slice(1)
            : color

        const num = parseInt(colorToUse,16)
        let r = (num >> 16) + amt

        if (r > 255) {
            r = 255
        }

        if  (r < 0) {
            r = 0
        }

        let b = ((num >> 8) & 0x00FF) + amt

        if (b > 255) {
            b = 255
        }

        if  (b < 0) {
            b = 0
        }

        let g = (num & 0x0000FF) + amt

        if (g > 255) {
            g = 255
        }

        if (g < 0) {
            g = 0
        }

        return `${usePound ? '#' : ''}${(g | (b << 8) | (r << 16)).toString(16)}`
    }
}
