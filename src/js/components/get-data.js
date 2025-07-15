export async function getData(url) {
  try {
    const response = await fetch(url);
    const items = await response.json();
    return items;
  } catch (error) {
    console.error(error);
    throw error;
  }
}