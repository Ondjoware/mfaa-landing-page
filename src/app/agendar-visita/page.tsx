import { ContactHelp } from "@/components/visits/contact-help";
import { ImportantInfo } from "@/components/visits/important-info";
import { OpeningHours } from "@/components/visits/opening-hours";
import { ScheduleVisitForm } from "@/components/visits/schedule-visit-form";
import {
  getContact,
  getImportantInfo,
  getOpeningHours,
} from "@/lib/strapi/services/museum-info";

export default async function ScheduleVisitPage() {
  const [
    getContactResponse,
    getImportantInfoResponse,
    getOpeningHoursResponse,
  ] = await Promise.all([getContact(), getImportantInfo(), getOpeningHours()]);
  const { data: contact } = getContactResponse;
  const { data: importantInfo } = getImportantInfoResponse;
  const { data: openingHours } = getOpeningHoursResponse;
  return (
    <>
      <section className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Agendar Visita</h1>
          <p className="text-xl text-neutral-300">
            Planeie sua visita ao Museu das Forças Armadas
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <ScheduleVisitForm />
            </div>
            {/* Sidebar Info */}
            <div className="lg:col-span-1 space-y-6">
              <OpeningHours openingHours={openingHours} />
              {importantInfo.length > 0 && (
                <ImportantInfo information={importantInfo} />
              )}
              <ContactHelp
                email={contact.email}
                phoneNumber={contact.phoneNumber}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
