import LineChart from "./linechart";

export default function Dashboard() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="mt-4 w-full max-w-4xl p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Line Chart</h2>
                <LineChart />
            </div>
            <div className="mt-8 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Additional Dashboard Content</h2>
                <p>This section can include more charts, statistics, or any other relevant information.</p>
            </div>
        </div>
        </div>
    );
}