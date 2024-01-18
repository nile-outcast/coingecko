import { ContentLayout } from 'src/shared/ui/layout'
import { Footer } from 'src/widgets/footer'
import { Header } from 'src/widgets/header'

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <ContentLayout>{children}</ContentLayout>
      </main>
      <Footer />
    </>
  )
}
