import { BaseCommand } from "./baseCommand";
import chalk from "chalk";

export class GreetCommand extends BaseCommand {
    register(): void {
        this.program
            .command("greet <name>")
            .description("Greets a user by name")
            .option("-u, --uppercase", "print name in uppercase")
            .action((name, options) => {
                let formattedName = options.uppercase ? name.toUpperCase() : name;
                console.log(chalk.green(`Hello, ${chalk.bold(formattedName)}! Welcome to myCLI.`));
            });
    }
}
