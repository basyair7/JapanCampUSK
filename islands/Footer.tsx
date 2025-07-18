type HeaderProps = {
    messages: Record<string, string>;
};

const Footer = ({ messages }: HeaderProps) => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4 text-center space-y-2">
                <p>{messages.lokasi.title}</p>
                <p>{messages.lokasi.text}</p>

                {/* Instagram */}
                <div className="flex justify-center items-center space-x-4 mb-2">
                    <a 
                        href="https://instagram.com/japancampikaftusk"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram" 
                        className="hover:text-pink-400"
                    >
                        <svg
                            xmlns="http://www.w3/org/2000/svg"
                            width="24" height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="inline-block"
                        > 
                            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.6 0 3 1.4 3 3v10c0 1.6-1.4 3-3 3H7c-1.6 0-3-1.4-3-3V7c0-1.6 1.4-3 3-3h10zM12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 2c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm4.5-2a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
                        </svg>{" "}
                        @japancampikaftusk
                    </a>

                    <a 
                        href="https://instagram.com/ikaft_usk"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram" 
                        className="hover:text-pink-400"
                    >
                        <svg
                            xmlns="http://www.w3/org/2000/svg"
                            width="24" height="24"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="inline-block"
                        > 
                            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.6 0 3 1.4 3 3v10c0 1.6-1.4 3-3 3H7c-1.6 0-3-1.4-3-3V7c0-1.6 1.4-3 3-3h10zM12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 2c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm4.5-2a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
                        </svg>{" "} 
                        @ikaft_usk
                    </a>
                </div>

                <p className="mt-4 text-sm">
                    © 2025 Japan Camp USK. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;