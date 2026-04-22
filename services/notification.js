import cron from "node-cron";
import "dotenv/config";
import { getProblemOfTheDay, problems, startDate, today } from "../logica.js";
/* --------- */
cron.schedule("0 8 * * *", async () => {
  try {
    const getProblem = getProblemOfTheDay(problems, startDate, today);
    await fetch(`https://ntfy.sh/${process.env.NTFY_CHANNEL}`, {
      method: "POST",
      body: getProblem,
    });
  } catch (e) {
    console.error(e);
  }
});
