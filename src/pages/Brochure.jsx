
import { FiDownload } from 'react-icons/fi';

const Brochure = () => {
  return (
    <div className="flex flex-col items-center px-10 md:px-20 lg:px-32 py-16 w-full">
      <div className="w-full font-funnel text-blue-50 flex flex-col items-center gap-8">

        {/* Brochure Header */}
        <div className="text-center">
          <h2 className="text-lg">BROCHURE</h2>
        </div>

        <hr className="border-t border-white/20 w-full" />

        {/* Brochure Image Preview */}
        <div className="relative w-full rounded-xl object-fill">
          <img
            src="/vec.png"
            alt="Brochure Preview"
            className="h-fit w-full md:w-180 mx-auto  object-contain"
          />
        </div>

        {/* Download Button */}
        <a
          href="/Noctivus25.pdf"
          download="Noctivus25.pdf"
          className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-white/5 hover:bg-white/20  border-1 border-white/20 text-white/70 rounded-xl text-lg font-medium transition-all duration-300"
        >
          <FiDownload size={18} className='text-emerald-400' />
          DOWNLOAD BROCHURE
        </a>
      </div>
    </div>
  );
};

export default Brochure;
