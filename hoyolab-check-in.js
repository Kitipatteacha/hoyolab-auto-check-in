const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    console.log('The secret is:', process.env.LTOKEN);
  }
}

run();
