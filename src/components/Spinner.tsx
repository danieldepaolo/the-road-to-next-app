export default function Spinner({ containerHeight = 64 }: { containerHeight?: number }) {
    return (
        <div className={`flex justify-center items-center h-${containerHeight}`}>
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
    );
}