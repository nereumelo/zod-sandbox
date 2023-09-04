import { useContext } from "react";
import { MainContext, MainDispatchContext } from "../contexts/Main";
import Btn from "../components/Button";
import validate from "../services/validate";
import Box from "../components/Box";

export function ValidatePage() {
  const { data, result, schema } = useContext(MainContext);
  const { handleData, handleResult, handleSchema } = useContext(MainDispatchContext);

  const handleAction = () => {
    validate(
      data as string,
      schema as string,
      handleResult as (result: string) => void
    );
  };

  return (
    <div className="h-[76.8vh] w-full flex items-stretch justify-center">
      <div className="h-full w-[76%] grid grid-cols-2 grid-rows-[29.5vh_29.5vh_41.6px] gap-6">
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
        <Btn onClick={handleAction} className="col-start-1 row-start-3 z-10">
          Validate
        </Btn>
        <Box
          className="row-span-3 col-start-2 row-start-1"
          label="Result:"
          value={result}
          type="result"
        />
      </div>
    </div>
  );
}
