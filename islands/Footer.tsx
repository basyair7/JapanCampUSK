type HeaderProps = {
    messages: Record<string, string>;
};

const Footer = ({ messages }: HeaderProps) => {
    return (<>
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4 text-center space-y-2">
                <p>{messages.lokasi.title} : </p>
                <p>{messages.lokasi.text}</p>
                <p className="mt-4 text-sm">
                    © 2025 Japan Camp USK. All rights reserved.
                </p>
            </div>
        </footer>    
    </>);
};

export default Footer;