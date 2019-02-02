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

        assert.equal(res.x, 3)
        assert.equal(res.y, 2)
    })

    it("tests (a) .min (b)", () => {

        let res = (a).min(b)

        assert.equal(res.x, 1)
        assert.equal(res.y, -4)
    })

    it("tests (a) .mul (b)", () => {

        let res = (a).mul(b)

        assert.equal(res.x, 3)
        assert.equal(res.y, -8)
    })

    describe("division", () => {
        it("tests (a) .div (b)", () => {

            let res = (a).div(b)

            assert.equal(res.err, false)
            assert.equal(res.res.x, 1 / 3)
            assert.equal(res.res.y, 2 / -4)
        })

        it("tests error of (a) .div (b)", () => {

            let res = (a).div(o)
            assert.equal(res.err, true)
        })
    })

    it("tests (a) .map (function) ", () => {

        let res = (a) .map (x => x*2)

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

    it("tests (a) .sum ", () => {
        let out = a.sum
        assert.equal(out, 3)
    })

    it("tests (a) .diff ", () => {
        let out = a.diff
        assert.equal(out, -1)
    })

    it("tests (a) .sign ", () => {
        let out = a.sign
        assert.equal(out.x, 1)
        assert.equal(out.y, 1)
    })

    it("tests (a) .normal1 ", () => {
        let out = a.normal1
        assert.equal(out.x, -2)
        assert.equal(out.y, 1)
    })

    it("tests (a) .normal2 ", () => {
        let out2 = a.normal2
        assert.equal(out2.x, 2)
        assert.equal(out2.y, -1)
    })

    it("tests (a) .inverse ", () => {
        let out2 = a.inverse
        assert.equal(out2.x, -1)
        assert.equal(out2.y, -2)
    })
})


describe("complex operations", () => {
    it("tests sum of vector array", () => {
        let points = [new Vec2(1, 2), new Vec2(3, 4), new Vec2(5, 6)]
        let out = points.reduce((acc, x) => acc + x.sum, 0)
        assert.equal(out, 21)
    })
    it("gets the center of the circle around 3 points", () => {
        // x^2 + y^2 = 4
        // x^2 = 4 - y^2
        // |x| = sqrt( 4 - y^2 )

        // y=2 -> x=0
        // y=0 -> x=2, x=-2

        let A = new Vec2(0, 2)
        let B = new Vec2(2, 0)
        let C = new Vec2(-2, 0)

        let BA_normal = (A) .sub (B) .normal1
        let CA_normal = (A) .sub (C) .normal1

        let F_AB = (A) .avg (B)
        let F_AC = (A) .avg (C)

        // F_AB + BA_normal*n - F_AC - CA_normal*m = (0,0)
        // BA_normal*(n,n) - CA_normal*(m,m) = (0,0) - F_AB + F_AC = V

        let V = (Vec2.null()) .sub (F_AB) .add (F_AC)

        let D = BA_normal.x * CA_normal.y - BA_normal.y * CA_normal.x 
        let Dn = V.x * CA_normal.y - V.y * CA_normal.x 

        let n = Dn / D

        let center = (F_AB) .add ( (BA_normal) .map(x => x*n) )

        assert.equal(center.x, 0, "x")
        assert.equal(center.y, 0, "y")


    })
})
