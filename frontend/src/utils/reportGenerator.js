import jsPDF from "jspdf";
import "jspdf-autotable";
// import "./NotoSansSinhala-VariableFont_wdth,wght-normal";
// from our API call
// define a generatePDF function that accepts a doctors argument
const generatePDF = doctors => {
  // initialize jsPDF
  const doc = new jsPDF();
  doc.addFileToVFS("MyFont.ttf", myFont);
  doc.addFont("MyFont.ttf", "MyFont", "normal");
  doc.setFont("MyFont");
  // doc.addFont("NotoSansSinhala-VariableFont_wdth,wght-normal.ttf", "NotoSansSinhala-VariableFont_wdth,wght", "normal");
  //  doc.setFont("NotoSansSinhala-VariableFont_wdth,wght"); // set font
  //  doc.setFontSize(12)
  // define the columns we want and their titles
  const tableColumn = ["නම", "වෛද්‍ය විශේෂතාවය", "දුරකතන අංකය", "රෝහල"];
  // const tableColumn = ["නම", "ඊ තැපෑල", "වෛද්‍ය විශේෂතාවය", "දුරකතන අංකය", "රෝහල"];
  // define an empty array of rows
  const tableRows = [];

  // for each doctor pass all its data into an array
  doctors.forEach(doctor => {
    const doctorData = [
      doctor.name,
      // doctor.email,
      doctor.specialty,
      doctor.phoneNumber,
      doctor.hospitals
    ];
    // push each tickcet's info into a row
    tableRows.push(doctorData);
  });


  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, {styles: {font: "MyFont"}}, { startY: 20 });

  doc.text("යෙදුම තුළ වෛද්‍යවරු", 9, 10);
  // we define the name of our PDF file.
  doc.save(`report_doctors.pdf`);
};

export default generatePDF;