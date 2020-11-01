import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import ColorPic from "./ColorPic/ColorPic";


const EditorCustomizedToolbarOption = () => (
    <Editor
        wrapperClassName="wrapper"
        editorClassName="editor"
        toolbar={{
          colorPicker: { component: ColorPic },
        }}
    />
);

export default EditorCustomizedToolbarOption;