import {
  Slide,
  SlideContent,
  SlideHeading1,
  SlidesWrapper,
} from "@/components/slide"
import { Logo } from "@/components/logo"
import "./page.css"
import {
  BinocularsIcon,
  ChalkboardTeacherIcon,
  ChatsIcon,
  ClockIcon,
  FastForwardIcon,
  GearIcon,
  InvoiceIcon,
  LightningIcon,
  ListChecksIcon,
  PencilRulerIcon,
  PiggyBankIcon,
  ReceiptIcon,
  UserCircleGearIcon,
} from "@phosphor-icons/react/dist/ssr"
import { LogoIcon } from "../_components/tirta-kencana-logo"
import Image from "next/image"
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableCaption,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

function CommonFooter({ pageNumber }: { pageNumber?: number }) {
  return (
    <div className="flex items-center gap-3">
      <Logo />
      <p className="text-sm">
        <span className="font-black">HRMS</span>{" "}
        <span className="text-xs">by Rafadlis Space</span>
      </p>
      <span className="text-sm ml-auto">{pageNumber}</span>
    </div>
  )
}

function TitleSlide({ pageNumber }: { pageNumber: number }) {
  return (
    <Slide footer={<CommonFooter pageNumber={pageNumber} />}>
      <SlideContent className="flex flex-col justify-center gap-4">
        <p className="text-lg">
          Solusi Khusus untuk manajemen Hotel & Resort Anda
        </p>
        <h1 className="text-8xl font-black max-w-prose text-left">
          HRMS: Hotel & Resort Management System
        </h1>
      </SlideContent>
    </Slide>
  )
}

function FeatureSlide({ pageNumber }: { pageNumber: number }) {
  // Reusable FeatureCard component within Slide2 scope
  function FeatureCard({
    icon: Icon,
    title,
    description,
  }: {
    icon: React.ComponentType<{ className?: string }>
    title: string
    description: string
  }) {
    return (
      <div className="max-w-sm min-w-sm text-center flex flex-col items-center">
        <Icon className="size-14 mb-2" />
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
    )
  }

  return (
    <Slide footer={<CommonFooter pageNumber={pageNumber} />}>
      <SlideContent className="flex flex-col gap-8">
        <SlideHeading1>Perbedaan HRMS dengan yang lain</SlideHeading1>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <FeatureCard
            icon={PencilRulerIcon}
            title="100% Kustomisasi"
            description="Dibuat dengan teknologi modern dan bersifat modular."
          />
          <FeatureCard
            icon={PiggyBankIcon}
            title="Satu kali investasi"
            description="Tidak perlu lagi membayar biaya perbulan atau pertahun."
          />
          <FeatureCard
            icon={FastForwardIcon}
            title="Implementasi cepat"
            description="Total 1-3 bulan saja tanpa mengganggu operasional"
          />
          <FeatureCard
            icon={UserCircleGearIcon}
            title="Menyesuaikan kebutuhan"
            description="Kami buat apa yang anda butuhkan"
          />
          <FeatureCard
            icon={InvoiceIcon}
            title="Biaya Transparan"
            description="Hanya 10% dari total biaya pengembangan, dan tidak ada biaya tersembunyi"
          />
        </div>
      </SlideContent>
    </Slide>
  )
}

function GallerySlide({ pageNumber }: { pageNumber: number }) {
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
    <Slide footer={<CommonFooter pageNumber={pageNumber} />}>
      <SlideContent className="flex flex-col gap-6">
        <SlideHeading1>Trusted By</SlideHeading1>
        <div className="flex flex-row gap-6">
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
          <div className="border-l-4 border-muted pl-4 italic text-muted-foreground flex flex-col gap-2 justify-center">
            <blockquote className="text-justify text-foreground not-italic max-w-prose">
              sangat membantu, mempermudah proses check in, pokona mah the best
              wkwk hidup aplikasi 😂
            </blockquote>
            <div>— Artini & Dentia, Petugas Resepsionist Tirta Kencana</div>
          </div>
        </div>
        {/* images */}
        <div className="flex flex-row gap-6">
          {galleryImages.slice(0, 2).map((image) => (
            <div
              key={image.src}
              className="border rounded-lg overflow-hidden group print:break-inside-avoid"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={1280}
                height={720}
                className="w-full h-auto"
              />
              <p className="p-3 text-xs text-muted-foreground">{image.alt}</p>
            </div>
          ))}
        </div>
      </SlideContent>
    </Slide>
  )
}

function MethodologySlide({ pageNumber }: { pageNumber: number }) {
  return (
    <Slide footer={<CommonFooter pageNumber={pageNumber} />}>
      <SlideContent className="flex flex-col gap-6">
        <SlideHeading1>Metodologi Kerja & Strategis</SlideHeading1>
        <div className="border rounded-lg">
          <Table>
            <TableBody>
              <TableRow className="*:border-border [&>:not(:last-child)]:border-r">
                <TableCell rowSpan={2} className="text-muted-foreground">
                  Tahap
                </TableCell>
                <TableCell
                  colSpan={12}
                  className="text-center text-muted-foreground"
                >
                  Minggu
                </TableCell>
              </TableRow>
              <TableRow className="text-center *:border-border [&>:not(:last-child)]:border-r text-muted-foreground">
                {Array.from({ length: 12 }, (_, i) => (
                  <TableCell key={i}>{i + 1}</TableCell>
                ))}
              </TableRow>
              <TableRow className="*:border-border [&>:not(:last-child)]:border-r">
                <TableCell>
                  <div className="flex flex-row gap-2 items-center">
                    <ChatsIcon className="text-muted-foreground size-4" />
                    <p>Wawancara & Kunjungan Lapangan</p>
                  </div>
                </TableCell>
                {/* muted only cell 1-2  */}
                {Array.from({ length: 12 }, (_, i) => {
                  const isMuted = i + 1 >= 1 && i + 1 <= 2
                  return (
                    <TableCell
                      key={i}
                      className={cn("", isMuted && "bg-primary/5")}
                    >
                      {isMuted ? (
                        <div className="size-4 bg-primary rounded-sm mx-auto" />
                      ) : null}
                    </TableCell>
                  )
                })}
              </TableRow>
              <TableRow className="*:border-border [&>:not(:last-child)]:border-r">
                <TableCell>
                  <div className="flex flex-row gap-2 items-center">
                    <ReceiptIcon className="text-muted-foreground size-4" />
                    <p>Penyusunan Anggaran & Kontrak</p>
                  </div>
                </TableCell>
                {/* muted only cell 2-3  */}
                {Array.from({ length: 12 }, (_, i) => {
                  const isMuted = i + 1 >= 2 && i + 1 <= 3
                  return (
                    <TableCell
                      key={i}
                      className={cn("", isMuted && "bg-primary/5")}
                    >
                      {isMuted ? (
                        <div className="size-4 bg-primary rounded-sm mx-auto" />
                      ) : null}
                    </TableCell>
                  )
                })}
              </TableRow>
              <TableRow className="*:border-border [&>:not(:last-child)]:border-r">
                <TableCell>
                  <div className="flex flex-row gap-2 items-center">
                    <BinocularsIcon className="text-muted-foreground size-4" />
                    <p>Analisis Mendalam</p>
                  </div>
                </TableCell>
                {/* muted only cell 3-4  */}
                {Array.from({ length: 12 }, (_, i) => {
                  const isMuted = i + 1 >= 3 && i + 1 <= 4
                  return (
                    <TableCell
                      key={i}
                      className={cn("", isMuted && "bg-primary/5")}
                    >
                      {isMuted ? (
                        <div className="size-4 bg-primary rounded-sm mx-auto" />
                      ) : null}
                    </TableCell>
                  )
                })}
              </TableRow>
              <TableRow className="*:border-border [&>:not(:last-child)]:border-r">
                <TableCell>
                  <div className="flex flex-row gap-2 items-center">
                    <LightningIcon className="text-muted-foreground size-4" />
                    <p>Pengembangan Cepat & Iteratif</p>
                  </div>
                </TableCell>
                {/* muted only cell 3-8  */}
                {Array.from({ length: 12 }, (_, i) => {
                  const isMuted = i + 1 >= 3 && i + 1 <= 8
                  return (
                    <TableCell
                      key={i}
                      className={cn("", isMuted && "bg-primary/5")}
                    >
                      {isMuted ? (
                        <div className="size-4 bg-primary rounded-sm mx-auto" />
                      ) : null}
                    </TableCell>
                  )
                })}
              </TableRow>
              <TableRow className="*:border-border [&>:not(:last-child)]:border-r">
                <TableCell>
                  <div className="flex flex-row gap-2 items-center">
                    <ListChecksIcon className="text-muted-foreground size-4" />
                    <p>Implementasi & Penyempurnaan</p>
                  </div>
                </TableCell>
                {/* muted only cell 8-12  */}
                {Array.from({ length: 12 }, (_, i) => {
                  const isMuted = i + 1 >= 8 && i + 1 <= 12
                  return (
                    <TableCell
                      key={i}
                      className={cn("", isMuted && "bg-primary/5")}
                    >
                      {isMuted ? (
                        <div className="size-4 bg-primary rounded-sm mx-auto" />
                      ) : null}
                    </TableCell>
                  )
                })}
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="flex flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
          <div className="border rounded-lg p-3 sm:p-4 flex flex-row gap-3 items-center">
            <GearIcon
              className="size-6 text-muted-foreground shrink-0"
              weight="fill"
            />
            <div>
              <h3>Tidak Mengganggu Operasional</h3>
              <p className="text-sm text-muted-foreground">
                Implementasi bertahap tanpa menghentikan aktivitas hotel
              </p>
            </div>
          </div>
          <div className="border rounded-lg p-3 sm:p-4 flex flex-row gap-3 items-center">
            <ChalkboardTeacherIcon
              className="size-6 text-muted-foreground shrink-0"
              weight="fill"
            />
            <div>
              <h3>Pelatihan Komprehensif</h3>
              <p className="text-sm text-muted-foreground">
                mendampingi hingga seluruh staff mahir menggunakan sistem
              </p>
            </div>
          </div>
          <div className="border rounded-lg p-3 sm:p-4 flex flex-row gap-3 items-center">
            <ClockIcon
              className="size-6 text-muted-foreground shrink-0"
              weight="fill"
            />
            <div>
              <h3>Support 24/7</h3>
              <p className="text-sm text-muted-foreground">
                Bantuan teknis dan konsultasi tersedia kapan saja
              </p>
            </div>
          </div>
        </div>
      </SlideContent>
    </Slide>
  )
}

function BasicPricingSlide({ pageNumber }: { pageNumber: number }) {
  return (
    <Slide footer={<CommonFooter pageNumber={pageNumber} />}>
      <SlideContent className="flex flex-col gap-6">
        <SlideHeading1>Harga Tawaran Dasar</SlideHeading1>
        <div className="flex flex-row gap-3 sm:gap-4">
          <p className="text-justify text-muted-foreground">
            Harga fleksibel disesuaikan dengan kebutuhan hotel Anda. Sistem
            menggunakan metode add-on sehingga Anda hanya membayar fitur yang
            benar-benar digunakan. Harga add-on dapat disesuaikan dan masih
            dapat didiskusikan berdasarkan kebutuhan spesifik hotel Anda. Add-on
            dapat dibeli kapan saja setelah implementasi sistem utama, tidak ada
            batasan waktu.
          </p>
        </div>
        <div className="border rounded-lg">
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
                  Pelatihan langsung di hotel sambil bekerja selama 3 bulan
                </TableCell>
                <TableCell className="text-right whitespace-nowrap font-mono">
                  ~
                </TableCell>
                <TableCell className="text-right whitespace-nowrap font-mono">
                  1x
                </TableCell>
              </TableRow>
              <TableRow className="bg-muted/20">
                <TableCell className="font-bold whitespace-normal">
                  Total Biaya Software
                </TableCell>
                <TableCell className="font-medium whitespace-normal">
                  Belum termasuk server & hosting
                </TableCell>
                <TableCell className="text-right whitespace-nowrap font-mono">
                  30,000,000
                </TableCell>
                <TableCell className="text-right whitespace-nowrap font-mono">
                  1x Bayar
                </TableCell>
              </TableRow>
            </TableBody>
            <TableCaption>
              *Harga flexible, masih bisa di diskusikan
            </TableCaption>
          </Table>
        </div>
      </SlideContent>
    </Slide>
  )
}

function ServerPricingSlide({ pageNumber }: { pageNumber: number }) {
  return (
    <Slide footer={<CommonFooter pageNumber={pageNumber} />}>
      <SlideContent className="flex flex-col gap-6">
        <SlideHeading1>Harga Server & Hosting</SlideHeading1>
        <p className="mb-4 text-justify text-muted-foreground">
          Server bersifat opsional namun sangat direkomendasikan agar aplikasi
          dapat diakses secara online. Kami menyediakan pilihan server cloud
          dengan performa handal yang dapat disesuaikan dengan skala operasional
          hotel Anda. Klien juga memiliki fleksibilitas untuk menggunakan server
          pribadi jika diinginkan.
        </p>
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px] text-muted-foreground">
                  Paket
                </TableHead>
                <TableHead className="text-muted-foreground">
                  Spesifikasi
                </TableHead>
                <TableHead className="text-right text-muted-foreground">
                  Harga (Rp)*
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Light</TableCell>
                <TableCell className="whitespace-normal text-muted-foreground">
                  untuk aplikasi yang ringan dan sederhana, fitur yang
                  minimalis, khusus internal hotel
                </TableCell>
                <TableCell className="text-right whitespace-nowrap font-mono">
                  2,000,000
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Standard</TableCell>
                <TableCell className="whitespace-normal text-muted-foreground">
                  cocok untuk skala hotel pada umumnya, ada real-time update
                  data, fitur yang lengkap, reservasi online, dan lainnya.
                </TableCell>
                <TableCell className="text-right whitespace-nowrap font-mono">
                  3,000,000
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Premium</TableCell>
                <TableCell className="whitespace-normal text-muted-foreground">
                  Cocok untuk hotel yang memerlukan monitoring tingkat tinggi
                  dan pengguna aplikasi diatas 50 orang
                </TableCell>
                <TableCell className="text-right whitespace-nowrap font-mono">
                  4,200,000
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Enterprise</TableCell>
                <TableCell className="whitespace-normal text-muted-foreground">
                  Spek yang sangat tinggi untuk sebuah hotel, hampir bisa
                  melakukan semua hal mengenai hotel dan resort
                </TableCell>
                <TableCell className="text-right whitespace-nowrap font-mono">
                  8,000,000
                </TableCell>
              </TableRow>
            </TableBody>
            <TableCaption>
              *Harga untuk perpanjangan tahunan. Spesifikasi dapat disesuaikan.
            </TableCaption>
          </Table>
        </div>
      </SlideContent>
    </Slide>
  )
}

function AddOnPricingSlide({ pageNumber }: { pageNumber: number }) {
  return (
    <Slide footer={<CommonFooter pageNumber={pageNumber} />}>
      <SlideContent className="flex flex-col gap-2">
        <SlideHeading1>Harga Add-On</SlideHeading1>
        <p className="text-muted-foreground">
          Harga add-on dapat disesuaikan dan masih dapat didiskusikan
          berdasarkan kebutuhan spesifik hotel Anda. Add-on dapat dibeli kapan
          saja setelah implementasi sistem utama, tidak ada batasan waktu.
        </p>
        <div className="border rounded-lg">
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
                  Layanan online tamu untuk Booking, permintaan concierge, dan
                  pesan F&B
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
                  Pembayaran lewat QRIS, GOPAY, Visa, Mastercard, Virtual
                  Account, dan lainnya
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
                  Analisis revenue, forecasting okupansi, business insights
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
                  Notifikasi otomatis melalui WhatsApp ke tamu dan pegawai
                  seperti notif kamar vacant ke Housekeeping
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
                  Penyerahan seluruh kode sumber aplikasi untuk dikelola secara
                  mandiri oleh Klien.
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
              *Harga tidak baku, masih bisa di diskusikan, **Harga tergantung
              dari Meta (Facebook) dan kurs USD
            </TableCaption>
          </Table>
        </div>
      </SlideContent>
    </Slide>
  )
}
export default function HRMSPresentation() {
  const orderedSlides = [
    TitleSlide,
    FeatureSlide,
    GallerySlide,
    MethodologySlide,
    BasicPricingSlide,
    ServerPricingSlide,
    AddOnPricingSlide,
  ]
  return (
    <SlidesWrapper>
      {orderedSlides.map((Slide, index) => (
        <Slide key={index} pageNumber={index + 1} />
      ))}
    </SlidesWrapper>
  )
}
