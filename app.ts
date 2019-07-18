import {Application} from "egg"

import koaUserAgent from 'koa-useragent-x'

export default (app: Application) => {
    app.use(koaUserAgent)
};
