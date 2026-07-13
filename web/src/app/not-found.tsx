import Link from "next/link";
import { Ghost, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
      <Ghost className="h-12 w-12 text-muted-foreground/30 mb-6" />
      <h1 className="text-2xl font-bold tracking-tight mb-2">Agent Not Found</h1>
      <p className="text-sm text-muted-foreground max-w-sm mb-8">
        This agent doesn&apos;t exist in the registry yet, or its slug may have changed.
      </p>
      <Link
        href="/explore/"
        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-foreground text-background hover:opacity-90 rounded-md transition"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Explore
      </Link>
    </div>
  );
}
