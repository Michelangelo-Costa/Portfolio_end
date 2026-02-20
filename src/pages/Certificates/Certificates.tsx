import { arrCertificates } from "@/utils/data/certificates";
import SimpleCard from "@/components/SimpleCard/SimpleCard";
import PageTitle from "@/components/PageTitle/PageTitle";

const Certificates = () => {
  const certificates = arrCertificates;

  return (
    <div className="text-foreground">
      <PageTitle title="Certificados" suffix />
      <h1 className="text-xl font-semibold mb-2">Certificados</h1>
      <p className="text-muted-foreground text-sm mb-4">
        Aqui estão algumas das certificações que conquistei ao longo da minha
        jornada.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certificates.map((certificate, index) => {
          return (
            <SimpleCard
              key={index}
              href={certificate.href}
              name={certificate.course}
              desc={certificate.teacher}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
