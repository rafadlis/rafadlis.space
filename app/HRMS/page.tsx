import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ArrowsOutCardinalIcon,
  HeartIcon,
  WrenchIcon,
  TargetIcon,
  TrendUpIcon,
  CurrencyDollarIcon,
  GearIcon,
  ChalkboardTeacherIcon,
  ClockIcon,
  Question,
} from "@phosphor-icons/react/dist/ssr"
import type { Metadata } from "next"
import Image from "next/image"
import { LogoIcon } from "./_components/tirta-kencana-logo"
import { TermsAndConditions } from "./_components/terms-and-conditions"

export const metadata: Metadata = {
  title: "Hotel & Resort Management System",
  description: "Powerfull and Custom app for hotel and resort",
  keywords: ["hotel", "resort", "management", "system", "custom", "app"],
  openGraph: {
    title: "Hotel & Resort Management System",
    description: "Custom app for hotel and resort",
    siteName: "HRMS Brand",
  },
}

export default function HRMS() {
  const galleryImages = [
    {
      src: "/app-tirtakencana/01-front-office-main-page.png",
      alt: "Tampilan utama Front Office dengan ringkasan status kamar dan aktivitas.",
    },
    {
      src: "/app-tirtakencana/02-front-office-billing.png",
      alt: "Antarmuka Billing yang terintegrasi untuk pengelolaan tagihan tamu.",
    },
    {
      src: "/app-tirtakencana/03-front-office-calendar.png",
      alt: "Tampilan kalender interaktif untuk manajemen reservasi dan ketersediaan kamar.",
    },
    {
      src: "/app-tirtakencana/04-front-office-walk-in-form.png",
      alt: "Formulir digital untuk proses check-in tamu walk-in yang cepat.",
    },
    {
      src: "/app-tirtakencana/05-front-office-multi-rooms.png",
      alt: "Fitur untuk menangani pemesanan beberapa kamar dalam satu transaksi.",
    },
    {
      src: "/app-tirtakencana/06-front-office-guest-detail.png",
      alt: "Halaman detail tamu dengan riwayat lengkap dan preferensi.",
    },
    {
      src: "/app-tirtakencana/07-owner-main-page.png",
      alt: "Dashboard khusus untuk pemilik dengan laporan dan insight bisnis.",
    },
    {
      src: "/app-tirtakencana/08-back-office-laporan-piutang.png",
      alt: "Laporan piutang terperinci untuk back-office.",
    },
    {
      src: "/app-tirtakencana/09-back-office-laporan-harian.png",
      alt: "Laporan pendapatan harian yang dihasilkan secara otomatis.",
    },
  ]
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <article className="max-w-prose w-full flex flex-col gap-4 sm:gap-6 py-8 sm:py-12">
        <section>
          <h1 className="text-4xl font-black">
            HRMS{" "}
            <span
              aria-hidden="true"
              className="text-sm font-light text-muted-foreground/50"
            >
              by rafadlis.space
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Solusi Sistem Manajemen Hotel & Resort yang Revolusioner
          </p>
          <div className="flex gap-2 max-w-prose flex-wrap mt-4">
            <Button variant="outline">
              <ArrowsOutCardinalIcon className="text-muted-foreground" />
              Fleksibel
            </Button>
            <Button variant="outline">
              <HeartIcon className="text-muted-foreground" />
              User Friendly
            </Button>
            <Button variant="outline">
              <WrenchIcon className="text-muted-foreground" />
              Kustomisasi
            </Button>
            <Button variant="outline">
              <TargetIcon className="text-muted-foreground" />
              Tepat Sasaran
            </Button>
            <Button variant="outline">
              <TrendUpIcon className="text-muted-foreground" />
              Berkembang
            </Button>
            <Button variant="outline">
              <CurrencyDollarIcon className="text-muted-foreground" />
              Hemat Biaya
            </Button>
          </div>
        </section>

        <section className="max-w-prose flex flex-col">
          <p className="text-justify mb-4">
            Sistem manajemen ini dirancang khusus untuk beradaptasi dengan
            keunikan operasional hotel dan resort Anda. Bukan sekadar
            digitalisasi, tetapi <strong>optimalisasi penuh</strong> dari proses
            bisnis yang sudah ada. Setiap hotel memiliki karakteristik dan SOP
            yang berbeda, oleh karena itu sistem ini fleksibel mengikuti alur
            kerja tim Anda.
          </p>

          <h2 className="text-2xl font-extrabold mt-4 sm:mt-6">
            Metodologi Kerja
          </h2>

          <div className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <h3 className="mt-1 shrink-0 bg-muted rounded-md border size-8 flex items-center justify-center self-start sm:self-auto">
                <span>1</span>{" "}
                <span className="sr-only">Interview and Field Visit</span>
              </h3>
              <div>
                <h4 className="font-semibold">
                  Wawancara & Kunjungan Lapangan
                </h4>
                <p className="text-justify text-muted-foreground">
                  Kami melakukan wawancara mendalam dengan manajemen dan staf
                  serta kunjungan lapangan untuk memetakan alur kerja secara
                  detail dan memahami tantangan operasional secara langsung.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <h3 className="mt-1 shrink-0 bg-muted rounded-md border size-8 flex items-center justify-center self-start sm:self-auto">
                <span>2</span>{" "}
                <span className="sr-only">
                  Creating budget plan and contract
                </span>
              </h3>
              <div>
                <h4 className="font-semibold">Penyusunan Anggaran & Kontrak</h4>
                <p className="text-justify text-muted-foreground">
                  Setelah pemahaman terbentuk, kami menyusun proposal anggaran
                  yang transparan dan kontrak kerja yang fleksibel. Kami
                  menyediakan opsi pembayaran bertahap untuk membantu manajemen
                  arus kas Anda.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <h3 className="mt-1 shrink-0 bg-muted rounded-md border size-8 flex items-center justify-center self-start sm:self-auto">
                <span>3</span> <span className="sr-only">Analisis</span>
              </h3>
              <div>
                <h4 className="font-semibold">Analisis Mendalam</h4>
                <p className="text-justify text-muted-foreground">
                  Dilakukan analisis komprehensif terhadap seluruh aspek
                  operasional: workflow existing, infrastruktur IT, pemetaan
                  area hotel, analisis SDM, dan identifikasi pain points. Proses
                  ini memastikan solusi yang tepat sasaran.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <h3 className="mt-1 shrink-0 bg-muted rounded-md border size-8 flex items-center justify-center self-start sm:self-auto">
                <span>4</span> <span className="sr-only">Pengembangan</span>
              </h3>
              <div>
                <h4 className="font-semibold">Pengembangan Cepat & Iteratif</h4>
                <p className="text-justify text-muted-foreground">
                  Dengan pendekatan <em>agile</em>, kami membangun sistem
                  fungsional yang siap digunakan untuk operasional inti dalam{" "}
                  <strong>1-2 bulan pertama</strong>. Proses ini berjalan sambil
                  mendampingi tim hotel, memungkinkan testing langsung dan
                  penyesuaian berdasarkan feedback real-time.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <h3 className="mt-1 shrink-0 bg-muted rounded-md border size-8 flex items-center justify-center self-start sm:self-auto">
                <span>5</span> <span className="sr-only">Implementasi</span>
              </h3>
              <div>
                <h4 className="font-semibold">Implementasi & Penyempurnaan</h4>
                <p className="text-justify text-muted-foreground">
                  Setelah sistem inti berjalan, <strong>bulan ketiga</strong>{" "}
                  didedikasikan untuk penyempurnaan (perfection). Kami melakukan
                  pendampingan intensif, memoles setiap detail berdasarkan
                  penggunaan nyata, dan memastikan sistem benar-benar menyatu
                  dengan alur kerja unik hotel Anda untuk kesuksesan jangka
                  panjang.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6">
            <div className="border rounded-lg p-3 sm:p-4 flex flex-row gap-3 items-center">
              <GearIcon className="size-6 text-muted-foreground shrink-0" />
              <div>
                <h3>Tidak Mengganggu Operasional</h3>
                <p className="text-sm text-muted-foreground">
                  Implementasi bertahap tanpa menghentikan aktivitas hotel
                </p>
              </div>
            </div>
            <div className="border rounded-lg p-3 sm:p-4 flex flex-row gap-3 items-center">
              <ChalkboardTeacherIcon className="size-6 text-muted-foreground shrink-0" />
              <div>
                <h3>Pelatihan Komprehensif</h3>
                <p className="text-sm text-muted-foreground">
                  mendampingi hingga seluruh staff mahir menggunakan sistem
                </p>
              </div>
            </div>
            <div className="border rounded-lg p-3 sm:p-4 flex flex-row gap-3 items-center">
              <ClockIcon className="size-6 text-muted-foreground shrink-0" />
              <div>
                <h3>Support 24/7</h3>
                <p className="text-sm text-muted-foreground">
                  Bantuan teknis dan konsultasi tersedia kapan saja
                </p>
              </div>
            </div>
          </div>

          <p className="text-justify pt-4 sm:pt-6">
            <strong>Keunggulan Metodologi UX-Driven:</strong> Dengan menerapkan
            prinsip User Experience Design yang terbukti, setiap interaksi
            dengan sistem memberikan nilai maksimal bagi pengguna. Hasilnya
            adalah sistem yang tidak hanya powerful, tetapi juga intuitif dan
            meningkatkan produktivitas tim hotel Anda.
          </p>
        </section>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-2xl font-extrabold mb-3 sm:mb-4">Trusted by</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 border rounded-lg">
            <LogoIcon className="w-12 h-12 shrink-0 sm:h-16 sm:w-16" />
            <div>
              <h3 className="text-lg font-semibold">
                Tirta Kencana Hotel & Resort
              </h3>
              <p className="text-sm text-muted-foreground">
                Custom management system for streamlined hotel operations
              </p>
            </div>
          </div>
          <div className="mt-4 border-l-4 border-muted pl-4 italic text-muted-foreground">
            <blockquote className="text-justify text-foreground not-italic">
              sangat membantu, mempermudah proses check in, pokona mah the best
              wkwk hidup aplikasi 😂
            </blockquote>
            <footer className="mt-2">
              — Artini & Dentia, Petugas Resepsionist Tirta Kencana
            </footer>
          </div>

          <div className="mt-6">
            <div className="grid grid-cols-1 gap-4">
              {galleryImages.map((image) => (
                <div
                  key={image.src}
                  className="border rounded-lg overflow-hidden group print:break-inside-avoid"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1280}
                    height={720}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                  <p className="p-3 text-xs text-muted-foreground">
                    {image.alt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 sm:mt-8">
          <h2 className="text-2xl font-extrabold mb-3 sm:mb-4">Pricing</h2>
          <p className="text-justify">
            Harga fleksibel disesuaikan dengan kebutuhan hotel Anda. Sistem
            menggunakan metode add-on sehingga Anda hanya membayar fitur yang
            benar-benar digunakan.
          </p>

          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="mt-6 sm:mt-8">
              <h3 className="font-semibold mb-2 sm:mb-3">
                Harga Tawaran Dasar
              </h3>
              <div className="border rounded-lg overflow-hidden pb-4">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/3 text-muted-foreground min-w-[120px]">
                          Module
                        </TableHead>
                        <TableHead className="w-1/2 text-muted-foreground min-w-[180px]">
                          Description
                        </TableHead>
                        <TableHead className="w-1/6 text-right text-muted-foreground min-w-[80px]">
                          Price (Rp)*
                        </TableHead>
                        <TableHead className="w-1/6 text-muted-foreground min-w-[70px]">
                          Payment
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal">
                          Front Office Management
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          Check-in/out tamu, reservasi kamar, penugasan kamar
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          ~
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          1x
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal">
                          Housekeeping System
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          Tracking status kamar, jadwal cleaning, maintenance
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          ~
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          1x
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal">
                          Back Office Operations
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          Manajemen staff, penjadwalan shift, laporan
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          ~
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          1x
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal">
                          Financial Management
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          Billing, invoicing, proses pembayaran
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          ~
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          1x
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal">
                          Training Pegawai
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          Pelatihan langsung di hotel sambil bekerja selama 3
                          bulan
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          ~
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          1x
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal">
                          Server & Hosting**
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          Biaya tahunan server agar bisa online
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          3,000,000
                        </TableCell>
                        <TableCell className="text-right font-mono">
                          / tahun
                        </TableCell>
                      </TableRow>
                      <TableRow className="bg-muted/20">
                        <TableCell className="font-bold whitespace-normal">
                          Total
                        </TableCell>
                        <TableCell className="font-medium whitespace-normal"></TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          33,000,000
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          / pertama
                        </TableCell>
                      </TableRow>
                    </TableBody>
                    <TableCaption>
                      <p className="text-left px-2">
                        *Harga flexible, masih bisa di diskusikan <br />
                        **Server ini optional, tapi direkomendasikan menggunakan
                        server
                      </p>
                    </TableCaption>
                  </Table>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <h3 className="font-semibold mb-2 sm:mb-3">Harga Add-On</h3>
              <p className="mb-4 text-justify text-muted-foreground">
                Harga add-on dapat disesuaikan dan masih dapat didiskusikan
                berdasarkan kebutuhan spesifik hotel Anda. Add-on dapat dibeli
                kapan saja setelah implementasi sistem utama, tidak ada batasan
                waktu.
              </p>
              <div className="border rounded-lg overflow-hidden pb-4">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/3 text-muted-foreground min-w-[120px]">
                          Module
                        </TableHead>
                        <TableHead className="w-1/2 text-muted-foreground min-w-[180px]">
                          Description
                        </TableHead>
                        <TableHead className="w-1/6 text-right text-muted-foreground min-w-[80px]">
                          Price (Rp)*
                        </TableHead>
                        <TableHead className="w-1/6 text-muted-foreground min-w-[70px]">
                          Payment
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal">
                          Restaurant POS
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          Manajemen F&B, kontrol menu, pesanan dapur
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          8,000,000
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          1x
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal">
                          Guest App
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          Layanan online tamu untuk Booking, permintaan
                          concierge, dan pesan F&B
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          12,000,000
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          1x
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal">
                          Payment Gateway
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          Pembayaran lewat QRIS, GOPAY, Visa, Mastercard,
                          Virtual Account, dan lainnya
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          9,000,000
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          1x
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal">
                          Advanced Analytics & BI
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          Analisis revenue, forecasting okupansi, business
                          insights
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          10,000,000
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          1x
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="whitespace-normal font-medium">
                          WhatsApp Notif
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          Notifikasi otomatis melalui WhatsApp ke tamu dan
                          pegawai seperti notif kamar vacant ke Housekeeping
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          **1,000,000
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          / 1,000 notif
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal">
                          Spa & Wellness Management
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          Booking treatment, jadwal therapist, inventory
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          6,000,000
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          1x
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal">
                          Event & Conference Management
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          Booking ruang meeting, manajemen equipment, catering
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          7,000,000
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          1x
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-normal">
                          Penyerahan Source Code
                        </TableCell>
                        <TableCell className="whitespace-normal">
                          Penyerahan seluruh kode sumber aplikasi untuk dikelola
                          secara mandiri oleh Klien.
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          Kesepakatan
                        </TableCell>
                        <TableCell className="text-right whitespace-nowrap font-mono">
                          1x
                        </TableCell>
                      </TableRow>
                    </TableBody>
                    <TableCaption>
                      <p className="text-left px-2">
                        *Harga tidak baku, masih bisa di diskusikan <br />
                        **Harga tergantung dari Meta (Facebook) dan kurs USD
                      </p>
                    </TableCaption>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-extrabold mt-4 sm:mt-6">
            Cara Kami Mendapat Untung
          </h2>
          <p className="text-justify mb-6 mt-2">
            Kami memahami keraguan Anda terhadap harga yang kami tawarkan. Demi
            membangun kepercayaan, kami akan menjelaskan secara transparan
            bagaimana kami dapat memberikan solusi berkualitas tinggi dengan
            harga yang kompetitif.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="border rounded-lg p-3 sm:p-4 flex flex-row gap-3 items-start">
              <TargetIcon className="size-6 text-muted-foreground shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Tim Efisien & Fokus</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Berbeda dengan provider konvensional yang memiliki ratusan
                  karyawan dengan overhead tinggi, kami menjalankan operasi
                  dengan tim compact: 2 spesialis bisnis development dan 1
                  senior developer dengan pengalaman 4+ tahun.
                </p>
              </div>
            </div>

            <div className="border rounded-lg p-3 sm:p-4">
              <div className="flex flex-row gap-3 items-start mb-3">
                <ArrowsOutCardinalIcon className="size-6 text-muted-foreground shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Model Kerja Fleksibel</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Beroperasi 100% remote tanpa kantor fisik, menghilangkan
                    biaya sewa, utilitas, dan overhead operasional yang biasanya
                    ditanggung klien.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="border rounded-md p-2 sm:p-3 flex flex-row gap-2 items-center bg-muted/10">
                  <WrenchIcon className="size-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium">Tim Freelance</p>
                    <p className="text-xs text-muted-foreground">
                      Berpengalaman dengan fleksibilitas tinggi
                    </p>
                  </div>
                </div>

                <div className="border rounded-md p-2 sm:p-3 flex flex-row gap-2 items-center bg-muted/10">
                  <HeartIcon className="size-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium">Passion Project</p>
                    <p className="text-xs text-muted-foreground">
                      Sebagian besar menjalankan sebagai sampingan
                    </p>
                  </div>
                </div>

                <div className="border rounded-md p-2 sm:p-3 flex flex-row gap-2 items-center bg-muted/10">
                  <TargetIcon className="size-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium">Fokus Kualitas</p>
                    <p className="text-xs text-muted-foreground">
                      Hasil terbaik, bukan jam kerja konvensional
                    </p>
                  </div>
                </div>

                <div className="border rounded-md p-2 sm:p-3 flex flex-row gap-2 items-center bg-muted/10">
                  <CurrencyDollarIcon className="size-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs font-medium">Margin Fleksibel</p>
                    <p className="text-xs text-muted-foreground">
                      Tidak bergantung pada keuntungan tinggi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-3 sm:p-4 flex flex-row gap-3 items-start">
              <GearIcon className="size-6 text-muted-foreground shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Teknologi Modern & AI</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Memanfaatkan teknologi terdepan termasuk AI untuk
                  mengoptimalkan proses development. Memungkinkan pengembangan
                  aplikasi 3x lebih cepat, sehingga biaya development dapat
                  ditekan signifikan.
                </p>
              </div>
            </div>

            <div className="border rounded-lg p-3 sm:p-4 flex flex-row gap-3 items-start">
              <TrendUpIcon className="size-6 text-muted-foreground shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Infrastruktur Cloud Modern</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Era cloud computing menurunkan drastis biaya server, hosting,
                  dan infrastruktur IT. Teknologi cloud terbaru memberikan
                  performa tinggi dengan biaya minimal yang diteruskan kepada
                  klien.
                </p>
              </div>
            </div>

            <div className="border rounded-lg p-3 sm:p-4 flex flex-row gap-3 items-start bg-muted/20">
              <HeartIcon className="size-6 text-muted-foreground shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold">Komitmen Kualitas</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Harga rendah bukan berarti kualitas rendah. Dengan efisiensi
                  operasional dan teknologi modern, kami memberikan solusi
                  enterprise-grade dengan investasi yang masuk akal untuk hotel
                  Anda.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-8 sm:mt-12">
          <h2 className="text-2xl font-extrabold mb-6">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <div className="space-y-8">
            <div className="flex flex-row gap-4 items-start">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground mt-1">
                <Question weight="bold" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Kami sudah punya sistem yang berjalan, walaupun semi-manual.
                  Seberapa besar potensi gangguan pada operasional harian kami
                  selama proses transisi?
                </h3>
                <p className="mt-2 text-muted-foreground text-justify">
                  Ini adalah kekhawatiran yang sangat valid dan menjadi
                  prioritas utama kami. Metodologi kami dirancang untuk{" "}
                  <strong>implementasi bertahap (phased implementation)</strong>
                  . Kami tidak akan mengganti semua sistem Anda dalam satu
                  malam. Kita mulai dengan modul yang paling tidak disruptif,
                  menjalankannya secara paralel dengan sistem lama Anda, dan
                  hanya beralih sepenuhnya ketika tim Anda sudah 100% nyaman dan
                  terlatih. Tujuannya adalah <strong>zero downtime</strong>{" "}
                  untuk operasional hotel Anda.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-start">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground mt-1">
                <Question weight="bold" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Staf kami usianya beragam dan tidak semuanya mahir teknologi.
                  Apakah sistem ini akan sulit dipelajari dan malah memperlambat
                  kerja mereka?
                </h3>
                <p className="mt-2 text-muted-foreground text-justify">
                  Justru sebaliknya, dan inilah keunggulan utama kami. Kami
                  menerapkan pendekatan{" "}
                  <strong>User Experience (UX) Driven</strong>, yang artinya
                  kami membangun sistem berdasarkan alur kerja alami staf Anda,
                  bukan memaksa mereka belajar alur kerja baru yang rumit.
                  Selama fase analisis, kami akan memetakan cara kerja tim Anda
                  dan merancang antarmuka yang intuitif dan mudah digunakan.
                  Kami juga menyediakan{" "}
                  <strong>pendampingan intensif selama 3 bulan</strong> di mana
                  tim kami akan melatih dan membantu staf Anda secara langsung
                  hingga mereka mahir.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-start">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground mt-1">
                <Question weight="bold" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Hotel kami adalah boutique hotel dengan banyak permintaan unik
                  dari tamu. Bisakah sistem ini benar-benar disesuaikan, atau
                  ini hanya template yang sedikit dimodifikasi?
                </h3>
                <p className="mt-2 text-muted-foreground text-justify">
                  Kami tidak menjual produk jadi (off-the-shelf). Apa yang kami
                  tawarkan adalah{" "}
                  <strong>kerangka kerja (framework) yang fleksibel</strong> dan
                  layanan pengembangan khusus. Proses kami dimulai dengan
                  wawancara mendalam untuk memahami SOP dan
                  &ldquo;keunikan&rdquo; hotel Anda. Sebagai contoh, jika Anda
                  memiliki paket spa khusus yang terintegrasi dengan reservasi
                  kamar, atau sistem poin loyalitas yang unik, kami akan
                  membangun fitur tersebut dari awal agar sesuai persis dengan
                  kebutuhan Anda. Anda tidak membayar untuk template, Anda
                  berinvestasi dalam solusi yang dibuat khusus.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-start">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground mt-1">
                <Question weight="bold" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Keamanan data tamu dan finansial adalah segalanya bagi kami.
                  Bagaimana jaminan keamanan yang Anda berikan, terutama jika
                  kami menggunakan server yang Anda sediakan?
                </h3>
                <p className="mt-2 text-muted-foreground text-justify">
                  Kami sangat serius dalam hal keamanan. Jika Anda menggunakan
                  infrastruktur cloud kami, kami menerapkan standar keamanan
                  berlapis: enkripsi data end-to-end, firewall, backup otomatis
                  berkala, dan otentikasi multi-faktor untuk akses staf. Kami
                  menggunakan penyedia cloud terkemuka yang sudah memiliki
                  sertifikasi keamanan internasional. Jika Anda memilih untuk
                  menggunakan server sendiri, kami akan memberikan panduan
                  best-practice untuk konfigurasi keamanan dan bekerja sama
                  dengan tim IT Anda untuk memastikan semuanya aman.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-start">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground mt-1">
                <Question weight="bold" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Harga yang ditawarkan memang menarik. Tapi apa saja
                  &apos;biaya tersembunyi&apos; yang mungkin muncul? Bagaimana
                  dengan biaya maintenance atau update di masa depan?
                </h3>
                <p className="mt-2 text-muted-foreground text-justify">
                  Transparansi adalah kunci. Biaya yang tertera di proposal
                  adalah biaya yang Anda bayar.{" "}
                  <strong>
                    Tidak ada biaya maintenance bulanan atau tahunan
                  </strong>{" "}
                  untuk sistem dasar yang sudah Anda beli (selain biaya server
                  tahunan jika Anda hosting dengan kami). Pembaruan untuk
                  perbaikan bug atau keamanan kami berikan secara gratis. Biaya
                  tambahan hanya akan muncul jika Anda secara spesifik meminta{" "}
                  <strong>penambahan modul atau fitur baru (Add-On)</strong> di
                  luar lingkup yang telah disepakati, dan itu pun akan kami
                  ajukan dalam proposal terpisah untuk persetujuan Anda terlebih
                  dahulu.
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-4 items-start">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground mt-1">
                <Question weight="bold" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Proyek kustom biasanya memakan waktu 6-12 bulan. Bagaimana
                  Anda bisa menghasilkan sistem yang stabil dan sesuai kebutuhan
                  hanya dalam 1-3 bulan?
                </h3>
                <p className="mt-2 text-muted-foreground text-justify">
                  Pertanyaan ini sangat tepat dan menyoroti perbedaan
                  fundamental metodologi kami. Kami tidak menghilang selama
                  berbulan-bulan untuk development. Sebaliknya, kami menerapkan
                  pendekatan{" "}
                  <strong>agile dan iteratif langsung di lokasi</strong>,
                  ditambah dengan pemanfaatan{" "}
                  <strong>teknologi AI untuk akselerasi development</strong>.
                  Sistem yang fungsional dan dapat digunakan untuk operasional
                  inti sudah siap dalam <strong>1-2 bulan pertama</strong>. Ini
                  bisa tercapai karena kami membangunnya sambil mendampingi tim
                  hotel, mendapatkan feedback instan, dan melakukan penyesuaian
                  secara real-time. <strong>Bulan ketiga</strong> kami
                  dedikasikan untuk proses{" "}
                  <strong>penyempurnaan (perfection)</strong>, memoles setiap
                  detail berdasarkan penggunaan nyata oleh staf Anda, hingga
                  sistem benar-benar menyatu dengan alur kerja hotel.
                </p>
              </div>
            </div>
          </div>
        </section>
        <TermsAndConditions />
      </article>
    </main>
  )
}
