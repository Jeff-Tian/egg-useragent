const mock = require("egg-mock");
const request = require("supertest");

describe("test/passport-citi.test.ts", () => {
  let app: any;
  before(async () => {
    app = mock.app({
      baseDir: "apps/passport-citi-test"
    });

    return app.ready();
  });

  after(() => app.close());

  afterEach(mock.restore);

  it("should get /", () => {
    return request(app.callback())
      .get("/")
      .expect("hi, passportCiti")
      .expect(200);
  });

  it("should GET /passport/citi redirect to auth url", async () => {
    return app
      .httpRequest()
      .get("/passport/citi")
      .expect(302)
      .expect(
        "Location",
        /^https:\/\/sandbox\.apihub\.citi\.com\/gcb\/api\/authCode\/oauth2\/authorize\?response_type=code&client_id=/
      );
  });

  it("should GET /passport/citi/callback redirect to auth url", () => {
    return request(app.callback())
      .get("/passport/citi/callback")
      .expect(302)
      .expect(
        "Location",
        /^https:\/\/sandbox\.apihub\.citi\.com\/gcb\/api\/authCode\/oauth2\/authorize\?response_type=code&client_id=/
      );
  });
});
