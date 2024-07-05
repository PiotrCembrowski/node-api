import { Post, Posts, UnitPost } from "./feed.inteface";
import { v4 as random } from "uuid";
import fs from "fs";

let posts: Posts = LoadPosts();

function LoadPosts(): Posts {
  try {
    const data = fs.readFileSync("./feeds.json", "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log(`Error ${error}`);
    return {};
  }
}
