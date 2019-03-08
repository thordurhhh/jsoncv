import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "./PdfDocument";

const TheViewer = ({ width, height, ...props}) => (
  <PDFViewer style={{ width: width, height: height }}>
    <MyDocument
      {...props}
      />
  </PDFViewer>
);

export default TheViewer;
