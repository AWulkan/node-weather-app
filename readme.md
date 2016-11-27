### A simple Node.js weather app.  
This app is inspired by Andrew Mead's course at Udemy called:  
The Complete Node.js Developer Course 2.0  

#### Set up the weather app:  
After you've downloaded the repository you need to create an `apikeys.js` file in the root folder. The content of the `apikeys.js` file should look like this:  

```
const darkSkyKey = "YOUR_DARKSKY_API_KEY";

module.exports.darkSkyKey = darkSkyKey;
```  

#### Using the weather app  

Example input:  
`node app -a "gothenburg central station"`  

Example output (success):  
```
Gothenburg Central Station, Drottningtorget, 411 03 Göteborg, Sweden
It's currently 0.58°C.
It feels like -5.6°C.
```
