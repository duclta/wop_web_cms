import { useEffect, useState } from "react";
import { UseImageUploadProps } from "../ImageUploadTypes";

export const useImageUpload = (props: UseImageUploadProps) => {
    const { refCustom, defaultImage } = props;

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(defaultImage);

    const handleChange = (info: any) => {
        if (info.file.status === "uploading") {
            setLoading(true);
            return;
        }

        if (info.file.status === "done") {
            getBase64(info.file.originFileObj, (imageUrl: any) => {
                setImageUrl(imageUrl);
                setLoading(false);
                console.log(info.file.response[0])
                refCustom.current = { value: info.file.response[0] };
            })
        }
    };

    useEffect(() => {
        setImageUrl(defaultImage)
    }, [defaultImage])

    return {
        state: {
            imageUrl,
            loading,
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