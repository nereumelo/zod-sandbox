import { useContext } from "react";
import { ValidateContext, ValidateDispatchContext } from "../contexts/Validate";
import Btn from "../components/Button";
import validate from "../services/validate";
import Box from "../components/Box";
import { MainDispatchContext, Notification } from "../contexts/Main";

export function ValidatePage() {
  const { addNotification } = useContext(MainDispatchContext);
  const { data, result, schema } = useContext(ValidateContext);
  const { handleData, handleResult, handleSchema } = useContext(ValidateDispatchContext);

  const handleAction = () => {
    validate(
      data as string,
      schema as string,
      handleResult as (result: string) => void,
      addNotification as (notification: Notification) => void
    );
  };

  return (
    <div className="h-full w-full flex items-stretch justify-center">
      <div className="h-full w-[94%] xl:w-[70%] grid grid-cols-1 md:grid-cols-2 grid-rows-[1fr_1fr_41.6px_1fr] md:grid-rows-[28vh_28vh_41.6px] gap-6">
        <Box
          label="Data To Validate:"
          value={data}
          onChange={handleData}
          type="data"
          placeholder="Insert data to validate here"
          onKeyPress={handleAction}
        />
        <Box
          className="col-start-1 row-start-2"
          label="Schema:"
          value={schema}
          type="schema"
          onChange={handleSchema}
          placeholder="Insert your zod schema here"
          onKeyPress={handleAction}
        />
        <Btn onClick={handleAction} className="z-0 col-start-1 row-start-3">
          Validate
        </Btn>
        <Box
          className="md:row-span-3"
          label="Result:"
          value={result}
          type="result"
        />
      </div>
    </div>
  );
}
