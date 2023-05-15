const genshinCheckInURL =
  "https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=en-us&act_id=e202102251931481";

async function run() {
  console.log("The secret is:", process.env.LTOKEN);

  const header = {
    Cookie: `ltoken=${process.env.LTOKEN}; ltuid=${process.env.LTUID};`,
  };

  const options = {
    method: "POST",
    headers: header,
    muteHttpExceptions: true,
  };

  fetch(genshinCheckInURL, options)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

run();
