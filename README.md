# 🎭 Playwright TypeScript Automation Framework

[![GitHub](https://img.shields.io/badge/GitHub-sreshma--shaik-181717?style=for-the-badge&logo=github)](https://github.com/sreshma-shaik)
[![Playwright](https://img.shields.io/badge/Playwright-1.61.1-2EAD33?style=for-the-badge&logo=playwright)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)

A **beginner-friendly, interview-ready** UI automation framework built with **Playwright** and **TypeScript**. This project walks through Playwright fundamentals, CSS locators, and real UI automation examples — structured so that anyone, even without prior Playwright experience, can clone it, install it, and start running tests within minutes.

---

## 📖 Table of Contents

1. [Prerequisites](#-prerequisites)
2. [Installation Guide (Step by Step)](#-installation-guide-step-by-step)
3. [Project Folder Structure](#-project-folder-structure)
4. [File-by-File Explanation](#-file-by-file-explanation)
5. [Running Tests](#-running-tests)
6. [Viewing the HTML Report](#-viewing-the-html-report)
7. [Topics Covered](#-topics-covered)
8. [Technologies Used](#-technologies-used)
9. [Git Commands Cheat Sheet](#-git-commands-cheat-sheet)
10. [Screenshots](#-screenshots)
11. [Future Enhancements](#-future-enhancements)
12. [Contributing](#-contributing)
13. [License](#-license)
14. [Author](#-author)

---

## ✅ Prerequisites

Before you begin, make sure the following tools are installed on your machine:

| Tool | Purpose |
|------|---------|
| 🖥️ **Visual Studio Code** | Code editor used to write and run the automation scripts |
| 🟢 **Node.js (LTS version)** | JavaScript runtime required to run Playwright and npm |
| 🔧 **Git** | Version control system to clone and manage the repository |
| 🐙 **GitHub Account** | Needed to clone/fork the repository and push your own changes |

---

## 🛠️ Installation Guide (Step by Step)

Follow these steps **in order**. Every command is explained so a complete beginner can follow along.

### 📥 Step 1: Install Visual Studio Code
Download and install VS Code from the official site:
🔗 https://code.visualstudio.com/

### 📥 Step 2: Install Node.js
Download the **LTS (Long-Term Support)** version of Node.js:
🔗 https://nodejs.org/

Node.js comes bundled with `npm` (Node Package Manager), which we'll use to install Playwright.

### 📥 Step 3: Verify Node.js Installation
Open a terminal and run:
```bash
node -v
npm -v
```
- `node -v` → prints the installed Node.js version, confirming Node is installed correctly.
- `npm -v` → prints the installed npm version, confirming the package manager is ready to use.

### 📥 Step 4: Install Git
Download Git from:
🔗 https://git-scm.com/downloads

Verify the installation:
```bash
git --version
```
This confirms Git is installed and accessible from the command line.

### 📥 Step 5: Create a Project Folder
Open VS Code, open a new terminal (`Ctrl + ` ` `), and run:
```bash
mkdir PLAYWRIGHT
```
- `mkdir PLAYWRIGHT` → creates a new empty folder named `PLAYWRIGHT` to hold the project.

```bash
cd PLAYWRIGHT
```
- `cd PLAYWRIGHT` → moves your terminal into that folder so all following commands run inside it.

### 📥 Step 6: Open the Folder in VS Code
```bash
code .
```
- `code .` → opens the current folder in Visual Studio Code.

### 📥 Step 7: Initialize an npm Project
```bash
npm init -y
```
- `npm init` → creates a new `package.json` file (the manifest that tracks project metadata and dependencies).
- `-y` → automatically accepts all the default answers instead of asking questions one by one.

### 📥 Step 8: Install Playwright
```bash
npm init playwright@latest
```
This downloads and runs the official Playwright setup wizard, which will ask you a series of configuration questions:

| Prompt | Recommended Answer | What it Means |
|--------|--------------------|----------------|
| **Do you want to use TypeScript or JavaScript?** | ✔ TypeScript | Sets up the project with `.ts` test files and type checking |
| **Where to put your end-to-end tests?** | ✔ `tests` folder | Creates a dedicated folder to keep all test files organized |
| **Add a GitHub Actions workflow?** | ✔ Yes (optional) | Automatically generates a CI/CD pipeline file to run tests on every push |
| **Install Playwright browsers now?** | ✔ Yes | Downloads Chromium, Firefox, and WebKit browser binaries needed for testing |

### 📥 Step 9: Install Playwright Browsers (If Skipped)
If the browsers weren't installed automatically in Step 8:
```bash
npx playwright install
```
- `npx` → runs a package without installing it globally.
- `playwright install` → downloads the browser binaries (Chromium, Firefox, WebKit) Playwright needs to run tests.

### 📥 Step 10: Verify Playwright Installation
```bash
npx playwright --version
```
- Confirms Playwright is installed correctly and prints the installed version number.

🎉 **Setup complete!** Your project is now ready to run automated tests.

---

## 📂 Project Folder Structure

```
playwright-typescript-automation
│
├── .github
│   └── workflows
│       └── playwright.yml          # CI/CD pipeline to auto-run tests on GitHub
│
├── NOTES                           # Personal learning notes / reference material
│
├── tests
│   ├── CSS_Locators_1.spec.ts              # Examples of CSS locator strategies
│   ├── Playwright_Basic_Program_1.spec.ts  # Basic Playwright script example
│   ├── Playwright_Basic_Program_2.spec.ts  # Basic Playwright script example
│   ├── Playwright_Basic_Program_3.spec.ts  # Basic Playwright script example
│   └── Test1.spec.ts                       # Sample test file
│
├── .gitignore                      # Files/folders excluded from Git tracking
├── package.json                    # Project metadata & dependencies
├── package-lock.json               # Exact dependency version lock file
├── playwright.config.ts            # Playwright test runner configuration
└── README.md                       # Project documentation (this file)
```

---

## 🗂️ File-by-File Explanation

| File / Folder | Description |
|----------------|-------------|
| **`package.json`** | The heart of any Node.js project. Lists project metadata (name, version) and dependencies like `@playwright/test`. Running `npm install` reads this file to install everything the project needs. |
| **`package-lock.json`** | Automatically generated file that locks the *exact* versions of every installed dependency (and their sub-dependencies), ensuring consistent installs across machines. |
| **`playwright.config.ts`** | The central configuration file for Playwright. Defines the test directory, browsers to run against (Chromium, Firefox, WebKit), timeouts, reporters, retries, and other global test settings. |
| **`.gitignore`** | Tells Git which files/folders to ignore (e.g., `node_modules/`, `test-results/`, `playwright-report/`) so they aren't committed to version control. |
| **`tests/`** | Contains all the automated test spec files (`*.spec.ts`). Playwright automatically discovers and runs any file matching this pattern. |
| **`NOTES/`** | A folder for personal study notes, cheat sheets, or reference material collected while learning Playwright. |
| **`.github/workflows/`** | Contains GitHub Actions YAML files that define CI/CD pipelines — e.g., automatically running the test suite whenever code is pushed or a pull request is opened. |

---

## ▶️ Running Tests

### Run All Tests
```bash
npx playwright test
```
Executes every test file inside the `tests/` folder across all configured browsers.

### Run a Single Test File
```bash
npx playwright test tests/CSS_Locators_1.spec.ts
```
Runs only the specified test file.

### Run Tests in Headed Mode
```bash
npx playwright test --headed
```
Runs tests with the browser UI visible (useful for debugging), instead of the default headless mode.

### Run Tests on a Specific Browser

**Chromium**
```bash
npx playwright test --project=chromium
```

**Firefox**
```bash
npx playwright test --project=firefox
```

**WebKit**
```bash
npx playwright test --project=webkit
```

---

## 📊 Viewing the HTML Report

After a test run, Playwright generates a detailed HTML report. To view it:
```bash
npx playwright show-report
```
This opens an interactive report in your browser showing pass/fail status, execution time, screenshots, and traces for each test.

---

## 📚 Topics Covered

- ⚙️ Playwright installation & project setup
- 🔤 TypeScript fundamentals for test automation
- 🎯 CSS locator strategies
- 🌐 Browser launch & context management
- 🧭 Page navigation
- ▶️ Test execution (headless & headed)
- ✅ Assertions
- 🛠️ Playwright configuration (`playwright.config.ts`)
- 🔁 Cross-browser testing (Chromium, Firefox, WebKit)
- 🤖 CI/CD integration with GitHub Actions

---

## 🚀 Technologies Used

- 🎭 **Playwright** — End-to-end testing framework
- 🔷 **TypeScript** — Typed superset of JavaScript
- 🟢 **Node.js** — JavaScript runtime environment
- 🖥️ **Visual Studio Code** — Code editor
- 🔧 **Git** — Version control
- 🐙 **GitHub** — Code hosting & CI/CD via Actions

---

## 🔗 Git Commands Cheat Sheet

| Command | Description |
|---------|--------------|
| `git clone <repo-url>` | Downloads a copy of a remote repository to your local machine |
| `git init` | Initializes a new, empty local Git repository |
| `git add <file>` / `git add .` | Stages changes (a specific file or all files) to be committed |
| `git commit -m "message"` | Saves the staged changes to the local repository with a descriptive message |
| `git push` | Uploads local commits to the remote repository (e.g., GitHub) |
| `git pull` | Fetches and merges changes from the remote repository into your local branch |
| `git status` | Shows the current state of the working directory (staged, unstaged, untracked files) |
| `git branch` | Lists, creates, or deletes branches |
| `git checkout <branch>` | Switches to a different branch (or creates one with `-b`) |

---

## 🔮 Future Enhancements

- 🔐 Add environment-based configuration using `.env` files
- 📄 Implement the Page Object Model (POM) design pattern
- 🔁 Add data-driven testing with external JSON/CSV files
- 📱 Add mobile viewport testing (Pixel, iPhone emulation)
- 🐳 Dockerize the test suite for consistent CI environments
- 📧 Integrate Slack/Email notifications for CI test results
- 🧪 Add API testing alongside UI testing

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork this repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature-name`
5. Open a Pull Request 🎉

Please ensure your code follows the existing style and includes clear commit messages.

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute it with attribution.

---

## 👩‍💻 Author

**Reshma Shaik**
🔗 GitHub: [https://github.com/sreshma-shaik](https://github.com/sreshma-shaik)

---

⭐ If you found this project helpful, consider giving it a **star** on GitHub!
