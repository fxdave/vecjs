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
        return new Vec2(this.x + a.x, this.y + a.y)
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
     * @returns {Vec2} 
     */
    mul(a) {
        return new Vec2(this.x * a.x, this.y * a.y)
    }
    /**
     * 
     * @param {Object} a 
     * @param {number} a.x 
     * @param {number} a.y 
     * @returns {{res: Vec2, err: boolean}} 
     */
    div(a) {

        if (a.x != 0 && a.y != 0) {
            return { res: new Vec2(this.x / a.x, this.y / a.y), err: false }
        }

        return { res: new Vec2(0, 0), err: true }

    }

    /**
     * 
     * @param {Object} a 
     * @param {number} a.x 
     * @param {number} a.y 
     * @returns {Vec2} 
     */
    avg(a) {
        return new Vec2((this.x + a.x) / 2, (this.y + a.y) / 2)
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
                res: new Vec2(0, 0)
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
     * @returns {Vec2}
     */
    static random() {
        return new Vec2(Math.random(), Math.random())
    }

    /**
     * @returns {Vec2}
     */
    static null() {
        return new Vec2(0, 0)
    }

    /**
     * @returns {Vec2}
     */
    static id() {
        return new Vec2(1, 1)
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

    /**
     * @returns {number}
     */
    get sum() {
        return this.x + this.y
    }

    /**
     * @returns {number}
     */
    get diff() {
        return this.x - this.y
    }

    /**
     * @returns {Vec2}
     */
    get sign() {
        return new Vec2(Math.sign(this.x), Math.sign(this.y))
    }

    /**
     * @returns {Vec2}
     */
    get normal1() {
        return new Vec2(-this.y, this.x)
    }

    /**
    * @returns {Vec2}
    */
    get normal2() {
        return new Vec2(this.y, -this.x)
    }

    /**
    * @returns {Vec2}
    */
    get inverse() {
        return new Vec2(-this.x, -this.y)
    }

}
module.exports = Vec2