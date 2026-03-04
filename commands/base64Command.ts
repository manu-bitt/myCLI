import { BaseCommand } from "./baseCommand";
import chalk from "chalk";

export class Base64Command extends BaseCommand {
    register(): void {
        this.program
            .command("base64 <action> <text>")
            .description("Encode or decode text using base64")
            .action((action, text) => {
                if (action === "encode") {
                    const encoded = Buffer.from(text).toString('base64');
                    console.log(chalk.yellow("Encoded: ") + chalk.cyan(encoded));
                } else if (action === "decode") {
                    const decoded = Buffer.from(text, 'base64').toString('utf8');
                    console.log(chalk.yellow("Decoded: ") + chalk.cyan(decoded));
                } else {
                    console.log(chalk.red(`Invalid action: '${action}'. Use 'encode' or 'decode'.`));
                }
            });
    }
}
