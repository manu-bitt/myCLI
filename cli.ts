#!/usr/bin/env node
import { CLIEngine } from "./cli_engine/engine";
import { GreetCommand } from "./commands/greetCommand";
import { FileInfoCommand } from "./commands/fileinfoCommand";
import { GithubCommand } from "./commands/githubCommand";
import { WeatherCommand } from "./commands/weatherCommand";
import { QuoteCommand } from "./commands/quoteCommand";
import { JokeCommand } from "./commands/jokeCommand";
import { SysInfoCommand } from "./commands/sysinfoCommand";
import { UuidCommand } from "./commands/uuidCommand";
import { Base64Command } from "./commands/base64Command";
import { InitTsCommand } from "./commands/initTsCommand";

const cli = new CLIEngine();

cli.registerCommand([
    GreetCommand,
    FileInfoCommand,
    GithubCommand,
    WeatherCommand,
    QuoteCommand,
    JokeCommand,
    SysInfoCommand,
    UuidCommand,
    Base64Command,
    InitTsCommand
]);

cli.run();
