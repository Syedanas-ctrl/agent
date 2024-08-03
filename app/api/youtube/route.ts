import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const rawParams = req.url?.split("?")[1] || "";
    const params = new URLSearchParams(rawParams);
    const query = params.get("query");

    const url = `https://${process.env.RAPID_YOUTUBE_API_HOST!}/search?query=${query}&type=video`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.RAPID_YOUTUBE_API_KEY!,
        "x-rapidapi-host": process.env.RAPID_YOUTUBE_API_HOST!,
      },
    };

    //call the youtube api
    const response = await fetch(url, options)
      .then((res) => res.json())
      .catch((error) => {
        console.error(error);
        throw error;
      });

    // Stringify the entire response object
    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "An error occurred" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
