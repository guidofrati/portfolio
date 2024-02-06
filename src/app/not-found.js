import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full justify-center bg-fondo">
      <div className="flex flex-col items-center justify-center space-y-4 text-center text-blanco">
        <h2 className="text-6xl">Page Not Found</h2>
        <Link href="/" className="text-4xl text-letra">
          Return Home
        </Link>
      </div>
    </div>
  );
}
