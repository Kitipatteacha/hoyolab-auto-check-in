const axios = require('axios');

const headers = {
  Cookie: `ltoken_v2=${process.env.LTOKEN_V2}; ltmid_v2=${process.env.LTMID_V2}; ltuid_v2=${process.env.LTUID_V2}`,
};
const checkInList = [
  {
    url: 'https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=en-us&act_id=e202102251931481',
    game: 'Genshin Impact',
  },
  {
    url: 'https://sg-public-api.hoyolab.com/event/luna/os/sign?lang=en-us&act_id=e202303301540311',
    game: 'Star Rail',
  },
  {
    url: 'https://sg-act-nap-api.hoyolab.com/event/luna/zzz/os/sign?lang=en-us&act_id=e202406031448091',
    game: 'Zenless Zone',
  },
];

const randomDelayExecuteTime = () => {
  const MAX_THRESHOLD = 10 * 60 * 1000;
  const randomDelayExecuteTimeInMillisec = Math.random() * MAX_THRESHOLD;
  console.log(`will execute in :${randomDelayExecuteTimeInMillisec / (1000 * 60)} minutes`);
  return new Promise((resolve) => setTimeout(resolve, randomDelayExecuteTimeInMillisec));
};

const checkIn = async (url, game) => {
  console.log(`start check-in ${game}`);
  await randomDelayExecuteTime();
  try {
    await axios.post(url, null, {
      headers,
    });

    console.log(`${game} checked success ✅`);
  } catch (e) {
    console.log(`${game} checked fail ❌`);
  }
};

const run = async () => {
  const promises = checkInList.map(({ url, game }) => {
    checkIn(url, game);
  });

  await Promise.all(promises);
};

run();
