
import type { JobRequest } from "../types/JobRequest";

// Define as props recebidas pelo componente.
interface JobCardProps {
    job: JobRequest;
    onAccept: (id: string) => void;
}

// Componente que apresenta um pedido individual.
function JobCard({ job, onAccept }: JobCardProps) {
    const date = new Date(job.startsAt);

    // Formata a data e a hora para o formato português.
    const formattedDate = date.toLocaleDateString("pt-PT", {
        day: "numeric",
        month: "long",
    });

    const formattedTime = date.toLocaleTimeString("pt-PT", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Lisbon",
    });

    // Converte o preço de cêntimos para euros.
    const formattedPrice = new Intl.NumberFormat("pt-PT", {
        style: "currency",
        currency: "EUR",
    }).format(job.priceCents / 100);

    return (
        <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                    {job.service}
                </h2>

                {/* Só apresenta a etiqueta quando o pedido é urgente. */}
                {job.urgent && (
                    <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                        Urgente
                    </span>
                )}
            </div>

            <p className="mt-2 text-sm text-gray-500">
                {job.city}
            </p>

            <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>Data: {formattedDate}</p>
                <p>Hora: {formattedTime}</p>
                <p>Duração: {job.durationMin} minutos</p>
            </div>

            <div className="mt-5 flex items-center justify-between">
                <span className="text-xl font-bold text-emerald-700">
                    {formattedPrice}
                </span>

                {/* Envia o ID do pedido para a função de aceitação. */}
                <button
                    onClick={() => onAccept(job.id)}
                    className="cursor-pointer rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-800"
                >
                    Aceitar
                </button>
            </div>
        </article>
    );
}

export default JobCard;
