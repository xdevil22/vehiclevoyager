import React, { useState } from "react";
import {
  RiMapPinLine,
  RiCarLine,
  RiMoneyDollarCircleLine,
  RiSearchLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiFilterLine,
} from "react-icons/ri";

const SearchFilters = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-4 sm:p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Location Filter */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-neutral-800 mb-2">
            Location
          </label>
          <div className="relative">
            <button
              type="button"
              className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm w-full pl-10 relative"
            >
              <span className="absolute left-3 top-2.5 text-neutral-800">
                <RiMapPinLine />
              </span>
              <span className="pointer-events-none">Any Location</span>
              <RiArrowDownSLine className="h-4 w-4 opacity-50" />
            </button>
          </div>
        </div>

        {/* Vehicle Category Filter */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-neutral-800 mb-2">
            Vehicle Category
          </label>
          <div className="relative">
            <button
              type="button"
              className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm w-full pl-10 relative"
            >
              <span className="absolute left-3 top-2.5 text-neutral-800">
                <RiCarLine />
              </span>
              <span className="pointer-events-none">All Categories</span>
              <RiArrowDownSLine className="h-4 w-4 opacity-50" />
            </button>
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-neutral-800 mb-2">
            Price Range
          </label>
          <div className="relative">
            <button
              type="button"
              className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm w-full pl-10 relative"
            >
              <span className="absolute left-3 top-2.5 text-neutral-800">
                <RiMoneyDollarCircleLine />
              </span>
              <span className="pointer-events-none">Any Price</span>
              <RiArrowDownSLine className="h-4 w-4 opacity-50" />
            </button>
          </div>
        </div>

        {/* Search Button */}
        <div className="col-span-1">
          <label className="block text-sm font-medium text-neutral-800 mb-2">
            &nbsp;
          </label>
          <button className="h-10 w-full flex items-center justify-center bg-primary text-white hover:bg-primary/90 text-sm font-medium rounded-md px-4 py-2">
            <RiSearchLine className="mr-2" />
            Search
          </button>
        </div>
      </div>

      {/* Toggle Advanced Filters (Desktop) */}
      <div className="hidden md:block mt-4">
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center text-sm font-medium text-primary hover:text-primary/80"
        >
          <span>{showAdvanced ? "Hide" : "Show"} Advanced Filters</span>
          {showAdvanced ? (
            <RiArrowUpSLine className="ml-1" />
          ) : (
            <RiArrowDownSLine className="ml-1" />
          )}
        </button>
      </div>

      {/* Toggle Advanced Filters (Mobile) */}
      <div className="md:hidden mt-4">
        <button
          type="button"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="h-10 w-full flex items-center justify-center border border-input bg-background hover:bg-accent hover:text-accent-foreground text-sm font-medium rounded-md px-4 py-2"
        >
          <RiFilterLine className="mr-2" />
          Advanced Filters
        </button>
      </div>

      {/* Advanced Filters Section */}
      {showAdvanced && (
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Sort & Features</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium" htmlFor="sort-by">
                  Sort Results By
                </label>
                <button
                  type="button"
                  className="mt-1 flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm w-full"
                >
                  Price: Low to High
                  <RiArrowDownSLine className="h-4 w-4 opacity-50" />
                </button>
              </div>
              <div className="flex items-center space-x-2 mt-7">
                <input
                  type="checkbox"
                  id="featured-only"
                  className="peer h-4 w-4 rounded-sm border border-primary"
                />
                <label htmlFor="featured-only" className="text-sm font-medium">
                  Show featured listings only
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
