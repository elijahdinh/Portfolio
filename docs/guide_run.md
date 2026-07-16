# A Beginner's Guide to Running the Starter Script (run.sh)

Welcome! Starting a new React + Vite project can feel overwhelming with all the installation steps and commands. To make this process as easy as possible, we have created an automated starter script called `run.sh` located inside the `scripts/` folder.

This guide will show you how to open the terminal in the Antigravity IDE, navigate to the correct folder, and run the script step-by-step.

---

## 1. What does `run.sh` do?

Think of `run.sh` as your **automated project assistant**. Instead of you running multiple terminal commands manually, the script automatically handles:
1. **Checking Node.js**: Checks if Node.js is installed on your computer.
2. **Checking npm**: Checks if npm (Node Package Manager) is ready.
3. **Validating Project**: Verifies that the script is running in the correct project directory.
4. **Installing Dependencies**: Checks if your dependencies (the pre-made code libraries inside `node_modules/`) are installed, and automatically installs them with `npm install` if they are missing!
5. **Starting the App**: Launches the local **development server** (`npm run dev`) so you can view your portfolio website in your web browser.

---

## 2. Step 1: Open the Terminal in Antigravity IDE

To talk to the starter script, we need to open the **terminal** inside your Antigravity IDE. The terminal is a text-based window where you can run commands directly.

Here are the three ways to open it:

### ⌨️ Method A: Keyboard Shortcut (Fastest)
Press **`Control + \``** (Control + Backtick, the key right below the `Esc` key on your keyboard).
> [!TIP]
> This shortcut toggles the terminal panel open and closed.

### 🖱️ Method B: Using the Menu Bar
1. Look at the menu bar at the very top of your screen or window.
2. Click on **Terminal**.
3. Click on **New Terminal**.

### 🔍 Method C: Command Palette
1. Press **`Cmd + Shift + P`** (Mac) or **`Ctrl + Shift + P`** (Windows/Linux) to open the Command Palette.
2. Type `Terminal: Create New Terminal` in the box.
3. Press **Enter**.

Once open, you will see a pane appear at the bottom of your screen with a blinking cursor.

---

## 3. Step 2: Navigating to Your Project Folder (`cd`)

Before running a script, you must tell the terminal *where* to look. This is called "changing directories" using the **`cd`** command.

> [!NOTE]
> **Analogy**: Imagine your computer is a house, and each folder is a room. You cannot cook in the kitchen if you are still standing in the hallway! The `cd` command is how you walk into the kitchen room.

### Check where you are right now
Type this command and press Enter:
```bash
pwd
```
*(This stands for **Print Working Directory**, which tells you which room/folder you are currently standing in).*

### Walk into your Portfolio directory
If you are not already inside the `Portfolio` folder, run:
```bash
cd ~/Development/Portfolio
```

---

## 4. Step 3: Running the Script (`run.sh`)

Now that you are in your project folder, you have two options to run the script. Both options work perfectly!

### Option A: Run it from the Main Folder (Recommended)
You don't actually need to enter the `scripts` folder to run it. You can point to it directly from the main `Portfolio` folder:
```bash
./scripts/run.sh
```

### Option B: Enter the `scripts` folder first
1. Walk into the `scripts` room:
   ```bash
   cd scripts
   ```
2. Run the script:
   ```bash
   ./run.sh
   ```

---

## 5. Troubleshooting: "Permission Denied" Error

Sometimes, your computer will block the script from running because it doesn't trust it yet. If you see an error like `Permission denied` when running `./run.sh` or `./scripts/run.sh`, you need to give it run permissions.

### The Fix:
Run the following command to make the script executable:
* If you are in the main `Portfolio` directory:
  ```bash
  chmod +x scripts/run.sh
  ```
* If you are already inside the `scripts` directory:
  ```bash
  chmod +x run.sh
  ```

Once you run this command, try running the script again (e.g., `./run.sh` or `./scripts/run.sh`), and it will work!

---

## 6. What to Expect After Running the Script

Once the script starts, you will see a nice colored banner and diagnostic checks in your terminal:

1. **Checking Node.js & npm**: It will print green checkmarks if they are installed.
2. **Installing dependencies**: If it's your first time running it, it will automatically run `npm install` and download the React library code. This may take a minute.
3. **Starting the development server**: Once finished, it will say `Starting the development server...` and boot up Vite.
4. **Opening the website**: You will see a link like `http://localhost:5173/`. Hold `Cmd` (Mac) or `Ctrl` (Windows/Linux) and click the link to open it in your browser!

### How to Stop the App
To stop the server and turn off the website, click inside your terminal window and press **`Control + C`** on your keyboard.
