import fs from "fs";
import S3 from "aws-sdk/clients/s3";
import sharp from "sharp";
import config from '../../config/config'

const awsConfig = {
	apiVersion: "2006-03-01",
	region: "us-west-1",
	credentials: {
		accessKeyId: config.awsAccessKeyId,
		secretAccessKey: config.awsSecretAccessKey
	}
};


const s3 = new S3(awsConfig);

export const uploadImages = ({ filePath, path }, size) => {
	if (!filePath) {
		return Promise.resolve(null);
	}

	let makeKey = `${path}/${filePath.substring(
		filePath.lastIndexOf("_") + 1,
		filePath.lastIndexOf(".") + 4
	)}`;

	return sharp(filePath)
		.resize(size)
		.jpeg({ progressive: true })
		.toBuffer()
		.then(function uploadImgToAws(img) {
			return s3
				.upload({
					Bucket: "bythe-market",
					Body: img,
					Key: makeKey,
					ContentType: "image/jpg",
					ACL: "public-read"
				})
				.promise()
				.then(function afterUpload(response) {
					return response.Location;
				})
				.catch(err => err);
		})
		.catch(err => console.log("err:", err));
};


export const updateImgUpload = async (file, currentImg, path, size) => {
			if (file) {
				await deleteImages(currentImg);
				const imgUrl = await uploadImages(
					{
						filePath: file.path,
						path
					},
					size
				);

				return imgUrl;
			}

			return null;
		};

export const deleteImages = imgUrl => {
	if (!imgUrl) {
		return Promise.resolve(null);
	}

	let retrieveKey = imgUrl.substring(
		imgUrl.lastIndexOf(".com") + 5,
		imgUrl.lastIndexOf(".") + 4
	);
	return s3
		.deleteObject({ Bucket: "bythe-market", Key: retrieveKey })
		.promise()
		.then(function afterDelete() {
			return "deleted";
		})
		.catch(err => err);
};
