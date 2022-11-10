import express from "express";

const app = express();

const coursesList = [
  {
    id: 1,
    name: "NodeJS",
  },
  {
    id: 2,
    name: "ReactJS",
  },
  {
    id: 3,
    name: "React Native",
  },
];

app.get("/", function (request, response) {
  return response.send("Tudo OK!");
});

app.get("/courses", (request, response) => {
  const { course } = request.query;

  const courses = !course
    ? coursesList
    : coursesList.filter((item) =>
        item.name.toLowerCase().includes(course.toLowerCase())
      );

  return response.json(courses);
});

app.listen(3333);
