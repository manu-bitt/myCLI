import { BaseCommand } from "./baseCommand";
import chalk from "chalk";
import axios from "axios";

export class WeatherCommand extends BaseCommand {
    register(): void {
        this.program
            .command("weather <city>")
            .description("Fetches current weather for a city")
            .action(async (city) => {
                console.log(chalk.gray(`Fetching weather for: ${city}...`));
                try {
                    // wttr.in format 3 gives brief location & weather like: London: ⛅️  +18°C
                    const response = await axios.get(`https://wttr.in/${encodeURIComponent(city)}?format=3`, { responseType: 'text' });
                    const weatherText = response.data.trim();
                    console.log(chalk.cyanBright(`\n${weatherText}`));
                } catch (error: any) {
                    console.log(chalk.red(`Failed to fetch weather: ${error.message}`));
                }
            });
    }
}
