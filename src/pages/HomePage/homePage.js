import { Grid, Image } from "@nextui-org/react";
import React from "react";
import TempLogo from "../HomePage/TempLogo.jpeg";

export default function HomeScreen() {
    return (
        <Grid.Container
            direction="column"
            css={{
                height: "200vh",
                width: "100vw",
            }}
        >
            <Grid.Container
                css={{ height: "50vh", width: "100vw", position: "relative" }}
                direction="row"
            >
                <Grid.Container
                    direction="column"
                    css={{
                        height: "50vh",
                        width: "25vw",
                    }}
                >
                    <Image
                        css={{ height: "25vh", width: "25vw", position: "relative" }}
                        src={TempLogo}
                        objectFit="fill"
                    />
                    <Image
                        css={{ height: "25vh", width: "25vw", position: "relative" }}
                        src={TempLogo}
                        objectFit="fill"
                    />
                </Grid.Container>

                <Image
                    css={{ height: "50vh", width: "50vw", position: "relative" }}
                    src={TempLogo}
                    objectFit="fill"
                />
                <Grid.Container
                    direction="column"
                    css={{
                        height: "50vh",
                        width: "25vw",
                    }}
                >
                    <Image
                        css={{ height: "25vh", width: "25vw", position: "relative" }}
                        src={TempLogo}
                        objectFit="fill"
                    />
                    <Image
                        css={{ height: "25vh", width: "25vw", position: "relative" }}
                        src={TempLogo}
                        objectFit="fill"
                    />
                </Grid.Container>
            </Grid.Container>

            <Grid.Container
                css={{ height: "50vh", width: "100vw", position: "relative" }}
                direction="row"
            >
                <Image
                    css={{ height: "25vh", width: "25vw", position: "relative" }}
                    src={TempLogo}
                    objectFit="fill"
                />
                <Image
                    css={{ height: "25vh", width: "25vw", position: "relative" }}
                    src={TempLogo}
                    objectFit="fill"
                />
                <Image
                    css={{ height: "25vh", width: "25vw", position: "relative" }}
                    src={TempLogo}
                    objectFit="fill"
                />
                <Image
                    css={{ height: "25vh", width: "25vw", position: "relative" }}
                    src={TempLogo}
                    objectFit="fill"
                />
                <Image
                    css={{ height: "25vh", width: "25vw", position: "relative" }}
                    src={TempLogo}
                    objectFit="fill"
                />
                <Image
                    css={{ height: "25vh", width: "25vw", position: "relative" }}
                    src={TempLogo}
                    objectFit="fill"
                />
                <Image
                    css={{ height: "25vh", width: "25vw", position: "relative" }}
                    src={TempLogo}
                    objectFit="fill"
                />
                <Image
                    css={{ height: "25vh", width: "25vw", position: "relative" }}
                    src={TempLogo}
                    objectFit="fill"
                />
            </Grid.Container>
            
        </Grid.Container>
    );
}
