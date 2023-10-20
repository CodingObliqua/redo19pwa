# PWA Text Editor

## Description

The PWA Text Editor is a progressive web application that enables you to create, edit, and save notes and code snippets right in your browser. This project was motivated by the need for a versatile text editor that works seamlessly online and offline, ensuring data persistence even when there's no internet connection.

### Motivation
The motivation behind this project was to develop a robust text editor that can be used in a variety of scenarios. Whether you're taking quick notes during a meeting, jotting down code snippets, or simply need a reliable place to store information, this PWA text editor has got you covered.

### Problem It Solves
The PWA Text Editor solves the problem of data loss in scenarios where an internet connection is intermittent or unavailable. With data persistence using IndexedDB, your content is always safe and can be retrieved later.

### What I Learned
While working on this project, I learned how to create a Progressive Web Application that adheres to PWA criteria, including service workers for offline functionality. I also gained experience in using IndexedDB for data storage and Webpack for bundling JavaScript files.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To run the PWA Text Editor on your local machine, follow these steps:

1. Clone the repository to your local machine.

2. Navigate to the project directory.

3. Install the project dependencies.

4. Start the development server.

5. Open your web browser and access the application at `http://localhost:3000`.

## Usage

To use the PWA Text Editor:

1. Open the application in your web browser.

2. Create, edit, or save notes and code snippets.

3. The content is automatically saved to IndexedDB when you click off the DOM window.

4. Even when you're offline, you can continue to work on your notes.

![alt text](assets/images/screenshot.png)

## Credits

This project was created independently. However, I'd like to acknowledge the following resources:

- [idb - IndexedDB Promised](https://github.com/jakearchibald/idb) - Used to interact with IndexedDB.
- [Workbox](https://developers.google.com/web/tools/workbox) - Used to create and manage the service worker.
- [Webpack](https://webpack.js.org/) - Used for bundling JavaScript files.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.