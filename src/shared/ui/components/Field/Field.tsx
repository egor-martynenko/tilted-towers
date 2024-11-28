type FieldType = {
  label: string;
  name: string;
  type: string;
  register: any;
  required: boolean;
};

export const Field = ({ label, name, type, register, required }: FieldType) => (
  <div className="relative z-0 w-full mb-5 group">
    <input
      type={type}
      {...register(name, { required })}
      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-amber-600 peer"
      placeholder=" "
    />
    <label
      htmlFor={name}
      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
  </div>
);
