const { hasUser } = require("../middlewares/guards");
const {
  getAllCourses,
  createCourse,
  getOneCourseById,
  signForCourse,
  deleteCourse,
  updateCourse,
} = require("../services/courseService");
const { parseError } = require("../util/parser");

const courseController = require("express").Router();

courseController.get("/", async (req, res) => {
  const courses = await getAllCourses();

  res.render("catalog", {
    title: "Catalog",
    courses,
  });
});

courseController.get("/create", hasUser(), (req, res) => {
  res.render("create", {
    title: "Create Course",
  });
});

courseController.post("/create", hasUser(), async (req, res) => {
  const course = {
    title: req.body.title,
    type: req.body.type,
    certificate: req.body.certificate,
    image: req.body.image,
    description: req.body.description,
    price: req.body.price,
    owner: req.user._id,
  };

  try {
    if (Object.values(course).some((v) => !v)) {
      throw new Error("All fields are required!");
    }
    await createCourse(course);
    res.redirect("/courses");
  } catch (err) {
    res.render("create", {
      title: "Create Course",
      errors: parseError(err),
      course,
    });
  }
});

courseController.get("/:id", async (req, res) => {
  const userId = req.user?._id;
  const courseId = req.params.id;
  const course = await getOneCourseById(courseId);

  course.hasUser = req.user;
  course.isOwner = course.owner._id == userId;
  course.canSign = !course.signUpList.some((x) => x._id == userId);
  course.signedPeople = course.signUpList.map((x) => x.username).join(", ");
  
  res.render("details", {
    title: "Details page",
    course,
  });
});

courseController.get("/:id/edit", hasUser(), async (req, res) => {
  const course = await getOneCourseById(req.params.id);

  res.render("edit", {
    title: "Edit page",
    course,
  });
});

courseController.post("/:id/edit", hasUser(), async (req, res) => {
  const courseId = req.params.id;
  const course = await getOneCourseById(courseId);

  const editedCourse = {
    title: req.body.title,
    type: req.body.type,
    certificate: req.body.certificate,
    image: req.body.image,
    description: req.body.description,
    price: req.body.price,
  };

  try {
    if (course.owner._id != req.user._id) {
      return res.redirect("/404");
    }

    if (Object.values(editedCourse).some((v) => !v)) {
      throw new Error("All fields are required!");
    }
    await updateCourse(courseId, editedCourse);
    res.redirect("/courses/" + courseId);
  } catch (err) {
    editedCourse._id = courseId;
    res.render("edit", {
      title: "Edit page",
      errors: parseError(err),
      course: editedCourse,
    });
  }
});

courseController.get("/:id/delete", hasUser(), async (req, res) => {
  const courseId = req.params.id;
  const userId = req.user._id;
  const course = await getOneCourseById(courseId);

  if (course.owner._id != userId) {
    return res.redirect("/404");
  }

  await deleteCourse(courseId);
  res.redirect("/courses");
});

courseController.get("/:id/sign", hasUser(), async (req, res) => {

  const courseId = req.params.id;
  const userId = req.user._id;
  const course = await getOneCourseById(courseId);

  if (course.owner._id == userId || course.signUpList.some(x => x._id == userId)) {
    return res.redirect("/404");
  }

  await signForCourse(courseId, userId);
  res.redirect("/courses/" + courseId);
});

module.exports = courseController;
