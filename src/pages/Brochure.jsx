
import { FiDownload } from 'react-icons/fi';

const Brochure = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-20 lg:px-32 py-16 w-full">
      <div className="w-full font-funnel text-blue-50 flex flex-col items-center gap-8">

        {/* Brochure Header */}
        <div className="text-center">
          <h2 className="md:text-lg">BROCHURE</h2>
        </div>

        <hr className="border-t border-white/20 w-full" />

        {/* Brochure Image Preview */}
        <div className="relative w-full rounded-xl object-fill">
          <img
            src="/vec.png"
            alt="Brochure Preview"
            className="h-150 w-full object-contain"
          />
        </div>

        {/* Download Button */}
        <a
          href="/Noctivus25.pdf"
          download="Noctivus25.pdf"
          className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-medium transition-all duration-300"
        >
          <FiDownload size={18} />
          DOWNLOAD BROCHURE
        </a>
      </div>
    </div>
  );
};

export default Brochure;
