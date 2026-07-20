import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, X } from 'lucide-react';

export function ContactModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [toast, setToast] = useState<{ visible: boolean; message: string }>({ visible: false, message: "" });

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-contact-modal', handleOpen);

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('open-contact-modal', handleOpen);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const close = () => {
        setIsOpen(false);
    };

    const showToast = (message: string) => {
        setToast({ visible: true, message });
        setTimeout(() => {
            setToast({ visible: false, message: "" });
        }, 3000);
    };

    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault();
        // Anti-spam : adresse construite dynamiquement, jamais en clair dans le DOM
        const user = atob("em1iMDEzMw=="); // "zmb0133"
        const domain = atob("Z21haWwuY29t"); // "gmail.com"
        const email = `${user}@${domain}`;

        // Ouvre Gmail avec l'adresse préremplie dans un nouvel onglet
        window.open(
            `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}`,
            '_blank',
            'noopener,noreferrer'
        );
    };

    if (!isOpen) return null;

    return (
        <>
            <style>{`
        .contact-modal-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          display: flex; align-items: center; justify-content: center;
          z-index: 1000;
        }
        .contact-modal {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          padding: 32px;
          max-width: 420px;
          width: 90%;
          animation: modal-in 0.2s ease;
          position: relative;
        }
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .contact-modal-close {
          position: absolute; top: 16px; right: 16px;
          color: var(--text-secondary);
          cursor: pointer;
        }
        .contact-modal-close:hover { color: #fff; }
        .contact-modal h3 {
          font-size: 1.3rem; font-weight: 800; color: #fff; margin-bottom: 8px;
        }
        .contact-modal p.subtitle {
          color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 24px;
        }
        .contact-option {
          display: flex; align-items: center; gap: 14px;
          width: 100%;
          background: var(--bg-card-hover);
          border: 1px solid var(--border-subtle);
          border-radius: 10px;
          padding: 14px 16px;
          margin-bottom: 12px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
          color: #fff;
          text-align: left;
        }
        .contact-option:hover {
          border-color: rgba(59,130,246,0.4);
          transform: translateX(2px);
        }
        .contact-option-icon {
          width: 40px; height: 40px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .contact-option-text { display: flex; flex-direction: column; flex: 1; }
        .contact-option-text strong { font-size: 0.9rem; font-weight: 700; }
        .contact-option-text span { font-size: 0.75rem; color: var(--text-secondary); }
        .contact-option .arrow { color: var(--text-secondary); font-size: 0.9rem; }
        
        .toast {
          position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
          background: var(--bg-card);
          border: 1px solid var(--accent-blue);
          color: #fff;
          padding: 12px 20px;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 600;
          display: flex; align-items: center; gap: 8px;
          animation: toast-in 0.3s ease;
          z-index: 2000;
        }
        @keyframes toast-in {
          from { opacity: 0; transform: translate(-50%, 10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>

            <div className="contact-modal-overlay" onClick={close}>
                <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
                    <span className="contact-modal-close" onClick={close}><X className="w-5 h-5" /></span>
                    <span className="inline-block bg-[var(--badge-bg)] text-[var(--accent-blue)] rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase mb-4">
                        Communication
                    </span>
                    <h3>Me contacter</h3>
                    <p className="subtitle">Choisissez le canal qui vous convient le mieux.</p>

                    {/* Option Email */}
                    <button className="contact-option" onClick={handleEmailClick}>
                        <div className="contact-option-icon" style={{ background: 'var(--badge-bg)', color: 'var(--accent-blue)' }}>
                            <Mail className="w-5 h-5" />
                        </div>
                        <div className="contact-option-text">
                            <strong>Email</strong>
                            <span>Réponse sous 24-48h</span>
                        </div>
                        <span className="arrow">→</span>
                    </button>

                    {/* Option WhatsApp */}
                    <a className="contact-option" href="https://wa.me/22965907887" target="_blank" rel="noopener noreferrer">
                        <div className="contact-option-icon" style={{ background: 'rgba(37,211,102,0.1)', color: '#25D366' }}>
                            <MessageCircle className="w-5 h-5" />
                        </div>
                        <div className="contact-option-text">
                            <strong>WhatsApp</strong>
                            <span>Réponse rapide, en direct</span>
                        </div>
                        <span className="arrow">→</span>
                    </a>
                </div>
            </div>

            {toast.visible && (
                <div className="toast">
                    {toast.message}
                </div>
            )}
        </>
    );
}
