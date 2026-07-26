import axios from "axios";

const MOCK_CAPSULES = [
  { capsule_serial: "C101", capsule_id: "dragon1", status: "active", original_launch: "2023-06-15T10:00:00.000Z", type: "Dragon 1", details: "Used for ISS resupply missions. Completed 3 missions.", landings: 3, missions: [{ name: "CRS-28" }] },
  { capsule_serial: "C102", capsule_id: "dragon1", status: "active", original_launch: "2023-11-20T14:00:00.000Z", type: "Dragon 1", details: "Crew rotation capsule. Upgraded life support systems.", landings: 1, missions: [{ name: "Crew-7" }] },
  { capsule_serial: "C103", capsule_id: "dragon1", status: "retired", original_launch: "2021-09-10T08:00:00.000Z", type: "Dragon 1", details: "First capsule to complete 5 missions. Retired and on display at HQ.", landings: 5, missions: [{ name: "CRS-23" }, { name: "CRS-25" }] },
  { capsule_serial: "C104", capsule_id: "dragon2", status: "active", original_launch: "2024-02-28T16:00:00.000Z", type: "Dragon 2", details: "New crew capsule with upgraded avionics and thermal protection.", landings: 0, missions: [{ name: "Crew-8 Test" }] },
  { capsule_serial: "C105", capsule_id: "dragon2", status: "active", original_launch: "2024-05-01T12:00:00.000Z", type: "Dragon 2", details: "Cargo variant with high-capacity refrigerated storage for sensitive experiments.", landings: 2, missions: [{ name: "CRS-30" }] },
  { capsule_serial: "C106", capsule_id: "dragon1", status: "retired", original_launch: "2020-12-05T06:00:00.000Z", type: "Dragon 1", details: "Legacy capsule. Completed 6 cargo missions to ISS.", landings: 6, missions: [{ name: "CRS-21" }, { name: "CRS-22" }] },
  { capsule_serial: "C107", capsule_id: "dragon2", status: "unknown", original_launch: "2024-08-15T20:00:00.000Z", type: "Dragon 2", details: "Experimental capsule. Testing new heat shield materials.", landings: 1, missions: [{ name: "Falcon Heavy Test" }] },
  { capsule_serial: "C108", capsule_id: "dragon1", status: "active", original_launch: "2023-03-22T09:00:00.000Z", type: "Dragon 1", details: "Rapidly reusable capsule. Turnaround time of 6 months.", landings: 4, missions: [{ name: "CRS-27" }] },
  { capsule_serial: "C109", capsule_id: "dragon2", status: "active", original_launch: "2024-11-10T15:00:00.000Z", type: "Dragon 2", details: "Private charter capsule for Axiom Space mission.", landings: 0, missions: [{ name: "Ax-4" }] },
  { capsule_serial: "C110", capsule_id: "dragon1", status: "retired", original_launch: "2019-07-18T04:00:00.000Z", type: "Dragon 1", details: "One of the first production capsules. Paved the way for crewed flights.", landings: 8, missions: [{ name: "CRS-18" }, { name: "CRS-19" }, { name: "CRS-20" }] },
  { capsule_serial: "C111", capsule_id: "dragon2", status: "active", original_launch: "2025-01-20T18:00:00.000Z", type: "Dragon 2", details: "Enhanced payload capacity variant. Designed for lunar gateway missions.", landings: 0, missions: [{ name: "Lunar Gateway Prep" }] },
  { capsule_serial: "C112", capsule_id: "dragon1", status: "unknown", original_launch: "2022-05-30T11:00:00.000Z", type: "Dragon 1", details: "Lost during recovery due to rough seas. Crew safe.", landings: 2, missions: [{ name: "CRS-26" }] },
  { capsule_serial: "C113", capsule_id: "dragon2", status: "active", original_launch: "2025-03-14T07:00:00.000Z", type: "Dragon 2", details: "All-tourist crew capsule. 3-day free-flight mission.", landings: 1, missions: [{ name: "Inspiration-5" }] },
  { capsule_serial: "C114", capsule_id: "dragon2", status: "active", original_launch: "2024-07-04T22:00:00.000Z", type: "Dragon 2", details: "Rapid crew rotation capsule for ISS expedited missions.", landings: 3, missions: [{ name: "Crew-9" }] },
  { capsule_serial: "C115", capsule_id: "dragon1", status: "retired", original_launch: "2020-01-15T13:00:00.000Z", type: "Dragon 1", details: "Retired after successful cargo missions. Now used for training.", landings: 4, missions: [{ name: "CRS-24" }] },
  { capsule_serial: "C116", capsule_id: "dragon2", status: "unknown", original_launch: "2025-06-01T05:00:00.000Z", type: "Dragon 2", details: "Prototype for Mars return vehicle testing.", landings: 0, missions: [] },
  { capsule_serial: "C117", capsule_id: "dragon2", status: "active", original_launch: "2025-08-20T16:30:00.000Z", type: "Dragon 2", details: "High-frequency launch capsule. Designed for 24hr turnaround.", landings: 2, missions: [{ name: "Rapid Reuse Demo" }] },
  { capsule_serial: "C118", capsule_id: "dragon2", status: "active", original_launch: "2025-09-15T10:00:00.000Z", type: "Dragon 2", details: "Latest production model with extended range and upgraded propulsion.", landings: 1, missions: [{ name: "Polar Orbit Mission" }] },
  { capsule_serial: "C119", capsule_id: "dragon1", status: "retired", original_launch: "2018-11-02T09:00:00.000Z", type: "Dragon 1", details: "Original test article. Used for pad abort and ground testing.", landings: 0, missions: [] },
  { capsule_serial: "C120", capsule_id: "dragon2", status: "active", original_launch: "2025-04-18T14:00:00.000Z", type: "Dragon 2", details: "Dedicated Starlink crew rotation and maintenance capsule.", landings: 5, missions: [{ name: "Starlink Crew-1" }, { name: "Starlink Crew-2" }] },
  { capsule_serial: "C121", capsule_id: "dragon1", status: "unknown", original_launch: "2021-08-12T07:00:00.000Z", type: "Dragon 1", details: "Damaged during transport. Being evaluated for refurbishment.", landings: 3, missions: [{ name: "CRS-25" }] },
  { capsule_serial: "C122", capsule_id: "dragon2", status: "active", original_launch: "2025-11-01T12:00:00.000Z", type: "Dragon 2", details: "Next-gen capsule with integrated escape system and augmented reality cockpit.", landings: 0, missions: [] },
  { capsule_serial: "C123", capsule_id: "dragon2", status: "active", original_launch: "2024-12-20T08:00:00.000Z", type: "Dragon 2", details: "Human-rated capsule for commercial low-orbit tourism.", landings: 2, missions: [{ name: "OrbitStay-1" }] },
  { capsule_serial: "C124", capsule_id: "dragon2", status: "retired", original_launch: "2020-06-01T15:00:00.000Z", type: "Dragon 2", details: "Demo-2 capsule. First crewed Dragon flight. Now in museum.", landings: 2, missions: [{ name: "Demo-2" }] },
  { capsule_serial: "C125", capsule_id: "dragon1", status: "retired", original_launch: "2017-09-05T10:00:00.000Z", type: "Dragon 1", details: "Early production capsule. Pioneered autonomous docking.", landings: 7, missions: [{ name: "CRS-14" }, { name: "CRS-15" }] },
  { capsule_serial: "C126", capsule_id: "dragon2", status: "active", original_launch: "2025-07-01T06:00:00.000Z", type: "Dragon 2", details: "Extended duration capsule with enhanced radiation shielding for deep space.", landings: 1, missions: [{ name: "Lunar Flyby" }] },
  { capsule_serial: "C127", capsule_id: "dragon2", status: "active", original_launch: "2025-10-15T19:00:00.000Z", type: "Dragon 2", details: "High-speed point-to-point Earth transport test capsule.", landings: 3, missions: [{ name: "Earth-to-Earth Demo" }] },
  { capsule_serial: "C128", capsule_id: "dragon1", status: "retired", original_launch: "2022-09-01T04:00:00.000Z", type: "Dragon 1", details: "Final Dragon 1 production capsule. Retired after successful mission.", landings: 3, missions: [{ name: "CRS-29" }] },
  { capsule_serial: "C129", capsule_id: "dragon2", status: "active", original_launch: "2025-05-10T11:00:00.000Z", type: "Dragon 2", details: "Multi-purpose capsule capable of cargo, crew, and lab configurations.", landings: 2, missions: [{ name: "Combi-Mission 1" }] },
  { capsule_serial: "C130", capsule_id: "dragon2", status: "active", original_launch: "2026-01-05T09:00:00.000Z", type: "Dragon 2", details: "Latest fleet addition. Features AI-assisted guidance systems.", landings: 0, missions: [] },
];

export const fetchCapsulesFromApi = async () => {
  const response = await axios.get("https://api.spacexdata.com/v5/capsules", { timeout: 5000 });
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

export const getFallbackCapsules = () => MOCK_CAPSULES;
