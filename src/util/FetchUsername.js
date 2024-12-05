export const fetchUsername = async (uuid) => {
  const url = `https://api.minetools.eu/uuid/${uuid}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data fetched:", data);
    if (data.name) {
      return data.name;
    } else {
      throw new Error("Username not found");
    }
  } catch (error) {
    console.error("Error fetching username:", error);
    throw error;
  }
};