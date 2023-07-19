import  { useEffect } from 'react';

const ChatSupport = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/64b664f7cc26a871b0291d0f/1h5k7kqgj';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.head.appendChild(script);

    return () => {
      // Hủy chat support khi component bị hủy
      const tawkScript = document.querySelector('script[src="https://embed.tawk.to/64b664f7cc26a871b0291d0f/1h5k7kqgj"]');
      if (tawkScript) {
        document.head.removeChild(tawkScript);
      }
    };
  }, []);

  return null; // Không có giao diện hiển thị 
};

export default ChatSupport;
