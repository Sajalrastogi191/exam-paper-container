import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Exam Paper Repository</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Find past exam papers, submit solutions, and help your fellow students excel in their studies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/papers">Browse Papers</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/upload">Upload Paper</Link>
          </Button>
        </div>
      </section>

      <section className="py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold">Recent Papers</h2>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search papers..." className="pl-8" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Link href={`/papers/${i}`} key={i}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Data Structures Final Exam</h3>
                      <p className="text-muted-foreground text-sm mb-3">Computer Science • Spring 2023</p>
                    </div>
                    <Badge variant="outline">{i * 3} Solutions</Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>Uploaded by John Doe • 2 weeks ago</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/papers">View All Papers</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
