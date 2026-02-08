export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Museu das Forças Armadas. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
