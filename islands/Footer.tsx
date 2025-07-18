type HeaderProps = {
    messages: Record<string, string>;
};

const Footer = ({ messages }: HeaderProps) => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center space-y-2">
        <p>{messages.lokasi.title} :</p>
        <p>{messages.lokasi.text}</p>

        <p className="mt-4 text-sm">
          © 2025 Japan Camp USK. All rights reserved.
        </p>

        {/* Instagram icon */}
        <div className="mt-4 flex justify-center items-center space-x-2">
        <p>Instagram : <a href="https://instagram.com/japancampusk" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">@japancampusk</a></p>
        
        <p><a href="https://instagram.com/ikaft_usk" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">@ikaft_usk</a></p> 
        </div>
      </div>
    </footer>
  );
};


export default Footer;