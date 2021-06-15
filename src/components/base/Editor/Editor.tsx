import { Editor } from "draft-js";
import React from "react";
import ReactQuill from "react-quill";
import { useEditor } from "./hook";
import { EditorProps } from "./EditorTypes";
export const QuillEditor = (props: EditorProps) => {
  const { refCustom } = props;
  const {
    states: { editorState, editorModules, editorFormats },
    methods: { handleEditorChange },
  } = useEditor();
  return (
    <ReactQuill
      theme="snow"
      value={editorState.editorHTML}
      modules={editorModules}
      formats={editorFormats}
      onChange={handleEditorChange}
      style={{ height: "300px" }}
      ref={refCustom}
    />
  );
};
