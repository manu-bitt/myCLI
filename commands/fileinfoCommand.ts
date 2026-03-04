import { BaseCommand } from "./baseCommand";
import chalk from "chalk";
import fs from "fs";

export class FileInfoCommand extends BaseCommand {
    register(): void {
        this.program
            .command("fileinfo <filename>")
            .description("Displays information about a file")
            .action((filename) => {
                try {
                    const stats = fs.statSync(filename);
                    if (stats.isFile()) {
                        console.log(chalk.cyan(`File Info for: ${filename}`));
                        console.log(chalk.yellow(`Size: `) + `${stats.size} bytes`);
                        console.log(chalk.yellow(`Created: `) + `${stats.birthtime.toLocaleString()}`);
                        console.log(chalk.yellow(`Modified: `) + `${stats.mtime.toLocaleString()}`);
                    } else {
                        console.log(chalk.red(`Error: ${filename} is not a file.`));
                    }
                } catch (error: any) {
                    console.log(chalk.red(`Error accessing file: ${error.message}`));
                }
            });
    }
}
