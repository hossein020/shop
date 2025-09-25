const rawProducts = [
    {
      id: 1,
      title: "ساعت مچی کاسیو مدل EF‑558D",
      price: 1850000,
      image:
        "https://dkstatics-public.digikala.com/digikala-products/e56186c17d60540a933cdb4ef56f9e077acba50d_1714062853.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      specs: {
        جنس: "استیل ضد زنگ",
        فرم: "مربع",
        موجودی: 5,
        لایک: 120,
      },
    },
    {
      id: 2,
      title: "ساعت مچی تیسوت مدل T‑Classic",
      price: 2120000,
      image:
        "https://dkstatics-public.digikala.com/digikala-products/8d56bc4dbdf6e7c9cccfcfc5d427777694550585_1726350175.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      specs: {
        جنس: "استیل ضد زنگ",
        فرم: "گرد",
        موجودی: 3,
        لایک: 98,
      },
    },
    {
      id: 3,
      title: "ساعت مچی سیتیزن مدل BI1050‑05A",
      price: 1675000,
      image:
        "https://dkstatics-public.digikala.com/digikala-products/416c1a081a425621f9ee17b8865e20ca76a65c2e_1731171048.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      specs: {
        جنس: "استیل ضد زنگ",
        فرم: "گرد",
        موجودی: 7,
        لایک: 110,
      },
    },
    {
      id: 4,
      title: "ساعت مچی رومانسون مدل TL3251",
      price: 1940000,
      image:
        "https://dkstatics-public.digikala.com/digikala-products/3d4989788a11d73a8af0991441522b516bd560c6_1722262243.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      specs: {
        جنس: "استیل ضد زنگ",
        فرم: "مستطیل",
        موجودی: 4,
        لایک: 90,
      },
    },
    {
      id: 5,
      title: "ساعت مچی سیکو مدل SNK809",
      price: 2280000,
      image:
        "https://dkstatics-public.digikala.com/digikala-products/6cc8244d096761ac93d521c2c2b36a54530667cd_1654156924.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      specs: {
        جنس: "استیل ضد زنگ",
        فرم: "گرد",
        موجودی: 6,
        لایک: 105,
      },
    },
    {
      id: 6,
      title: "ساعت مچی اورینت مدل RA‑AA0004E",
      price: 1765000,
      image:
        "https://dkstatics-public.digikala.com/digikala-products/6dbefe345646fb7d6b8bf51a508d659abe328cd4_1657102522.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      specs: {
        جنس: "استیل ضد زنگ",
        فرم: "مستطیل",
        موجودی: 5,
        لایک: 98,
      },
    },
    {
      id: 7,
      title: "ساعت مچی اسپریت مدل ES1G066L0035",
      price: 2530000,
      image:
        "https://dkstatics-public.digikala.com/digikala-products/ac6be3da5dd2c7848e9fd33bff8938a426b7af60_1732739134.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      specs: {
        جنس: "استیل ضد زنگ",
        فرم: "گرد",
        موجودی: 3,
        لایک: 120,
      },
    },
    {
      id: 8,
      title: "ساعت مچی فسیل مدل FS5380",
      price: 1895000,
      image:
        "https://dkstatics-public.digikala.com/digikala-products/6c609d9c154c270f1c4bce18e118ab1ad6bea545_1730533783.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      specs: {
        جنس: "استیل ضد زنگ",
        فرم: "گرد",
        موجودی: 7,
        لایک: 115,
      },
    },
    {
      id: 9,
      title: "عینک بلو کات  مدلAK_6912EC",
      price: 1450000,
      image:
        "https://dkstatics-public.digikala.com/digikala-products/a84f5acb32defa89f5b881eea5bd77ebe8b45777_1690236621.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      specs: {
        جنس: "استیل ضد زنگ",
        فرم: "گرد",
        موجودی: 8,
        لایک: 80,
      },
    },
    {
      id: 10,
      title: "عینک کاپلی مدل LAB 15",
      price: 2360000,
      image:
        "https://dkstatics-public.digikala.com/digikala-products/e7a118fd6393b5d986eee36ba6629cfd4ef0f70a_1627744363.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      specs: {
        جنس: "استیل ضد زنگ",
        فرم: "گرد",
        موجودی: 6,
        لایک: 130,
      },
    },
    {
      id: 11,
      title: "عینک ری‌بن مدل Aviator RB3025",
      price: 520000,
      image:
        "https://dkstatics-public.digikala.com/digikala-products/4a1522bedb54b913788f94d4387f64234b7e66ff_1672411230.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      specs: {
        جنس: "فلزی",
        فرم: "خلبانی",
        موجودی: 7,
        لایک: 150,
      },
    },
    {
      id: 12,
      title: "عینک پلیس مدل S1969",
      price: 430000,
      image:
        "https://dkstatics-public.digikala.com/digikala-products/113827545.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      specs: {
        جنس: "پلاستیکی",
        فرم: "مستطیل",
        موجودی: 10,
        لایک: 85,
      },
    },
    {
      id: 13,
      title: "عینک دیور مدل So Real",
      price: 590000,
      image:
        "https://dkstatics-public.digikala.com/digikala-products/121817909.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      specs: {
        جنس: "فلزی",
        فرم: "دایره",
        موجودی: 5,
        لایک: 90,
      },
    },
    {
      id: 14,
      title: "عینک پرادا مدل PR 01OS",
      price: 680000,
      image:
        "https://dkstatics-public.digikala.com/digikala-products/8c3f96f92b4632952f5c818d633b5806a0d27dc0_1723305948.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      specs: {
        جنس: "پلاستیکی",
        فرم: "لوزی",
        موجودی: 8,
        لایک: 110,
      },
    },
    {
      id: 15,
      title: "عینک اوکلی مدل Holbrook",
      price: 450000,
      image:
        "https://dkstatics-public.digikala.com/digikala-products/0201f4b677a2d858088e84b297d4edf2d94b196d_1628341549.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      specs: {
        جنس: "پلاستیکی",
        فرم: "دایره",
        موجودی: 9,
        لایک: 95,
      },
    },
  ];
  
  const shuffleArray = (array) =>
    array
      .map((item) => ({ item, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ item }) => item);
  
  const products = shuffleArray(rawProducts);
  
  export default products;