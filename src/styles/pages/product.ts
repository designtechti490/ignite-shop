import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",

  maxWidth: 1180,
  margin: "0 auto",

  "@media (max-width: 1024px)": {
    gridTemplateColumns: "1fr",
    justifyItems: "center",
    gap: "2rem",
    padding: "0 1.5rem",
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 576,
  height: "min(656px, 70vh)",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
    width: "100%",
    height: "auto",
    maxHeight: "100%",
  },

  "@media (max-width: 1024px)": {
    maxWidth: 520,
    height: "min(520px, 45vh)",
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: 520,

  h1: {
    fontSize: "$2xl",
    color: "$gray300",
  },

  span: {
    marginTop: "1rem",
    display: "block",
    fontSize: "$2xl",
    color: "$green300",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$md",
    lineHeight: 1.6,
    color: "$gray300",
  },

  button: {
    marginTop: "auto",
    backgroundColor: "$green500",
    border: 0,
    color: "$white",
    borderRadius: 8,
    padding: "1.25rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$md",
    width: "100%",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green300",
    },
  },

  "@media (max-width: 1024px)": {
    textAlign: "center",
    alignItems: "center",

    p: {
      marginTop: "1.5rem",
    },

    button: {
      marginTop: "2rem",
      maxWidth: 360,
    },
  },
});
