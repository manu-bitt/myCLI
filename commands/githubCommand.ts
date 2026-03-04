import { BaseCommand } from "./baseCommand";
import chalk from "chalk";
import axios from "axios";

export class GithubCommand extends BaseCommand {
    register(): void {
        this.program
            .command("github <username>")
            .description("Fetches basic GitHub user profile information")
            .action(async (username) => {
                console.log(chalk.gray(`Fetching info for GitHub user: ${username}...`));
                try {
                    const response = await axios.get(`https://api.github.com/users/${username}`);
                    const user = response.data;
                    console.log(chalk.green(`\n--- GitHub Profile: ${user.login} ---`));
                    console.log(chalk.yellow(`Name: `) + (user.name || "N/A"));
                    console.log(chalk.yellow(`Public Repos: `) + user.public_repos);
                    console.log(chalk.yellow(`Followers: `) + user.followers);
                    console.log(chalk.yellow(`Bio: `) + (user.bio || "N/A"));
                } catch (error: any) {
                    if (error.response && error.response.status === 404) {
                        console.log(chalk.red(`User '${username}' not found.`));
                    } else {
                        console.log(chalk.red(`Failed to fetch data: ${error.message}`));
                    }
                }
            });
    }
}
