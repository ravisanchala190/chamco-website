export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export async function generateMetadata() {
  return {
    other: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Pragma': 'no-cache',
    }
  }
}
