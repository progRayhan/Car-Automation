export default function CardImage() {
  return (
    <>
      <label className="block text-md mt-5 text-center font-medium text-gray-700">
        Drag & Drop file you want to upload
      </label>
      <div className="section">
        <div className="space-y-1 text-center ">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex text-sm text-gray-600">
          <input id="fileUpload" accept="image" type="file" hidden className="cursor-pointer" />
            <label
              htmlFor="fileUpload"
              className="cursor-pointer bg-white rounded-md font-medium  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
            
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
