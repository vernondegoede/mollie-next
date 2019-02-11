import PayButton from "../components/PayButton";

export default () => (
  <div>
    <div>Welcome to next.js!</div>
    <PayButton amount="10.10" redirectUrl={"https://google.com"} />
  </div>
);
