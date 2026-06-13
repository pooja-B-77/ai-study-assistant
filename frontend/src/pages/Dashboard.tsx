import MainLayout from "../layouts/MainLayout";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <MainLayout>

      <div className="p-6 md:p-8">

        <div className="mb-8">

          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Track your study progress
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          <StatCard
            title="PDFs Uploaded"
            value="1"
          />

          <StatCard
            title="Questions Asked"
            value="15"
          />

          <StatCard
            title="Indexed Chunks"
            value="8"
          />

          <StatCard
            title="AI Responses"
            value="15"
          />

        </div>

      </div>

    </MainLayout>
  );
}