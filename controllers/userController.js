import { wrapper } from "../middleware/wrapper.js";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const DAY = {
  2: "Monday",
  3: "Tuesday",
  4: "Wednesday",
  5: "Thursday",
  6: "Friday",
  7: "Saturday",
  8: "Sunday"
}

const getSchedules = wrapper(async (req, res, next) => {
  const userSchedules = (await axios.get(`${process.env.BASE_URL}/schedules/${global.account.userID}`)).data;
  const userTakes = (await axios.get(`${process.env.BASE_URL}/schedules/takes/${global.account.userID}`)).data;
  const userSections = (await axios.get(`${process.env.BASE_URL}/schedules/sections/${global.account.userID}`)).data;

  res.render("user/schedule", {
    "userID": global.account.userID,
    "userSchedules": userSchedules,
    "userTakes": userTakes,
    "userSections": userSections,
    "DAY": DAY
  });
});

const getMaterials = wrapper(async (req, res, next) => {
  const userMaterials = (await axios.get(`${process.env.BASE_URL}/materials/search?q=&mode=0`)).data;
  res.render("user/material", {
    "userMaterials": userMaterials
  });
});

const getTeachers = wrapper(async (req, res, next) => {
  const userTeachers = (await axios.get(`${process.env.BASE_URL}/teachers`)).data;
  res.render("user/teacher", {
    "userTeachers": userTeachers
  });
});

const getRegistrations = wrapper(async (req, res, next) => {
  const userSections = (await axios.get(`${process.env.BASE_URL}/registrations/sections/${global.account.userID}`)).data;
  const userTakes = (await axios.get(`${process.env.BASE_URL}/registrations/takes/${global.account.userID}`)).data;
  
  res.render("user/registration", {
    "userID": global.account.userID,
    "userTakes": userTakes,
    "userSections": userSections,
    "DAY": DAY
  });
});

export { getMaterials, getRegistrations, getSchedules, getTeachers };
