import mongoose from "mongoose";

const searchSchema = new mongoose.Schema({
  city: { type: String, required: true },
  searchedAt: { type: Date, default: Date.now }
});

export const Search = mongoose.model("Search", searchSchema);
