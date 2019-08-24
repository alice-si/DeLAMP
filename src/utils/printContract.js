import * as jsPDF from "jspdf";

const selectorId = "preview-content";
const pdfName = "contract.pdf";

export default {
  print() {
    let doc = new jsPDF();
    const contentHtml = document.getElementById(selectorId).innerHTML;
    doc.fromHTML(contentHtml, 15, 15, {
      width: 170
    });
    doc.save(pdfName);
  }
};
