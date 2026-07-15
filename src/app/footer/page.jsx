import React from 'react'

const FooterPage = () => {
    return (
        <footer className="bg-[#1F2A24] text-white px-6 md:px-10 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo & Description */}
                <div>
                    <div className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-full bg-[#7A2E2A] flex items-center justify-center font-serif font-bold">
                            Q
                        </div>
                        <h2 className="font-serif font-bold text-xl">
                            Qurbani<span className="text-[#D89B3C]">Hat</span>
                        </h2>
                    </div>
                    <p className="text-sm font-serif text-gray-300 mt-4 max-w-xs">
                        Livestock booking made simple for Eid-ul-Adha, connecting families with verified farms nationwide
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-serif font-semibold text-[#D89B3C] mb-4">Contact</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>support@qurbanihat.com</li>
                        <li>+880 1XXX-XXXXXX</li>
                        <li>Bandarban, Bangladesh</li>
                    </ul>
                </div>

                {/* Follow */}
                <div>
                    <h3 className="font-serif font-semibold text-[#D89B3C] mb-4">Follow</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom line */}
            <div className="max-w-7xl mx-auto border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
                © 2026 QurbaniHat. All rights reserved.
            </div>
        </footer>
    )
}

export default FooterPage;