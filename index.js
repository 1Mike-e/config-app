const submitButton = document.getElementById("submit-button");

const paramsObject = {
  SSID: "",
  PASSWORD: "",
  IP: "",
  TIP: "",
  GATEWAY: "",
  SUBNET: "",
  HOSTNAME: "",
  UPLOAD_URL: "",
  REC_INT: "",
  STATE: "",
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  Object.keys(paramsObject).map((paramKey) => {
    const input = document.getElementById(paramKey);
    const paramValue = input.value;
    paramsObject[paramKey] = paramValue;
    input.value = "";
  });
  const searchParams = new URLSearchParams(paramsObject).toString()
  window.location.search = searchParams
});
