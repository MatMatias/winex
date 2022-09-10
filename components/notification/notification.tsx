import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { formatCurrency } from "@/utils/format-currency";

const StyledContainer = styled(ToastContainer)`
  top: 6em;
  right: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .Toastify__toast-container {
    display: flex;
    flex-direction: row;
    margin: 0px;
    padding: 0px;
  }
  .Toastify__toast {
    margin: 0px;
    padding: 0px;
  }
  .Toastify__toast-body {
    height: 100px;
    width: 210px;
    display: flex;
    flex-direction: row;
    margin: 0px;
    padding: 0px;
  }
  .Toastify__close-button {
    top: 15px;
    right: 20px;
    position: absolute;
  }
`;

export const notify = (productName: string, productPrice: number) =>
  toast(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          alignContent: "center",
          alignItems: "center",
          height: "100px",
          width: "30%",
          backgroundColor: "rgb(155,201,111)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FontAwesomeIcon
          icon={faCircleCheck}
          color="white"
          style={{ fontSize: "35px" }}
        />
      </div>
      <div
        style={{
          height: "100px",
          width: "80%",
          backgroundColor: "rgb(238,238,238)",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          alignItems: "flex-start",
          paddingLeft: "1rem",
          paddingTop: "1rem",
        }}
      >
        <p style={{ fontSize: "12px", color: "#888", margin: "0" }}>
          PRODUTO ADICIONADO
        </p>
        <p style={{ fontSize: "15px", color: "#333", margin: "0" }}>
          {productName}
        </p>
        <p
          style={{
            fontSize: "15px",
            fontWeight: 500,
            color: "#75194f",
            margin: "0",
            alignSelf: "flex-end",
            marginRight: "1rem",
            marginBottom: "0.5rem",
          }}
        >
          R$ {formatCurrency(productPrice)}
        </p>
      </div>
    </div>
  );

export const Notification = () => {
  return <StyledContainer hideProgressBar={true} />;
};
