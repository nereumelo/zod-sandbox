import { useContext } from "react";
import { ValidateContext, ValidateDispatchContext } from "../contexts/Validate";
import Btn from "../components/Button";
import validate from "../services/validate";
import Box from "../components/Box";

export function ValidatePage() {
  const { data, result, schema } = useContext(ValidateContext);
  const { handleData, handleResult, handleSchema } = useContext(ValidateDispatchContext);

  const handleAction = () => {
    validate(
      data as string,
      schema as string,
      handleResult as (result: string) => void
    );
  };

  return (
    <div className="h-full w-full flex items-stretch justify-center">
      <div className="h-full w-[94%] xl:w-[70%] grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto_41.6px] gap-6">
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
        <Btn onClick={handleAction} className="col-start-1 row-start-3">
          Validate
        </Btn>
        <Box
          className="row-span-3"
          label="Result:"
          value={result}
          type="result"
        />
      </div>
    </div>
  );
}
