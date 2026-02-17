'use client';
import { createContext, useContext, useState, useCallback } from "react";

type ToastContextType = {
  show: (msg: string) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);

  const show = useCallback((msg: string) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 2500);
  }, []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center">
        <div
          className={`transition-all duration-300 ${
            message ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          {message ? (
            <div className="rounded-xl border px-4 py-2 text-sm shadow-lg" style={{background: 'var(--surface)', borderColor: 'var(--border)'}}>
              {message}
            </div>
          ) : null}
        </div>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

