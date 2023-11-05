import React from 'react';

function LabeledInput({
  label,
  id,
  value,
  onChange,
  placeholder,
  unit,
}) {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 right-0 flex items-center pl-3.5 pointer-events-none">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-r-lg dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600 h-full">
            <span className="text-gray-900 dark:text-gray-400">{unit}</span>
          </span>
        </div>
        <input
          type="text"
          id={id}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
}

export default LabeledInput;
