import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { OfferedCourseServices } from "./offeredCourse.service";

const createOfferedCourse = catchAsync(async (req: Request, res: Response) => {
    const result = await OfferedCourseServices.createOfferedCourseIntoDB(
        req.body,
    );

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Offered course is created successfully!",
        data: result,
    });
});

const getAllOfferedCourses = catchAsync(async (req: Request, res: Response) => {
    const result = await OfferedCourseServices.getAllOfferedCoursesFromDB(
        req.query,
    );

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "OfferedCourses retrieved successfully !",
        data: result,
    });
});

const getSingleOfferedCourse = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const result =
            await OfferedCourseServices.getSingleOfferedCourseFromDB(id);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "OfferedCourse fetched successfully",
            data: result,
        });
    },
);

const updateOfferedCourse = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const offeredCourseData = req.body;
    const result = await OfferedCourseServices.updateOfferedCourseIntoDB(
        id,
        offeredCourseData,
    );
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Offered course updated successfully!",
        data: result,
    });
});

const deleteOfferedCourse = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfferedCourseServices.deleteOfferedCourseFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Offered Course deleted successfully",
        data: result,
    });
});

export const OfferedCourseControllers = {
    createOfferedCourse,
    getAllOfferedCourses,
    getSingleOfferedCourse,
    updateOfferedCourse,
    deleteOfferedCourse,
};
