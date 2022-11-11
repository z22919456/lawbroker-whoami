# GA4 whoami

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

In general, LawWhoami will automatically listen each form submit event in the page. when has been form submitted, LawWhoami will filter out form's fields that contain personal information (i.e citizenId, eno, mobilePhone ...etc), and generate `UserID` for GA.

But, LawWhoami may missed some fields that also content personal information. You can generate `UserID` manually.

```javascript
LawWhoami.getUID({
  cid: 'XXXX',
  mobilePhone: 'XXXX'
  ...
})
```



