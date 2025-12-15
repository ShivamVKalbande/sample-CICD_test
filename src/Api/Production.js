const API_URL = import.meta.env.VITE_API_URL;
const API_USERNAME = import.meta.env.VITE_API_USERNAME;
const API_PASSWORD = import.meta.env.VITE_API_PASSWORD;

export async function productionFunction(payload) {
  try {
    console.log("payload inside api function", payload);

    const credentials = btoa(`${API_USERNAME}:${API_PASSWORD}`);

    // Convert payload object → query string
    const queryParams = new URLSearchParams(payload).toString();

    const url = `${API_URL}api/Crm/GetCRMReport?${queryParams}`;

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log("result:", data);

    if (!res.ok) {
      throw new Error(`Error fetching report: ${res.status}`);
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    return {};
  }
}
