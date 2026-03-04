# myCLI

A feature-rich OOP-based Command Line Interface (CLI) built with TypeScript, Node.js, and Commander. It incorporates Object-Oriented principles and leverages third-party APIs for multiple commands.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/manu-bitt/myCLI.git
   cd myCLI
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed. Then, install the required NPM packages.
   ```bash
   npm install
   ```

3. **Build the TypeScript files:**
   Compile the source code to JavaScript. The output will be in the `dist` folder.
   ```bash
   npm run build
   ```

4. **Make the CLI Executable (Optional):**
   ```bash
   chmod +x dist/cli.js
   ```

5. **Run the CLI:**
   You can run the CLI via Node:
   ```bash
   node ./dist/cli.js <command>
   ```
   Or using the executable:
   ```bash
   ./dist/cli.js <command>
   ```

## Available Commands

Here are the custom commands available in the CLI. You can always run `--help` to see a full list:

| Command | Description | Example |
|---|---|---|
| `greet <name>` | Greets a user by name (supports `-u` flag for uppercase) | `./dist/cli.js greet John` |
| `fileinfo <filename>` | Displays size, creation, and modified times for a file | `./dist/cli.js fileinfo package.json` |
| `github <username>` | Fetches basic GitHub user profile information (API) | `./dist/cli.js github octocat` |
| `weather <city>` | Fetches current weather for a specific city (API) | `./dist/cli.js weather Paris` |
| `quote` | Displays a random daily quote (API) | `./dist/cli.js quote` |
| `joke` | Tells a random programming joke (API) | `./dist/cli.js joke` |
| `sysinfo` | Displays basic metrics about the host system (RAM, CPU, OS) | `./dist/cli.js sysinfo` |
| `uuid` | Generates a randomized v4 UUID | `./dist/cli.js uuid` |
| `base64 <action> <text>` | Encodes or decodes text to/from base64 | `./dist/cli.js base64 encode "Hello World"` |
| `init-ts <folder>` | Initialises a brand new TypeScript project inside the folder | `./dist/cli.js init-ts my-new-project` |


## Example Usage

**1. Weather API Integration:**
```bash
$ ./dist/cli.js weather London
Fetching weather for: London...
London: ⛅️  +18°C
```

**2. GitHub User API Integration:**
```bash
$ ./dist/cli.js github octocat
Fetching info for GitHub user: octocat...

--- GitHub Profile: octocat ---
Name: The Octocat
Public Repos: 8
Followers: 13348
Bio: N/A
```

**3. Base64 Encode:**
```bash
$ ./dist/cli.js base64 encode "TypeScript Rocks!"
Encoded: VHlwZVNjcmlwdCBSb2NrcyE=
```

**4. Generate TS Boilerplate:**
```bash
$ ./dist/cli.js init-ts backend-app
Initializing TypeScript project in folder: backend-app...
... (generates project locally)
Success! TypeScript project created at ./backend-app
```

---

*This application was built utilizing core Object-Oriented Programming (Classes, Inheritance, Abstract Base Structures) using TypeScript.*
