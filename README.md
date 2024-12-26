
# Random Background Color Generator

This is a simple JavaScript project that generates a random RGB background color every second and applies it to a webpage. It demonstrates the basics of DOM manipulation, random number generation, for creating a dynamic and visually appealing effect.

## Features
- **Random Color Generation**: Generates random RGB values every second.
- **Dynamic DOM Manipulation**: The background color of the webpage changes dynamically.
- **Console Logging**: Logs the applied color to the console for debugging purposes.

## How It Works
1. **Random Color Generation**:  
   A JavaScript function generates random RGB values for the red, green, and blue components. These values range from 0 to 255, producing a broad spectrum of colors.

2. **Applying the Color**:  
   Another function selects the target container (with the class `.cont`) and dynamically applies the random color to its background.

3. **Automatic Update**:  
   The background color changes automatically every 1000 milliseconds (1 second) using JavaScript's `setInterval()` function.

## How to Use
1. Clone or download this repository.
2. Open the `index.html` file in any modern browser.
3. The background color will automatically change every second.

## Example HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Random Color Generator</title>
</head>
<body>
  <div class="cont" style="height: 100vh; transition: background-color 1s;">
    <h1>Random Background Color</h1>
  </div>

  <script>
    let randomColor = () => {
      let color1 = Math.floor(Math.random() * 256);
      let color2 = Math.floor(Math.random() * 256);
      let color3 = Math.floor(Math.random() * 256);
      return `rgb(${color1},${color2},${color3})`;
    };

    let applyColor = () => {
      let randomGenrate = randomColor();
      let container = document.querySelector(".cont");
      container.style.backgroundColor = randomGenrate;
      console.log(`style applied ${randomGenrate} on element ${container}`);
    };

    setInterval(applyColor, 1000);
  </script>
</body>
</html>
```

## Contributing
Feel free to fork this repository and contribute. Pull requests are welcome!

---

Happy coding! 🚀
```

### How to Use This:
1. **Clone/Download**: Copy this content into a `README.md` file in the root directory of your project.
2. **Usage Instructions**: You can customize the instructions and features based on the final functionalities of your project.


