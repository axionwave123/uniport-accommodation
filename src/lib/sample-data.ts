/** SAMPLE data only — labelled as such in the UI. Not real listings. */

export const sampleProperties = [
  {
    id: "p1",
    title: "Sample Lodge, Choba",
    area: "Choba",
    address: "2.4 km · 9 min by road (sample)",
    rating: 4.2,
    reviews: 12,
    roomsAvailable: 2,
    priceFrom: 250000,
    agentName: "Agent Name",
    agentId: "a1",
  },
  {
    id: "p2",
    title: "Sample Court, Alakahia",
    area: "Alakahia",
    address: "3.1 km · 12 min by road (sample)",
    rating: 4.0,
    reviews: 8,
    roomsAvailable: 1,
    priceFrom: 180000,
    agentName: "Agent Two",
    agentId: "a2",
  },
];

export const sampleRooms = [
  {
    id: "r1",
    propertyId: "p1",
    label: "Room A1",
    price: 250000,
    period: "year",
    availability: "available" as const,
    type: "Self-contain",
  },
  {
    id: "r2",
    propertyId: "p1",
    label: "Room A2",
    price: 180000,
    period: "year",
    availability: "occupied" as const,
    type: "Single room",
  },
  {
    id: "r3",
    propertyId: "p1",
    label: "Room B1",
    price: 200000,
    period: "year",
    availability: "available" as const,
    type: "Self-contain",
  },
];

export const sampleAgent = {
  id: "a1",
  name: "Agent Name",
  initials: "AN",
  rating: 4.2,
  reviews: 12,
  listings: 3,
  bio: "Local agent covering Choba & Alakahia (sample).",
  phone: "+2348000000000",
  whatsapp: "+2348000000000",
};
