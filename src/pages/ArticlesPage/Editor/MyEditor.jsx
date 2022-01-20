import React, { useState, useEffect } from "react";
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { useParams } from "react-router-dom";

const MyEditor = () => {
  const [editor, setEditor] = useState(null);
  const { id } = useParams();
  let defaultContent = [];
  if (id) {
    defaultContent = [
      { type: "paragraph", children: [{ text: "Sample: \n\n一行文字" }] },
    ];
  }
  const toolbarConfig = {};
  const editorConfig = {
    placeholder: "请输入内容...",
    onCreated(editor) {
      setEditor(editor);
    },
  };

  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <>
      <div
        style={{
          border: "1px solid #ccc",
          zIndex: 100,
        }}
      >
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="simple"
          style={{ borderBottom: "1px solid #ccc" }}
        />
        <Editor
          defaultConfig={editorConfig}
          defaultContent={defaultContent}
          mode="simple"
          style={{ height: "500px" }}
        />
      </div>
    </>
  );
};

export default MyEditor;
