
import { useEffect, useState } from "react";
import type { JobRequest } from "./types/JobRequest";
import { jobs } from "./data/jobs";

import Loading from "./components/Loading";
import JobList from "./components/JobList";

function App() {
  // Guarda os pedidos disponíveis.
  const [jobList, setJobList] = useState<JobRequest[]>(jobs);

  // Controla o carregamento inicial.
  const [loading, setLoading] = useState(true);

  // Simula um carregamento de 1 segundo.
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Remove o pedido da lista quando é aceite.
  function handleAccept(id: string) {
    setJobList((previousJobs) =>
      previousJobs.filter((job) => job.id !== id)
    );
  }

  // Enquanto carrega, apresenta o componente Loading.
  if (loading) {
    return <Loading />;
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10 md:px-12 lg:px-20">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Marketplace
        </h1>

        <p className="mt-2 text-gray-500">
          Pedidos disponíveis
        </p>
      </header>

      <JobList
        jobs={jobList}
        onAccept={handleAccept}
      />
    </main>
  );
}

export default App;
