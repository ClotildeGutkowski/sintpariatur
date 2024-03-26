<div align="center">
  <p>
  <a href="https://favware.tech/crypto"><img src="https://storage.googleapis.com/data-sunlight-146313.appspot.com/website-project-icons/crypto.png" height="200" alt="logo"/></a>
  </p>

  <p>
<h1> @favware/crypto</h1>
<h3> Easily generate a random cryptographic</h3>
  </p>
</div>

---

**Project Status**

[![GitHub](https://img.shields.io/github/license/favware/node-packages?logo=github&style=flat-square)](https://github.com/favware/node-packages/blob/master/LICENSE.md)
[![CircleCI](https://img.shields.io/circleci/build/github/favware/node-packages?logo=circleci&style=flat-square)](https://circleci.com/gh/favware/node-packages/tree/master)
[![Codecov](https://img.shields.io/codecov/c/github/favware/node-packages?logo=codecov&style=flat-square)](https://codecov.io/gh/favware/node-packages)

**Bundle Sizes**

[![npm bundle size](https://img.shields.io/bundlephobia/min/@favware/crypto?label=crypto%20-%20minified&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/crypto)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@favware/crypto?label=crypto%20-%20minzipped&logo=webpack&style=flat-square)](https://bundlephobia.com/result?p=@favware/crypto)
[![npm](https://img.shields.io/npm/v/@favware/crypto?color=crimson&label=crypto%20version&logo=npm&style=flat-square)](https://www.npmjs.com/package/@favware/crypto)

**Social Media and Donations**

[![Join Discord server](https://img.shields.io/discord/512303595966824458?color=697EC4&label=Join%20Discord%20Server&logo=discord&logoColor=FDFEFE&style=flat-square)](https://favware.tech/redirect/server)
[![Twitter Follow](https://img.shields.io/twitter/follow/favna_?label=Follow%20@Favna_&logo=twitter&colorB=1DA1F2&style=flat-square)](https://twitter.com/Favna_/follow)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&style=flat-square&link=https://www.patreon.com/bePatron?u=9336537)](https://www.patreon.com/bePatron?u=9336537)
[![PayPal Donate](https://img.shields.io/badge/paypal-donate-brightgreen.svg?label=Donate%20with%20Paypal&logo=paypal&colorB=00457C&style=flat-square&link=https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XMAYCF9SDHZ34)](https://www.patreon.com/bePatron?u=9336537)

---

This package is a full rework of my old package `csprng-64` but now far better. I decided to release it as a completely separate package and deprecate the previous one as the entire code base was changed and I wasn't fond of the previous name either.

**Key Features**
- Generates secure random numbers using `crypto.randomBytes()`. Numbers can be of any magnitude and in any base from 2 to 64.
- Typesafe
- Bundled with Rollup for maximum size reduction (only 1kB minified + gzipped!), ES module support and browser support
- Generated TypeScript declarations
- Treeshakeable in Webpack

# Install

Install with [yarn](https://yarnpkg.com) or [npm](https://www.npmjs.com/):

```sh
yarn add @favware/crypto

# npm install @favware/crypto
```

* * *

# Usage

Call the function passing the number of required bits, and the radix of the
output.

```js
const { crypto } = require('@favware/crypto');
// import crypto from '@favware/crypto';

// Takes a bit length and base parameter
// base examples are base64 or base32
crypto(160, 64);

// You can also import the predefined Radix's so you can be sure you're using a supported radix
const { Radix } = require('@favware/crypto');
// import Radix from '@favware/crypto'
crypto(160, Radix.base64);
```

# Documentation

## Constants

<dl>
<dt><a href="#DEFAULT_BITS">DEFAULT_BITS</a> : <code>number</code></dt>
<dd></dd>
<dt><a href="#DEFAULT_RADIX">DEFAULT_RADIX</a> : <code>number</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#crypto">crypto([bits], [radix])</a> ⇒ <code>string</code></dt>
<dd><p>Generates a cryptographic string given an amount of bits and a base radix</p>
</dd>
</dl>

<a name="Radix"></a>

## Radix : <code>enum</code>
Possible options to use as the radix

**Kind**: global enum  
**Properties**

| Name | Type |
| --- | --- |
| 16 | <code>Radix.base16</code> | 
| 32 | <code>Radix.base32</code> | 
| 58 | <code>Radix.base58</code> | 
| 64 | <code>Radix.base64</code> | 

<a name="DEFAULT_BITS"></a>

## DEFAULT\_BITS : <code>number</code>
**Kind**: global constant  
<a name="DEFAULT_RADIX"></a>

## DEFAULT\_RADIX : <code>number</code>
**Kind**: global constant  
<a name="crypto"></a>

## crypto([bits], [radix]) ⇒ <code>string</code>
Generates a cryptographic string given an amount of bits and a base radix

**Kind**: global function  
**Returns**: <code>string</code> - The cryptographic string  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [bits] | <code>number</code> | <code>DEFAULT_BITS</code> | The amount of bits to generate |
| [radix] | [<code>Radix</code>](#Radix) | <code>DEFAULT_RADIX</code> | The radix to generate for |
