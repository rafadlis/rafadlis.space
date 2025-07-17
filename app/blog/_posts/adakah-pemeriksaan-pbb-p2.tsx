import {
  Blog,
  BlogAuthors,
  BlogBackLink,
  BlogCode,
  BlogContent,
  BlogH1,
  BlogH2,
  BlogHeader,
  BlogMeta,
  BlogParagraph,
  BlogQuote,
  BlogTitle,
} from "../_components/blog"
import { authors } from "@/lib/authors"
import { blogs } from "@/lib/data-blog"

export default function AdakahPemeriksaanPbbP2() {
  const postAuthors = [{ ...authors["rafadlis"], role: "Writer" }]
  const post = blogs.find((blog) => blog.slug === "adakah-pemeriksaan-pbb-p2")

  if (!post) {
    return null
  }

  return (
    <Blog>
      <BlogHeader>
        <BlogBackLink href="/blog">Back to Blog</BlogBackLink>
        <BlogMeta date={post.publishedAt} />
        <BlogTitle>{post.title}</BlogTitle>
        <BlogAuthors authors={postAuthors} />
      </BlogHeader>
      <BlogContent>
        <BlogParagraph>
          Pajak Bumi dan Bangunan Perdesaan dan Perkotaan (PBB-P2) merupakan
          salah satu jenis pajak daerah yang dikelola oleh pemerintah
          kabupaten/kota. Sifat dari pajak tersebut adalah{" "}
          <BlogCode>Official Assessment</BlogCode> dimana Pemerintah Daerah yang
          menentukan nilai pajak yang harus dibayar. Tidak sedikit yang
          memperdapatkan:
        </BlogParagraph>
        <BlogQuote>
          Apakah PBB-P2 bisa diperiksa Pemeriksa Pajak Daerah?
        </BlogQuote>
        <BlogParagraph>
          Ada yang beragumen kenapa sesuatu yang sudah ditetapkan oleh
          Pemerintah Daerah Sendiri diperiksa oleh Pemeriksa Pajak Daerah yang
          padahal sudah ditetapkan oleh Pemerintah Daerah Sendiri. Kesannya
          seperti <BlogCode>Menjelekkan</BlogCode> diri sendiri.
        </BlogParagraph>
        <BlogH1>The Root Problem</BlogH1>
        <BlogParagraph>
          Perdebatan ini bisa terjadi karena Perbedaan aturan perpajakan setiap
          daerah dan engganya berliterasi. Aturan pajak di Indonesia bisa
          dibilang cukup berbelit dan menurut saya banyak sekali{" "}
          <BlogCode>Bolong-bolong</BlogCode> di aturan perpajakan masing-masing
          daerah. Ditambah tidak sedikit petugas pajak yang tidak memahami
          aturan pajak itu sendiri.
        </BlogParagraph>
        <BlogH2>Kembali ke Dasar</BlogH2>
        <BlogParagraph>
          Kadang perdebatan terjadi karena banyak yang tidak memahami cara
          membaca sebuah perundang-undangan mulai dari mendefinisikan sebuah
          kata. Sering kita jumpai dalam peraturan Indonesia, ada Pasal 1 yang
          menjabarkan setiap isitilah atau kosakata yang sekiranya penting dan
          dapat memunculkan multi tafsir. Alangkah sangat baiknya jika kita
          selalu membaca pasal 1 secara keseluruhan karena itu dasar yang sangat
          dasar untuk memahami sebuah aturan perundang-undangan.
        </BlogParagraph>
        <BlogH2>Makannya...</BlogH2>
        <BlogParagraph>
          Perdebatan akan sangat sering terjadi jika ada kesungkanan
          beriliterasi dan tidak memahami dasar peraturan yang dibaca. Ditambah
          lagi jika tidak membaca aturan secara keseluruhan. Menurut pengalaman
          saya, membaca sebuah aturan pajak tidak bisa{" "}
          <BlogCode>setengah-setengah</BlogCode> karena saling berkaitan apalagi
          hanya membaca 1 aturan perpajakan.
        </BlogParagraph>
        <BlogQuote>
          Di Pemerintah Daerah, yang mengatur mengenai pajak daerah ada 1
          Undang-undang, 1 Peraturan Pemerintah, 2 Peraturan Menteri Keuangan,
          dan minimal 2 Aturan Daerah (PERKADA){" "}
        </BlogQuote>
        <BlogH1>Kita Ke Pembahasan Inti</BlogH1>
      </BlogContent>
    </Blog>
  )
}
