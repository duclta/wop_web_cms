import React, { useState } from "react";
import 'react-quill/dist/quill.snow.css';


export const useEditor = () => {
    const [editorState, setEditorState] = useState({ editorHTML: '' });

    const handleEditorChange = (value: any) => {
        setEditorState({ editorHTML: value });
    }

    const editorModules: any = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
        clipboard: {
            matchVisual: false,
        }
    }
    const editorFormats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ]


    return {
        states: {
            editorState,
            editorModules,
            editorFormats,
        },
        methods: {
            handleEditorChange
        }
    }
}
