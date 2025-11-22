#!/usr/bin/env node
import chalk from 'chalk';
import * as fs from 'fs/promises'; 
import path from 'path'; 

function parseArgs(args) {
    const rawArgs = args.slice(2); 

    const parsed = {
        command: null,
        name: null,
        options: {
            compDir: './src/components', 
            stylesDir : './src/styles'
        }
    };

    if (rawArgs.length >= 2 && !rawArgs[1].startsWith('--')) {
        parsed.command = rawArgs[0]; 
        parsed.name = rawArgs[1];
    }
    
    return parsed;
}


async function createFiles(name, compDir, stylesDir) {
    
    try {
        // Ensure both directories exist
        await fs.mkdir(compDir, { recursive: true });
        await fs.mkdir(stylesDir, { recursive: true });

        // --- Component Template ---
        const jsContent = `
function ${name}() {
    return (
        <div className="${name.toLowerCase()}">
            
        </div>
    );
}

export default ${name};
`;
        
        // Write Component File
        const jsPath = path.join(compDir, `${name}.jsx`);
        await fs.writeFile(jsPath, jsContent);

        // Write Styles File
        await fs.writeFile(path.join(stylesDir, `${name}.css`), 
            `/* Styles for ${name} component */\n.${name.toLowerCase()} { }`
        );
        
        console.log(chalk.bold.yellow(`\nComponent "${name}" successfully Created!`));
        console.log(chalk.green(`  -> Created: ${name}.jsx in ${compDir}`));
        console.log(chalk.green(`  -> Created: ${name}.css in ${stylesDir}`));

    } catch (error) {
        console.error(chalk.red(`\nError during file creation: ${error.message}`));
    }
}



function usage() {
    console.log(chalk.cyan("\nUsage: mycomp component <Name>"));
    console.log("  <Name>    The name of the component (e.g., Header)");
}

async function run() {
    const parsed = parseArgs(process.argv);
    
    if (parsed.command !== 'component' || !parsed.name) {
        usage();
        return;
    }
    await createFiles(parsed.name, parsed.options.compDir, parsed.options.stylesDir);
}

run();