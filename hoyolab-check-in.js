const axios = require("axios");

const randomDelayExecuteTime = () => {
  // const MAX_THRESHOLD = 30 * 60 * 1000;
  const MAX_THRESHOLD = 5000;
  const randomDelayExecuteTimeInMillisec = Math.random() * MAX_THRESHOLD;
  console.log(randomDelayExecuteTimeInMillisec);
  return new Promise((resolve) =>
    setTimeout(resolve, randomDelayExecuteTimeInMillisec)
  );
};

const genshinCheckInURL =
  "https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=en-us&act_id=e202102251931481";

const run = async () => {
  const headers = {
    Cookie: `ltoken=${process.env.LTOKEN}; ltuid=${process.env.LTUID};`,
  };

  await randomDelayExecuteTime();

  console.log("test execute");

  // axios
  //   .post(genshinCheckInURL, null, { headers })
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
};

run();
