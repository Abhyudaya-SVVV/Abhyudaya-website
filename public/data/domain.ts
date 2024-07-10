import AIML from "./../assets/domain/AiMl.svg";
import UIUX from "./../assets/domain/UiUx.svg";
import android from "./../assets/domain/android.svg";
import cloud from "./../assets/domain/cloud.svg";
import python from "./../assets/domain/python.svg";
import webdev from "./../assets/domain/webDev.svg";

export const domainFirstLine: Array<{ id: number; name: string; img: string }> =
  [
    {
      id: 1,
      name: "Cloud",
      img: cloud,
    },
    {
      id: 2,
      name: "WEB DEV",
      img: webdev,
    },
    { id: 3, name: "UI/UX", img: UIUX },
  ];

export const domainSecondLine: Array<{
  id: number;
  name: string;
  img: string;
}> = [
  {
    id: 4,
    name: "Python",
    img: python,
  },
  {
    id: 5,
    name: "AI/ML",
    img: AIML,
  },
  { id: 6, name: "Android", img: android },
];



export const domains = [
  { id: 1, name: "Cloud", img: cloud, width: 1, height: 1 },
  { id: 2, name: "WEB DEV", img: webdev, width: 1, height: 1 },
  { id: 3, name: "UI/UX", img: UIUX, width: 2, height: 1 },
  { id: 4, name: "Python", img: python, width: 2, height: 1 },
  { id: 5, name: "AI/ML", img: AIML, width: 1, height: 1 },
  { id: 6, name: "Android", img: android, width: 1, height: 1 },
];
