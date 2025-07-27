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
import { Table, TableRow, TableBody, TableCell } from "@/components/ui/table"
import { cn } from "@/lib/utils"

function CommonFooter() {
  return (
    <div className="flex items-center gap-3">
      <Logo />
      <p className="text-sm">
        <span className="font-black">HRMS</span>{" "}
        <span className="text-xs">by Rafadlis Space</span>
      </p>
    </div>
  )
}

function Slide1() {
  return (
    <Slide footer={<CommonFooter />}>
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

function Slide2() {
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
    <Slide footer={<CommonFooter />}>
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

function Slide3() {
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
    <Slide footer={<CommonFooter />}>
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

function Slide4() {
  return (
    <Slide footer={<CommonFooter />}>
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

export default function HRMSPresentation() {
  return (
    <SlidesWrapper>
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
    </SlidesWrapper>
  )
}
