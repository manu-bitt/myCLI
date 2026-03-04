import { BaseCommand } from "./baseCommand";
import chalk from "chalk";
import axios from "axios";

export class QuoteCommand extends BaseCommand {
    register(): void {
        this.program
            .command("quote")
            .description("Displays a random quote")
            .action(async () => {
                console.log(chalk.gray("Fetching a random quote..."));
                try {
                    const response = await axios.get("https://dummyjson.com/quotes/random");
                    const quote = response.data;
                    console.log(chalk.magenta(`\n"${quote.quote}"`));
                    console.log(chalk.italic.cyan(`- ${quote.author}\n`));
                } catch (error: any) {
                    console.log(chalk.red(`Failed to fetch quote: ${error.message}`));
                }
            });
    }
}
