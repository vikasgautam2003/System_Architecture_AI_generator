export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-4 gap-8">

        <div>
          <div className="font-semibold">BlueprintX</div>
          <p className="text-sm text-slate-600 mt-2">
            AI-powered system architecture generation.
          </p>
        </div>

        <div>
          <h4 className="font-medium text-slate-700 mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Features</li>
            <li>Docs</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-slate-700 mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-slate-700 mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-sm text-slate-500 mt-8">
        © {new Date().getFullYear()} BlueprintX Inc. All rights reserved.
      </div>
    </footer>
  );
}
