import { Command } from 'commander';

export class CLIEngine {
    program: Command;

    constructor() {
        this.program = new Command();
        this.program
            .name('mycli')
            .description('A feature-rich OOP-based CLI tool')
            .version('1.0.0');
    }

    registerCommand(commands: any[]) {
        commands.forEach((CommandClass) => {
            const commandInstance = new CommandClass(this.program);
            commandInstance.register();
        });
    }

    run() {
        this.program.parse(process.argv);
    }
}