# 🌤️ Weather App

A weather application built with HTML, CSS, and JavaScript as part of The Odin Project curriculum. It fetches real-time weather data from the Visual Crossing API, allowing users to search for any city and view current weather conditions. The app features a clean user interface and utilizes ES6 modules with async/await for smooth, modular functionality.

## 🚀 Features

- **City Search**: Enter any city name to retrieve current weather information.
- **Real-Time Data**: Fetches up-to-date weather data from the Visual Crossing API.
- **Responsive Design**: Optimized for various devices and screen sizes.
- **Modular Codebase**: Utilizes ES6 modules for organized and maintainable code.
- **Asynchronous Operations**: Implements async/await for efficient API calls.

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/banskotanup/Weather-App.git
   cd Weather-App
   ```

2. **Open the application:**

   Open `index.html` in your preferred web browser to view the app.

## 🛠️ Technologies Used

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript (ES6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api)

## 📁 Project Structure

```plaintext
Weather-App/
├── public/
│   └── assets/
│       └── [images and icons]
├── src/
│   ├── modules/
│   │   ├── api.js
│   │   ├── dom.js
│   │   └── ...
│   ├── index.js
│   └── style.css
├── index.html
├── info.html
└── README.md
```

## 🔑 API Key Setup

To use the Visual Crossing Weather API, you'll need to obtain an API key:

1. **Sign up** at [Visual Crossing](https://www.visualcrossing.com/weather-api) to get your free API key.
2. **Create a `config.js` file** in the `src` directory and add the following:

   ```javascript
   export const API_KEY = 'your_api_key_here';
   ```

3. **Import the API key** in your `api.js` module:

   ```javascript
   import { API_KEY } from './config.js';
   ```

**Note**: Ensure that `config.js` is listed in your `.gitignore` file to prevent exposing your API key in version control.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**

2. **Create a new branch:**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Make your changes and commit them:**

   ```bash
   git commit -m "Add your message here"
   ```

4. **Push to the branch:**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a pull request**

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
