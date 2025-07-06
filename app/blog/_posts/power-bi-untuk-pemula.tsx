import { authors } from "@/lib/authors"
import {
  Blog,
  BlogAuthors,
  BlogCode,
  BlogContent,
  BlogH2,
  BlogHeader,
  BlogMeta,
  BlogParagraph,
  BlogReferences,
  BlogTitle,
  BlogLink,
  BlogBackLink,
} from "../_components/blog"
import { blogs } from "@/lib/data-blog"

function PowerBiBeginnerPage() {
  const postAuthors = [{ ...authors["rafadlis"], role: "Writer" }]
  const post = blogs.find((blog) => blog.slug === "power-bi-untuk-pemula")
  const references = [
    {
      title: "Get started building with Power BI - Microsoft Learn",
      url: "https://learn.microsoft.com/en-us/training/modules/get-started-with-power-bi",
    },
  ]

  if (!post) {
    return null
  }

  return (
    <Blog>
      <BlogHeader>
        <BlogBackLink href="/blog">Kembali ke Blog</BlogBackLink>
        <BlogTitle>{post?.title}</BlogTitle>
        <div className="flex w-full items-center justify-between">
          <BlogMeta date={post?.publishedAt} />
        </div>
        <BlogAuthors authors={postAuthors} />
      </BlogHeader>
      <BlogContent>
        <BlogParagraph>
          Apakah Anda butuh sebuah dashboard yang interaktif, gratis, dan
          datanya selalu ter-update secara otomatis? Jika Anda juga punya
          lisensi Microsoft 365, maka Power BI adalah pilihan yang sangat tepat.
          Power BI merupakan bagian dari ekosistem Microsoft yang sudah
          terintegrasi dengan produk lainnya.
        </BlogParagraph>

        <BlogH2>Mengapa Menggunakan Power BI?</BlogH2>
        <BlogParagraph>
          Mungkin Anda berpikir kenapa repot-repot menggunakan Power BI padahal
          bisa membuat dashboard di Excel? Bedanya, Power BI dibuat Microsoft
          khusus untuk membuat visualisasi data yang interaktif dengan kualitas
          tinggi. Analogikan kalo Excel tempat mengelola data, Word untuk
          membuat dokumen, dan PowerPoint untuk presentasi. Nah, Power BI adalah
          tempat untuk membuat visualisasi data yang interaktif dengan variasi
          bisual yang banyak, dan bisa dibagikan secara online.
        </BlogParagraph>

        <BlogH2>Cara Pakainya</BlogH2>
        <BlogParagraph>
          Belajar Power BI mending langsung praktik menggunakan aplikasinya
          sambil liat tutorial video. Karena belajar Power BI sangat bermain di
          visual, banyak sekali menu-menu yang <BlogCode>Dalem</BlogCode> untuk
          di-navigasi dan ditelusuri.
        </BlogParagraph>
        <BlogParagraph>
          Ada banyak sekali video tutorial di YouTube. Berikut adalah beberapa
          rekomendasi dari saya: (Bahasa Inggris):{" "}
          <BlogLink
            href="https://www.youtube.com/watch?v=VaOhNqNtGGE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Power BI Tutorial for Beginners (2025)
          </BlogLink>
          {", "}
          Kalo mau bahasa Indonesia-nya, tantangannya adalah menemukan konten
          yang paling baru, karena Power BI diperbarui setiap bulan. Kualitasnya
          yang kurang bagus (menurut saya), tapi ini link boleh dicoba:{" "}
          <BlogLink
            href="https://www.youtube.com/watch?v=wDsJp-PWIi4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Membuat Dashboard Dengan Power BI MUDAH!! | Portfolio Data Analyst
          </BlogLink>
          . Kalau mau nyari sendiri silahkan tapi harus diperhatiin tanggal
          rilis videonya, pastiin paling terbaru.
        </BlogParagraph>

        <BlogH2>Tips Belajar Power BI Secara Efektif</BlogH2>
        <BlogParagraph>
          Belajar Power BI menurut pengalaman saya bagusnya terus coba buat
          sesuatu, kalau nemu masalah atau stuk bisa tanya AI, atau coba cari di
          Google, pasti banyak referensi dan tutorial. Kalau mau akselerasi buat
          lebih cepat bisa, belajar langsung sama ahlinya by kasus atau ikutan
          kursus. Ini cara paling tercepat dan efektif.
        </BlogParagraph>

        <BlogH2>Kesimpulan</BlogH2>
        <BlogParagraph>
          Tanamkan dalam diri Anda bahwa belajar Power BI akan membuahkan hasil
          yang luar biasa. Kemampuan menyajikan data dengan baik akan sangat
          dihargai oleh pimpinan Anda, dan keahlian ini akan membuat Anda
          menonjol karena masih tergolong langka.
        </BlogParagraph>
        <BlogReferences references={references} />
      </BlogContent>
    </Blog>
  )
}

export default PowerBiBeginnerPage
