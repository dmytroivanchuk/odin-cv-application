type FieldProps = {
  type: string;
  id: string;
  dataId?: string;
  name: string;
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Field({
  type,
  id,
  dataId,
  name,
  title,
  value,
  onChange,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id}>{title}</label>
      <input
        className="rounded-sm border border-gray-500 bg-white px-1"
        type={type}
        id={id}
        data-id={dataId}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
