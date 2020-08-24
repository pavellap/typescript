import {Rect} from "./interfaces";

interface RectWithArea extends Rect {
    getArea: () => number
}

const RectThird: RectWithArea = {
    id: "2",
    size: {
        width: 50,
        height: 30
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
}

console.log(RectThird.getArea())
