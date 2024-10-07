/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
    "./src/**/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff', // Warna biru sebagai warna utama
      },
      fontFamily: {
        sans: ['Poppins', 'Sans-serif'],
        roboto: ['Roboto', 'Sans-serif'],  
        custom: ['Nunito', 'Sans-serif'], // Alternatif lebih unik, bisa mencoba Nunito jika ingin variasi
      },
      borderRadius: {
        DEFAULT: '8px', // Set border-radius tidak terlalu melengkung, default 8px
        md: '6px',
        lg: '10px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        schooltheme: {
          'primary': '#007bff', // Primary biru
          'secondary': '#6c757d', // Warna sekunder (bisa diubah jika diperlukan)
          'accent': '#6610f2', // Warna aksen, pilih sesuai selera
          'neutral': '#3d4451', // Warna netral untuk elemen lain
          'base-100': '#ffffff', // Background putih
          'info': '#17a2b8',
          'success': '#28a745',
          'warning': '#ffc107',
          'error': '#dc3545',
        },
      },
    ],
  },
}

