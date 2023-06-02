import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

export default function LoadingSpinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <PulseLoader
        color="#4066ff"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
