# egg-useragent-ts

> egg js useragent middleware TypeScript version, based on koa-useragent

[![NPM version][npm-image]][npm-url]
[![Build Status](https://travis-ci.com/Jeff-Tian/egg-useragent.svg?branch=master)](https://travis-ci.com/Jeff-Tian/egg-useragent)
[![codecov](https://codecov.io/gh/Jeff-Tian/egg-useragent/branch/master/graph/badge.svg)](https://codecov.io/gh/Jeff-Tian/egg-useragent)
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]
[![Git commit with emojis!](https://img.shields.io/badge/gitmoji-git%20commit%20with%20emojis!-brightgreen.svg)](https://gitmoji.js.org)

[npm-image]: https://img.shields.io/npm/v/egg-useragent.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-useragent
[david-image]: https://img.shields.io/david/jeff-tian/egg-useragent.svg?style=flat-square
[david-url]: https://david-dm.org/jeff-tian/egg-useragent
[snyk-image]: https://snyk.io/test/npm/egg-useragent/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-useragent
[download-image]: https://img.shields.io/npm/dm/egg-useragent.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-useragent

<!--
Description here.
-->

## Example

Open [https://uniheart.herokuapp.com/](https://uniheart.herokuapp.com/) to see the result.

## Install

```bash
$ npm i egg-useragent-ts --save
```

## Usage

```js
// {app_root}/config/plugin.[t|j]s
exports.useragent = {
  enable: true,
  package: "egg-useragent-ts"
};
```

## Configuration

This plugin need no configuration, you just enable it and you can use it by 
```js
ctx.userAgent.isWechat
```

## Example

<!-- example here -->
https://github.com/Jeff-Tian/alpha/blob/336003aca7199857b24f118c0ced66dc8afbbdea/app/view/index.pug#L12
```jade
case ctx.userAgent.isWechat
    when true
        a(href="/passport/wechat") Wechat
    when false
        a(href="/wechat-dev/qr-code?select=passportWechat", target="_blank", rel="noopener noreferrer") Wechat
    default
        a()
```

## License

[MIT](LICENSE)

## Test

```shell
npm run test-local
```

## Release Notes:
