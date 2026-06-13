type Props = {
  title: string;
  value: string;
};

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-blue-500 transition">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>

    </div>
  );
}