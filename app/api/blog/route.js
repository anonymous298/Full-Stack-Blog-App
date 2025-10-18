import { NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";
import fs from 'fs'


export async function GET(request) {

  await connectDB();

  const blogId = request.nextUrl.searchParams.get("id");

  if (blogId) {
    const data = await BlogModel.findById(blogId);

    return NextResponse.json({success: true, data : data});
  }
  
  else {

    const data = await BlogModel.find({});
    return NextResponse.json({ success: true, data: data });
  }
}

export async function POST(request) {
  await connectDB();

  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image");

  if (!image) {
    return NextResponse.json(
      { success: false, msg: "No image uploaded" },
      { status: 400 }
    );
  }

  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/${timestamp}_${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `/${timestamp}_${image.name}`;
  console.log(imgUrl);

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imgUrl}`,
    authorimg: `${formData.get("authorimg")}`,
  };

  await BlogModel.create(blogData);
  console.log("Blog Saved");

  return NextResponse.json({ success: true, msg: "Blog Added" });
}

export async function DELETE(request) {
  await connectDB();

  const {searchParams} = new URL(request.url)
  const id = searchParams.get("id");

  try {
    const blog = await BlogModel.findById(id)
    fs.unlink(`./public${blog.image}`, () => {});
    
    await BlogModel.findByIdAndDelete(id);

    return NextResponse.json({success : true, msg : "Blog Deleted..."})
  }catch{
    return NextResponse.json({success : false, msg : 'Error Deleting Blog...'})
  }
}