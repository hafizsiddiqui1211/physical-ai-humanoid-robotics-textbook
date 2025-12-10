# GitHub Repository Setup Instructions

## Creating the Repository

1. Go to GitHub.com and log into your account
2. Click the "+" icon in the top-right corner and select "New repository"
3. Name the repository: `physical-ai-humanoid-robotics-textbook`
4. Set the repository to Public
5. Check "Add a README file" (we already have one, but this initializes the repo)
6. Click "Create repository"

## Setting Up Git Remote

After creating the repository, you need to add the remote origin:

```bash
git remote add origin https://github.com/hafizsiddiqui1211/physical-ai-humanoid-robotics-textbook.git
```

## Pushing the Code

1. Push the main branch:
   ```bash
   git branch -M main
   git push -u origin main
   ```

## GitHub Pages Configuration

1. Go to your repository on GitHub
2. Click on the "Settings" tab
3. In the left sidebar, click on "Pages"
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" as the branch and "/ (root)" as the folder
6. Click "Save"

## Building and Deploying Docusaurus Site

The Docusaurus site is configured to deploy to GitHub Pages. To build and deploy:

1. Build the site:
   ```bash
   cd docusaurus
   npm run build
   ```

2. Deploy using Docusaurus:
   ```bash
   npm run deploy
   ```

This will create a `gh-pages` branch with the built site, which GitHub Pages will automatically serve.