import { wrapper } from "../middleware/wrapper.js";
import axios from "axios";

const getAccounts = wrapper(async (req, res, next) => {
  await axios.get(`${process.env.BASE_URL}/accounts`).then((result) => {
    if (result.data.status == "success") {
      res.render("admin/account", { data: result.data.data });
    } else {
      res.render(`result.status: ${result.data}`);
    }
  });
});

const getCourses = wrapper(async (req, res, next) => {
  await axios.get(`${process.env.BASE_URL}/courses`).then((result) => {
    if (result.data.status == "success") {
      res.render("admin/course", { data: result.data.data });
    } else {
      res.render(`result.status: ${result.data}`);
    }
  });
});

const getMaterials = wrapper(async (req, res, next) => {
  let query = "?q=&mode=0";
  
  await axios.get(`${process.env.BASE_URL}/materials/search${query}`).then((result) => {
    if (result.data.status == "success") {
      res.render("admin/material", { data: result.data.data });
    } else {
      res.render(`result.status: ${result.data}`);
    }
  });
});

const getSections = wrapper(async (req, res, next) => {
  await axios.get(`${process.env.BASE_URL}/sections/${global.account.userID}`).then((result) => {
    if (result.data.status == "success") {
      res.render("admin/section", { data: result.data.data });
    } else {
      res.render(`result.status: ${result.data}`);
    }
  });
});

const getTeachers = wrapper(async (req, res, next) => {
  await axios.get(`${process.env.BASE_URL}/teachers`).then((result) => {
    if (result.data.status == "success") {
      res.render("admin/teacher", { data: result.data.data });
    } else {
      res.render(`result.status: ${result.data}`);
    }
  });
});

export { getAccounts, getCourses, getMaterials, getSections, getTeachers };
