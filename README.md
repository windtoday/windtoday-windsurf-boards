# windtoday-windsurf-boards

![Last version](https://img.shields.io/github/tag/windtoday/windtoday-windsurf-boards.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/windtoday/windtoday-windsurf-boards/master.svg?style=flat-square)](https://travis-ci.org/windtoday/windtoday-windsurf-boards)
[![Coverage Status](https://img.shields.io/coveralls/windtoday/windtoday-windsurf-boards.svg?style=flat-square)](https://coveralls.io/github/windtoday/windtoday-windsurf-boards)
[![Dependency status](https://img.shields.io/david/windtoday/windtoday-windsurf-boards.svg?style=flat-square)](https://david-dm.org/windtoday/windtoday-windsurf-boards)
[![Dev Dependencies Status](https://img.shields.io/david/dev/windtoday/windtoday-windsurf-boards.svg?style=flat-square)](https://david-dm.org/windtoday/windtoday-windsurf-boards#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/windtoday-windsurf-boards.svg?style=flat-square)](https://www.npmjs.org/package/windtoday-windsurf-boards)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Directory of windsurfing sails

## Install

```bash
$ npm install windtoday-windsurf-boards --save
```

## API

### find(query, [opts])

#### query

*Required*<br>
Type: `String`

Perform a brand search inside the directory based on the query.

#### opts

#### findModel

Type: `Boolean`<br>
Default: `true`

Determinate if perform a search on models as well.

Type: `Object`

Collection of String for create the regex.

#### strmatchOpts

Type: `Object`<br>

Setup string matcher options, based on [str-match](https://github.com/Kikobeats/str-match).

## License

MIT © [Kiko Beats](https://github.com/Kikobeats)
