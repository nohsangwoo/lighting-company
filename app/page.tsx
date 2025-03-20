"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Mail, MapPin, Phone } from "lucide-react"
import { useEffect } from "react"

import { Button } from "@/components/ui/button"

export default function Home() {
  // 스크롤 기능 추가
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        e.preventDefault()
        const targetId = anchor.hash.slice(1)
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          // 헤더 높이(64px)를 고려하여 스크롤 위치 조정
          const headerOffset = 80
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-full bg-primary"></div>
            <span>라이트컨트롤</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              회사소개
            </Link>
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              서비스
            </Link>
            <Link href="#products" className="text-sm font-medium transition-colors hover:text-primary">
              제품
            </Link>
            <Link href="#benefits" className="text-sm font-medium transition-colors hover:text-primary">
              특징
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              문의하기
            </Link>
          </nav>
          <Button>문의하기</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    스마트한 조명 제어로
                    <br />
                    공간의 가치를 높입니다
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    최첨단 조명 제어 시스템으로 에너지 효율성을 높이고 사용자 경험을 향상시키는 맞춤형 솔루션을
                    제공합니다.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="px-8">
                    솔루션 알아보기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">문의하기</Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>스마트 제어</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>에너지 절약</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>맞춤형 설계</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    width={1280}
                    height={720}
                    alt="스마트 조명 제어 시스템"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">회사소개</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">혁신적인 조명 제어 전문 기업</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  라이트컨트롤은 2010년 설립 이후 지속적인 기술 혁신과 고객 중심 서비스로 조명 제어 시스템 분야의 선두
                  기업으로 성장해왔습니다. 우리는 건물 자동화, 에너지 효율화, 스마트 시티 구축에 필요한 최첨단 조명 제어
                  솔루션을 제공합니다.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 2v8"></path>
                    <path d="m4.93 10.93 1.41 1.41"></path>
                    <path d="M2 18h2"></path>
                    <path d="M20 18h2"></path>
                    <path d="m19.07 10.93-1.41 1.41"></path>
                    <path d="M22 22H2"></path>
                    <path d="m8 22 4-10 4 10"></path>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">10년+ 경험</h3>
                  <p className="text-muted-foreground">
                    10년 이상의 업계 경험으로 축적된 노하우와 전문성을 바탕으로 최적의 솔루션을 제공합니다.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">신뢰성</h3>
                  <p className="text-muted-foreground">
                    엄격한 품질 관리와 안정적인 시스템 운영으로 고객의 신뢰를 얻고 있습니다.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                    <path d="M12 8v-2"></path>
                    <path d="M12 18v-2"></path>
                    <path d="M16 12h-2"></path>
                    <path d="M10 12H8"></path>
                    <path d="m15 9-1.5 1.5"></path>
                    <path d="M10.5 13.5 9 15"></path>
                    <path d="m15 15-1.5-1.5"></path>
                    <path d="M10.5 10.5 9 9"></path>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">혁신</h3>
                  <p className="text-muted-foreground">
                    지속적인 연구개발을 통해 최신 기술을 적용한 혁신적인 제품과 서비스를 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">서비스</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">맞춤형 조명 제어 솔루션</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  다양한 환경과 요구사항에 맞는 최적화된 조명 제어 시스템을 설계하고 구축합니다.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M2 3h20"></path>
                    <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
                    <path d="m7 21 5-5 5 5"></path>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">시스템 설계 및 구축</h3>
                  <p className="text-muted-foreground">
                    건물의 특성과 사용 목적에 맞는 최적의 조명 제어 시스템을 설계하고 구축합니다. 초기 컨설팅부터 설치,
                    시운전까지 전 과정을 책임집니다.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 12v.01"></path>
                    <path d="M19.071 4.929c-1.889-1.889-4.829-2.075-6.857-.5-3.857 3-1.5 9.5-4.5 12.5-1.5 1.5-4.5 1.5-6.5-.5-2-2-2-5 0-7l1.146-1.146a2 2 0 0 1 2.828 0L7.5 10.596"></path>
                    <path d="M3.5 19.5 12 11l4.5 4.5"></path>
                    <path d="m17 17 3.5-3.5"></path>
                    <path d="M10 5.5 7.5 3"></path>
                    <path d="M17 6.5 20.5 3"></path>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">스마트 제어 시스템</h3>
                  <p className="text-muted-foreground">
                    IoT 기술을 활용한 스마트 조명 제어 시스템으로 원격 제어, 자동화, 데이터 분석 등 첨단 기능을
                    제공합니다.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"></path>
                    <path d="M18 6h.01"></path>
                    <path d="M6 18h.01"></path>
                    <path d="M20.5 11.5 12 20l-9-9 8.5-8.5c.83-.83 2.17-.83 3 0l6 6c.83.83.83 2.17 0 3Z"></path>
                    <path d="M12 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">에너지 효율화 솔루션</h3>
                  <p className="text-muted-foreground">
                    조명 사용량을 최적화하여 에너지 소비를 줄이고 비용을 절감하는 솔루션을 제공합니다. 자연광 연동, 재실
                    감지 등 다양한 기술을 활용합니다.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-xl border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                    <path d="m3.3 7 8.7 5 8.7-5"></path>
                    <path d="M12 22V12"></path>
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">유지보수 및 관리</h3>
                  <p className="text-muted-foreground">
                    설치 후에도 지속적인 모니터링과 유지보수 서비스를 제공하여 시스템이 항상 최적의 상태로 운영될 수
                    있도록 지원합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="products" className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">제품</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">첨단 조명 제어 제품</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  다양한 환경에 적용 가능한 최첨단 조명 제어 제품을 제공합니다.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="스마트 컨트롤러"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">스마트 컨트롤러</h3>
                  <p className="mt-2 text-muted-foreground">
                    IoT 기반의 스마트 조명 컨트롤러로 원격 제어 및 자동화 기능을 제공합니다.
                  </p>
                  <Button variant="link" className="mt-4 p-0">
                    자세히 보기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="센서 네트워크"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">센서 네트워크</h3>
                  <p className="mt-2 text-muted-foreground">
                    재실 감지, 조도 측정 등 다양한 센서를 통해 최적의 조명 환경을 구현합니다.
                  </p>
                  <Button variant="link" className="mt-4 p-0">
                    자세히 보기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="통합 관리 시스템"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">통합 관리 시스템</h3>
                  <p className="mt-2 text-muted-foreground">
                    모든 조명 시스템을 한 곳에서 모니터링하고 제어할 수 있는 통합 관리 플랫폼입니다.
                  </p>
                  <Button variant="link" className="mt-4 p-0">
                    자세히 보기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">특징</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">왜 라이트컨트롤인가?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  라이트컨트롤의 조명 제어 시스템이 제공하는 다양한 이점을 확인하세요.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">에너지 효율 향상</h3>
                    <p className="text-muted-foreground">
                      최대 40%까지 조명 에너지 소비를 절감하여 운영 비용을 크게 줄일 수 있습니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">사용자 경험 개선</h3>
                    <p className="text-muted-foreground">
                      직관적인 인터페이스와 자동화 기능으로 사용자 편의성을 극대화합니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">확장성</h3>
                    <p className="text-muted-foreground">
                      필요에 따라 쉽게 확장할 수 있는 모듈식 설계로 미래 변화에 유연하게 대응합니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">데이터 기반 최적화</h3>
                    <p className="text-muted-foreground">
                      실시간 데이터 수집 및 분석을 통해 조명 시스템을 지속적으로 최적화합니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">통합 시스템</h3>
                    <p className="text-muted-foreground">
                      기존 건물 관리 시스템(BMS)과 쉽게 통합되어 중앙 집중식 관리가 가능합니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">전문적인 지원</h3>
                    <p className="text-muted-foreground">
                      설치부터 유지보수까지 전문 기술팀의 지속적인 지원으로 안정적인 시스템 운영을 보장합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">문의하기</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">함께 시작하세요</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  최적의 조명 제어 솔루션에 대해 상담해 드립니다. 지금 문의하세요.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">연락처 정보</h3>
                  <p className="text-muted-foreground">아래 연락처로 문의하시거나 문의 양식을 작성해 주세요.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">전화</p>
                    <p className="text-sm text-muted-foreground">02-123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">이메일</p>
                    <p className="text-sm text-muted-foreground">info@lightcontrol.kr</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium">주소</p>
                    <p className="text-sm text-muted-foreground">서울특별시 강남구 테헤란로 123 라이트빌딩 8층</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          이름
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="홍길동"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="company"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          회사명
                        </label>
                        <input
                          id="company"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="주식회사 예시"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        이메일
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="example@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        문의 내용
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="문의 내용을 입력해주세요."
                      ></textarea>
                    </div>
                    <Button className="w-full">문의하기</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:flex-row md:gap-8 md:px-6">
          <div className="flex items-center gap-2 font-bold">
            <div className="h-6 w-6 rounded-full bg-primary"></div>
            <span>라이트컨트롤</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline sm:text-sm">
              이용약관
            </Link>
            <Link href="#" className="text-xs hover:underline sm:text-sm">
              개인정보처리방침
            </Link>
            <Link href="#" className="text-xs hover:underline sm:text-sm">
              사이트맵
            </Link>
          </nav>
          <div className="md:ml-auto flex gap-4">
            <p className="text-xs text-muted-foreground sm:text-sm">© 2024 라이트컨트롤. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

