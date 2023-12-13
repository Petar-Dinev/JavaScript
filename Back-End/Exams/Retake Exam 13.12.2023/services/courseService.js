const Course = require("../models/Course");

async function getAllCourses() {
  return await Course.find({}).lean();
}
async function getOneCourseById(courseId) {
  return await Course.findById(courseId).populate('signUpList').populate('owner').lean();
}

async function createCourse(courseData) {
  return await Course.create(courseData);
}

async function updateCourse(courseId, courseData) {
  const existing = await Course.findById(courseId);

  existing.title = courseData.title;
  existing.type = courseData.type;
  existing.certificate = courseData.certificate;
  existing.image = courseData.image;
  existing.description = courseData.description;
  existing.price = courseData.price;

  await existing.save();
}

async function deleteCourse(courseId) {
  await Course.findByIdAndDelete(courseId);
}

async function signForCourse(courseId, userId) {
    const course = await Course.findById(courseId);
    course.signUpList.push(userId);
    await course.save()
}

async function getOwnCourses(userId) {
    return await Course.find({owner: userId}).lean()
}
async function getSignedCourses(userId) {
    return await Course.find({signUpList: userId}).lean()
}

module.exports = {
  getAllCourses,
  getOneCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  signForCourse,
  getOwnCourses,
  getSignedCourses
};
