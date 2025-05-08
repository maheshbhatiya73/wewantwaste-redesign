import { SkipItem, SkipsData } from "../data/SkipsData";


export const fetchSkips = async (): Promise<SkipItem[]> => {
  try {
    const res = await fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft");
    if (!res.ok) throw new Error("Failed to fetch API");
    const skips = await res.json();
    return skips;
  } catch (error) {
    console.warn("api failed. Using normal data.");
    return SkipsData;
  }
};
