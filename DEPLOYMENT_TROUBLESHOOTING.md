# GitHub Pages Deployment Troubleshooting

## Step 1: Check GitHub Pages Settings

1. Go to your repository: `https://github.com/Samsontesfamichael/personalportfolio`
2. Click **Settings** → **Pages**
3. Under **Source**, ensure **GitHub Actions** is selected
4. Save if you made changes

## Step 2: Check Actions Tab for Error Details

1. Go to **Actions** tab in your repository
2. Click on the failed workflow run
3. Click on the failed job (either "build" or "deploy")
4. Expand the failed step to see the error message

## Common Errors and Fixes

### Error: "Resource not accessible by integration"
**Fix**: Repository settings issue
- Go to Settings → Actions → General
- Under "Workflow permissions", select **Read and write permissions**
- Check **Allow GitHub Actions to create and approve pull requests**
- Save

### Error: "npm ci failed" or "Module not found"
**Fix**: Updated workflow to use `--legacy-peer-deps`
- Already fixed in your `deploy.yml`
- If still failing, check the specific module error

### Error: "Pages deployment failed"
**Fix**: Ensure Pages is configured
- Settings → Pages → Source: **GitHub Actions**
- Wait 1-2 minutes after enabling

### Error: "No artifact found"
**Fix**: Build output directory issue
- Verify `out` directory is created during build
- Check `next.config.mjs` has `output: 'export'`

## Step 3: Push Updated Workflow

I've updated your workflow with additional permissions. Push the changes:

```bash
git add .github/workflows/deploy.yml
git commit -m "fix: Add deployment permissions to workflow"
git push
```

## Step 4: Manual Trigger (If Needed)

If the workflow doesn't auto-trigger:
1. Go to **Actions** tab
2. Select "Deploy to GitHub Pages" workflow
3. Click **Run workflow** → **Run workflow**

## Step 5: Verify Deployment

Once successful:
- Your site will be at: `https://samsontesfamichael.github.io/personalportfolio`
- Check the Actions tab for a green checkmark ✓

---

**Need More Help?**
Share the specific error message from the Actions tab, and I can provide a targeted fix.
