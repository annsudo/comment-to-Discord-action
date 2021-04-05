const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require ('node-fetch');

async function run(){

try{
const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
const TENOR_TOKEN = core.getInput('TENOR_TOKEN'); 
const ACTOR = core.getInput('ACTOR');



const msg= core.getInput('message') || ' ⚡ Notified about your comment on Discord, master @'+ACTOR;
const randomItem = Math.round(Math.random()*300);
const highFive = 'high%20%five';
const urlThanks = `https://api.tenor.com/v1/search?q=${highFive}&pos=${randomItem}&limit=1&media_filter=minimal&contentfilter=high&key=${TENOR_TOKEN}`;
const response= await fetch(urlThanks);
const { results } = await response.json();
const gifUrl = results[0].media[0].tinygif.url;

const client= github.getOctokit(GITHUB_TOKEN);
let {owner, repo} = github.context.repo;
//console.log("owner: "+owner +" repo: "+ repo);


const number = github.context.issue.number;
await client.issues.createComment({
    owner,
    repo,
    issue_number: number,
   body: `${msg}\n\n<img src="${gifUrl}" alt = "almost there" />`
});

}catch (e) {
    core.error(e);
    core.setFailed(e.message);
}
}


run();