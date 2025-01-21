import mongoose, {isValidObjectId} from "mongoose"
import {Like} from "../models/like.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const toggleVideoLike = asyncHandler(async (req, res) => {
    const {videoId} = req.params
    //TODO: toggle like on video
    const userId = req.user.id;

    if (!isValidObjectId(videoId)) {
        throw new ApiError(400, "Invalid video ID");
    }

    const existingLike = await Like.findOne({
        video: videoId,
        likedBy: userId,
    });
    if (existingLike) {
        await existingLike.deleteOne();
        return res.status(200).json(new ApiResponse(200, "Video unliked successfully"));
    }
    await Like.create({
        video: videoId,
        likedBy: userId,
    });
    res.status(200).json(new ApiResponse(200, "Video liked successfully"));
})

const toggleCommentLike = asyncHandler(async (req, res) => {
    const {commentId} = req.params
    //TODO: toggle like on comment
    const userId = req.user.id;
    if (!isValidObjectId(commentId)) {
        throw new ApiError(400, "Invalid comment ID");
    }
    const existingComment = await Comment.findOne({
        comment: commentId,
        likedBy: userId,
    });
    if (existingComment) {
        await existingComment.deleteOne();
        return res.status(200).json(new ApiResponse(200, "Comment unliked successfully"));
    }
    await Like.create({
        comment: commentId,
        likedBy: userId,
    });
    res.status(200).json(new ApiResponse(200, "Comment liked successfully"));

})

const getLikedVideos = asyncHandler(async (req, res) => {
    //TODO: get all liked videos
    const userId = req.user.id;

    const likedVideos = await Like.find({ likedBy: userId, video: { $exists: true } })
        .populate("video", "title description thumbnail")
        .exec();

    res.status(200).json(new ApiResponse(200, "Liked videos fetched successfully", likedVideos));

})

export {
    toggleCommentLike,
    toggleVideoLike,
    getLikedVideos
}