# Fetch



### Other Option:

client request

```javascript
fetch("http://localhost:8000/api", {
  method: "POST",
  headers: {"Content-Type": "application/x-www-form-urlencoded"},
  body: JSON.stringify({"a": "hello from fetch"})
})
  .then(rc => console.log(rc))
```

Server response

```javascript
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post("/api", function(req, res){
  console.log("post /api", req.body)
  let keys = JSON.parse(Object.keys(req.body))
  console.log(keys, keys.a);
})
```
