import { BaseCommand } from "./baseCommand";
import chalk from "chalk";
import { execSync } from "child_process";

export class InitTsCommand extends BaseCommand {
    register(): void {
        this.program
            .command("init-ts <folderName>")
            .description("Initializes a new TypeScript project in the given folder")
            .action((folderName) => {
                console.log(chalk.green(`Initializing TypeScript project in folder: ${chalk.bold(folderName)}...`));
                try {
                    execSync(`mkdir ${folderName} && cd ${folderName} && npm init -y && npm install typescript --save-dev && npx tsc --init`, { stdio: 'inherit' });
                    console.log(chalk.green(`\nSuccess! TypeScript project created at ./${folderName}`));
                } catch (error: any) {
                    console.log(chalk.red(`\nError initializing typescript project: ${error.message}`));
                }
            });
    }
}
