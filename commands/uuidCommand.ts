import { BaseCommand } from "./baseCommand";
import chalk from "chalk";

export class UuidCommand extends BaseCommand {
    register(): void {
        this.program
            .command("uuid")
            .description("Generates a random UUID (v4)")
            .action(() => {
                // simple custom implementation to void importing external libs like uuid if not in package.json
                const generateUUID = () => {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    });
                }
                const uuid = generateUUID();
                console.log(chalk.green(`Generated UUID: ${chalk.bold(uuid)}`));
            });
    }
}
