import { BaseCommand } from "./baseCommand";
import chalk from "chalk";
import os from "os";

export class SysInfoCommand extends BaseCommand {
    register(): void {
        this.program
            .command("sysinfo")
            .description("Displays basic system information")
            .action(() => {
                console.log(chalk.cyan("--- System Information ---"));
                console.log(chalk.yellow("OS: ") + `${os.type()} ${os.release()} (${os.arch()})`);
                console.log(chalk.yellow("CPU: ") + os.cpus()[0].model);
                console.log(chalk.yellow("RAM: ") + `${Math.round(os.totalmem() / 1024 / 1024 / 1024)}GB`);
                console.log(chalk.yellow("Free RAM: ") + `${Math.round(os.freemem() / 1024 / 1024 / 1024)}GB`);
                console.log(chalk.yellow("Uptime: ") + `${Math.round(os.uptime() / 3600)} hours`);
                console.log(chalk.cyan("--------------------------"));
            });
    }
}
