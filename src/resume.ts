import {pug, yaml} from "../deps.ts";

// @ts-ignore
const config: object = await yaml.parse(await Deno.readTextFile(`./src/resume.yaml`));
console.dir(config);

const html = pug.renderFile(`./src/resume.pug`, {data: config}, undefined);

// @ts-ignore
Deno.writeTextFile(`./resume.html`, html)
console.log(html);
