import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { SemesterRegistraionValidations } from "./semesterRegistration.validation";
import { SemesterRegistrationControllers } from "./semesterRegistration.controller";

const router = express.Router();

router.post(
    "/create-semester-registration",
    validateRequest(
        SemesterRegistraionValidations.createSemesterRegistrationValidationSchema,
    ),
    SemesterRegistrationControllers.createSemesterRegistration,
);

router.get("/", SemesterRegistrationControllers.getAllSemesterRegistrations);

router.get(
    "/:id",
    SemesterRegistrationControllers.getSingleSemesterRegistration,
);

router.patch(
    "/:id",
    validateRequest(
        SemesterRegistraionValidations.updateSemesterRegistrationValidationSchema,
    ),
    SemesterRegistrationControllers.updateSemesterRegistration,
);

// router.delete("/:id", CourseControllers.deleteCourse);

// router.put(
//     "/:courseId/assign-faculties",
//     validateRequest(CourseValidations.facultiesWithCourseValidationSchema),
//     CourseControllers.assignFacultiesWithCourse,
// );

// router.delete(
//     "/:courseId/remove-faculties",
//     validateRequest(CourseValidations.facultiesWithCourseValidationSchema),
//     CourseControllers.removeFacultiesFromCourse,
// );

export const SemesterRegistrationRoutes = router;
