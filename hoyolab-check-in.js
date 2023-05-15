const axios = require("axios");

const genshinCheckInURL =
  "https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=en-us&act_id=e202102251931481";

async function run() {
  const headers = {
    Cookie: `ltoken=${process.env.LTOKEN}; ltuid=${process.env.LTUID};`,
  };

  axios
    .post(genshinCheckInURL, null, { headers })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

run();
