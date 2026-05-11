import React from "react";

interface InfoModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  closeText?: string;
  type?: "info" | "warning" | "error" | "success";
}

export default function InfoModal({
  isOpen,
  title,
  message,
  onClose,
  onConfirm,
  confirmText = "Confirm",
  closeText = "Close",
  type = "info",
}: InfoModalProps) {
  if (!isOpen) return null;

  const bgColor = {
    info: "bg-blue-50 border-blue-200",
    warning: "bg-yellow-50 border-yellow-200",
    error: "bg-red-50 border-red-200",
    success: "bg-green-50 border-green-200",
  };

  const iconColor = {
    info: "text-blue-600",
    warning: "text-yellow-600",
    error: "text-red-600",
    success: "text-green-600",
  };

  const buttonColor = {
    info: "bg-blue-600 hover:bg-blue-700",
    warning: "bg-yellow-600 hover:bg-yellow-700",
    error: "bg-red-600 hover:bg-red-700",
    success: "bg-green-600 hover:bg-green-700",
  };

  const iconClass = {
    info: "ri-information-line",
    warning: "ri-alert-line",
    error: "ri-error-warning-line",
    success: "ri-check-line",
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4 border ${bgColor[type]}`}>
        {/* Icon and Title */}
        <div className="flex items-center gap-3 mb-4">
          <i className={`${iconClass[type]} text-2xl ${iconColor[type]}`}></i>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        </div>

        {/* Message */}
        <p className="text-gray-700 mb-6 leading-relaxed">{message}</p>

        {/* Buttons */}
        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium">
            {closeText}
          </button>
          {onConfirm && (
            <button
              onClick={onConfirm}
              className={`px-4 py-2 text-white rounded-lg transition-colors font-medium ${buttonColor[type]}`}>
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
