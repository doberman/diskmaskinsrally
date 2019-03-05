import avatar from "../assets/avatar.svg";

const GAMES = [
  {
    id: 1,
    active: true,
    prize: "tre chipspåsar",
    length_days: "30",
    users: ["User1", "User2"],
    duties: [
      { duty: "Diskmaksin", dubble_clicks: "6", single_clicks: "1" },
      { duty: "Tvättmaskin", dubble_clicks: "5", single_clicks: "2" }
    ]
  },
  {
    id: 2,
    active: false,
    prize: "4 chipspåsar",
    length_days: "10",
    users: ["User1", "User2"],
    duties: [
      { duty: "Diskmaksin", dubble_clicks: "6", single_clicks: "1" },
      { duty: "Tvättmaskin", dubble_clicks: "5", single_clicks: "2" }
    ]
  }
];

const TASKS = [
  {
    id: 1,
    title: "Diskmaskin",
    buttons: ["Button1", "Button2"],
    total_dones: 33,
    user_done: 10,
    imge: avatar
  },
  {
    id: 2,
    title: "Tvättmaskinen",
    buttons: ["Button1", "Button2"],
    total_dones: 100,
    user_done: 23,
    imge: avatar
  },
  {
    id: 3,
    title: "Handla",
    buttons: ["Button1", "Button2"],
    total_dones: 3,
    user_done: 0,
    imge: avatar
  }
];

const USER = [
  {
    id: 1,
    name: "Lovisa",
    email: "lovisa.melnyk@gmail.com",
    tasks_done: [
      {
        title: "Diskmaksin",
        total_dones: 30
      },
      {
        title: "Tvättmaskinen",
        total_dones: 90
      }
    ]
  },
  {
    id: 2,
    name: "Malin",
    email: "malin.melnyk@gmail.com",
    tasks_done: [
      {
        title: "Diskmaksin",
        total_dones: 3
      },
      {
        title: "Tvättmaskinen",
        total_dones: 10
      }
    ]
  }
];

export default TASKS;
