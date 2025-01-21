import { Router } from "express";
import {
    addComment,
    deleteComment,
    getVideoComments,
    updateComment
} from "../controllers/comment.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(verifyJWT); 

// Routes for video comments
router.route("/:videoId")
    .get(getVideoComments)  
    .post(addComment);      

// Routes for individual comment operations
router.route("/c/:commentId")
    .delete(deleteComment)  
    .patch(updateComment);  

export default router;
