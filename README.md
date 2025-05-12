# MulahTechAssesment - First Stage Task

## Overview

This is a simple React application that processes a CSV file to display two tables. The first table (Table 1) displays data from a CSV file, while the second table (Table 2) computes values based on specific data from Table 1. The app uses the **PapaParse** library to parse the CSV file and displays the results in an intuitive manner.

### Features:
1. **Table 1**: Displays data from a CSV file that contains an index and associated value.
2. **Table 2**: Computes the following categories based on Table 1:
   - **Alpha**: Sum of values from A5 and A20.
   - **Beta**: Value of A15 divided by A7.
   - **Charlie**: Product of values from A13 and A12.
3. **Responsive Layout**: The tables and content are displayed in a clean and structured format.
4. **Interactive**: Includes basic user information (name, position, LinkedIn, resume) for the assessment.

## Tech Stack

- **Frontend**: React.js
- **CSV Parsing**: PapaParse
- **Styling**: Custom CSS (Responsive)
- **Hosting**: Deployed on GitHub Pages

## How to Run Locally

### Prerequisites
- Node.js installed (You can download it from [here](https://nodejs.org/)).

### Steps to Run Locally:

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/kimimhdzr/MulahTechAssesment.git
    ```

2. Navigate into the project directory:

    ```bash
    cd MulahTechAssesment/frontend
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

    This will open the app in your browser at `http://localhost:3000`.

## How to Deploy on GitHub Pages

To deploy the app to GitHub Pages, follow these steps:

1. Build the app for production:

    ```bash
    npm run build
    ```

2. Install `gh-pages` as a dev dependency if you haven't done so already:

    ```bash
    npm install gh-pages --save-dev
    ```

3. Add the following scripts to your `package.json`:

    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    },
    "homepage": "https://yourusername.github.io/MulahTechAssesment"
    ```

4. Deploy to GitHub Pages:

    ```bash
    npm run deploy
    ```

5. Your app will now be available at `https://yourusername.github.io/MulahTechAssesment`.

## File Structure

- **/public**: Contains static files like `index.html` and the CSV file.
- **/src**: Contains React components and the `App.css` for styling.

## CSV File

The app fetches the CSV file from the `/public/Dataset/Table_Input.csv` path. Ensure that the CSV file is placed in the `public/Dataset` directory before deploying or running the app.

### Sample CSV Format:
```csv
Index #,Value
A1,41
A2,18
A3,21
A4,63
A5,2
A6,53
A7,5
A8,57
A9,60
A10,93
A11,28
A12,3
A13,90
A14,39
A15,80
A16,88
A17,49
A18,60
A19,26
A20,28
```

---

### 📄 License

This project is licensed under the [MIT License](LICENSE).

---

### 👨‍💻 Contacts

📧 [Hakimi Mahadzir]  
🔗 [linkedin.com/in/hakimi-mahadzir-dev](https://www.linkedin.com/in/hakimi-mahadzir-a16039295/)
