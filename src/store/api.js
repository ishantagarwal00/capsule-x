import axios from "axios";

export const fetchCapsulesFromApi = async () => {
  const response = await axios.get("https://api.spacexdata.com/v4/capsules", { timeout: 8000 });
  return response.data.map((c) => ({
    capsule_serial: c.serial || c.capsule_serial || "Unknown",
    capsule_id: c.id || c.capsule_id,
    status: c.status || "unknown",
    original_launch: c.original_launch || c.launch || "N/A",
    type: c.type || "Unknown",
    details: c.details || "No details available",
    landings: c.landings ?? c.landings_count ?? 0,
    missions: c.missions || c.launches?.map((l) => ({ name: l })) || [],
  }));
};
