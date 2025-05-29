

export default function ProductDeailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                {children}
                <h2 className="text-2xl font-bold">Featured Products</h2>
            </div>
        </div>
    );
}