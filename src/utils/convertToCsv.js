import { camelCase, omit, startCase } from "lodash";

const renderTableData = (field, data) => {
  switch (field) {
    case "price":
      return `"$ ${data?.updatedPrice} ${data?.suffix}"`;
    case "quantity":
      return `"$ ${data?.updatedQuantity} ${data?.suffix}"`;
    case "totalPrice":
      return `"$ ${data?.updatedPrice}"`;
    case "status":
      return `"${data.statusMsg}"`;

    default:
      return `"${typeof data === "string" ? data?.trim() : data ?? ""}"`;
  }
};

export const convertJsonToCsv = (arrayOfObj, orderId) => {
  const exportedFilename =
    `oderList-${orderId}.csv` || "export_user_participation_report.csv";

  const dataModify = arrayOfObj.map((el) => omit(el, ["thumbnail"]));

  const headers = Object.keys(dataModify[0]);
  let csv = headers.map((el) => `${startCase(camelCase(el))},`).join("");
  csv += "\n";

  for (let i = 0; i < dataModify.length; i += 1) {
    const tempVal = Object.values(dataModify[i])
      .map((el, idx) => renderTableData(headers[idx], el))
      .join(",");
    csv += `${tempVal}`;
    csv += "\n";
  }

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, exportedFilename);
  } else {
    const link = document.createElement("a");
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", exportedFilename);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
