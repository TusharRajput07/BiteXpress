import fetch from "node-fetch";

export default async function handler(req, res) {
  const swiggyApiUrl =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730";

  try {
    const response = await fetch(swiggyApiUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from Swiggy API" });
  }
}
