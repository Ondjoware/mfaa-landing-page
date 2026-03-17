type Props = {
  information: {
    id: number;
    information: string;
  }[];
};

export function ImportantInfo({ information }: Props) {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-neutral-900 mb-4">
        Informações Importantes
      </h3>
      <ul className="space-y-2 text-neutral-700 text-sm">
        {information.map((info) => (
          <li className="flex items-start gap-2" key={info.id}>
            <span className="text-yellow-600 font-bold">•</span>
            <span>{info.information}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
