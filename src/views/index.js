import { configDotenv } from "dotenv";
import axios from "axios";
configDotenv({ path: "../../.env" });

async function getData() {
  try {
    const response = await axios.get(process.env.API_URL);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getData();
