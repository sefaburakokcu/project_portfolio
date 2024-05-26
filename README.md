
# Project Portfolio

This is a personal project showcasing various works and projects I have worked on. The webpage is built with HTML, CSS, and JavaScript, and is served using Nginx within a Docker container.

## Project Structure

```
project_portfolio/
│
├── index.html
├── styles.css
├── script.js
├── projects.json
└── assets/
   ├── favicon-32x32.png
   ├── dinov2-onnx.jpeg
   ├── quantized-yolov5.png
   ├── finn-quantized-classification.png
   ├── finn-quantized-yolo.png
   ├── ml-model-registery.png
   └── yolov3-facial-landmark-detection.jpg
```

- **index.html**: The main HTML file that structures the webpage.
- **styles.css**: The CSS file for styling the webpage.
- **script.js**: The JavaScript file for adding interactivity and dynamic content loading.
- **projects.json**: The JSON file containing project data.
- **assets/**: Directory to store assets like the favicon and project images.

## Features

- Responsive, modern design with light/dark theme toggle.
- Search functionality to filter projects.
- Dynamic project display with project details, images, dates, and tags.
- Dockerized for easy deployment.

## Getting Started

### Prerequisites

- Docker installed on your machine.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/sefaburakokcu/project_portfolio.git
   cd project_portfolio
   ```

2. Build the Docker image:

   ```sh
   docker build -t project_portfolio:v0.0.1 .
   ```

3. Run the Docker container:

   ```sh
   docker run -d -p 8080:80 project_portfolio:v0.0.1
   ```

4. Access the webpage in your browser:

   ```sh
   http://localhost:8080
   ```

## Usage

- Open the webpage in your browser.
- Use the search bar to filter projects by name, description, or tags.
- Toggle between light and dark themes using the button in the upper right corner.
- Click on the "Demo" button to view project demos.

## Adding New Projects

1. Add your project images to the `assets` directory.
2. Update the `projects.json` file with the new project details:

   ```json
   [
       {
           "name": "New Project",
           "description": "Description of the new project.",
           "image": "images/new-project.png",
           "demo": "https://demo.new-project.com",
           "date": "2024-05-26",
           "tags": ["Tag1", "Tag2"]
       }
       // ... other projects
   ]
   ```

## Customizing

- **Favicon**: Replace the `favicon-32x32.png` file in the `assets` directory with your own icon.
- **Styles**: Modify the `styles.css` file to customize the look and feel of the webpage.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Nginx](https://www.nginx.com/)
- [Docker](https://www.docker.com/)

