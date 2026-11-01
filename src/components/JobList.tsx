
import { useState } from "react";
import type { JobRequest } from "../types/JobRequest";
import JobCard from "./JobCard";

interface JobListProps {
  jobs: JobRequest[];
  onAccept: (id: string) => void;
}

function JobList({ jobs, onAccept }: JobListProps) {
  const [selectedCity, setSelectedCity] = useState("");

  // Obtém as cidades sem repetições.
  const cities = [...new Set(jobs.map((job) => job.city))];

  // Filtra os pedidos pela cidade selecionada.
  const filteredJobs = jobs.filter(
    (job) => selectedCity === "" || job.city === selectedCity
  );

  return (
    <section>
      {/* Filtro por cidade */}
      <div className="mb-8 max-w-xs">
        <label
          htmlFor="city"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Filtrar por cidade
        </label>

        <select
          id="city"
          value={selectedCity}
          onChange={(event) => setSelectedCity(event.target.value)}
          className="w-full cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
        >
          <option value="">Todas as cidades</option>

          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Lista de pedidos */}
      <h2 className="mb-5 text-xl font-semibold text-gray-900">
        Pedidos disponíveis ({filteredJobs.length})
      </h2>

      {filteredJobs.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onAccept={onAccept}
            />
          ))}
        </div>
      ) : (
        <p className="rounded-xl bg-white p-6 text-center text-gray-500">
          Não existem pedidos disponíveis.
        </p>
      )}
    </section>
  );
}

export default JobList;
