import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log(process.env.CLOUDINARY_API_KEY); // i am geeting undefined here

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // console.log(localFilePath);

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("rsponse", response);

    // file has been uploaded successfull
    console.log("file is uploaded on cloudinary ", response.url);
    fs.unlinkSync(localFilePath);
    // console.log(response.format);
    return response;
  } catch (error) {
    // fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
