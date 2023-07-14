/* import React, { useEffect } from 'react'; */

const ChatSupport = () => {
  /* useEffect(() => {
    // Mã tích hợp chat support từ thư viện
    // Ví dụ: Tawk.to
    var Tawk_API = Tawk_API || {};
    Tawk_API.visitor = {
      name: 'Tên khách hàng',
      email: 'Email khách hàng',
    };
    // ... Các tùy chỉnh khác
    Tawk_API.embedded = 'embedded-script';
    var s1 = document.createElement('script');
    s1.async = true;
    s1.src = 'https://embed.tawk.to/SCRIPT_KEY';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    var s0 = document.getElementsByTagName('script')[0];
    s0.parentNode.insertBefore(s1, s0);

    return () => {
      // Hủy chat support khi component bị hủy
      // Ví dụ: Tawk.to
      window.Tawk_API?.end();
    };
  }, []); */

  /* return null; // Không có giao diện hiển thị */
  return (
    <div>
      
      {/* ... */}
      {/* Thêm mã nhúng chat support */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Mã nhúng chat support
          `,
        }}
      ></script>
    </div>
  );
};

export default ChatSupport;
