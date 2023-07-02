import React from "react";
import { Grid, Image, Text } from "@nextui-org/react";
import TempLogo from "../Post/TempLogo.jpeg";

export default function Post() {
  return (
    <Grid.Container
      direction="row"
      css={{
        height: "200vh",
        width: "100vw",
        marginTop:"5vh"
      }}
    >
      <Grid.Container
        direction="column"
        css={{
          height: "200vh",
          alignItems: "center",
          width: "70vw",
          textAlign: "center",
          marginBottom: "5vh",
          marginLeft:"2.5vw",
          marginRight:"2.5vw"
        }}
      >
        {/* Title */}
        <Text color="#44041A" h1 css={{ marginBottom: "2vh" }}>
          BREAKING: J TRIX & SUBSPACE LINK UP WITH INDIAN RAP PIONEER IKKA ON
          NEW SINGLE 'GUNDAGARDI', PAY HOMAGE TO SIDHU MOOSE WALA
        </Text>
        {/* Cover Image */}
        <Image src={TempLogo} css={{marginBottom:"10vh"}} />
        {/* Content */}
        <Text css={{ marginBottom: "3vh", fontSize: "1.2rem" }}>
          Within a day of announcing his sophomore EP “Middle Class Boys”,
          Kolkata, West Bengals hard-hitting emcee J Trix has released the lead
          single from the project. Titled “Gundagardi”, the ruthless rap record
          is produced by Trixs longtime collaborator Subspace and features a
          fiery guest verse by Indian Rap pioneer Ikka. Ikkas feature on J Trixs
          lead single is unprecedented but certainly not surprising. However, as
          reported earlier, the EP is slated to release through Indian Raps
          coveted record label Def Jam Recordings India. Given the labels
          longtime association with Indian Hip-Hop pioneers including Ikka,
          Badshah and Dino James, the star-studded major label release has
          stirred massive hype on Trixs social media ahead of his EP. Further,
          the legendary emcee Ikka remembered the late Punjabi Hip-Hop and Drill
          superstar Sidhu Moose Wala on the record. Ikka is one of the many
          emcees who continue to mourn Moosas death in Punjab last year.
        </Text>
      </Grid.Container>

      <Grid.Container
        direction="column"
        css={{
          height: "200vh",
          alignItems: "center",
          width: "25vw",
        }}
      >
        <Text h2 color="white">More by SoundCheck</Text>
      </Grid.Container>
    </Grid.Container>
  );
}
