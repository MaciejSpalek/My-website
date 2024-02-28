import React from "react";
import {
  Container,
  Heading,
  GridList,
  GridItem,
  Paragraph,
} from "./Header.styled";
import Image from "next/image";
import { useHeader } from "./useHeader";
import { SpecialButton } from "components";
import { useHomeContextProvider } from "views/Home/context/HomeContextProvider";

export const Header = () => {
  const { handleOnClick } = useHeader();

  const {
    headerRightImageRef,
    headerContainerRef,
    headerLeftImageRef,
    headerParagraphRef,
    headerHeadingRef,
    headerButtonRef,
    header,
  } = useHomeContextProvider();

  const {
    first_photo: firstPhoto,
    second_photo: secondPhoto,
    description,
  } = header;
  
  return (
    <Container ref={headerContainerRef}>
      <Heading ref={headerHeadingRef}>Maciej Spałek</Heading>
      <Paragraph ref={headerParagraphRef}>{description}</Paragraph>
      <div ref={headerButtonRef}>
        <SpecialButton onClick={handleOnClick}>Contact me</SpecialButton>
      </div>
      <GridList>
        <GridItem ref={headerLeftImageRef}>
          <Image src={firstPhoto} alt="Zdjęcie w windzie" layout="fill"/>
        </GridItem>
        <GridItem ref={headerRightImageRef}>
          <Image src={secondPhoto} alt="Zdjęcie na rzece Hudson" layout="fill" />
        </GridItem>
      </GridList>
    </Container>
  );
};
