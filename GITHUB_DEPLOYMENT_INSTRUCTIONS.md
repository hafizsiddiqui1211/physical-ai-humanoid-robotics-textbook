# GitHub Pages Deployment Instructions

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

## Configuring GitHub Pages

1. Go to your repository on GitHub
2. Click on the "Settings" tab
3. In the left sidebar, click on "Pages"
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" as the branch and "/ (root)" as the folder
6. Click "Save"

## Building and Deploying

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

## Alternative Deployment Method

You can also use GitHub Actions for automatic deployment. Create `.github/workflows/deploy.yml` with:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm
          cache-dependency-path: docusaurus/package-lock.json

      - name: Install dependencies
        run: npm install
        working-directory: docusaurus

      - name: Build website
        run: npm run build
        working-directory: docusaurus

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docusaurus/build
          publish_branch: gh-pages
```

## Verification

After deployment, your textbook will be available at:
https://hafizsiddiqui1211.github.io/physical-ai-humanoid-robotics-textbook/

## Troubleshooting

- If you get permission errors, make sure your GitHub token has the correct permissions
- If the site doesn't load, check that the base URL in `docusaurus.config.js` matches your repository name
- For broken links, ensure the `baseUrl` is set correctly in the configuration