import React from "react";
import { Upload } from "antd";
import { useMultiImagesUpload } from "./hooks";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { MultiImagesUploadProps } from "./MultiImagesUploadTypes";
import ImgCrop from "antd-img-crop";

export const MultiImagesUpload = (props: MultiImagesUploadProps) => {
  const { refCustom, defaultImage, defaultFiles, aspect } = props;
  const {
    state: { loading, imageUrl, fileList },
    methods: { handleChange },
  } = useMultiImagesUpload({ refCustom, defaultImage, defaultFiles });

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="image-uploader-multi"
      action="http://localhost:3000/upload-multi"
      onChange={handleChange}
      multiple
      fileList={fileList}
    >
      {uploadButton}
    </Upload>
  );
};
