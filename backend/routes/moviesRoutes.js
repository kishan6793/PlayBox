import express from "express";
import multer from "multer";
const router = express.Router();

// Configure multer to store files in memory as buffers for processing
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Controllers
import {
  createMovie,    
  updateMovie,    
  deleteMovie,    
  deleteComment,  
} from "../controllers/movieController.js";

// Middlewares
import {
  authenticate,    
  authorizeAdmin,  
} from "../middlewares/authMiddleware.js";




// Admin routes - Admin authentication and admin authorization Requires

// Route to create a new movie
// Supports image and video uploads using multer
router.post(
  "/create-movie",
  authenticate, 
  authorizeAdmin, 
  upload.fields([{ name: "image" }, { name: "video" }]), // Upload image and video as buffers
  createMovie
);

// Route to update an existing movie by ID
// Supports image and video uploads using multer
router.put(
  "/update-movie/:id",
  authenticate, 
  authorizeAdmin, 
  upload.fields([{ name: "image" }, { name: "video" }]), // Upload image and video as buffers
  updateMovie
);

// Route to delete a movie by ID
router.delete(
  "/delete-movie/:id",
  authenticate, 
  authorizeAdmin, 
  deleteMovie
);

// Route to delete a comment from a movie
router.delete(
  "/delete-comment",
  authenticate, 
  authorizeAdmin, 
  deleteComment
);

export default router;
