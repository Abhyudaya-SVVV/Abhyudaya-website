import busTrackingSystem from "./../assets/faculty/bus-tracking.svg";
import clubManagement from "./../assets/faculty/club-management.svg";
import collegeJagat from "./../assets/faculty/college-jagat.svg";

export const projects: Array<{
  id: number;
  heading: string;
  features: Array<string>;
  img: string;
  desc?: string;
}> = [
  {
    id: 1,
    heading: "COLLEGE JAGAT",
    features: ["Notice Board", "Study Material Section"],
    img: collegeJagat,
    desc: "It is a college hub website",
  },
  {
    id: 2,
    heading: "Club Management",
    features: ["One stop solution for all club team management "],
    img: clubManagement,
  },
  {
    id: 3,
    heading: "BUS TRACKING SYSTEM ",
    features: [
      "Bus board information (we can track bus easily)",
      "College bus navigation.",
    ],
    img: busTrackingSystem,
  },
];
