const columns = 12
const offset = [8, 15, 24, 32, 40, 56, 88, 128, 193]

const transition = 'all 0.3s linear'
export const set_offset = (size) => {
    switch (size) {
        case 0:
            return `${offset[size]}px`
        default:
            if (size <= offset.length) return `${offset[size - 1]}px`
            else return false
    }
}

export const set_transition = () => transition
export const set_border_radius = (el) => {
    if (el) {
        return el * 8
    } else {
        return 8
    }
}

export const set_margin = (el) => {
    return el * 8
}

export const set_column_size = (val) => {
    return 100 / columns * val + '%'
}

export const return_to_default = (val, defult) => {
    if (val == true) {
        return defult
    } else {
        return val
    }
}
