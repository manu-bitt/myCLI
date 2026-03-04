import { BaseCommand } from "./baseCommand";
import chalk from "chalk";
import axios from "axios";

export class JokeCommand extends BaseCommand {
    register(): void {
        this.program
            .command("joke")
            .description("Tells a random programming joke")
            .action(async () => {
                console.log(chalk.gray("Fetching a programming joke..."));
                try {
                    const response = await axios.get("https://official-joke-api.appspot.com/jokes/programming/random");
                    const joke = response.data[0];
                    console.log(chalk.blue(`\n${joke.setup}`));
                    setTimeout(() => {
                        console.log(chalk.green(`... ${joke.punchline}\n`));
                    }, 1500);
                } catch (error: any) {
                    console.log(chalk.red(`Failed to fetch joke: ${error.message}`));
                }
            });
    }
}
