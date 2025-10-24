export default function Footer() {
  return (
    <footer id="contact" className="border-t mt-16">
      <div className="container py-8 text-sm text-gray-600 grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-semibold mb-2">About</p>
          <p>Authentic South Asian groceries delivered across Germany.</p>
        </div>
        <div>
          <p className="font-semibold mb-2">Contact</p>
          <p>Email: hello@rayora.com</p>
          <p>Phone: +49 40 123 456</p>
        </div>
        <div>
          <p className="font-semibold mb-2">Follow</p>
          <p>Instagram · Facebook · X</p>
        </div>
      </div>
      <div className="container py-4 text-xs text-gray-500">© {new Date().getFullYear()} Rayora</div>
    </footer>
  );
}
