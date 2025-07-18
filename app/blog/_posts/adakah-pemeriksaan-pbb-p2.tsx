import {
  Blog,
  BlogAuthors,
  BlogBackLink,
  BlogCode,
  BlogContent,
  BlogH1,
  BlogH2,
  BlogH3,
  BlogH4,
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
          Undang-undang, 1 Peraturan Pemerintah, 2 Peraturan Menteri Keuangan, 1
          Peraturan Menteri ESDM, minimal 2 Aturan Daerah (PERKADA) , dan aturan
          lainnya yang penulis mungkin belum sebutkan
        </BlogQuote>
        <BlogH1>Kita Ke Pembahasan Inti</BlogH1>
        <BlogParagraph>
          Tidak ada jawaban eksplisit apakah PBB-P2 bisa diperiksa oleh
          Pemeriksa. Namun, kita perlu membaca aturan secara keseluruhan agar
          terlihat <BlogCode>Pagar-pagarnya</BlogCode>
        </BlogParagraph>
        <BlogH2>Aturan per Aturan</BlogH2>
        <BlogParagraph>
          Tahap pertama adalah memahami kata per kata. Harus paham dulu apa itu{" "}
          <BlogCode>Pemeriksaan</BlogCode>. Perlu diingat, kosa kata{" "}
          <BlogCode>Pemeriksaan</BlogCode> pasti dijelaskan dalam aturan
          perpajakan jika disebutkan. Merujuk pada dasar aturan perpajakan
          daerah secara hirarki, pemeriksaan disbutkan dalam Peraturan
          Pemerintah (PP) Nomor 35 tahun 2023 tentang Kentetuan Umum Pajak dan
          Retribusi Daerah. Di Pasal 1 ayat (75) disebutkan bahwa:
        </BlogParagraph>
        <BlogQuote>
          Pemeriksaan adalah serangkaian kegiatan menghimpun dan mengolah data,
          keterangan, dan/atau bukti yang dilaksanakan secara objektif dan
          profesional berdasarkan suatu standar Pemeriksaan untuk menguji
          kepatuhan pemenuhan kewajiban Pajak dan Retribusi dan/atau untuk
          tujuan lain dalam rangka melaksanakan ketentuan peraturan
          perundang-undangan perpajakan dan Retribusi Daerah.
        </BlogQuote>
        <BlogParagraph>
          Lalu pelaksana dari kegiatan Pemeriksaan Pajak Daerah disbutkan dalam
          Peraturan Menteri Keuangan (PMK) Nomor 7 tahun 2025 tentang Pedoman
          Pemeriksaan dan Penagihan pajak Daerah. Disebutkan dalam pasal 1 ayat
          (6), (7), dan (8) disebutkan secara berurutan bahwa:
        </BlogParagraph>
        <BlogQuote>
          Pejabat Pemeriksa Pajak yang selanjutnya disebut Pejabat Pemeriksa
          adalah pejabat fungsional pengawas keuangan negara di lingkungan
          Pemerintah Daerah yang diberikan tugas dan ruang lingkup kegiatan
          untuk melakukan Pemeriksaan di bidang Pajak.
        </BlogQuote>
        <BlogQuote>
          Petugas Pemeriksa Pajak yang selanjutnya disebut Petugas Pemeriksa
          adalah pegawai negeri sipil di lingkungan Pemerintah Daerah yang
          ditunjuk oleh Kepala Daerah, diberi tugas, wewenang, tanggung jawab,
          dan memiliki kemampuan untuk melaksanakan Pemeriksaan.
        </BlogQuote>
        <BlogQuote>
          Pemeriksa Pajak yang selanjutnya disebut Pemeriksa adalah Pejabat
          Pemeriksa dan/atau Petugas Pemeriksa di lingkungan Pemerintah Daerah,
          yang diberikan tugas dan ruang lingkup kegiatan untuk melakukan
          Pemeriksaan di bidang Pajak.
        </BlogQuote>
        <BlogParagraph>
          Setelah jelas apa itu pemeriksaan dan siapa yang melakukannya, di PMK
          itu juga dijelaskan ruang lingkup kegiatan pemeriksaan. Disebutkan
          dalam Pasal 4 dan pasal 64 secara berurutan bahwa:
        </BlogParagraph>
        <BlogQuote>
          Ruang lingkup Pemeriksaan untuk menguji kepatuhan pemenuhan kewajiban
          Pajak dapat meliputi satu, beberapa, atau seluruh jenis Pajak, baik
          untuk satu atau beberapa Masa Pajak, bagian Tahun Pajak, atau Tahun
          Pajak dalam tahun tahun sebelumnya maupun tahun berjalan.
        </BlogQuote>
        <BlogQuote>
          Ruang lingkup Pemeriksaan untuk tujuan lain dapat meliputi penentuan,
          pencocokan, atau pengumpulan materi yang berkaitan dengan tujuan
          Pemeriksaan.
        </BlogQuote>
        <BlogParagraph>
          Apa dari sini sudah bisa disimpulkan? mungkin beberapa ada yang bilang
          sudah. Tapi kalau kita perdalam lagi, pemeriksaan terbagi lagi menjadi
          beberapa kriteria dari luang lingkup yang sudah disebutkan. Disebutkan
          pasal 5 ayat (1) untuk kelanjutan pasal 4 dan pasal 65 ayat (1) untuk
          kelanjutan pasal 64 secara berurutan bahwa:
        </BlogParagraph>
        <BlogQuote>
          Pemeriksaan untuk menguji kepatuhan pemenuhan kewajiban Pajak
          sebagaimana dimaksud dalam Pasal 4, dilakukan dalam hal: a. Wajib
          Pajak mengajukan permohonan pengembalian atau kompensasi kelebihan
          pembayaran Pajak; b. terdapat keterangan lain berupa Data Konkret yang
          menunjukkan bahwa Pajak yang terutang tidak atau kurang dibayar; atau
          c. Wajib Pajak yang terpilih untuk dilakukan Pemeriksaan berdasarkan
          Analisis Risiko.
        </BlogQuote>
        <BlogQuote>
          Pemeriksaan untuk tujuan lain dilakukan dengan kriteria paling
          sedikit: a. pemberian NPWPD secara jabatan; b. penghapusan NPWPD; c.
          penyelesaian permohonan keberatan Wajib Pajak; d. pencocokan data
          dan/atau alat keterangan; dan/atau e. Pemeriksaan dalam rangka
          Penagihan Pajak.
        </BlogQuote>
        <BlogParagraph>
          Lalu lebih lengkapnya pasal 65 ayat (2) disebutkan bahwa:
        </BlogParagraph>
        <BlogQuote>
          Pemeriksaan dalam rangka Penagihan Pajak sebagaimana dimaksud pada
          ayat (1) huruf e dilakukan untuk memperoleh data, keterangan dan bukti
          yang berkaitan dengan: a. harta yang dimiliki Wajib Pajak/Penanggung
          Pajak; b. proses timbulnya tunggakan pajak berdasarkan LHP, KKP dan
          atau Berita Acara Hasil Pemeriksaan; c. kegiatan penagihan aktif yang
          dilakukan; dan d. upaya hukum dari Wajib Pajak/Penanggung Pajak.
        </BlogQuote>
        <BlogH2>Sudah bisa disimpulkan?</BlogH2>
        <BlogParagraph>
          Dari aturan yang sudah disebutkan diatas mungkin tidak sedikit yang
          menyimpulkan bahwa PBB-P2 bisa diperiksa oleh Pemeriksa Pajak Daerah.
          Tapi perhatikan kembali, Pemeriksaan PBB-P2 masuk kedalam kritaria
          atau pasal yang mana?
        </BlogParagraph>
        <BlogH3>
          {" "}
          @ Pemeriksaan untuk menguji kepatuhan pemenuhan kewajiban Pajak
          sebagaimana dimaksud dalam Pasal 4, dilakukan dalam hal ... Terdapat
          keterangan lain berupa Data Konkret yang menunjukkan bahwa Pajak yang
          terutang tidak atau kurang dibayar
        </BlogH3>
        <BlogParagraph>
          Apakah dengan klausul diatas kita bisa menyimpulkan bahwa PBB-P2 bisa
          diperiksa oleh Pemeriksa Pajak Daerah?
        </BlogParagraph>
        <BlogQuote>
          Belum tentu, Kenapa? kita harus memahami kembali apa itu{" "}
          <BlogCode>Keterangan Lain</BlogCode>,{" "}
          <BlogCode>Data Konkret</BlogCode>,
          <BlogCode>Pajak yang Terutang</BlogCode>,
          <BlogCode>Tidak dibayar</BlogCode>, dan
          <BlogCode>kurang dibayar</BlogCode>.
        </BlogQuote>
        <BlogParagraph>
          Frasa dari <BlogCode>Keterangan Lain</BlogCode> memiliki makna yang
          krusial. Di situ terdapat kata <BlogCode>Lain</BlogCode> yang artinya
          hal dimaksud bukan sebuah yang utama, yang biasanya, atau umumnya. Di
          sini kita harus membedakan mana yang disebut{" "}
          <BlogCode>Keterangan</BlogCode> dan mana yang disebut{" "}
          <BlogCode>Keterangan Lain</BlogCode>.
        </BlogParagraph>
        <BlogParagraph>
          Lalu ada <BlogCode>Data Konkret</BlogCode>. Frasa tersebut terdiri
          dari 2 kata yaitu <BlogCode>Data</BlogCode> dan{" "}
          <BlogCode>Konkret</BlogCode> dimana tidak dijelaskan dalam Pasal 1.
          Maka dari itu, kita gunakan pengertian pada umumnya atau pengertian
          yang baku yang secara legal dijelaskan dalam KBBI. Kata{" "}
          <BlogCode>Data</BlogCode>
          berdasarkan KBBI berarti:
          <BlogQuote>
            <BlogCode>n</BlogCode> keterangan yang benar dan nyata
          </BlogQuote>
          <BlogQuote>
            <BlogCode>n</BlogCode>
            keterangan atau bahan nyata yang dapat dijadikan dasar kajian
            (analisis atau kesimpulan)
          </BlogQuote>
          <BlogQuote>
            <BlogCode>n komp</BlogCode>
            informasi dalam bentuk yang dapat diproses oleh komputer, seperti
            representasi digital dari teks, angka, gambar grafis, atau suara
          </BlogQuote>
        </BlogParagraph>
        <BlogParagraph>
          Sedangkan kata <BlogCode>Konkret</BlogCode> berdasarkan KBBI berarti:
        </BlogParagraph>
        <BlogQuote>
          <BlogCode>a</BlogCode>
          nyata; benar-benar ada (berwujud, dapat dilihat, diraba, dan
          sebagainya)
        </BlogQuote>
        <BlogParagraph>
          Lalu lanjut ke frasa <BlogCode>Pajak yang Terutang</BlogCode>. kata{" "}
          <BlogCode>Terutang</BlogCode> dijelaskan dalam pasal 4 ayat (1) PP 35
          tahun 2023 tentang kentetuan umum pajak dan retribusi daerah yang
          berbunyi:
        </BlogParagraph>
        <BlogQuote>
          Saat terutang Pajak ditetapkan pada saat orang pribadi atau Badan
          telah memenuhi syarat subjektif dan objektif atas suatu jenis Pajak
          dalam 1 (satu) kurun waktu tertentu dalam masa Pajak, dalam Tahun
          Pajak, atau bagian Tahun Pajak sesuai dengan ketentuan peraturan
          perundang-undangan mengenai perpajakan Daerah.
        </BlogQuote>
        <BlogParagraph>
          Lalu untuk PBB-P2, pengertian subjeknya dijelaskan dalam Pasal 39 ayat
          (1) dan objeknya pasal 38 ayat (1) Undang-undang Nomor 1 tahun 2022
          tentang Hubungan Keuangan Pusat dan Daerah yang secara berurutan
          berbunyi:
        </BlogParagraph>
        <BlogQuote>
          Subjek Pajak PBB-P2 adalah orang pribadi atau Badan yang secara nyata
          mempunyai suatu hak atas Bumi dan/atau memperoleh manfaat atas Bumi,
          dan/atau memiliki, menguasai, dan/ atau memperoleh manfaat atas
          Bangunan.
        </BlogQuote>
        <BlogQuote>
          Objek PBB-P2 adalah Bumi dan/atau Bangunan yang dimiliki, dikuasai,
          dan/atau dimanfaatkan oleh orang pribadi atau Badan, kecuali kawasan
          yang digunakan untuk kegiatan usaha perkebunan, perhutanan, dan
          pertambangan.
        </BlogQuote>
        <BlogParagraph>
          Selanjutnya ada frasa <BlogCode>Tidak dibayar</BlogCode> dan{" "}
          <BlogCode>kurang dibayar</BlogCode>. Arti kata{" "}
          <BlogCode>Tidak dibayar</BlogCode> berarti ada sesuatu yang harus
          dibayar karena suatu hal tapi tidak dibayar sedangkan{" "}
          <BlogCode>kurang dibayar</BlogCode> berarti ada sesuatu yang harus
          dibayar karena suatu hal tapi hanya dibayar sebagian saja sehingga ada
          sisa yang harus dibayar.
        </BlogParagraph>
        <BlogParagraph>
          {" "}
          Mari kita uji, dari penjelasan diatas, apakah ada skenario PBB-P2 yang
          cocok dengan klausul diatas?
        </BlogParagraph>
        <BlogH4>Argumen 1</BlogH4>
        <BlogParagraph>
          Bisa tuh kalo ada Wajib Pajak yang dia tidak bayar-bayar terus udah
          tenggat waktu
        </BlogParagraph>
      </BlogContent>
    </Blog>
  )
}
