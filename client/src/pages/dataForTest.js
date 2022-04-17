// indoor
import plank from "../images/indoor/plank.jpeg";
import pushUps from "../images/indoor/push-ups.jpeg";
import sitUps from "../images/indoor/sit-ups.jpeg";
import squats from "../images/indoor/squats.jpeg";
import yoga from "../images/indoor/yoga.jpeg";
// outdoor
import cycling from "../images/outdoor/cycling.jpeg";
import hiking from "../images/outdoor/hiking.jpeg";
import running from "../images/outdoor/running.jpeg";
import swimming from "../images/outdoor/swimming.jpeg";
import walking from "../images/outdoor/walking.jpeg";

const activityData = [
  // indoor
  { category: "indoor", img: plank, title: "plank", kcal: 30.86 },
  { category: "indoor", img: pushUps, title: "push-ups", kcal: 125.66 },
  { category: "indoor", img: sitUps, title: "sit-ups", kcal: 130.07 },
  { category: "indoor", img: squats, title: "squats", kcal: 50.7 },
  { category: "indoor", img: yoga, title: "yoga", kcal: 180 },
  // outdoor
  { category: "outdoor", img: cycling, title: "cycling", kcal: 220.46 },
  { category: "outdoor", img: hiking, title: "hiking", kcal: 368.17 },
  { category: "outdoor", img: running, title: "running", kcal: 187.39 },
  { category: "outdoor", img: swimming, title: "swimming", kcal: 308.64 },
  { category: "outdoor", img: walking, title: "walking", kcal: 100 },
];
export default activityData;
