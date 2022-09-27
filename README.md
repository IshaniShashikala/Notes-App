# Notes-App

This is a Nodejs application which gets input from the user via command line and stores the user's note data in a json file using File System and Command Line Args.

## Tech Stack

Nodejs

## Getting Started
### Run Locally

Clone the project

```bash
  git clone https://github.com/IshaniShashikala/Notes-App.git
```

Go to the project directory

```bash
  cd Notes-App
```

Install dependencies

```bash
  npm install
```

Adding a Node 

```bash
  node app.js add --title="List" --body="Sweater, Pants"
```
Listing Notes

```bash
  node app.js list
```

Reading a Note

```bash
  node app.js read --title="List"
```

Removing a Note

```bash
  node app.js remove --title="List"
```
