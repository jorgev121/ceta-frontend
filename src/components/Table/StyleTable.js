export const customStyles = {
  rows: {
    style: {
      minHeight: "43px",
      fontSize: "14px",
    },
  },
  headCells: {
    style: {
      backgroundColor: "#F8FAFD",
      fontWeight: "bold",
      minHeight: "42px",
      fontSize: "14px",
      color: "#000",
    },
    inactiveSortStyle: {
      "&:focus": {
        outline: "none",
        color: "#000",
      },
      "&:hover": {
        color: "#000",
        cursor: "",
      },
    },
    activeSortStyle: {
      color: "#ff0000",
      "&:focus": {
        outline: "none",
      },
      "&:hover:not(:focus)": {
        color: "#ff0000",
      },
    },
  },
};
