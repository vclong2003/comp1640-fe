import React from "react";
import Navbar from "./Nav/Navbar";
import * as S from "./Student.styled";
import Footer from "./Foot/Footer";

const Student = () => {
  return (
    <S.Student>
      <S.Header>
        <Navbar />
      </S.Header>
      <S.Footer>
        <Footer />
      </S.Footer>
    </S.Student>
  );
};

export default Student;
