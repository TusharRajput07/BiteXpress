import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const port = 5000;

// enable CORS for frontend cross domain request acceptance of pre flight
app.use(cors());

// request handlers

app.get("/api/browse", async (req, res) => {
  console.log("attempting a call");

  const swiggyApiUrl =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  try {
    // fetching restaurants from swiggy api
    const response = await fetch(swiggyApiUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      },
    });
    const data = await response?.json();

    // sending the data as response to frontend
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from Swiggy API" });
  }
});

app.get("/api/menu", async (req, res) => {
  console.log("attempting to get menu");

  const { resId } = req.query;

  const swiggyMenuApi =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=" +
    resId +
    "&catalog_qa=undefined&submitAction=ENTER";

  try {
    const response = await fetch(swiggyMenuApi, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      },
    });
    const data = await response?.json();

    // sending the data as response to frontend
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menu from Swiggy API" });
  }
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
