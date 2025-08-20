import axios from "axios";
import "dotenv/config";

export const newsApi = async (req, res, next) => {
  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - 7);
  const formattedFromDate = fromDate.toISOString().split("T")[0];

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=crypto&from=${formattedFromDate}&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    next("error fetching data", error);
  }
};
