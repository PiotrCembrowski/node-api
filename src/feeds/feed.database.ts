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

function savePosts() {
  try {
    fs.writeFileSync("./feeds.json", JSON.stringify(posts), "utf-8");
    console.log("Posts saved successfully");
  } catch (error) {
    console.log("Error", error);
  }
}

export const findAll = async (): Promise<UnitPost[]> => Object.values(posts);

export const findOne = async (id: string): Promise<UnitPost> => posts[id];

export const create = async (postInfo: Post): Promise<null | UnitPost> => {
  let id = random();

  let post = await findOne(id);

  while (post) {
    id = random();
    await findOne(id);
  }

  posts[id] = {
    id: id,
    ...postInfo,
  };

  savePosts();

  return posts[id];
};

export const update = async (
  id: string,
  updateValues: Post
): Promise<UnitPost | null> => {
  const post = await findOne(id);

  if (!post) {
    return null;
  }

  posts[id] = {
    id,
    ...updateValues,
  };

  savePosts();

  return posts[id];
};
