import React from "react";
import { Upload } from "antd";
import { useImageUpload } from "./hooks";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { AspectRatio, Box, Image } from "@chakra-ui/react";
import { ImageUploadProps } from "./ImageUploadTypes";
import ImgCrop from "antd-img-crop";

export const ImageUpload = (props: ImageUploadProps) => {
  const { refCustom, defaultImage, aspect } = props;
  const {
    state: { loading, imageUrl },
    methods: { handleChange },
  } = useImageUpload({ refCustom, defaultImage });

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <AspectRatio ratio={aspect} w="100%">
      {/* <ImgCrop rotate aspect={aspect}> */}
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="http://localhost:3000/upload-multi"
          onChange={handleChange}
          style={{ width: "100%", height: "100%" }}
        >
          {imageUrl ? (
            <Box
              w="100%"
              h="100%"
              d="flex"
              borderRadius="5px"
              overflow="hidden"
            >
              <Image
                src={imageUrl}
                alt="avatar"
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>
          ) : (
            uploadButton
          )}
        </Upload>
      {/* </ImgCrop> */}
    </AspectRatio>
  );
};
