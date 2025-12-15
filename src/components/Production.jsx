import React from "react";
import { productionFunction } from "../Api/Production";

const Production = () => {
  const handleSubmitFinal = async () => {
    const payload = {
      processId: 2,
      stationId: 20,
      fromDate: "04/02/2025",
      toDate: "27/11/2025",
    };

    //   const payload = {
    //   obj: {
    //     processId: 2,
    //     stationId: 20,
    //     fromDate: "04/02/2025",
    //     toDate: "27/11/2025",
    //   },
    // };

    console.log("payload:", payload);

    try {
      const data = await productionFunction(payload);

      if (!data?.responseCode) {
        console.log("Something went wrong.");
      } else {
        console.log("tableData:", data.tableData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleSubmitFinal}>Production 1</button>;
};

export default Production;
