class Vec2 {

    /**
     * 
     * @param {Object|number} x_or_obj 
     * @param {number} x_or_obj.x 
     * @param {number} x_or_obj.y 
     * @param {number|undefined} y 
     */
    constructor(x_or_obj, y) {
        if (y !== undefined) {
            this.x = x_or_obj
            this.y = y
        } else {
            this.x = x_or_obj.x
            this.y = x_or_obj.y
        }

    }

    /**
     * 
     * @param {Object} a 
     * @param {number} a.x 
     * @param {number} a.y 
     * @returns {Vec2} 
     */
    add(a) {
        return new Vec2(this.x + a.x, this.y + a.y )
    }

    /**
     * 
     * @param {Object} a 
     * @param {number} a.x 
     * @param {number} a.y 
     * @returns {Vec2} 
     */
    sub(a) {
        return new Vec2(this.x - a.x, this.y - a.y)
    }

    /**
     * 
     * @param {Object} a 
     * @param {number} a.x 
     * @param {number} a.y 
     * @returns {number} 
     */
    dot(a) {
        return this.x * a.x + this.y * a.y
    }

    /**
     * 
     * @param {Object} a 
     * @param {number} a.x 
     * @param {number} a.y 
     * @returns {Vec2} 
     */
    max(a) {
        return new Vec2(Math.max(this.x, a.x), Math.max(this.y, a.y))
    }

    /**
     * 
     * @param {Object} a 
     * @param {number} a.x 
     * @param {number} a.y 
     * @returns {Vec2} 
     */
    min(a) {
        return new Vec2(Math.min(this.x, a.x), Math.min(this.y, a.y))
    }

    /**
     * 
     * @param {Object} a 
     * @param {number} a.x 
     * @param {number} a.y 
     * @returns {{err: boolean, res: number}} the projecton of the vector 'this' to the vector 'a' 
     */
    furrier(a) {
        let lenSquare = a.lenSquare

        if (lenSquare) {
            let furrier = (this).dot(a) / (lenSquare)
            return {
                err: false,
                res: furrier
            }
        } else {
            return {
                err: true,
                res: 0
            }
        }
    }

    /**
     * 
     * @param {Object} a 
     * @param {number} a.x 
     * @param {number} a.y 
     * @returns {{err: boolean, res: Vec2}} the projecton of the vector 'this' to the vector 'a' 
     */
    proj(a) {
        let furrier = (this).furrier(a)

        if (!furrier.err) {
            return {
                err: false,
                res: a.map(x => x * furrier.res)
            }
        } else {
            return {
                err: true,
                res: new Vec2(0,0)
            }
        }

    }

    /**
     * 
     * @param {Function} f
     * @returns {Vec2} 
     */
    map(f) {
        return new Vec2(f(this.x), f(this.y))
    }

    /**
     * @returns {{res: Vec2, err: boolean}}
     */
    get norm() {
        let length = this.len

        if (length)
            return {
                res: new Vec2(this.x / length, this.y / length),
                err: false
            }

        return {
            res: new Vec2(0, 0),
            err: true
        }
    }

    /**
     * @returns {number}
     */
    get lenSquare() {
        return Math.pow(this.x, 2) + Math.pow(this.y, 2)
    }

    /**
     * @returns {number}
     */
    get len() {
        return Math.sqrt(this.lenSquare)
    }

    static random() {
        return new Vec2(Math.random(), Math.random())
    }

}

Vec2.add = (a, b) => (a).add(b)
Vec2.sub = (a, b) => (a).sub(b)
Vec2.dot = (a, b) => (a).dot(b)
Vec2.min = (a, b) => (a).min(b)
Vec2.max = (a, b) => (a).max(b)
Vec2.furrier = (a, b) => (a).furrier(b)
Vec2.proj = (a, b) => (a).proj(b)
Vec2.map = (a, f) => a.map(f)
Vec2.norm = (a) => (a).norm
Vec2.lenSquare = (a) => (a).lenSquare
Vec2.len = (a) => (a).len
module.exports = Vec2