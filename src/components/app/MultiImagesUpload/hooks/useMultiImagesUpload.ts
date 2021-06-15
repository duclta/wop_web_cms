import { UploadFile } from "antd/lib/upload/interface";
import { useEffect, useState } from "react";
import { UseMultiImagesUploadProps } from "../MultiImagesUploadTypes";

export const useMultiImagesUpload = (props: UseMultiImagesUploadProps) => {
    const { refCustom, defaultImage, defaultFiles } = props;

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(defaultImage);
    const [fileList, setFileList] = useState<UploadFile[]>(defaultFiles.map(url => {
        return {
            uid: "",
            size: 1,
            name: "",
            url,
            response: [url],
            type: "",
        }
    }));

    const handleChange = (info: any) => {
        if (info.file.status === "uploading") {
            setLoading(true);
            return;
        }

        if (info.file.status === "done") {
            getBase64(info.file.originFileObj, (imageUrl: any) => {
                setImageUrl(imageUrl);
                setLoading(false);
                refCustom.current = { value: refCustom.current ? [...refCustom.current.value, info.file.response[0]] : [info.file.response[0]] };
            })
            setFileList(info.fileList);
        }
    };

    useEffect(() => {
        setImageUrl(defaultImage)
    }, [defaultImage])

    return {
        state: {
            imageUrl,
            loading,
            fileList,
        },
        methods: {
            handleChange
        }
    }
}


function getBase64(img: any, callback: any) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
}