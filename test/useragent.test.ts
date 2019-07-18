const mock = require("egg-mock")
const request = require("supertest")

describe("test/useragent.test.ts", () => {
    let app: any
    before(async () => {
        app = mock.app({
            baseDir: "apps/useragent"
        })

        return app.ready()
    })

    after(() => app.close())

    afterEach(mock.restore)

    it("should get /", () => {
        return request(app.callback())
            .get("/")
            .expect("hi, useragent; [object Object]")
            .expect(200)
    })

})
