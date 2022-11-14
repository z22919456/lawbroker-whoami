# GA4 whoami

![ts](https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label)
![release version]][https://badgen.net/github/release/z22919456/lawbroker-whoami]




# About
Use fingerprint to mark browser of client, and generate UserID of Google Analytics
# Getting Started

## With CDN
When included as a script tag, `LawWhoami` is exposed in the global scope

```html
<head>
  ...
  <!-- LawWhoami -->
  <script src="https://unpkg.com/@lawbroker/ga4-whoami@latest/dist/bundle.js"/> 
  <script>
    // You Need to initialized LawWhoami by giving API URL
    LawWhoami.init("https://law.generate-ga4-userId.api")
  </script>
  <!-- End LawWhoami -->
  ...
</head>
```

# How to Generated UserID

## Auto Detection

In general, LawWhoami will automatically listen each form submit event in the page. when form has been submitted, LawWhoami will filter out form's fields that contain personal information (i.e citizenId, eno, mobilePhone ...etc), and generate `UserID` for GA.

Note: LawWhoami only Detect submission with `<form />` tag.

## Generate Manually

But, LawWhoami may missed some fields that also content personal information.  Maybe submit form without `<form />` tag. You can generate `UserID` manually.

```javascript
LawWhoami.getUID({
  cid: 'XXXX',
  mobilePhone: 'XXXX'
  ...
})
```

## Params
* `uid`: Citizen id
* `eno`: Employee id
* `mobilePhone`: Phone number of user
* `email`: email of user
* `name`: name of user

Send at least one of param above, but `email` and `name` are grouped params, should use it in the same time

## Params Priority

Get `uid` or `eno` first, if can't then get `mobilePhone`, finally get `email` and `name` at same time

`uid` = `eno` > `mobilePhone` > `name` + `email`


