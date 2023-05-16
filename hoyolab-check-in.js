const axios = require("axios");

const headers = {
  Cookie: `ltoken=${process.env.LTOKEN}; ltuid=${process.env.LTUID};`,
};
const genshinCheckInURL =
  "https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=en-us&act_id=e202102251931481";

const starRailCheckInURL =
  "https://sg-public-api.hoyolab.com/event/luna/os/sign?lang=en-us&act_id=e202303301540311";

const randomDelayExecuteTime = () => {
  const MAX_THRESHOLD = 30 * 60 * 1000;
  const randomDelayExecuteTimeInMillisec = Math.random() * MAX_THRESHOLD;
  console.log(
    `will execute in :${randomDelayExecuteTimeInMillisec / (1000 * 60)} minutes`
  );
  return new Promise((resolve) =>
    setTimeout(resolve, randomDelayExecuteTimeInMillisec)
  );
};

const checkIn = async (url, game) => {
  console.log(`start check-in ${game}`);
  await randomDelayExecuteTime();

  const response = await axios.post(url, null, {
    headers,
  });

  console.log(`${game} check-in result : ${JSON.stringify(response)}`);
};

const run = async () => {
  await checkIn(genshinCheckInURL, "Genshin Impact");
  await checkIn(starRailCheckInURL, "Star Rail");
};

run();
