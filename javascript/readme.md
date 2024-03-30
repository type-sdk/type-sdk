# Type Javascript SDK

## Installation

`npm install --save @type-sdk/javascript`

## Quick start

```
import TypeCMS from '@type-sdk/javascript'

// authenticate via the TypeCMS class
const typecms = new TypeCMS({
    baseUrl: BASE_URL_OF_THE_API, // ex: https://domain.com, http://localhost:3000
    projectId: PROJECT_ID,
    token: CONTENT_TOKEN_FROM_PROJECT
})

// fetch content
const content = await typecms.getEntries({
    // parameters to fetch content against, these are just examples
    language: 'EN-US',
    ...
})


```
