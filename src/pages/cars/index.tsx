import SearchFilters from "../../components/SearchFilters";

// app/cars/page.tsx or pages/cars.tsx depending on your setup
export default function Cars() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900  p-6">
        Cars
      </h1>
      <div className=" p-6">
        <SearchFilters />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-6">
        {/* Filter Sidebar */}
        <div className="bg-white p-6 rounded-xl shadow-md h-fit">
          <h2 className="text-xl font-bold mb-4">Filters</h2>

          {/* Location */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Location</label>
            <button
              type="button"
              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <span>Any Location</span>
              <svg
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>

          {/* Vehicle Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Vehicle Type
            </label>
            <button
              type="button"
              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <span>Any Type</span>
              <svg
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">
              Price Range (per day)
            </label>
            <button
              type="button"
              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <span>Any Price</span>
              <svg
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-col space-y-2">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 text-white  rounded-md text-sm font-medium">
              Apply Filters
            </button>
            <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 rounded-md text-sm font-medium">
              Reset Filters
            </button>
          </div>
        </div>

        {/* No Vehicles Found */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl p-8 shadow-md text-center">
            <i className="ri-error-warning-line text-5xl text-neutral-400 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">No Vehicles Found</h3>
            <p className="text-neutral-600 mb-4">
              We couldn't find any vehicles matching your criteria. Try
              adjusting your filters.
            </p>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 text-white rounded-md text-sm font-medium">
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
