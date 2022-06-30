import { FC } from "react";

type Props = {
  name: string;
  type: string;
  labelName: string;
  formik: any;
  placeholder: string;
};

// MARKUP
const FormController: FC<Props> = ({
  formik,
  name,
  type,
  labelName,
  placeholder,
}) => {
  return (
    <div className="flex flex-col tracking-wider gap-y-3">
      <label className="text-base font-semibold" htmlFor={name}>
        {labelName}
      </label>
      <input
        className="p-2 border rounded-md shadow-md outline-slate-600 border-slate-500"
        id={name}
        type={type}
        {...formik.getFieldProps({ name })}
        placeholder={placeholder}
      />
      {formik.touched[`${name}`] && formik.errors[`${name}`] ? (
        <p className="text-sm font-semibold text-red-500">
          {formik.errors[`${name}`]}
        </p>
      ) : null}
    </div>
  );
};
export default FormController;
