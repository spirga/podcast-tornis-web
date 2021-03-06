import { Input } from "./Input";

export const ParticipantInput = ({
  number,
  error,
  register,
  required = false,
}) => (
  <div className="row participant">
    <Input
      label={`${number + 1}. DALĪBNIEKA PILNS VĀRDS`}
      containerClassName="input-container half"
      type="text"
      autoComplete="off"
      name={`name${number.toString()}`}
      className="input"
      // {...register(`participants.${number}name`, {
      //   required: {
      //     value: required,
      //     message: "Norādi dalībnieka pilnu vārdu",
      //   },
      // })}
      // error={error?.name}
    />
    <Input
      label="KLASE"
      containerClassName="input-container small"
      type="number"
      autoComplete="off"
      name={`class${number.toString()}`}
      className="input"
      // {...register(`participants.${number}.grade`, {
      //   required: {
      //     value: required,
      //     message: "Norādi klasi",
      //   },
      //   min: {
      //     value: 7,
      //     message: "Dalībnieka klasei jābūt no 7 līdz 12",
      //   },
      //   max: {
      //     value: 12,
      //     message: "Dalībnieka klasei jābūt no 7 līdz 12",
      //   },
      // })}
      // error={error?.grade}
    />
  </div>
);
