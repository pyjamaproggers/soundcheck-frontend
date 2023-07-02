import React, { useState } from "react";
import { Button, Grid, Image, Input, Text } from "@nextui-org/react";
import TempLogo from "../Post/TempLogo.jpeg";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

export default function WritePost() {
  const [imageURL, setImageURL] = useState(null);
  const [value, setValue] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageURL(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Grid.Container direction="column" alignItems="center" css={{width:"100vw", height:"200vh"}}>
      <Input
        label="Title"
        placeholder="Title"
        bordered
        rounded
        css={{ marginBottom: "2rem", position:"relative" }}
      />
      <Grid alignItems="center" css={{ marginBottom: "2rem", position:"relative" }}>
      <ReactQuill theme="snow" value={value} onChange={setValue} defaultValue="Post Content" placeholder="Post Content" style={{ marginBottom: "2rem",  position:"relative", height:"50vh", width:"50vw" }}/>
      </Grid>
      <Input
        type="file"
        label="Post Cover Picture"
        onChange={handleImageUpload}
        bordered
        rounded
        css={{ marginBottom: "2rem",  position:"relative" }}
      />
      {imageURL && (
        <Image
          src={imageURL}
          width="100%"
          height="auto"
          css={{ marginBottom: "2rem" }}
        />
      )}
      <Button css={{ marginBottom: "2rem", position:"relative" }}>
        Save as Draft
      </Button>
      <Button>
        Publish
      </Button>
    </Grid.Container>
  );
}
