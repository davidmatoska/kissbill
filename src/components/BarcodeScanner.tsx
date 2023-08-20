import { useState } from "react";
import { useZxing } from "react-zxing";

export const BarcodeScanner: React.FC<{}> = () => {
  const [result, setResult] = useState("");
  const [paused, setPaused] = useState(false);

  const {
    ref,
  } = useZxing({
    paused,
    onDecodeResult(result) {  
      setResult(result.getText());
    },
    onDecodeError(error) {
      // eslint-disable-next-line no-console
      console.log(error);
    },
    onError(error) {
      // eslint-disable-next-line no-console
      console.error(error);
    },
  });

  return (
    <>
      <video ref={ref} />
      <p>
        <span>Référence scannée:</span>
        <span>{result}</span>
      </p>
      <div>
        <button onClick={() => setPaused(!paused)}>
          {paused ? "Resume" : "Pause"}
        </button>
      </div>
    </>
  );
};