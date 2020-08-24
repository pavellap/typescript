interface Rect {
    readonly id: string;
    color?: string // ? - необязательный параметр
    size: {
        width: number,
        height: number
    }
}

const RectFirst: Rect = {
    id: "1",
    size: {
        width: 30,
        height: 50
    }
}

RectFirst.color = '#ccc'

const RectThird = {} as Rect; // явное приведение к типу

export {RectFirst, Rect}