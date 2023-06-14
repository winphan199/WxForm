# WxForm

This page shows example of a form and validation<br/>
Live demo: https://wxform.netlify.app

## Start the project

```
git clone <repo_url>
cd <repo>
npm install
npm start
```

## Inspection

### Using GET request

<br/>

Submit with GET request will make the submitted values appended after the `?` (question mark) in the form of key-value pair or we can say <b>query params</b>.<br/>
<br/>
![screenshot of GET request example](/src/assets/img/getrequestexample.png)
<br/>
<br/>
It can be seen in the image that the key-value pair is presented as `key=value` and all the key-value pairs are connected with the `&` (ampersand) symbol. <br/>
<br/>

### Using POST request

<br/>

With POST request, the submitted values are not appended into the url but instead added into the request body as a <b>Form Data</b>. It is still a key-value pair form as of the GET request, but the server will have a different way to extract this data.
<br/>
<br/>

![screenshot of POST request example](/src/assets/img/postrequestexample1.png)
<br/>
<br/>

We can use the network tab to view the POST request. This is the draw value of what we submit to the server.
<br/>

<br/>

![screenshot of POST request example](/src/assets/img/postrequestexample2.png)
<br/>
<br/>

We can parse it to the form data, which is more readable.
<br/>

<br/>

> **_NOTE:_** We use POST request for more sensitive data or data which huge size.

## Technology

- Frontend:
  - ReactJS
  - TypeScript
  - TailwindCSS
- Hosting:
  - Netlify

## Author

Hung Phan
