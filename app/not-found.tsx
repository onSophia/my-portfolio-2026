import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black font-mono text-green-500 p-4">
            <div className="max-w-lg w-full">
                <div className="border-b border-green-800 pb-2 mb-4 flex justify-between">
                    <span>TERMINAL - ERROR_LOG</span>
                    <span>404</span>
                </div>
                <div className="space-y-2">
                    <p>&gt; SYSTEM.SEARCH(CURRENT_PAGE)...</p>
                    <p className="text-red-500">&gt; ERROR: PAGE_NOT_FOUND_EXCEPTION</p>
                    <p>&gt; ANALYZING ROOT CAUSE...</p>
                    <p>&gt; RESULT: The requested URL was not found on this server.</p>
                    <br />
                    <p>&gt; SUGGESTED_ACTION: RETURN_TO_HOME</p>
                    <br />
                    <Link
                        href="/"
                        className="inline-block px-4 py-2 border border-green-500 hover:bg-green-500 hover:text-black transition-colors"
                    >
                        &gt; EXECUTE: BACK_HOME.EXE
                    </Link>
                </div>
            </div>
        </div>
    );
}