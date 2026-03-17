import { Mail, Phone } from "lucide-react";

type Props = {
  phoneNumber: string;
  email: string;
};

export function ContactHelp({ email, phoneNumber }: Props) {
  return (
    <div className="bg-neutral-900 text-white rounded-xl p-6">
      <h3 className="text-xl font-bold mb-4">Precisa de Ajuda?</h3>
      <div className="space-y-3 text-sm">
        {phoneNumber && (
          <div className="flex items-center gap-2">
            <Phone className="size-4" />
            <a className="hover:underline" href={`tel:${phoneNumber}`}>
              {phoneNumber}
            </a>
          </div>
        )}
        {email && (
          <div className="flex items-center gap-2">
            <Mail className="size-4" />
            <a className="hover:underline" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
