'use client';

export default function Certifications() {
  const certs = [
    {
      img: '/badges/pmp.png',
      alt: 'PMP',
      title: 'PMP',
      subtitle: 'Project Management Professional',
      issued: '2010',
    },
    {
      img: '/badges/csm.png',
      alt: 'CSM',
      title: 'CSM',
      subtitle: 'Certified ScrumMaster',
      issued: '2024',
    },
    {
      img: '/badges/ai900.png',
      alt: 'AI-900',
      title: 'AI-900',
      subtitle: 'Azure AI Fundamentals',
      issued: '2025',
    },
    {
      img: '/badges/aws.png',
      alt: 'AWS',
      title: 'AWS',
      subtitle: 'Cloud Practitioner',
      issued: '2020',
    },
  ];

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">Certifications</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {certs.map((cert) => (
          <div key={cert.title} className="flip-card w-full h-40 bg-transparent">
            <div className="flip-card-inner relative w-full h-full">
              <div className="flip-card-front bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col items-center justify-center text-center">
                <img src={cert.img} alt={cert.alt} className="w-12 h-auto mb-2" />
                <p className="text-sm font-medium text-slate-800 dark:text-white">{cert.title}</p>
              </div>
              <div className="flip-card-back bg-slate-100 dark:bg-slate-700 rounded-xl shadow-md p-4 flex flex-col items-center justify-center text-center text-slate-700 dark:text-white">
                <p className="text-sm font-semibold">{cert.title}</p>
                <p className="text-xs">{cert.subtitle}</p>
                <p className="text-xs">Issued: {cert.issued}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
