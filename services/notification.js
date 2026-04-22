import "dotenv/config";
import { getProblemOfTheDay, problems, startDate, today } from "../logica.js";

try {
  const getProblem = getProblemOfTheDay(problems, startDate, today);
  console.log("Problema:", getProblem);
  console.log("Canale:", process.env.NTFY_CHANNEL);
  const response = await fetch(`https://ntfy.sh/${process.env.NTFY_CHANNEL}`, {
    method: "POST",
    body: getProblem,
  });
  console.log("Status:", response.status);
} catch (e) {
  console.error(e);
}