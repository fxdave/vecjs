const assert = require("assert")
const Vec2 = require("./Vec2")

describe("basic operations", () => {

    let a = new Vec2({ x: 1, y: 2 })
    let b = new Vec2({ x: 3, y: -4 })

    let o = new Vec2({ x: 0, y: 0 })

    let c = new Vec2({ x: 1, y: 2 })
    let d = new Vec2({ x: 2, y: 0 })

    it("tests (a) .add (b)", () => {

        let res = (a).add(b)

        assert.equal(res.x, a.x + b.x)
        assert.equal(res.y, a.y + b.y)
    })


    it("tests (a) .sub (b)", () => {

        let res = (a).sub(b)

        assert.equal(res.x, a.x - b.x)
        assert.equal(res.y, a.y - b.y)
    })


    it("tests (a) .dot (b)", () => {

        let res = (a).dot(b)

        assert.equal(res, a.x * b.x + a.y * b.y)
    })

    it("tests (a) .max (b)", () => {

        let res = (a).max(b)

        assert.equal(res.x,3)
        assert.equal(res.y,2)
    })

    it("tests (a) .min (b)", () => {

        let res = (a).min(b)

        assert.equal(res.x,1)
        assert.equal(res.y,-4)
    })


    it("tests (a) .map (function) ", () => {

        //let res = (a) .map (x => x*2)
        let res = Vec2.map(a, x => x * 2)

        assert.equal(res.x, a.x * 2)
        assert.equal(res.y, a.y * 2)

    })

    describe("furrier", () => {
        it("tests (a) .furrier (b)", () => {

            let out = (a).furrier(b)

            assert.equal(out.err, false)
            assert.equal(out.res, (a).dot(b) / (b.lenSquare))

        })

        it("tests err of (a) .furrier (b)", () => {

            let out = (a).furrier(o)

            assert.equal(out.err, true)
            assert.equal(out.res, 0)

        })
    })

    describe("projection", () => {
        it("tests (a) .proj (b)", () => {

            let out = (c).proj(d)

            assert.equal(out.err, false)
            assert.equal(out.res.x, 1)
            assert.equal(out.res.y, 0)

        })

        it("tests err of (a) .proj (b)", () => {
            let out = (c).proj(o)

            assert.equal(out.err, true)
            assert.equal(out.res.x, 0)
            assert.equal(out.res.y, 0)

        })



    })


    describe("normal form", () => {

        it("tests (a) .norm ", () => {
            let out = d.norm

            assert.equal(out.err, false)
            assert.equal(out.res.x, 1)
            assert.equal(out.res.y, 0)
        })

        it("tests err of (a) .norm ", () => {

            let out = o.norm

            assert.equal(out.err, true)
            assert.equal(out.res.x, 0)
            assert.equal(out.res.y, 0)
        })
    })

    it("tests (a) .lenSquare ", () => {
        let out = a.lenSquare
        assert.equal(out, 5)
    })

    it("tests (a) .len ", () => {
        let out = d.len
        assert.equal(out, 2)
    })
})
