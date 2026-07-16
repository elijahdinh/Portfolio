# A Beginner's Guide to Git and GitHub

Welcome! Git is one of the most important tools in software engineering. This guide will walk you through what Git is, why we use it, and how to use it step-by-step without fear of losing your work.

---

## 1. What is Git (and GitHub)?

To make it simple, think of **Git** as a **digital camera** for your codebase:
* **The Camera (Git)**: A program that runs locally on your computer to take "snapshots" of your project files at different points in time.
* **The Photograph (A Commit)**: A saved snapshot of your code. If you make a mistake later, you can always travel back in time to this snapshot.
* **The Photo Album (GitHub)**: A cloud website where you upload and share your snapshots so they are backed up safely online.

---

## 2. The Core Daily Workflow (Save Your Code)

When you are writing code, you will follow a simple 4-step loop to save your progress. Think of it as **"Frame the photo, Press the shutter, Upload the album."**

### Step 1: Check your surroundings (`git status`)
Before you do anything, see what files you have modified since your last snapshot:
```bash
git status
```
* *Red files* mean you have changed them, but Git hasn't locked them in frame yet.

### Step 2: Look closely at changes (`git diff`)
To see exactly what lines of code you added or deleted:
```bash
git diff
```

### Step 3: Frame your shot (`git add`)
Choose which files you want to include in your next snapshot.
* To stage **all** changes you made:
  ```bash
  git add .
  ```
* To stage only **one specific file**:
  ```bash
  git add docs/guide_git.md
  ```
* Run `git status` again. Your staged files will now show up in **green**!

### Step 4: Take the snapshot (`git commit`)
Save the changes permanently to your computer's Git history. Always write a short, clear message explaining what you changed:
```bash
git commit -m "Add beginner git user guide"
```
* **Tip**: Keep your commit messages in the present tense (e.g., "Add feature" instead of "Added feature").

### Step 5: Upload to the Cloud (`git push`)
To send your local snapshots up to your GitHub repository so they are safe:
```bash
git push
```

---

## 3. Collaborative Commands (Getting Code)

If you are working on a new computer or working with others, you will use these commands:

### 📥 Cloning a Repository
To download a copy of a repository from GitHub to your computer for the first time:
```bash
git clone <repository-url>
```

### 🔄 Pulling Latest Code
Before starting to write code for the day, check if there are any new updates on GitHub and bring them down to your computer:
```bash
git pull
```

---

## 4. Golden Rules for Git Beginners

1. **Commit Often**: Take small, frequent snapshots. It's much easier to undo a small mistake than a massive one.
2. **Pull Before You Push**: Always run `git pull` before you start coding to ensure you have the absolute latest version of the project.
3. **Write Helpful Commit Messages**: "fix bug" is hard to understand in 3 months. "Fix styling alignment on mobile navbar" is much better.
4. **Don't Panic**: If you get stuck or see weird screen outputs (like getting trapped in the `Vim` editor), just ask your agent or run `git status` to read Git's helpful hints!
